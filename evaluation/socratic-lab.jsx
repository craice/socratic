import { useState, useRef, useCallback } from "react";

const SYSTEM_PROMPT = `You are a Socratic Product Discovery Copilot. Your job is to improve decision quality in product discovery by:
- asking sharp, minimal, high-leverage questions,
- separating facts vs inferences vs assumptions vs unknowns,
- turning uncertainty into testable hypotheses,
- converging on the smallest next step with a decision rule.

You are not a "solution generator." You are a thinking partner + experiment designer.

INTAKE & MODE DETECTION (Always First):
Detect the user's mode:
- Exploring: no clear problem yet — needs help seeing.
- Framing: problem area is known — needs structure and clarity.
- Executing: direction is set — needs tactical help.

Adapt behavior:
- Exploring → ask open questions, challenge framing, slow down.
- Framing → structure, surface assumptions, propose artifacts.
- Executing → be direct, produce outputs, minimize questions.

Assess proportionality (risk × reversibility):
- Low risk: 1–2 questions → 1 test → quick threshold
- Medium risk: 2–3 questions → 1–2 hypotheses → 1–2 tests
- High risk: triangulate evidence + pre-mortem + explicit stop rules

Surface the origin and run one bias-aware probe.

If the user presents a solution as the starting point, rewind to the problem:
"What problem does this solve? For whom? How do you know it's a problem?"

CORE OUTCOME: Every interaction should end with:
1) A clear decision to be made,
2) A next step,
3) A decision rule (proceed / pivot / stop).

LANGUAGE & CLARITY: Challenge ambiguous terms. Any proposed outcome must be auditable with: metric name, segment, baseline, time window, instrumentation.

GUARDRAILS:
- Do not fabricate user quotes, metrics, benchmarks.
- Label claims: Fact (with source), Inference, Assumption, Unknown.
- Max 3 questions at a time.
- Do not jump to solutions if user/segment/decision/metric is unclear.
- Present 2–4 options with trade-offs.

SOCRATIC METHOD: Use questions to:
1) Clarify terms, decision, constraints
2) Surface assumptions: "What must be true?"
3) Examine evidence: "What do we actually know?"
4) Consider alternatives: "What else could explain this?"
5) Explore implications: "If we do this, what breaks?"
6) Converge: hypotheses + tests + thresholds

Add falsifiability: "What would change your mind?" / "What result would make us stop?"

THRESHOLD TEMPLATES:
- Conversion/volume: "Proceed if ≥ N in T days; stop if < M."
- Behavioral completion: "Proceed if ≥ X% complete step Y within T."
- Lift vs baseline: "Proceed if +X% vs baseline on metric K over T."
- Retention: "Proceed if D7 ≥ X% for cohort C over T."
- Qual signal: "Proceed if ≥ N users describe as must-have."

KNOWING WHEN TO STOP: Discovery is sufficient when the decision is clear, segment is specific, outcome metric is defined, facts are separated from assumptions, there is at least one test with a threshold.

CONFIDENCE SCALE (1-5): Always include confidence score, top 1 kill assumption, confidence rationale, and next evidence step.

OUTPUT FORMAT: Use the Slack/DM summary format (5 lines) unless more detail is needed.

Always reply in English. Be concise but thorough.`;

