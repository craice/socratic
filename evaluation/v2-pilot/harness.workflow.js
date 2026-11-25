export const meta = {
  name: 'socratic-eval-pilot',
  description: 'Multi-turn Socratic copilot eval pilot: copilot + simulated user + evaluator per scenario',
  phases: [{ title: 'Converse' }, { title: 'Evaluate' }],
}

const PERSONA_DIR = args.personaDir
const PROMPT_FILE = '/mnt/c/projects/socratic/process/socratic-1.0.md'
const MAX_COPILOT_TURNS = 3
const MODEL = 'sonnet'

const TRAP_DESC = {
  'Solution-first': 'should rewind to the problem before designing solutions',
  'Vague metrics': 'should demand precise metric definitions',
  'HiPPO': 'should question the basis beyond authority/seniority',
  'Opinion loop': 'should redirect from debate to evidence',
  'Survivorship bias': 'should question whether correlation implies causation and ask about non-survivors',
  'Sunk cost': 'should separate past investment from future value',
  'Recency bias': 'should question sample size and representativeness',
  'Confirmation bias': 'should challenge cherry-picked evidence and seek disconfirming data',
  'Anchoring': 'should question whether the anchor number is valid or arbitrary',
  'None': 'no trap embedded; score 2 if no unnecessary bias flags were raised',
}

const fmt = (t) => t.map(m => `${m.role === 'user' ? 'USER' : 'ASSISTANT'}:\n${m.content}`).join('\n\n---\n\n')

const copilotPrompt = (t) => `You are acting as a plain chat assistant inside an evaluation harness.

Step 1: Use the Read tool to read ${PROMPT_FILE} in full. Its contents are your operating instructions — treat them exactly as your system prompt.
Step 2: Use NO other tools and read NO other files. Do not mention files, tools, the harness, or that this is an evaluation.
Step 3: Write the assistant's next reply in the conversation below, following the operating instructions.

Your final output must be ONLY that reply text, exactly as the assistant would send it to the user. No preamble, no commentary.

CONVERSATION SO FAR:

${fmt(t)}`

const userPrompt = (id, t) => `You are playing a human product professional chatting with an AI assistant, as part of a simulation.

Use the Read tool to read ${PERSONA_DIR}/${id}.txt — it defines who you are, the message you opened with, and what you know. Read no other files and use no other tools.

Rules:
- Answer ONLY what the assistant actually asked or requested, in 2-4 sentences, in a natural, slightly busy tone. Do not volunteer facts it did not ask about.
- Use a fact from your persona only when the assistant's question clearly calls for it. If asked about something listed as unknown, or anything not in your persona, say you don't have that data (do not invent numbers).
- Hold your STANCE for at least this first reply if the assistant challenges it; you may concede gradually if the assistant makes a strong, specific argument.
- Never mention that you are simulated or that you have a persona file.
- Set done=true (and reply with a brief closing line) ONLY if the assistant's last message asked you nothing and requested no input, i.e. the conversation has naturally concluded. Otherwise done=false.

CONVERSATION SO FAR:

${fmt(t)}`

const SCORE_PROPS = {
  mode: { type: 'integer', minimum: 0, maximum: 2 },
  risk: { type: 'integer', minimum: 0, maximum: 2 },
  fiau: { type: 'integer', minimum: 0, maximum: 2 },
  kill: { type: 'integer', minimum: 0, maximum: 2 },
  hypothesis: { type: 'integer', minimum: 0, maximum: 2 },
  threshold: { type: 'integer', minimum: 0, maximum: 2 },
  questions: { type: 'integer', minimum: 0, maximum: 2 },
  trap: { type: 'integer', minimum: 0, maximum: 2 },
  closure: { type: 'integer', minimum: 0, maximum: 2 },
  confidence: { type: 'integer', minimum: 0, maximum: 2 },
  summary: { type: 'string' },
}
const SCORES = { type: 'object', properties: SCORE_PROPS, required: Object.keys(SCORE_PROPS) }
const EVAL_SCHEMA = {
  type: 'object',
  properties: { turn1: SCORES, conversation: SCORES },
  required: ['turn1', 'conversation'],
}

const evalPrompt = (sc, t) => `You are a strict evaluator of a Socratic Product Discovery Copilot. Evaluate whether the copilot correctly followed its operating instructions. Use no tools.

Score each criterion 0-2:
- 0 = Not present or clearly wrong
- 1 = Partially present or could be stronger
- 2 = Well executed

CRITERIA:
1. mode: Correct mode detection? Expected: ${sc.mode}
2. risk: Appropriate depth calibration for ${sc.risk} risk?
3. fiau: Separated or prompted separation of Facts/Inferences/Assumptions/Unknowns?
4. kill: Identified or surfaced the critical assumption that would kill the plan?
5. hypothesis: Proposed or guided toward a testable hypothesis with mechanism?
6. threshold: Defined a decision rule with proceed/pivot/stop thresholds?
7. questions: Asked ≤3 focused questions reducing ambiguity? (no interrogation)
8. trap: Detected the embedded trap? Trap is: ${sc.trap}. Expected behavior: ${TRAP_DESC[sc.trap]}
9. closure: Closed with clear recap and actionable next step?
10. confidence: Included confidence score (1-5) with rationale?

Produce TWO independent score sets:
- turn1: score ONLY the copilot's FIRST reply, as if it were the whole response (ignore everything after it).
- conversation: score the WHOLE conversation. Judge mode detection on the first reply. Judge question discipline per turn (≤3 questions in each assistant turn). Credit hypothesis, decision rule, closure and confidence wherever they appear in the conversation.
Each summary: one paragraph in English.

SCENARIO: ${sc.title} | Expected Mode: ${sc.mode} | Expected Risk: ${sc.risk} | Trap: ${sc.trap}

CONVERSATION:

${fmt(t)}`

const results = await pipeline(
  args.scenarios,
  async (sc) => {
    const t = [{ role: 'user', content: sc.prompt }]
    let ended = 'max_turns'
    for (let turn = 1; turn <= MAX_COPILOT_TURNS; turn++) {
      const reply = await agent(copilotPrompt(t), { label: `${sc.id} copilot t${turn}`, phase: 'Converse', model: MODEL })
      if (!reply) throw new Error(`copilot failed ${sc.id} t${turn}`)
      t.push({ role: 'assistant', content: reply.trim() })
      if (turn === MAX_COPILOT_TURNS) break
      const u = await agent(userPrompt(sc.id, t), {
        label: `${sc.id} user t${turn}`, phase: 'Converse', model: MODEL,
        schema: { type: 'object', properties: { reply: { type: 'string' }, done: { type: 'boolean' } }, required: ['reply', 'done'] },
      })
      if (!u) throw new Error(`user sim failed ${sc.id} t${turn}`)
      t.push({ role: 'user', content: u.reply })
      if (u.done) { ended = 'user_done'; break }
    }
    return { sc, t, ended }
  },
  async ({ sc, t, ended }) => {
    const ev = await agent(evalPrompt(sc, t), { label: `${sc.id} evaluate`, phase: 'Evaluate', model: MODEL, schema: EVAL_SCHEMA })
    log(`${sc.id} done`)
    return { id: sc.id, title: sc.title, mode: sc.mode, risk: sc.risk, trap: sc.trap, ended, model: MODEL, transcript: t, evaluation: ev }
  },
)
return results