const SCENARIOS = [
  { id:"s01", title:"Dashboard SaaS", mode:"Exploring", risk:"Medium", trap:"Solution-first", industry:"SaaS B2B",
    prompt:`We need to build a dashboard for our enterprise clients. They keep asking for better analytics. Our competitor just launched one and clients are mentioning it in calls. Can you help us spec this out?` },
  { id:"s02", title:"Retention E-commerce", mode:"Framing", risk:"High", trap:"Vague metrics", industry:"E-commerce",
    prompt:`Our retention is bad. Users buy once and never come back. We think we need a loyalty program. We've been discussing this for weeks but can't agree on the approach. Some people want points, others want tiered discounts. Revenue is around $2M/month, average order $45. What should we do?` },
  { id:"s03", title:"CTA Copy Test", mode:"Executing", risk:"Low", trap:"None", industry:"SaaS B2C",
    prompt:`We want to A/B test two versions of our upgrade CTA on the free plan dashboard. Version A: "Unlock Pro features" vs Version B: "Start your free trial". Current click-through is 2.1%. We have ~50k monthly active free users. How should we set this up?` },
  { id:"s04", title:"Pricing Pivot Fintech", mode:"Framing", risk:"High", trap:"HiPPO", industry:"Fintech",
    prompt:`Our CEO wants us to switch from per-transaction pricing to a monthly subscription model. He saw a competitor do it and thinks it's the future. We have 12,000 active merchants processing about $8M/month through us. He wants to announce this at the conference in 6 weeks. What do you think?` },
  { id:"s05", title:"Expansion vs Density", mode:"Exploring", risk:"Medium", trap:"Opinion loop", industry:"Marketplace",
    prompt:`We've been going back and forth on whether to expand to a new city or improve density in our current market. Our marketplace connects local service providers with customers. We're in 3 cities, ~2,000 providers, ~15,000 monthly transactions. Some people think supply is the bottleneck, others think it's demand. We've been debating this for a month.` },
  { id:"s06", title:"Onboarding Edtech", mode:"Executing", risk:"Medium", trap:"Survivorship bias", industry:"Edtech",
    prompt:`We analyzed our top 100 most engaged teachers and found they all completed the "create first class" step within 48h of signup. So we want to redesign onboarding to push all new users to create a class in the first session. We have the designs ready and want to validate the hypothesis. D7 retention for teachers is 23%, and we think this can push it to 35%.` },
  { id:"s07", title:"Meal Planner Health", mode:"Exploring", risk:"High", trap:"Sunk cost", industry:"Health/Wellness",
    prompt:`We spent 8 months building a meal planning feature for our fitness app. It's live for 3 months now but only 4% of users have tried it, and of those, only 12% used it more than once. Our team lead thinks we just need better onboarding for the feature. We've already invested $400k in it. Should we keep investing or move on?` },
  { id:"s08", title:"Cold Chain Logistics", mode:"Framing", risk:"High", trap:"Recency bias", industry:"Logistics",
    prompt:`Last quarter we got 3 inbound requests from large agricultural companies wanting cold-chain logistics. We currently do general freight only. Our sales team is excited and wants to build a cold-chain vertical. It would require $2M+ investment in specialized vehicles and compliance. One of the 3 leads already went with a competitor. What's our next move?` },
  { id:"s09", title:"Chatbot Support", mode:"Exploring", risk:"Medium", trap:"Solution-first", industry:"Insurance",
    prompt:`We want to implement an AI chatbot to handle tier-1 support tickets. Our CSAT is 72% and average resolution time is 4.2 hours. We've already talked to 3 vendors. Which one should we pick?` },
  { id:"s10", title:"Feature Sunset", mode:"Framing", risk:"High", trap:"Sunk cost", industry:"SaaS B2B",
    prompt:`We have a legacy reporting module that 8% of our users still use. It costs us $15k/month in maintenance and blocks our migration to the new architecture. Engineering wants to kill it. Product is worried about churn from those 8%. The module was our flagship feature 3 years ago. How do we decide?` },
  { id:"s11", title:"Push Notifications", mode:"Executing", risk:"Low", trap:"None", industry:"Social/Consumer",
    prompt:`We want to increase push notification opt-in from 34% to 45%. We're testing a new permission prompt that explains benefits before the OS prompt appears. We've built both versions and need to set up the experiment. DAU is ~200k. What's the test plan?` },
  { id:"s12", title:"Self-serve vs Sales-led", mode:"Exploring", risk:"High", trap:"Confirmation bias", industry:"SaaS B2B",
    prompt:`We've always been sales-led, but our new VP of Product thinks we should go PLG. He keeps pointing to Slack and Notion as examples. Our ACV is $25k, sales cycle is 45 days, and we have 340 enterprise accounts. Last quarter, 12 people signed up for our free trial organically but none converted. He says the trial experience just needs work.` },
  { id:"s13", title:"Mobile App Launch", mode:"Framing", risk:"Medium", trap:"Anchoring", industry:"Fintech",
    prompt:`Our competitor's mobile app has 4.8 stars and 500k downloads. We're planning our own mobile app and the PM set the goal at 4.5 stars and 100k downloads in 6 months. We currently have a mobile-responsive web app with 80k monthly mobile visitors. Is this the right approach?` },
  { id:"s14", title:"Marketplace Take Rate", mode:"Framing", risk:"High", trap:"HiPPO", industry:"Marketplace",
    prompt:`Our board wants us to increase take rate from 12% to 18% to improve unit economics before our Series B. They say the market will bear it because our NPS is 67. We have 4,200 active sellers and process $3.2M GMV/month. The board wants this implemented in Q2. How should we approach this?` },
  { id:"s15", title:"Gamification Edtech", mode:"Exploring", risk:"Medium", trap:"Solution-first", industry:"Edtech",
    prompt:`We want to add gamification to our learning platform — badges, streaks, leaderboards, the whole thing. Duolingo does it really well and our students are in the same age group (18-25). Can you help us design the points system?` },
  { id:"s16", title:"Churn Prediction", mode:"Executing", risk:"Medium", trap:"Vague metrics", industry:"SaaS B2B",
    prompt:`We built a churn prediction model that flags accounts at risk. It's 78% accurate on historical data. We want to trigger automated outreach (email + in-app) when the model flags an account. Monthly churn is 3.2%. We need to set up the intervention experiment. What metrics and thresholds should we use?` },
  { id:"s17", title:"API Platform Strategy", mode:"Exploring", risk:"High", trap:"Confirmation bias", industry:"Developer Tools",
    prompt:`We want to become a platform and open our API to third-party developers. Our CTO has been pushing this for 2 years. We have 2,300 customers using our tool directly. Three customers asked about API access in the last 6 months. Our CTO wrote a 40-page strategy doc about the platform vision. Should we go for it?` },
  { id:"s18", title:"Referral Program", mode:"Executing", risk:"Low", trap:"None", industry:"Consumer App",
    prompt:`We want to launch a referral program. Current organic growth is 8% MoM. We're testing two incentive structures: (A) $10 credit for referrer only vs (B) $5 for both referrer and referee. We have 120k active users. What's the experiment setup?` },
  { id:"s19", title:"Enterprise Tier", mode:"Framing", risk:"High", trap:"Anchoring", industry:"SaaS B2B",
    prompt:`We're launching an Enterprise tier. Our current pricing is $29/mo (Starter) and $99/mo (Pro). A pricing consultant recommended $499/mo for Enterprise based on competitor benchmarking. We have 15 Pro accounts that asked about SSO, audit logs, and custom roles. Sales thinks $499 is too low, the consultant says it's market rate. What's the right call?` },
  { id:"s20", title:"Content Moderation", mode:"Framing", risk:"High", trap:"Survivorship bias", industry:"Social/UGC",
    prompt:`Our top 50 creators produce 60% of the content and have zero moderation flags. So we want to give all creators with >10k followers auto-approval (skip moderation queue) to reduce review costs and improve creator satisfaction. Currently we review 100% of posts, which takes 2.3 hours average. Our moderation team costs $28k/month. What do you think?` },
];

const EVAL_CRITERIA = [
  { id:"mode", label:"Mode Detection", desc:"Correctly identified Exploring/Framing/Executing?" },
  { id:"risk", label:"Risk Calibration", desc:"Calibrated depth to the risk level?" },
  { id:"fiau", label:"FIAU Separation", desc:"Separated or prompted separation of Facts/Inferences/Assumptions/Unknowns?" },
  { id:"kill", label:"Kill Assumption", desc:"Identified the critical assumption?" },
  { id:"hypothesis", label:"Testable Hypothesis", desc:"Proposed or guided toward a testable hypothesis?" },
  { id:"threshold", label:"Decision Rule", desc:"Defined proceed/pivot/stop criteria?" },
  { id:"questions", label:"Question Discipline", desc:"≤3 questions, each reducing ambiguity?" },
  { id:"trap", label:"Trap Detection", desc:"Caught the embedded bias/anti-pattern?" },
  { id:"closure", label:"Closure", desc:"Closed with recap + next step?" },
  { id:"confidence", label:"Confidence Score", desc:"Included a calibrated confidence rating?" },
];

const TRAP_DESCRIPTIONS = {
  "Solution-first": "should rewind to the problem before designing solutions",
  "Vague metrics": "should demand precise metric definitions",
  "HiPPO": "should question the basis beyond authority/seniority",
  "Opinion loop": "should redirect from debate to evidence",
  "Survivorship bias": "should question whether correlation implies causation and ask about non-survivors",
  "Sunk cost": "should separate past investment from future value",
  "Recency bias": "should question sample size and representativeness",
  "Confirmation bias": "should challenge cherry-picked evidence and seek disconfirming data",
  "Anchoring": "should question whether the anchor number is valid or arbitrary",
  "None": "no trap embedded; score 2 if no unnecessary bias flags were raised",
};

const EVAL_SYSTEM_PROMPT = `You are a strict evaluator of a Socratic Product Discovery Copilot's responses. Evaluate whether the copilot correctly followed its operating instructions.

You receive: a scenario with metadata + the copilot's response.

Score each criterion 0-2:
- 0 = Not present or clearly wrong
- 1 = Partially present or could be stronger
- 2 = Well executed

CRITERIA:
1. mode: Correct mode detection? Expected: {expected_mode}
2. risk: Appropriate depth calibration for {expected_risk} risk?
3. fiau: Separated or prompted separation of Facts/Inferences/Assumptions/Unknowns?
4. kill: Identified or surfaced the critical assumption that would kill the plan?
5. hypothesis: Proposed or guided toward a testable hypothesis with mechanism?
6. threshold: Defined a decision rule with proceed/pivot/stop thresholds?
7. questions: Asked ≤3 focused questions reducing ambiguity? (no interrogation)
8. trap: Detected the embedded trap? Trap is: {expected_trap}. Expected behavior: {trap_desc}
9. closure: Closed with clear recap and actionable next step?
10. confidence: Included confidence score (1-5) with rationale?

Respond ONLY with a JSON object (no markdown, no backticks):
{"mode":N,"risk":N,"fiau":N,"kill":N,"hypothesis":N,"threshold":N,"questions":N,"trap":N,"closure":N,"confidence":N,"summary":"One paragraph assessment in English"}`;

async function callClaude(messages, systemPrompt) {
  const res = await fetch("https://api.anthropic.com/v1/messages", {
    method: "POST",
    headers: { "Content-Type": "application/json" },
    body: JSON.stringify({ model: "claude-sonnet-4-20250514", max_tokens: 2000, system: systemPrompt, messages }),
  });
  const data = await res.json();
  if (data.error) throw new Error(data.error.message || "API error");
  return data.content.map(b => b.text || "").join("\n");
}

// ── Tiny components ──

function StatusDot({ status }) {
  const c = { idle:"#52525b", running:"#fbbf24", done:"#34d399", error:"#f87171" };
  return (
    <span style={{
      display:"inline-block", width:7, height:7, borderRadius:"50%", background:c[status]||c.idle,
      animation: status==="running" ? "pulse 1.2s infinite" : "none",
      boxShadow: status==="running" ? "0 0 6px #fbbf24" : "none"
    }}/>
  );
}

function ScoreBar({ score, max=2 }) {
  const pct = max > 0 ? (score/max)*100 : 0;
  const color = pct >= 80 ? "#34d399" : pct >= 50 ? "#fbbf24" : "#f87171";
  return (
    <div style={{ display:"flex", alignItems:"center", gap:8 }}>
      <div style={{ flex:1, height:5, borderRadius:3, background:"#27272a", overflow:"hidden" }}>
        <div style={{ height:"100%", borderRadius:3, background:color, width:`${pct}%`, transition:"width 0.6s ease" }}/>
      </div>
      <span style={{ fontSize:10, fontFamily:"monospace", color:"#71717a", minWidth:28, textAlign:"right" }}>
        {typeof score==="number" && score%1!==0 ? score.toFixed(1) : score}/{max}
      </span>
    </div>
  );
}

function RadialScore({ score, max, size=120 }) {
  const pct = max > 0 ? score/max : 0;
  const r = (size-14)/2;
  const circ = 2*Math.PI*r;
  const offset = circ*(1-pct);
  const color = pct >= 0.8 ? "#34d399" : pct >= 0.5 ? "#fbbf24" : "#f87171";
  return (
    <svg width={size} height={size}>
      <circle cx={size/2} cy={size/2} r={r} fill="none" stroke="#27272a" strokeWidth="5"/>
      <circle cx={size/2} cy={size/2} r={r} fill="none" stroke={color} strokeWidth="5"
        strokeDasharray={circ} strokeDashoffset={offset} strokeLinecap="round"
        transform={`rotate(-90 ${size/2} ${size/2})`} style={{ transition:"stroke-dashoffset 1s ease" }}/>
      <text x={size/2} y={size/2-4} textAnchor="middle" fill={color} fontSize="22" fontWeight="700" fontFamily="monospace">{score}</text>
      <text x={size/2} y={size/2+14} textAnchor="middle" fill="#71717a" fontSize="10" fontFamily="monospace">/{max}</text>
    </svg>
  );
}

function TagPill({ text, variant="default" }) {
  const styles = {
    mode:{ bg:"#1e3a5f", fg:"#60a5fa" }, risk:{ bg:"#3b2f1b", fg:"#fbbf24" },
    trap:{ bg:"#2d1f3d", fg:"#c084fc" }, industry:{ bg:"#1a2e1a", fg:"#4ade80" },
    default:{ bg:"#27272a", fg:"#a1a1aa" },
  };
  const s = styles[variant]||styles.default;
  return <span style={{ fontSize:9, padding:"2px 7px", borderRadius:3, fontWeight:500, background:s.bg, color:s.fg, whiteSpace:"nowrap" }}>{text}</span>;
}

function SectionBlock({ title, children }) {
  return (
    <div style={{ marginBottom:20 }}>
      <div style={{ fontSize:9, letterSpacing:2, color:"#3f3f46", textTransform:"uppercase", fontWeight:600, marginBottom:8, paddingBottom:4, borderBottom:"1px solid #111113" }}>{title}</div>
      {children}
    </div>
  );
}

// ── Export Modal ──

function ExportModal({ content, format, onClose }) {
  const [copied, setCopied] = useState(false);
  const handleCopy = async () => {
    try {
      await navigator.clipboard.writeText(content);
      setCopied(true);
      setTimeout(() => setCopied(false), 2000);
    } catch {
      const ta = document.createElement("textarea");
      ta.value = content;
      ta.style.position = "fixed";
      ta.style.opacity = "0";
      document.body.appendChild(ta);
      ta.select();
      document.execCommand("copy");
      document.body.removeChild(ta);
      setCopied(true);
      setTimeout(() => setCopied(false), 2000);
    }
  };

  return (
    <div style={{ position:"fixed", inset:0, background:"rgba(0,0,0,0.7)", zIndex:100, display:"flex", alignItems:"center", justifyContent:"center", padding:24 }}
      onClick={onClose}>
      <div style={{ background:"#141416", border:"1px solid #27272a", borderRadius:8, width:"100%", maxWidth:800, maxHeight:"80vh", display:"flex", flexDirection:"column" }}
        onClick={e => e.stopPropagation()}>
        <div style={{ padding:"14px 20px", borderBottom:"1px solid #1f1f23", display:"flex", justifyContent:"space-between", alignItems:"center", flexShrink:0 }}>
          <span style={{ fontSize:12, fontWeight:600, color:"#fafafa", fontFamily:"'IBM Plex Sans',sans-serif" }}>
            Export — {format.toUpperCase()}
          </span>
          <div style={{ display:"flex", gap:6 }}>
            <button onClick={handleCopy} style={{
              background: copied ? "#064e3b" : "#fafafa", color: copied ? "#34d399" : "#0a0a0a",
              border:"none", padding:"6px 14px", borderRadius:4, fontSize:11, fontWeight:600, fontFamily:"inherit",
              transition:"all 0.2s"
            }}>
              {copied ? "✓ Copied" : "Copy to clipboard"}
            </button>
            <button onClick={onClose} style={{
              background:"transparent", color:"#71717a", border:"1px solid #27272a",
              padding:"6px 10px", borderRadius:4, fontSize:11, fontFamily:"inherit"
            }}>✕</button>
          </div>
        </div>
        <div style={{ flex:1, overflow:"auto", padding:0 }}>
          <pre style={{
            margin:0, padding:16, fontSize:11, lineHeight:1.6, color:"#a1a1aa",
            fontFamily:"'IBM Plex Mono',monospace", whiteSpace:"pre-wrap", wordBreak:"break-word"
          }}>{content}</pre>
        </div>
      </div>
    </div>
  );
}

// ── Main App ──

export default function SocraticLab() {
  const [results, setResults] = useState({});
  const [selected, setSelected] = useState(null);
  const [globalStatus, setGlobalStatus] = useState("idle");
  const [activeId, setActiveId] = useState(null);
  const [showExport, setShowExport] = useState(false);
  const [exportModal, setExportModal] = useState(null); // { content, format }
  const abortRef = useRef(false);

  const runScenario = useCallback(async (sc) => {
    setResults(p => ({ ...p, [sc.id]: { status:"running", copilotResponse:null, evaluation:null } }));
    try {
      const copilotResponse = await callClaude([{ role:"user", content:sc.prompt }], SYSTEM_PROMPT);
      setResults(p => ({ ...p, [sc.id]: { ...p[sc.id], copilotResponse } }));

      const evalPrompt = EVAL_SYSTEM_PROMPT
        .replace("{expected_mode}", sc.mode).replace("{expected_risk}", sc.risk)
        .replace("{expected_trap}", sc.trap).replace("{trap_desc}", TRAP_DESCRIPTIONS[sc.trap]||"");

      const evalInput = `SCENARIO:\nTitle: ${sc.title}\nExpected Mode: ${sc.mode}\nExpected Risk: ${sc.risk}\nTrap: ${sc.trap}\nIndustry: ${sc.industry}\n\nUSER PROMPT:\n${sc.prompt}\n\nCOPILOT RESPONSE:\n${copilotResponse}`;
      const evalRaw = await callClaude([{ role:"user", content:evalInput }], evalPrompt);

      let evaluation;
      try { evaluation = JSON.parse(evalRaw.replace(/```json|```/g,"").trim()); }
      catch { evaluation = { error:true, raw:evalRaw }; }

      setResults(p => ({ ...p, [sc.id]: { status:"done", copilotResponse, evaluation } }));
    } catch(err) {
      setResults(p => ({ ...p, [sc.id]: { status:"error", error:err.message, copilotResponse:p[sc.id]?.copilotResponse } }));
    }
  }, []);

  const runAll = useCallback(async () => {
    abortRef.current = false;
    setGlobalStatus("running");
    setSelected(null);
    for (const sc of SCENARIOS) {
      if (abortRef.current) break;
      setActiveId(sc.id);
      await runScenario(sc);
      await new Promise(r => setTimeout(r, 300));
    }
    setActiveId(null);
    setGlobalStatus("done");
  }, [runScenario]);

  const completed = Object.entries(results).filter(([,r]) => r.status==="done" && r.evaluation && !r.evaluation.error);

  const aggScores = EVAL_CRITERIA.map(c => {
    const vals = completed.map(([,r]) => r.evaluation[c.id]||0);
    return { ...c, avg: vals.length ? vals.reduce((a,b)=>a+b,0)/vals.length : 0, vals };
  });

  const totalScore = completed.reduce((s,[,r]) => s + EVAL_CRITERIA.reduce((a,c) => a+(r.evaluation[c.id]||0), 0), 0);
  const totalMax = completed.length * 20;

  // ── Export builders ──

  const buildCSV = () => {
    const headers = ["id","title","mode","risk","trap","industry","status",
      ...EVAL_CRITERIA.map(c=>`score_${c.id}`),"total","eval_summary","copilot_response"];
    const esc = v => `"${String(v||"").replace(/"/g,'""')}"`;
    const rows = SCENARIOS.map(sc => {
      const r = results[sc.id];
      const ev = r?.evaluation && !r.evaluation.error ? r.evaluation : null;
      return [sc.id,sc.title,sc.mode,sc.risk,sc.trap,sc.industry,r?.status||"idle",
        ...EVAL_CRITERIA.map(c => ev ? (ev[c.id]||0) : ""),
        ev ? EVAL_CRITERIA.reduce((s,c)=>s+(ev[c.id]||0),0) : "",
        ev?.summary||"", r?.copilotResponse||""].map(esc).join(",");
    });
    return [headers.join(","), ...rows].join("\n");
  };

  const buildJSON = () => {
    const data = {
      meta: { timestamp: new Date().toISOString(), scenarios: SCENARIOS.length, completed: completed.length, totalScore, totalMax, pct: totalMax>0 ? Math.round(totalScore/totalMax*100) : 0 },
      criteria: EVAL_CRITERIA,
      aggregate: Object.fromEntries(aggScores.map(a => [a.id, { avg: Math.round(a.avg*100)/100, label: a.label }])),
      scenarios: SCENARIOS.map(sc => {
        const r = results[sc.id];
        return { ...sc, status:r?.status||"idle", copilotResponse:r?.copilotResponse||null, evaluation:r?.evaluation||null, error:r?.error||null };
      }),
    };
    return JSON.stringify(data, null, 2);
  };

  const buildMarkdown = () => {
    const L = [];
    L.push("# Socratic Process Test Lab — Results\n");
    L.push(`**Date:** ${new Date().toISOString().split("T")[0]}`);
    L.push(`**Scenarios:** ${completed.length}/${SCENARIOS.length} completed`);
    L.push(`**Aggregate Score:** ${totalScore}/${totalMax} (${totalMax>0?Math.round(totalScore/totalMax*100):0}%)\n`);

    L.push("## Aggregate by Criteria\n");
    L.push("| Criteria | Avg | Max |");
    L.push("|---|---|---|");
    aggScores.forEach(a => L.push(`| ${a.label} | ${a.avg.toFixed(2)} | 2.00 |`));

    L.push("\n## Scenario Matrix\n");
    L.push(`| Scenario | Mode | Risk | Trap | ${EVAL_CRITERIA.map(c=>c.label.split(" ")[0]).join(" | ")} | Total |`);
    L.push(`|---|---|---|---|${EVAL_CRITERIA.map(()=>"---").join("|")}|---|`);
    SCENARIOS.forEach(sc => {
      const r = results[sc.id];
      const ev = r?.evaluation && !r.evaluation.error ? r.evaluation : null;
      if (!ev) return;
      const scores = EVAL_CRITERIA.map(c => ev[c.id]||0);
      const total = scores.reduce((a,b)=>a+b,0);
      L.push(`| ${sc.title} | ${sc.mode} | ${sc.risk} | ${sc.trap} | ${scores.join(" | ")} | **${total}** |`);
    });

    L.push("\n## Detailed Results\n");
    SCENARIOS.forEach(sc => {
      const r = results[sc.id];
      if (!r?.copilotResponse) return;
      L.push(`### ${sc.title}\n`);
      L.push(`**Mode:** ${sc.mode} | **Risk:** ${sc.risk} | **Trap:** ${sc.trap} | **Industry:** ${sc.industry}\n`);
      L.push(`**User Prompt:**`);
      L.push(`> ${sc.prompt.replace(/\n/g,"\n> ")}\n`);
      L.push(`**Copilot Response:**`);
      L.push(`\n${r.copilotResponse}\n`);
      if (r.evaluation && !r.evaluation.error) {
        L.push(`**Scores:** ${EVAL_CRITERIA.map(c=>`${c.label}: ${r.evaluation[c.id]||0}/2`).join(" | ")}`);
        const total = EVAL_CRITERIA.reduce((s,c)=>s+(r.evaluation[c.id]||0),0);
        L.push(`**Total:** ${total}/20`);
        if (r.evaluation.summary) L.push(`\n**Assessment:** ${r.evaluation.summary}`);
      }
      L.push("\n---\n");
    });

    return L.join("\n");
  };

  const handleExport = (format) => {
    setShowExport(false);
    const builders = { csv: buildCSV, json: buildJSON, markdown: buildMarkdown };
    setExportModal({ content: builders[format](), format });
  };

  const selectedSc = SCENARIOS.find(s => s.id===selected);
  const selectedR = selected ? results[selected] : null;

  return (
    <div style={{ fontFamily:"'IBM Plex Mono','SF Mono',monospace", background:"#0a0a0a", color:"#e4e4e7", minHeight:"100vh", display:"flex", flexDirection:"column" }}>
      <style>{`
        @import url('https://fonts.googleapis.com/css2?family=IBM+Plex+Mono:wght@300;400;500;600;700&family=IBM+Plex+Sans:wght@300;400;500;600;700&display=swap');
        * { box-sizing:border-box; margin:0; padding:0; }
        ::-webkit-scrollbar { width:4px; } ::-webkit-scrollbar-track { background:#18181b; } ::-webkit-scrollbar-thumb { background:#3f3f46; border-radius:2px; }
        @keyframes pulse { 0%,100%{opacity:1} 50%{opacity:0.4} }
        @keyframes fadeUp { from{opacity:0;transform:translateY(6px)} to{opacity:1;transform:translateY(0)} }
        .fade-up { animation: fadeUp 0.35s ease both; }
        button { font-family:inherit; cursor:pointer; }
        button:hover { filter:brightness(1.15); }
      `}</style>

      {/* Export Modal */}
      {exportModal && <ExportModal content={exportModal.content} format={exportModal.format} onClose={() => setExportModal(null)} />}

      {/* Header */}
      <div style={{ borderBottom:"1px solid #1f1f23", padding:"16px 24px", display:"flex", alignItems:"center", justifyContent:"space-between", flexShrink:0 }}>
        <div>
          <div style={{ display:"flex", alignItems:"center", gap:8 }}>
            <span style={{ fontSize:10, letterSpacing:3, color:"#52525b", textTransform:"uppercase", fontWeight:600 }}>Socratic Process</span>
            <span style={{ fontSize:8, background:"#1f1f23", color:"#71717a", padding:"2px 6px", borderRadius:2 }}>Test Lab v1</span>
          </div>
          <h1 style={{ fontFamily:"'IBM Plex Sans',sans-serif", fontSize:18, fontWeight:700, color:"#fafafa", marginTop:2, letterSpacing:-0.3 }}>
            Discovery Copilot · {SCENARIOS.length} Scenarios
          </h1>
        </div>
        <div style={{ display:"flex", gap:6, alignItems:"center" }}>
          {completed.length > 0 && (
            <div style={{ position:"relative" }}>
              <button onClick={() => setShowExport(!showExport)} style={{
                background:"#1f1f23", color:"#a1a1aa", border:"1px solid #27272a", padding:"7px 14px",
                borderRadius:4, fontSize:11, fontWeight:500
              }}>
                ↓ Export
              </button>
              {showExport && (
                <div style={{ position:"absolute", top:"100%", right:0, marginTop:4, background:"#18181b", border:"1px solid #27272a", borderRadius:6, padding:4, zIndex:10, minWidth:180 }}>
                  {[
                    { label:"CSV (spreadsheet)", key:"csv" },
                    { label:"JSON (programmatic)", key:"json" },
                    { label:"Markdown (report)", key:"markdown" },
                  ].map(({ label, key }) => (
                    <button key={key} onClick={() => handleExport(key)} style={{
                      display:"block", width:"100%", textAlign:"left", background:"transparent", color:"#d4d4d8",
                      border:"none", padding:"8px 12px", fontSize:11, borderRadius:4
                    }}>
                      {label}
                    </button>
                  ))}
                </div>
              )}
            </div>
          )}
          {globalStatus !== "running" ? (
            <button onClick={runAll} style={{
              background:"#fafafa", color:"#0a0a0a", border:"none", padding:"7px 18px",
              borderRadius:4, fontSize:11, fontWeight:600, letterSpacing:0.3
            }}>▶ Run All</button>
          ) : (
            <button onClick={() => { abortRef.current=true; setGlobalStatus("idle"); }} style={{
              background:"#450a0a", color:"#fca5a5", border:"1px solid #7f1d1d", padding:"7px 18px",
              borderRadius:4, fontSize:11, fontWeight:600
            }}>■ Stop</button>
          )}
        </div>
      </div>

      <div style={{ display:"flex", flex:1, overflow:"hidden" }}>
        {/* Sidebar */}
        <div style={{ width:300, borderRight:"1px solid #1f1f23", overflowY:"auto", flexShrink:0 }}>
          <div style={{ padding:"12px 16px 6px", fontSize:9, letterSpacing:2, color:"#3f3f46", textTransform:"uppercase", fontWeight:600 }}>
            Scenarios
          </div>
          {SCENARIOS.map((sc) => {
            const r = results[sc.id];
            const isSelected = selected===sc.id;
            const isRunning = activeId===sc.id;
            const ev = r?.evaluation && !r.evaluation.error ? r.evaluation : null;
            const total = ev ? EVAL_CRITERIA.reduce((s,c) => s+(ev[c.id]||0), 0) : null;
            return (
              <div key={sc.id} onClick={() => setSelected(isSelected ? null : sc.id)} style={{
                padding:"10px 16px", cursor:"pointer", borderLeft: isSelected ? "2px solid #fafafa" : "2px solid transparent",
                background: isSelected ? "#141416" : isRunning ? "#111113" : "transparent",
                borderBottom:"1px solid #111113", transition:"all 0.15s ease"
              }}>
                <div style={{ display:"flex", alignItems:"center", justifyContent:"space-between", marginBottom:3 }}>
                  <span style={{ fontSize:12, fontWeight:600, fontFamily:"'IBM Plex Sans',sans-serif", color: isSelected?"#fafafa":"#d4d4d8" }}>
                    {sc.title}
                  </span>
                  <div style={{ display:"flex", alignItems:"center", gap:6 }}>
                    {total !== null && <span style={{ fontSize:10, fontFamily:"monospace", color: total>=16?"#34d399":total>=10?"#fbbf24":"#f87171" }}>{total}</span>}
                    <StatusDot status={r?.status||"idle"}/>
                  </div>
                </div>
                <div style={{ display:"flex", gap:4, flexWrap:"wrap" }}>
                  <TagPill text={sc.mode} variant="mode"/>
                  <TagPill text={sc.risk} variant="risk"/>
                  <TagPill text={sc.trap} variant="trap"/>
                </div>
              </div>
            );
          })}
        </div>

        {/* Main panel */}
        <div style={{ flex:1, overflowY:"auto", padding:24 }}>
          {selected && selectedSc ? (
            <div className="fade-up" key={selected}>
              <div style={{ marginBottom:20 }}>
                <div style={{ display:"flex", gap:5, marginBottom:6, flexWrap:"wrap" }}>
                  <TagPill text={selectedSc.mode} variant="mode"/>
                  <TagPill text={selectedSc.risk} variant="risk"/>
                  <TagPill text={selectedSc.trap} variant="trap"/>
                  <TagPill text={selectedSc.industry} variant="industry"/>
                </div>
                <h2 style={{ fontFamily:"'IBM Plex Sans',sans-serif", fontSize:18, fontWeight:700, color:"#fafafa" }}>{selectedSc.title}</h2>
              </div>

              <SectionBlock title="User Prompt (PM Input)">
                <p style={{ fontSize:12, color:"#a1a1aa", lineHeight:1.7, whiteSpace:"pre-wrap" }}>{selectedSc.prompt}</p>
              </SectionBlock>

              <SectionBlock title="Copilot Response">
                {selectedR?.copilotResponse ? (
                  <p style={{ fontSize:12, color:"#d4d4d8", lineHeight:1.7, whiteSpace:"pre-wrap" }}>{selectedR.copilotResponse}</p>
                ) : selectedR?.status==="running" ? (
                  <p style={{ color:"#71717a", fontSize:11 }}>Generating...</p>
                ) : selectedR?.error ? (
                  <p style={{ color:"#f87171", fontSize:11 }}>Error: {selectedR.error}</p>
                ) : (
                  <p style={{ color:"#3f3f46", fontSize:11 }}>Not yet executed</p>
                )}
              </SectionBlock>

              {selectedR?.evaluation && !selectedR.evaluation.error && (
                <SectionBlock title="Evaluation">
                  <div style={{ display:"grid", gridTemplateColumns:"1fr 1fr", gap:"8px 20px", marginBottom:16 }}>
                    {EVAL_CRITERIA.map(c => (
                      <div key={c.id}>
                        <div style={{ fontSize:10, color:"#71717a", marginBottom:2 }}>{c.label}</div>
                        <ScoreBar score={selectedR.evaluation[c.id]||0}/>
                      </div>
                    ))}
                  </div>
                  {selectedR.evaluation.summary && (
                    <div style={{ background:"#111113", borderRadius:4, padding:14, borderLeft:"2px solid #27272a" }}>
                      <p style={{ fontSize:11, color:"#a1a1aa", lineHeight:1.7 }}>{selectedR.evaluation.summary}</p>
                    </div>
                  )}
                </SectionBlock>
              )}
              {selectedR?.evaluation?.error && (
                <SectionBlock title="Evaluation">
                  <p style={{ color:"#f87171", fontSize:11 }}>Parse error. Raw output: {selectedR.evaluation.raw?.slice(0, 400)}</p>
                </SectionBlock>
              )}
            </div>
          ) : (
            <div className="fade-up">
              {completed.length === 0 ? (
                <div style={{ display:"flex", flexDirection:"column", alignItems:"center", justifyContent:"center", height:"55vh", textAlign:"center" }}>
                  <div style={{ fontSize:44, opacity:0.08, fontFamily:"'IBM Plex Sans',sans-serif", fontWeight:700 }}>σ</div>
                  <p style={{ fontFamily:"'IBM Plex Sans',sans-serif", fontSize:14, color:"#52525b", maxWidth:380, lineHeight:1.6, marginTop:12 }}>
                    {globalStatus==="running"
                      ? "Running scenarios… Results will appear as they complete."
                      : "Press \"Run All\" to test the Socratic Discovery process against 20 product scenarios."}
                  </p>
                  <p style={{ fontSize:11, color:"#3f3f46", marginTop:8, maxWidth:360, lineHeight:1.5 }}>
                    Each scenario runs through the Copilot, then gets evaluated against 10 criteria from the operating instructions.
                  </p>
                </div>
              ) : (
                <>
                  {/* Aggregate */}
                  <div style={{ display:"flex", gap:28, marginBottom:32, alignItems:"flex-start" }}>
                    <div style={{ textAlign:"center", flexShrink:0 }}>
                      <RadialScore score={totalScore} max={totalMax} size={120}/>
                      <div style={{ fontSize:9, color:"#52525b", marginTop:2, letterSpacing:1 }}>AGGREGATE</div>
                      <div style={{ fontSize:9, color:"#3f3f46" }}>{completed.length}/{SCENARIOS.length} done</div>
                    </div>
                    <div style={{ flex:1 }}>
                      <div style={{ fontSize:9, letterSpacing:2, color:"#3f3f46", textTransform:"uppercase", fontWeight:600, marginBottom:10 }}>Criteria Breakdown</div>
                      <div style={{ display:"grid", gridTemplateColumns:"1fr 1fr", gap:"6px 20px" }}>
                        {aggScores.map(c => (
                          <div key={c.id} style={{ display:"flex", alignItems:"center", gap:8 }}>
                            <span style={{ fontSize:10, color:"#71717a", width:90, flexShrink:0, overflow:"hidden", textOverflow:"ellipsis", whiteSpace:"nowrap" }}>{c.label}</span>
                            <div style={{ flex:1 }}><ScoreBar score={Math.round(c.avg*100)/100}/></div>
                          </div>
                        ))}
                      </div>
                    </div>
                  </div>

                  {/* Weakest areas */}
                  {(() => {
                    const weak = [...aggScores].sort((a,b)=>a.avg-b.avg).slice(0,3);
                    return (
                      <div style={{ background:"#111113", border:"1px solid #1f1f23", borderRadius:5, padding:16, marginBottom:24 }}>
                        <div style={{ fontSize:9, letterSpacing:2, color:"#3f3f46", textTransform:"uppercase", fontWeight:600, marginBottom:10 }}>Areas for Improvement</div>
                        {weak.map(w => (
                          <div key={w.id} style={{ marginBottom:8 }}>
                            <div style={{ display:"flex", justifyContent:"space-between" }}>
                              <span style={{ fontFamily:"'IBM Plex Sans',sans-serif", fontSize:12, fontWeight:500, color:"#d4d4d8" }}>{w.label}</span>
                              <span style={{ fontSize:10, color:"#52525b" }}>{w.avg.toFixed(2)}/2</span>
                            </div>
                            <p style={{ fontSize:10, color:"#3f3f46", marginTop:1 }}>{w.desc}</p>
                          </div>
                        ))}
                      </div>
                    );
                  })()}

                  {/* Heatmap */}
                  <div style={{ fontSize:9, letterSpacing:2, color:"#3f3f46", textTransform:"uppercase", fontWeight:600, marginBottom:8 }}>Scenario × Criteria Matrix</div>
                  <div style={{ overflowX:"auto", marginBottom:24 }}>
                    <table style={{ width:"100%", borderCollapse:"collapse", fontSize:10 }}>
                      <thead>
                        <tr style={{ borderBottom:"1px solid #1f1f23" }}>
                          <th style={{ textAlign:"left", padding:"6px 8px", color:"#52525b", fontWeight:500, minWidth:130 }}>Scenario</th>
                          {EVAL_CRITERIA.map(c => (
                            <th key={c.id} style={{ textAlign:"center", padding:"6px 3px", color:"#52525b", fontWeight:500, fontSize:8, minWidth:44 }}>
                              {c.label.split(" ")[0]}
                            </th>
                          ))}
                          <th style={{ textAlign:"center", padding:"6px 8px", color:"#52525b", fontWeight:500 }}>Σ</th>
                        </tr>
                      </thead>
                      <tbody>
                        {SCENARIOS.map(sc => {
                          const r = results[sc.id];
                          if (!r || r.status!=="done" || !r.evaluation || r.evaluation.error) return null;
                          const total = EVAL_CRITERIA.reduce((s,c) => s+(r.evaluation[c.id]||0), 0);
                          return (
                            <tr key={sc.id} onClick={() => setSelected(sc.id)} style={{ borderBottom:"1px solid #111113", cursor:"pointer" }}>
                              <td style={{ padding:"6px 8px", color:"#a1a1aa", fontWeight:500 }}>{sc.title}</td>
                              {EVAL_CRITERIA.map(c => {
                                const v = r.evaluation[c.id]||0;
                                const bg = v===2?"#052e16":v===1?"#1c1a00":"#1a0000";
                                const fg = v===2?"#34d399":v===1?"#fbbf24":"#f87171";
                                return (
                                  <td key={c.id} style={{ textAlign:"center", padding:"6px 3px" }}>
                                    <span style={{ background:bg, color:fg, padding:"2px 6px", borderRadius:2, fontSize:10, fontWeight:600 }}>{v}</span>
                                  </td>
                                );
                              })}
                              <td style={{ textAlign:"center", padding:"6px 8px", fontWeight:700, color:"#fafafa", fontSize:11 }}>{total}</td>
                            </tr>
                          );
                        })}
                      </tbody>
                    </table>
                  </div>

                  {/* Breakdowns by dimension */}
                  <div style={{ display:"grid", gridTemplateColumns:"1fr 1fr 1fr", gap:12, marginBottom:24 }}>
                    {[
                      { label:"By Mode", key:"mode", vals:["Exploring","Framing","Executing"] },
                      { label:"By Risk", key:"risk", vals:["Low","Medium","High"] },
                      { label:"By Trap", key:"trap", vals:[...new Set(SCENARIOS.map(s=>s.trap))] },
                    ].map(dim => (
                      <div key={dim.label} style={{ background:"#111113", border:"1px solid #1f1f23", borderRadius:5, padding:14 }}>
                        <div style={{ fontSize:9, letterSpacing:2, color:"#3f3f46", textTransform:"uppercase", fontWeight:600, marginBottom:8 }}>{dim.label}</div>
                        {dim.vals.map(v => {
                          const matching = completed.filter(([id]) => {
                            const sc = SCENARIOS.find(s=>s.id===id);
                            return sc && sc[dim.key]===v;
                          });
                          if (!matching.length) return null;
                          const avg = matching.reduce((s,[,r]) => s+EVAL_CRITERIA.reduce((a,c)=>a+(r.evaluation[c.id]||0),0),0) / matching.length;
                          return (
                            <div key={v} style={{ marginBottom:6 }}>
                              <div style={{ display:"flex", justifyContent:"space-between", marginBottom:2 }}>
                                <span style={{ fontSize:10, color:"#a1a1aa" }}>{v}</span>
                                <span style={{ fontSize:10, color:"#52525b" }}>{avg.toFixed(1)}/20</span>
                              </div>
                              <ScoreBar score={avg} max={20}/>
                            </div>
                          );
                        })}
                      </div>
                    ))}
                  </div>
                </>
              )}
            </div>
          )}
        </div>
      </div>
    </div>
  );
}
