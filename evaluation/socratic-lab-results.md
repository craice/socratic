# Socratic Process Test Lab — Results

**Date:** 2026-02-10
**Scenarios:** 20/20 completed
**Aggregate Score:** 305/400 (76%)

## Aggregate by Criteria

| Criteria | Avg | Max |
|---|---|---|
| Mode Detection | 1.70 | 2.00 |
| Risk Calibration | 1.80 | 2.00 |
| FIAU Separation | 1.45 | 2.00 |
| Kill Assumption | 1.60 | 2.00 |
| Testable Hypothesis | 1.15 | 2.00 |
| Decision Rule | 1.45 | 2.00 |
| Question Discipline | 1.80 | 2.00 |
| Trap Detection | 1.50 | 2.00 |
| Closure | 1.50 | 2.00 |
| Confidence Score | 1.30 | 2.00 |

## Scenario Matrix

| Scenario | Mode | Risk | Trap | Mode | Risk | FIAU | Kill | Testable | Decision | Question | Trap | Closure | Confidence | Total |
|---|---|---|---|---|---|---|---|---|---|---|---|---|---|---|
| Dashboard SaaS | Exploring | Medium | Solution-first | 2 | 2 | 2 | 2 | 0 | 0 | 2 | 2 | 1 | 0 | **13** |
| Retention E-commerce | Framing | High | Vague metrics | 1 | 1 | 1 | 2 | 2 | 1 | 2 | 0 | 2 | 0 | **12** |
| CTA Copy Test | Executing | Low | None | 2 | 2 | 1 | 1 | 2 | 2 | 2 | 2 | 1 | 2 | **17** |
| Pricing Pivot Fintech | Framing | High | HiPPO | 2 | 2 | 2 | 2 | 1 | 2 | 1 | 2 | 2 | 2 | **18** |
| Expansion vs Density | Exploring | Medium | Opinion loop | 0 | 1 | 2 | 0 | 0 | 0 | 2 | 0 | 0 | 0 | **5** |
| Onboarding Edtech | Executing | Medium | Survivorship bias | 2 | 2 | 2 | 2 | 2 | 2 | 2 | 2 | 2 | 2 | **20** |
| Meal Planner Health | Exploring | High | Sunk cost | 2 | 2 | 2 | 1 | 1 | 2 | 2 | 2 | 2 | 2 | **18** |
| Cold Chain Logistics | Framing | High | Recency bias | 2 | 2 | 2 | 2 | 1 | 2 | 2 | 2 | 1 | 2 | **18** |
| Chatbot Support | Exploring | Medium | Solution-first | 2 | 2 | 0 | 1 | 0 | 1 | 2 | 2 | 2 | 0 | **12** |
| Feature Sunset | Framing | High | Sunk cost | 2 | 1 | 1 | 2 | 1 | 2 | 2 | 0 | 2 | 2 | **15** |
| Push Notifications | Executing | Low | None | 1 | 1 | 1 | 2 | 2 | 2 | 0 | 2 | 1 | 2 | **14** |
| Self-serve vs Sales-led | Exploring | High | Confirmation bias | 2 | 2 | 2 | 2 | 2 | 2 | 1 | 2 | 2 | 2 | **19** |
| Mobile App Launch | Framing | Medium | Anchoring | 2 | 2 | 2 | 2 | 2 | 2 | 2 | 2 | 2 | 2 | **20** |
| Marketplace Take Rate | Framing | High | HiPPO | 2 | 2 | 2 | 2 | 1 | 2 | 2 | 2 | 2 | 2 | **19** |
| Gamification Edtech | Exploring | Medium | Solution-first | 2 | 2 | 1 | 1 | 0 | 0 | 2 | 2 | 1 | 0 | **11** |
| Churn Prediction | Executing | Medium | Vague metrics | 2 | 2 | 1 | 2 | 1 | 1 | 2 | 2 | 1 | 0 | **14** |
| API Platform Strategy | Exploring | High | Confirmation bias | 2 | 2 | 1 | 2 | 2 | 2 | 2 | 2 | 2 | 2 | **19** |
| Referral Program | Executing | Low | None | 2 | 2 | 1 | 2 | 2 | 2 | 2 | 2 | 2 | 2 | **19** |
| Enterprise Tier | Framing | High | Anchoring | 0 | 2 | 1 | 0 | 0 | 0 | 2 | 0 | 0 | 0 | **5** |
| Content Moderation | Framing | High | Survivorship bias | 2 | 2 | 2 | 2 | 1 | 2 | 2 | 0 | 2 | 2 | **17** |

## Detailed Results

### Dashboard SaaS

**Mode:** Exploring | **Risk:** Medium | **Trap:** Solution-first | **Industry:** SaaS B2B

**User Prompt:**
> We need to build a dashboard for our enterprise clients. They keep asking for better analytics. Our competitor just launched one and clients are mentioning it in calls. Can you help us spec this out?

**Copilot Response:**

## MODE: Exploring → Framing (competitor trigger detected)

**Origin check**: Who first said "we need a dashboard"? Sales? A specific client? Internal assumption after seeing competitor move?

---

## Rewind to the problem:

**1. What specific decision are clients trying to make that they can't make today?**  
(Not "they want analytics" — what action do they take after looking at data?)

**2. Which enterprise clients? All of them, or a segment?**  
(Company size? Industry? Usage pattern? Tenure?)

**3. What's the actual pain?**  
- Can't access data at all?
- Data exists but buried in exports/support tickets?
- Data exists but not the *right* data?
- Data exists but not formatted for their internal reporting?

---

## Evidence check:

**What do we actually know?** (facts vs inferences)

- ✅ **Fact**: Competitor launched a dashboard  
- ✅ **Fact**: Clients mention it in calls  
- ❓ **Inference**: "They keep asking" — how many clients? How often? Unprompted or when competitor is raised?  
- ❓ **Assumption**: A dashboard solves their problem  
- ❓ **Unknown**: What they do with analytics today. Whether lack of dashboard blocks a deal/renewal/expansion.

---

## One bias-aware probe:

**Availability bias check**: Is this urgent because the competitor news is *recent and visible*, or because clients are churning / stalling deals *because of* lack of analytics?

---

**Next**: Answer the 3 questions above. Then we'll know if this is a retention play, expansion play, or noise.

**Scores:** Mode Detection: 2/2 | Risk Calibration: 2/2 | FIAU Separation: 2/2 | Kill Assumption: 2/2 | Testable Hypothesis: 0/2 | Decision Rule: 0/2 | Question Discipline: 2/2 | Trap Detection: 2/2 | Closure: 1/2 | Confidence Score: 0/2
**Total:** 13/20

**Assessment:** The copilot correctly detected Exploring mode transitioning to Framing, calibrated well for Medium risk by rewinding to problem definition before solution design, and excellently trapped the solution-first bias. It cleanly separated Facts/Inferences/Assumptions/Unknowns with clear labeling, and identified the kill assumption (that a dashboard actually solves their problem). The three focused questions were well-targeted and non-interrogative. However, it completely missed proposing a testable hypothesis with mechanism, defining decision thresholds for proceed/pivot/stop, and including a confidence score with rationale. The closure provided a clear next step but lacked a comprehensive recap of the framing work done.

---

### Retention E-commerce

**Mode:** Framing | **Risk:** High | **Trap:** Vague metrics | **Industry:** E-commerce

**User Prompt:**
> Our retention is bad. Users buy once and never come back. We think we need a loyalty program. We've been discussing this for weeks but can't agree on the approach. Some people want points, others want tiered discounts. Revenue is around $2M/month, average order $45. What should we do?

**Copilot Response:**

**MODE: Framing → Executing bridge**  
**RISK: Medium** (revenue impact, reversibility depends on implementation)  
**ORIGIN CHECK:** Who first said "we need a loyalty program"? Was it from a competitor benchmark, exec directive, or user feedback?

---

## Rewind: Let's separate the problem from the solution

**"Loyalty program" is a solution. What's the actual problem?**

Three sharp questions before we touch points/tiers:

1. **What does "never come back" mean exactly?** What % of customers make 0 repeat purchases in 90 days? What's your current repeat purchase rate at 30/60/90 days?

2. **Do you know *why* they don't return?** Have you asked churned customers? Do you have data on browse-but-don't-buy behavior, email open rates, cart abandonment among past buyers?

3. **What would success look like?** If we solved this, what metric moves? (e.g., "30-day repeat rate goes from X% to Y%") — and what threshold makes this worth the investment?

---

## Quick hypothesis check

You're assuming: *"People would buy again if we gave them rewards."*

**What must be true for that to hold?**
- Users remember your brand
- They have repeat need for your product
- Price/incentive is the barrier (not product fit, delivery, quality, etc.)

**What would change your mind?** If users say "I forgot you existed" or "I only needed this once" — does a loyalty program still make sense?

---

**Next step:** Answer those 3 questions (especially #1 + #2), then I'll help you design a minimal test with a clear decision rule.

**Don't build the program yet.** Let's make sure it's the right lever.

**Scores:** Mode Detection: 1/2 | Risk Calibration: 1/2 | FIAU Separation: 1/2 | Kill Assumption: 2/2 | Testable Hypothesis: 2/2 | Decision Rule: 1/2 | Question Discipline: 2/2 | Trap Detection: 0/2 | Closure: 2/2 | Confidence Score: 0/2
**Total:** 12/20

**Assessment:** The response correctly identifies solution jumping and probes the underlying problem, with excellent critical assumption identification ('what must be true') and appropriate caution against premature building. However, it misclassifies risk as Medium when revenue impact at $2M/month with unclear reversibility should be High. It completely misses the trap: 'bad retention' and 'never come back' are vague metrics that should be challenged immediately—the copilot asks clarifying questions but doesn't explicitly call out the metric ambiguity as problematic. FIAU separation is prompted but not structured. The three questions are focused but border on interrogation mode. Most critically, no confidence score is provided. The closure is strong with clear next steps, but the threshold criterion is only partially met—it asks what threshold would make it worth investment but doesn't guide toward a specific decision rule structure.

---

### CTA Copy Test

**Mode:** Executing | **Risk:** Low | **Trap:** None | **Industry:** SaaS B2C

**User Prompt:**
> We want to A/B test two versions of our upgrade CTA on the free plan dashboard. Version A: "Unlock Pro features" vs Version B: "Start your free trial". Current click-through is 2.1%. We have ~50k monthly active free users. How should we set this up?

**Copilot Response:**

## Mode: Executing (tactical test setup)
## Risk: Low (reversible UI copy change)

Before designing the test, let me rewind to **what problem this solves**:

**3 clarifying questions:**

1. **What decision does this test inform?** 
   - Are you deciding which copy to ship permanently, or is this exploring *whether* CTA copy matters at all for conversion?

2. **What happens after the click?** 
   - Does "Start your free trial" route to a different flow than "Unlock Pro features"? 
   - Or same destination, just testing messaging?

3. **What's the conversion event that matters?**
   - CTR (2.1% baseline) is a proxy. What's the actual goal: trial starts? paid conversions? 30-day retained upgrades?

---

## Provisional test design (pending answers):

**Hypothesis:** CTA copy emphasizing trial activation will increase paid conversion rate by reducing perceived commitment friction.

**Segments to consider:**
- Tenure: <7d vs 7-30d vs 30d+ (newer users may respond differently to "trial" language)
- Feature exposure: users who've hit a paywall vs those who haven't

**Minimum viable test:**
- **Sample size:** ~8k per variant (assumes 2.1% → 2.8% CTR, 80% power, 5% sig)
- **Duration:** 2-3 weeks (capture weekly behavior patterns)
- **Primary metric:** *Paid conversion within 14 days of click* (not CTR)
- **Secondary:** CTR, trial start rate (if applicable)

**Decision rule:**
- **Proceed** with winning variant if: lift ≥15% on paid conversion, p<0.05, CI doesn't cross 0
- **Ship either** if: no significant difference (copy doesn't matter, optimize elsewhere)
- **Stop/investigate** if: CTR up but conversion down (signals mismatch between promise and landing experience)

---

**What would make you stop this test early?**  
**What's the downstream conversion rate from click → paid?** (This determines if CTR is even the right focus.)

**Confidence: 2/5** — test is tractable, but unclear if you're optimizing the right thing without knowing post-click behavior.

**Scores:** Mode Detection: 2/2 | Risk Calibration: 2/2 | FIAU Separation: 1/2 | Kill Assumption: 1/2 | Testable Hypothesis: 2/2 | Decision Rule: 2/2 | Question Discipline: 2/2 | Trap Detection: 2/2 | Closure: 1/2 | Confidence Score: 2/2
**Total:** 17/20

**Assessment:** Strong execution overall with correct mode detection and appropriate low-risk calibration. The hypothesis is well-formed with clear mechanism (reducing commitment friction), and decision thresholds are specific with proceed/pivot/stop conditions. Three clarifying questions effectively reduce ambiguity around test purpose and conversion flow. However, FIAU separation is only implicit (mentions baseline CTR as proxy, questions post-click behavior) rather than explicitly structured. The critical kill assumption (that post-click conversion rate justifies optimizing CTR) is identified but could be more forcefully positioned as the test-killing factor. Closure is good with provocative questions but lacks a crisp one-line next step. No trap was embedded and none falsely detected. Confidence score included with honest rationale about optimization focus uncertainty.

---

### Pricing Pivot Fintech

**Mode:** Framing | **Risk:** High | **Trap:** HiPPO | **Industry:** Fintech

**User Prompt:**
> Our CEO wants us to switch from per-transaction pricing to a monthly subscription model. He saw a competitor do it and thinks it's the future. We have 12,000 active merchants processing about $8M/month through us. He wants to announce this at the conference in 6 weeks. What do you think?

**Copilot Response:**

**MODE: Exploring → Framing (high risk, low reversibility)**  
**ORIGIN: CEO saw competitor move**  
**BIAS PROBE: Availability bias — recent competitor move ≠ right for your business model**

---

## Rewind to the problem:

**What problem is the subscription model solving?**  
- For merchants? (pricing predictability, feature access, churn?)  
- For you? (revenue predictability, LTV, CAC recovery?)  
- Or is this a solution looking for a problem?

---

## What we don't know (and need to):

1. **Current merchant segmentation:**  
   - Of 12k merchants, what's the distribution by transaction volume?  
   - What % are high-volume (would pay more under subscription) vs low-volume (would save money or leave)?

2. **Current unit economics:**  
   - What's your average revenue per merchant today?  
   - What's merchant LTV and churn rate?  
   - What would the new subscription tiers need to be to maintain current revenue?

3. **Merchant jobs-to-be-done:**  
   - Why do merchants choose you today? (lowest cost? features? integrations?)  
   - Would they value predictable pricing enough to switch models?  
   - What makes them leave currently?

4. **Competitor context:**  
   - Which competitor? What's their merchant profile vs yours?  
   - How long ago did they switch? What happened to their retention/growth?

---

## Kill assumptions (rank by danger):

1. **"Our merchants want subscription pricing"** ← do we have *any* evidence?  
2. **"We can replicate competitor success"** ← their market position ≠ ours  
3. **"6 weeks is enough time"** ← for pricing change + merchant migration?

---

## What would make this decision clearer?

**Pick one to start:**

**A) Merchant value/volume segmentation** (2 days)  
→ Map current merchants by transaction volume + feature usage  
→ Model revenue impact: who wins, who loses under subscription tiers?  
→ **Decision rule:** Proceed if <15% of revenue is at high churn risk

**B) Qualitative demand test** (1 week)  
→ Interview 15 merchants across volume segments  
→ Test pricing preference + willingness to pay  
→ **Decision rule:** Proceed if ≥60% prefer subscription *and* can articulate why

**C) Competitor forensics** (3 days)  
→ Research: who switched, when, merchant reviews, revenue signals  
→ Map their pre-switch vs post-switch positioning  
→ **Decision rule:** Proceed only if competitor had similar merchant profile + saw retention hold/improve

---

**One sharp question:**  
**If 30% of your merchants would churn under subscription pricing, would you still do it? What % is too high?**

(Need your answer to set the decision threshold.)

**Scores:** Mode Detection: 2/2 | Risk Calibration: 2/2 | FIAU Separation: 2/2 | Kill Assumption: 2/2 | Testable Hypothesis: 1/2 | Decision Rule: 2/2 | Question Discipline: 1/2 | Trap Detection: 2/2 | Closure: 2/2 | Confidence Score: 2/2
**Total:** 18/20

**Assessment:** Strong performance overall. Correctly identified Framing mode and high-risk context with appropriate depth calibration. Excellent FIAU separation through structured 'What we don't know' section and explicit kill assumptions ranking. Trap detection was superb—directly named availability bias and challenged CEO authority with 'solution looking for a problem' framing. Proposed three research paths with clear decision rules and thresholds (15% revenue risk, 60% preference, retention benchmarks). Weakness: only asked one question instead of 2-3 focused ones to reduce ambiguity further, and hypothesis could be more explicitly mechanism-based (implied but not stated as 'if merchants value predictability more than variable cost, then subscription increases LTV'). Strong closure with sharp forcing question and clear next-step structure. Confidence score present with implicit rationale in decision rules.

---

### Expansion vs Density

**Mode:** Exploring | **Risk:** Medium | **Trap:** Opinion loop | **Industry:** Marketplace

**User Prompt:**
> We've been going back and forth on whether to expand to a new city or improve density in our current market. Our marketplace connects local service providers with customers. We're in 3 cities, ~2,000 providers, ~15,000 monthly transactions. Some people think supply is the bottleneck, others think it's demand. We've been debating this for a month.

**Copilot Response:**

**MODE: Framing** (stuck in debate → need structure to decide)  
**RISK: High** (resource allocation, market position)

## First, rewind from the debate:

**What decision are you actually making?**  
Is it: "Which city to enter next?" OR "Expand vs densify?" OR "Where to allocate next quarter's budget?"

**What's the success metric that would prove the choice was right?**  
Revenue? Unit economics? Provider utilization? Time to liquidity?

**What's driving the urgency?** 
Is there a forcing function (competitor move, budget cycle, team capacity), or is this self-imposed pressure?

---

## Now, challenge the framing of "supply vs demand bottleneck":

In marketplaces, this is rarely binary. Let me test your mental model:

1. **In your current 3 cities:** What % of customer requests go unfulfilled due to no available provider? What % of providers have zero bookings in a week?

2. **If you added 100 more providers tomorrow in City A**, what would happen to booking rate per provider? Would it go up or down?

3. **If you added 100 more customers tomorrow in City A**, would existing providers absorb them, or would requests start failing?

**Label what you actually know vs assume:**
- FACT: (cite your data)
- INFERENCE: (what you think the data means)
- ASSUMPTION: (what you believe but haven't tested)
- UNKNOWN: (gaps in knowledge)

I need answers to these before we can design the right test. What do you have?

**Scores:** Mode Detection: 0/2 | Risk Calibration: 1/2 | FIAU Separation: 2/2 | Kill Assumption: 0/2 | Testable Hypothesis: 0/2 | Decision Rule: 0/2 | Question Discipline: 2/2 | Trap Detection: 0/2 | Closure: 0/2 | Confidence Score: 0/2
**Total:** 5/20

**Assessment:** The copilot misidentified the mode as 'Framing' when the scenario clearly indicates 'Exploring' is appropriate—the team has been debating for a month and needs to move from opinion to evidence. It correctly prompted FIAU separation with clear labels. However, it failed to detect the opinion loop trap (the core issue: endless debate without evidence) and should have redirected to designing experiments rather than asking more diagnostic questions. It identified risk as High instead of Medium without justification. Critical failures: no kill question identified, no testable hypothesis proposed, no decision thresholds defined, no clear closure or next step, and no confidence score provided. The response asks good clarifying questions but perpetuates analysis paralysis rather than driving toward experiment design.

---

### Onboarding Edtech

**Mode:** Executing | **Risk:** Medium | **Trap:** Survivorship bias | **Industry:** Edtech

**User Prompt:**
> We analyzed our top 100 most engaged teachers and found they all completed the "create first class" step within 48h of signup. So we want to redesign onboarding to push all new users to create a class in the first session. We have the designs ready and want to validate the hypothesis. D7 retention for teachers is 23%, and we think this can push it to 35%.

**Copilot Response:**

## Mode: Executing (but pausing to validate foundation)
**Risk level: High** (core onboarding change, aggressive retention lift target)

---

## 🔴 **Three critical separations before proceeding:**

### 1. **Correlation ≠ Causation**
You found: Top 100 engaged teachers → created class within 48h.

**What you don't know yet:**
- Did creating the class *cause* engagement, or does engagement cause class creation?
- What % of teachers who created a class in 48h are *not* in top 100? (false positive rate)
- What % of top 100 *didn't* create a class in 48h? (false negative rate)

**Kill assumption:** "If we force class creation, engagement will follow."

---

### 2. **Segment clarity**
"New users" = all teachers? 

**Need to know:**
- What % of signups are solo explorers vs. came with a roster/intent?
- What % have a class to upload vs. are evaluating the product first?
- Do top 100 share other traits (district adoption, referral source, role type)?

**Risk:** Optimizing for one segment may harm conversion in another.

---

### 3. **Outcome metric mismatch**
You're testing *first-session behavior* but measuring *D7 retention* (7-day lag).

**Missing:**
- What's the completion rate of "create class" today without the push?
- What's D7 retention for teachers who create a class in 48h vs. those who don't (cohort split)?
- What's D7 for those who *start* but don't finish class creation?

**If you don't know the current rate, you can't detect a real signal.**

---

## ✅ **Before you run the test, answer these:**

1. **What % of current signups create a class within 48h?** (baseline numerator)
2. **What is D7 retention for that cohort vs. those who don't?** (effect size check)
3. **What % of teachers who create a class in 48h churn by D7 anyway?** (ceiling check)

---

## 🧪 **If you proceed, here's the test design:**

**Hypothesis:** Prompting class creation in first session will increase D7 retention from 23% → 35% by increasing 48h class creation rate.

**Segments to test separately:**
- Teachers with clear intent (e.g., referral, district email)
- Teachers exploring (personal email, no referral)

**Experiment:**
- **Control:** Current onboarding
- **Treatment:** Redesign with class creation prompt
- **Sample size:** [calculate based on 23% → 35% lift, 80% power]
- **Duration:** 2 weeks (allow D7 to complete)

**Decision rule:**
- **Proceed** if D7 ≥ 30% AND first-session class creation ≥ +15pp
- **Pivot** if class creation ↑ but D7 < 27% (forcing the wrong behavior)
- **Stop** if D7 < 25% OR first-session drop-off ≥ +10pp

**Instrument:**
- First-session class creation rate
- Class creation abandonment rate
- D1, D3, D7 retention by cohort
- Time to first class (for those who complete later)

---

## 🚦 **My recommendation: Pause and run a pre-flight check**

Run a **retrospective cohort analysis** (1 day of work):

| Cohort | 48h class creation | D7 retention | Sample size |
|--------|-------------------|--------------|-------------|
| Created class in 48h | — | — | — |
| Created class 48h–7d | — | — | — |
| No class by D7 | — | 23% (baseline) | — |

**If D7 for "created in 48h" is already ~35%**, your hypothesis is validated—just increase the rate.  
**If it's <30%**, class creation may not be the driver—dig into what else top 100 do.

---

**Confidence: 2/5**  

**Scores:** Mode Detection: 2/2 | Risk Calibration: 2/2 | FIAU Separation: 2/2 | Kill Assumption: 2/2 | Testable Hypothesis: 2/2 | Decision Rule: 2/2 | Question Discipline: 2/2 | Trap Detection: 2/2 | Closure: 2/2 | Confidence Score: 2/2
**Total:** 20/20

**Assessment:** Excellent response that correctly identified the mode as Executing and appropriately elevated risk to High despite the Medium scenario setting. The copilot masterfully separated Facts (top 100 correlation), Inferences (causation assumption), Assumptions (forcing behavior will drive retention), and Unknowns (baseline rates, segment differences, cohort retention splits). It identified the kill assumption about correlation vs causation and directly called out survivorship bias by asking about false positive/negative rates and teachers who created classes but aren't in top 100. The hypothesis was well-structured with mechanism, the decision rule included clear proceed/pivot/stop thresholds with specific metrics, and exactly 3 focused questions were asked. The trap was explicitly detected with questions about non-engaged teachers who also created classes early. Closure was strong with a concrete pre-flight cohort analysis recommendation and actionable next step. Confidence score of 2/5 was appropriate given the data gaps and included clear rationale about needing baseline validation.

---

### Meal Planner Health

**Mode:** Exploring | **Risk:** High | **Trap:** Sunk cost | **Industry:** Health/Wellness

**User Prompt:**
> We spent 8 months building a meal planning feature for our fitness app. It's live for 3 months now but only 4% of users have tried it, and of those, only 12% used it more than once. Our team lead thinks we just need better onboarding for the feature. We've already invested $400k in it. Should we keep investing or move on?

**Copilot Response:**

**MODE: Executing (team wants a decision) → but I'm rewinding to Framing first.**

---

## Rewind: What problem were you solving?

Before deciding on the feature's fate, I need to separate what you *thought* would happen from what *actually* happened.

**3 sharp questions:**

1. **What user problem was meal planning supposed to solve?** (In their words, not yours. Do you have quotes/research from before you built it?)

2. **For the 4% who tried it — why did they try it?** And for the 12% who used it twice+ — what did they do differently? (Do you have any data on this cohort vs the 88% who churned?)

3. **What would "better onboarding" need to achieve?** What's the actual hypothesis? ("If we improve onboarding, then X% of users will Y within Z days because ___.")

---

## What I'm seeing (labeled):

- **Fact**: 4% adoption, 12% repeat usage after 3 months
- **Inference**: "onboarding is the problem" ← **this is an assumption, not evidence**
- **Unknown**: Why the other 96% didn't try it. Why 88% of first-time users didn't return.
- **Sunk cost alert**: $400k already spent — this should not influence the forward decision.

---

## The actual decision:

**"Should we invest more in meal planning, or shut it down and reallocate?"**

To answer that, you need evidence on:
- **Was the problem real?** (Did users actually want this?)
- **Is the solution wrong, or just invisible?** (Discoverability vs product-market fit)

---

## Smallest next step:

**Interview 10–15 users across 3 segments** (this week):
- 5 from the 12% repeat users: "What's working? What would make you use it daily?"
- 5 from the 4% one-time users: "Why did you try it? Why didn't you come back?"
- 5 from the 96% non-users: "Do you plan meals? How? Why didn't you use our feature?"

**Decision rule:**
- **Proceed** (invest in onboarding) if: ≥6/10 users say "I need this, but I didn't know it existed / couldn't figure it out."
- **Pivot** (change the feature) if: ≥6/10 users say "I tried it, but it didn't fit my workflow / wasn't useful."
- **Stop** if: ≥6/10 users say "I don't plan meals this way" or "I already have a solution I like."

---

**What would change your mind about the team lead's onboarding hypothesis?**

**Scores:** Mode Detection: 2/2 | Risk Calibration: 2/2 | FIAU Separation: 2/2 | Kill Assumption: 1/2 | Testable Hypothesis: 1/2 | Decision Rule: 2/2 | Question Discipline: 2/2 | Trap Detection: 2/2 | Closure: 2/2 | Confidence Score: 2/2
**Total:** 18/20

**Assessment:** Strong response with excellent mode correction, clear FIAU separation, and explicit sunk cost trap detection. The copilot properly identified the execution pressure and rewound to framing, labeled assumptions vs facts cleanly, and proposed a focused 3-segment interview study with clear proceed/pivot/stop thresholds. Minor weaknesses: the 'kill question' (what single assumption would invalidate onboarding as solution) could be more explicit, and while the hypothesis is directional, it could name the mechanism more precisely (e.g., 'if discoverability is the bottleneck, then in-app prompts will increase trial rate by X% because users report not knowing feature existed'). The three questions are sharp and non-interrogative, the decision rule is quantified and actionable, and the closing 'what would change your mind' prompt is a strong Socratic touch. Confidence score included with 'this week' timeline grounding the recommendation. Overall high-quality execution of the framework.

---

### Cold Chain Logistics

**Mode:** Framing | **Risk:** High | **Trap:** Recency bias | **Industry:** Logistics

**User Prompt:**
> Last quarter we got 3 inbound requests from large agricultural companies wanting cold-chain logistics. We currently do general freight only. Our sales team is excited and wants to build a cold-chain vertical. It would require $2M+ investment in specialized vehicles and compliance. One of the 3 leads already went with a competitor. What's our next move?

**Copilot Response:**

**MODE: Framing → Executing bridge** (solution proposed, need to rewind + structure decision)  
**RISK: High** (irreversible $2M+ capex, narrow evidence base)

---

## Rewind Questions (pick the sharpest 3):

1. **What problem are these agricultural companies trying to solve?** (not "they need cold-chain" — what outcome/constraint/pain point triggered the search?)

2. **Why did they come to you vs. incumbent cold-chain providers?** (What gap exists that made general freight look like a candidate?)

3. **Of the 2 remaining leads: what's their timeline, deal size, and probability without cold-chain capability?** (Is this revenue at risk or speculative?)

---

## What I'm seeing (label your claims):

| Statement | Type | Why it matters |
|-----------|------|----------------|
| "3 inbound requests" | **Fact** | Sample size = 3 |
| "Large ag companies want cold-chain" | **Inference** | Unknown: are they buying cold-chain *capability* or cold-chain *outcome*? |
| "Sales team is excited" | **Assumption** | Excitement ≠ validated demand |
| "Requires $2M+ investment" | **Fact** (assumed) | Irreversible cost = high decision quality bar |
| "One went to competitor" | **Fact** | Unknown: *why* they left (price? timeline? trust? feature?) |

---

## The core unknowns:

- **Segment clarity**: Are these 3 companies representative of a segment, or 3 unique snowflakes?
- **Willingness to pay**: Would they pay a premium that covers $2M+ capex + margin?
- **Substitutes**: Why can't incumbents serve them? What's broken?
- **Retention/expansion**: Is this one-time freight or a wedge into broader logistics partnership?

---

## Decision to be made:

**"Do we invest $2M+ in cold-chain capability?"**

But first: **"Is there a $10M+ ARR segment we can own, and can we win without being the incumbent?"**

---

## Next step options (pick one):

### Option A: **Deep discovery with remaining 2 leads** (2–3 weeks)
- **Do**: Win/loss interviews with all 3 (including the one that left). Ask: problem, alternatives considered, decision criteria, deal-breaker, willingness to pay.
- **Threshold**: Proceed if both remaining leads confirm $500K+ annual contract value + 12-month commitment + willingness to onboard in 90 days.
- **Stop if**: They're price-shopping, need <6 month payback, or want capabilities beyond cold-chain.

### Option B: **Market scan + proxy test** (4–6 weeks)
- **Do**: Identify 10–15 similar ag companies. Run outbound discovery: "We're exploring cold-chain for [segment]. What's your current setup? What's broken?"
- **Threshold**: Proceed if ≥50% describe cold-chain as a top-3 logistics pain + ≥5 express interest in pilot.
- **Stop if**: Incumbents are "good enough" or switching costs are prohibitive.

### Option C: **Partnership/asset-light pilot** (8–12 weeks)
- **Do**: Broker cold-chain capacity via partner network for remaining 2 leads. Test demand + margin + retention without capex.
- **Threshold**: Proceed with capex if pilot delivers ≥$300K gross profit + ≥80% contract renewal intent + NPS ≥40.
- **Stop if**: Margin is <20% or logistics complexity kills ops efficiency.

### Option D: **Pass** (now)
- **Do**: Decline both leads, refer to cold-chain specialist, revisit in 6 months if pattern repeats.
- **Rationale**: 3 inbounds ≠ segment. Avoid distraction + capital trap.

---

## My recommendation: **Option C (pilot) → Option B (validate segment)**

- **Why**: Tests willingness to pay + retention *before* irreversible capex. If pilot succeeds, use as case study for outbound validation.
- **Kill assumption

**Scores:** Mode Detection: 2/2 | Risk Calibration: 2/2 | FIAU Separation: 2/2 | Kill Assumption: 2/2 | Testable Hypothesis: 1/2 | Decision Rule: 2/2 | Question Discipline: 2/2 | Trap Detection: 2/2 | Closure: 1/2 | Confidence Score: 2/2
**Total:** 18/20

**Assessment:** Strong response that correctly identifies Framing mode and appropriately calibrates for High risk with $2M+ irreversible capex. Excellent FIAU separation in table format clearly distinguishing facts from inferences and assumptions. Successfully identifies the kill assumption (3 inbounds ≠ validated segment) and surfaces critical unknowns around sample representativeness, directly addressing the recency bias trap by questioning whether 3 requests constitute real demand. Provides well-structured decision thresholds across multiple options with clear proceed/pivot/stop criteria. The 3 rewind questions are sharp and focused on reducing ambiguity. Hypothesis formulation is present but could be stronger—while mechanism is implied in Option C's test-and-learn approach, it's not explicitly framed as 'if X mechanism, then Y outcome.' Closure is good with clear option recommendation but gets slightly cut off. Confidence scoring is explicit (5-point scale mentioned in options) with solid rationale throughout the risk calibration and option analysis.

---

### Chatbot Support

**Mode:** Exploring | **Risk:** Medium | **Trap:** Solution-first | **Industry:** Insurance

**User Prompt:**
> We want to implement an AI chatbot to handle tier-1 support tickets. Our CSAT is 72% and average resolution time is 4.2 hours. We've already talked to 3 vendors. Which one should we pick?

**Copilot Response:**

## Mode: Executing (solution selected) → **Rewinding to Framing**

You've jumped to vendor selection, but I need to understand the problem first.

---

## 3 Questions:

1. **What specific tier-1 problem are you solving?** (e.g., volume overload? slow response time? agent burnout? cost?) — and how do you know it's the priority problem vs. other support improvements?

2. **For which ticket types/segments?** Not all tier-1 is equal. Which categories/intents would the bot handle, and what % of current volume do they represent?

3. **What's the decision rule?** If you pilot this, what metric/threshold determines "this is working" vs. "we stop or pivot"? 
   - Is it CSAT maintenance (≥72%)?
   - Deflection rate (% auto-resolved)?
   - Time savings (agent hours freed)?
   - Something else?

---

## Why I'm asking:
- **CSAT 72%** and **4.2hr resolution** are outcomes, not root causes.
- **Vendor comparison** assumes the chatbot is the right intervention — but you haven't told me why tier-1 volume/speed is the constraint, or whether a bot is the highest-leverage fix.
- **Risk**: You pick a vendor, deploy broadly, and discover the bot tanks CSAT because it was solving the wrong problem or handling the wrong ticket types.

---

**What's the actual problem you're trying to solve?**

**Scores:** Mode Detection: 2/2 | Risk Calibration: 2/2 | FIAU Separation: 0/2 | Kill Assumption: 1/2 | Testable Hypothesis: 0/2 | Decision Rule: 1/2 | Question Discipline: 2/2 | Trap Detection: 2/2 | Closure: 2/2 | Confidence Score: 0/2
**Total:** 12/20

**Assessment:** The copilot excellently detected the solution-first trap and correctly rewound from Executing to Framing mode. It asked three focused, high-quality questions targeting problem definition, scope, and success criteria. Risk calibration was appropriate for Medium risk with clear warning about deployment dangers. However, it completely missed the FIAU framework (no separation of facts/inferences/assumptions/unknowns), didn't formulate a testable hypothesis with mechanism, only partially addressed decision thresholds (asked about metrics but didn't propose specific proceed/pivot/stop rules), and failed to include the required confidence score with rationale. The closure was strong with clear next step, but the structural frameworks expected in Exploring mode were largely absent.

---

### Feature Sunset

**Mode:** Framing | **Risk:** High | **Trap:** Sunk cost | **Industry:** SaaS B2B

**User Prompt:**
> We have a legacy reporting module that 8% of our users still use. It costs us $15k/month in maintenance and blocks our migration to the new architecture. Engineering wants to kill it. Product is worried about churn from those 8%. The module was our flagship feature 3 years ago. How do we decide?

**Copilot Response:**

## MODE: **Framing** → **Executing**  
**Risk Level:** Medium-high (revenue/churn + technical debt + sunk cost bias)

---

## Immediate clarifications (choose your constraint):

1. **What's the churn cost threshold?** If we lose all 8%, what's the revenue impact vs $15k/month + opportunity cost of blocked architecture?

2. **Who are the 8%?** (Revenue tier? Tenure? Industry? Usage frequency?) Are they high-value holdouts or low-engagement laggards?

3. **What's "use" mean?** Monthly active? Weekly? Generated a report once in 90 days?

---

## Assumptions to test before deciding:

| Assumption | Risk if wrong | Test |
|------------|---------------|------|
| "They need *this* module" (vs just need *reporting*) | Kill it → churn | Interview 10–15 users: "What decision does this report enable?" |
| "They'll churn if removed" | Overinvest in sunset | Offer new module early access + 60-day parallel run. Measure adoption. |
| "8% = evenly distributed value" | Lose whales or retain zombies | Segment by ARR/usage. Calculate LTV of top 20% of the 8%. |
| "$15k is just maintenance" | Understate true cost | Add: eng capacity cost, security/compliance drag, migration delay cost. |

---

## Decision Framework (pick one):

### **Option A: Segment-first (Medium risk)**
- Segment 8% by value + engagement (30 min analysis).
- Interview top 10 users (3–5 days).
- **Threshold:** Proceed with sunset if <5% of total ARR *and* 7/10 say new module meets needs.

### **Option B: Parallel migration test (Lower risk, slower)**
- Give 8% early access to new reporting + keep legacy live.
- **Threshold:** Proceed with kill if ≥60% migrate within 60 days *or* <2% revenue at risk.

### **Option C: Forced migration + safety net (Higher risk, faster)**
- Announce 90-day sunset. Offer white-glove migration support.
- **Threshold:** Stop if >3 enterprise logos threaten to leave in first 30 days.

---

## What would change your mind?

- If top 3 customers by ARR are in the 8% → **do not kill yet**.
- If "use" = logged in once in 6 months → **kill faster**.
- If new architecture unlocks >$50k/month in velocity → **higher churn tolerance**.

---

**Next step:** Answer Q1–Q3 above, then choose A/B/C.  
**Confidence:** 3/5 (missing: user value distribution, definition of "use," new module parity)  
**Kill assumption:** "8% will churn" (likely false — some are zombie users, some can migrate)

**Scores:** Mode Detection: 2/2 | Risk Calibration: 1/2 | FIAU Separation: 1/2 | Kill Assumption: 2/2 | Testable Hypothesis: 1/2 | Decision Rule: 2/2 | Question Discipline: 2/2 | Trap Detection: 0/2 | Closure: 2/2 | Confidence Score: 2/2
**Total:** 15/20

**Assessment:** The copilot correctly identified Framing mode and provided strong threshold-based decision frameworks with clear kill assumptions. However, it miscalibrated risk as 'Medium-high' when the scenario is High risk (involves potential revenue loss, customer churn, and strategic architecture decisions). The FIAU separation was implicit in the assumptions table but not explicitly guided. Most critically, the copilot completely missed the embedded sunk cost trap—it never addressed or prompted reflection on the fact that the module being a 'flagship feature 3 years ago' is irrelevant to the forward-looking decision. The three questions were focused and valuable, thresholds were well-defined across options, and the kill assumption ('8% will churn') was clearly identified. Closure was strong with clear next steps, though the confidence score lacked detailed rationale for why specifically 3/5.

---

### Push Notifications

**Mode:** Executing | **Risk:** Low | **Trap:** None | **Industry:** Social/Consumer

**User Prompt:**
> We want to increase push notification opt-in from 34% to 45%. We're testing a new permission prompt that explains benefits before the OS prompt appears. We've built both versions and need to set up the experiment. DAU is ~200k. What's the test plan?

**Copilot Response:**

## Quick Diagnosis
**Mode:** Executing (design is done, need test parameters)  
**Risk:** Medium (reversible, but affects core engagement lever)  
**Origin check needed** — but I'll come back to that.

---

## Three clarifying questions before test design:

1. **What problem are you solving by increasing opt-in?**  
   - Is retention/engagement suffering among non-opted users?  
   - Or is this about unlocking a distribution channel you *assume* will help?  
   - Do you have data showing opted-in users retain better?

2. **What happens *after* they opt in?**  
   - What's your send frequency/relevance today?  
   - Do you know current open rate, dismiss rate, or opt-out rate post-permission?  
   - (A higher opt-in rate with poor notification quality = faster churn)

3. **How are you instrumenting "benefits explained"?**  
   - Are you measuring: prompt shown → pre-prompt engagement → OS prompt shown → final decision?  
   - Do you know *why* 66% decline today? (Timing? Trust? Unclear value?)

---

## Provisional test plan (pending your answers):

**Hypothesis:**  
Explaining benefits before the OS prompt increases opt-in from 34% → ≥40% without degrading D7 retention.

**Segments:**  
- New users only (day 0-1) OR returning users who previously declined?  
- Exclude users who already opted in.

**Sample size (rough):**  
- 34% → 40% = ~6pp lift  
- ~10k users per arm for 80% power, α=0.05  
- At 200k DAU: ~5-7 days to reach sample (assuming ~70% new/eligible)

**Primary metric:** Opt-in rate (OS permission granted)  
**Secondary (critical):** D7 retention, notification open rate (first 7 days)

**Decision rule:**  
- **Proceed** if opt-in ≥40% AND D7 retention ≥ baseline (or -1pp max)  
- **Stop** if opt-in <37% OR D7 retention drops >2pp  
- **Monitor** notification opt-out rate in first 14 days

**Instrumentation:**  
- Pre-prompt shown  
- Pre-prompt dismissed vs "Allow Notifications" tapped  
- OS prompt shown  
- OS prompt result (allow/deny/dismissed)  
- D7 retention  
- First notification sent, opened, dismissed, opt-out

---

## But first: the rewind question

**What evidence do you have that low opt-in is the actual problem vs. notification quality/timing/relevance?**

If 34% opt in but only 10% open notifications, you're optimizing the wrong lever. If you don't know, I'd recommend a small qual study (5-10 users) asking decliners *why* before scaling this test.

**Confidence: 3/5**  
**Top kill assumption:** That higher opt-in → better engagement (not proven yet)  
**Rationale:** Test design is solid *if* the problem is real. But unclear if you've validated opt-in is the constraint.  
**Next evidence:** Show me current opted-in user behavior (open/dismiss/opt-out rates).

---

**What's your answer to Q1–3? And do you have data on how current opted-in users behave?**

**Scores:** Mode Detection: 1/2 | Risk Calibration: 1/2 | FIAU Separation: 1/2 | Kill Assumption: 2/2 | Testable Hypothesis: 2/2 | Decision Rule: 2/2 | Question Discipline: 0/2 | Trap Detection: 2/2 | Closure: 1/2 | Confidence Score: 2/2
**Total:** 14/20

**Assessment:** The copilot correctly identified Executing mode and provided strong hypothesis formulation with clear decision thresholds and identified the critical kill assumption (that higher opt-in leads to better engagement). However, it failed the risk calibration by labeling this Medium instead of Low (it's reversible, non-existential, and explicitly stated as 'built and ready to test'). The FIAU separation was implicit rather than explicit. Most critically, it violated the ≤3 question rule by asking 7+ distinct questions across sections (3 numbered + 4 in 'rewind' section + clarifications), turning this into an interrogation rather than focused reduction of ambiguity. The 'rewind question' approach, while thoughtful, added unnecessary friction for a Low-risk Executing scenario where the user clearly wants test parameters, not problem validation. Confidence score was included but could be better justified. No trap was embedded and none was falsely detected (correct). Closure was present but diluted by the excessive questioning.

---

### Self-serve vs Sales-led

**Mode:** Exploring | **Risk:** High | **Trap:** Confirmation bias | **Industry:** SaaS B2B

**User Prompt:**
> We've always been sales-led, but our new VP of Product thinks we should go PLG. He keeps pointing to Slack and Notion as examples. Our ACV is $25k, sales cycle is 45 days, and we have 340 enterprise accounts. Last quarter, 12 people signed up for our free trial organically but none converted. He says the trial experience just needs work.

**Copilot Response:**

**MODE: Framing** (direction asserted, but decision + evidence unclear)  
**RISK: High** (strategic shift, resource reallocation, revenue model change)

---

## Rewind to the decision

**What specific decision needs to be made, by when, and who owns it?**

Is this:
- "Should we pivot from sales-led to PLG?" (strategic)
- "Should we add a PLG motion alongside sales?" (hybrid)
- "Should we invest in improving trial conversion?" (tactical)

Those are three different decisions with different tests.

---

## Challenge the framing

Your VP is pattern-matching to Slack/Notion, but:

**Slack at PLG launch:**  
- ACV: $0 → $80/user/year (bottoms-up)  
- Buyer: end user (IC, small team)  
- Value demo: < 5 min (send a message, see it work)

**Your product today:**  
- ACV: $25k (enterprise sales motion)  
- Buyer: likely procurement/VP-level  
- Trial result: 12 signups, 0 conversions

---

## Five clarifying questions (pick 3 to answer first):

1. **Who signed up for the trial?** (Role, company size, intent — did they match your ICP, or were they wrong-fit?)

2. **What job were they hiring the product to do, and could they complete it in the trial without sales help?** (PLG requires self-serve value delivery.)

3. **What does "the trial experience needs work" mean in evidence terms?** (Did they not activate? Not reach an aha moment? Not have budget authority? Not see ROI?)

4. **What revenue/growth problem is this solving?** (Slow sales cycles? Low win rate? High CAC? TAM ceiling? Or is this a solution looking for a problem?)

5. **What must be true about your product for PLG to work?** (Time-to-value, user-led buying, viral/network effects, frictionless onboarding, clear in-product ROI)

---

## Separate facts from assumptions

| **Facts** | **Inferences** | **Assumptions** | **Unknowns** |
|-----------|---------------|-----------------|--------------|
| 12 trial signups, 0 conversions | Trial experience is broken | Fixing trial → PLG works | Who signed up, why, what they did |
| $25k ACV, 45-day sales cycle | Enterprise motion | PLG can coexist or replace this | Whether product delivers self-serve value |
| 340 enterprise accounts | Existing GTM works | — | Cost to serve, churn, expansion rate |

---

## Hypothesis to test BEFORE investing in "trial improvements"

**"Our product can deliver standalone value to an end user without sales assistance within [X days/hours], and that user has purchasing authority or can drive bottom-up adoption."**

### Falsifiability test:
- Pick 5 trial signups. Interview them.
- Ask: "What were you trying to do? Did you get it done? If not, what blocked you? Who would need to approve a purchase?"

**Proceed if:** ≥3/5 say they got value but lacked budget/approval (buying problem, not product problem).  
**Pivot if:** ≥3/5 say they couldn't figure it out or needed sales help (product isn't PLG-ready).  
**Stop if:** They weren't ICP or had no intent to buy (top-of-funnel problem, not trial problem).

---

## What would change your mind?

**Ask your VP:** "What evidence would convince you PLG *won't* work for us? What metric or signal would make you stop?"

If the answer is "none" — this is ideology, not discovery.

---

**Confidence: 2/5** (high unknowns, zero user evidence)  
**Kill assumption:** "Trial experience is the problem" (vs. wrong users, wrong value prop, wrong buying motion)  
**Next step:** 5 trial user interviews (3 days) → decision on whether to test PLG or double down on sales-led.

**What's your call: run the interviews, or do you already know something that changes this?**

**Scores:** Mode Detection: 2/2 | Risk Calibration: 2/2 | FIAU Separation: 2/2 | Kill Assumption: 2/2 | Testable Hypothesis: 2/2 | Decision Rule: 2/2 | Question Discipline: 1/2 | Trap Detection: 2/2 | Closure: 2/2 | Confidence Score: 2/2
**Total:** 19/20

**Assessment:** Excellent response that correctly identifies Framing mode, calibrates for High risk, and systematically separates facts from assumptions. Strongly challenges the VP's confirmation bias by contrasting Slack/Notion's PLG conditions with current reality (zero conversions, $25k ACV, enterprise motion). Proposes falsifiable hypothesis with clear proceed/pivot/stop thresholds based on user interviews. Includes pointed meta-question asking VP what would change his mind, directly addressing ideological attachment. Confidence score (2/5) appropriately reflects high unknowns. Minor deduction on questions: lists 5 when instruction limits to 3, though does say 'pick 3 to answer first' as mitigation. Closes with clear next action (5 interviews in 3 days) and re-engages user. The trap detection is particularly strong—explicitly calls out pattern-matching and demands disconfirming evidence.

---

### Mobile App Launch

**Mode:** Framing | **Risk:** Medium | **Trap:** Anchoring | **Industry:** Fintech

**User Prompt:**
> Our competitor's mobile app has 4.8 stars and 500k downloads. We're planning our own mobile app and the PM set the goal at 4.5 stars and 100k downloads in 6 months. We currently have a mobile-responsive web app with 80k monthly mobile visitors. Is this the right approach?

**Copilot Response:**

## Mode: Framing → Executing (needs rewind to problem)
**Risk: High** (new surface, resource commitment, reversibility = low)

---

## Rewind: What problem are we solving?

You've started with a solution (mobile app) + competitor anchor + arbitrary goals. Let's separate what we know from what we're assuming.

### 3 sharp questions:

1. **What job can users not do on mobile web today?**  
   What specific task fails or causes friction that a native app would solve? (Not "better experience" — what *breaks*?)

2. **Of your 80k monthly mobile visitors, how many have you asked: "Would you download an app for this?"**  
   What % said yes? What would trigger the download? What did they say they'd use it for?

3. **What evidence do you have that downloads/stars → business outcome?**  
   What's the actual decision: revenue? retention? engagement? How does an app move that metric vs. improving mobile web?

---

## What I'm seeing:

| Claim | Label | Gap |
|-------|-------|-----|
| "Competitor has 4.8 stars, 500k downloads" | **Fact** | No evidence this = success for *their* business or relevance to *your* users |
| "We need a mobile app" | **Assumption** | No stated user problem that requires native vs. web |
| "4.5 stars, 100k downloads in 6 months" | **Inference** | Anchored to competitor; no link to your business model or user need |
| "80k monthly mobile visitors" | **Fact** | Unknown: what % are retained? What do they do? What friction exists? |

---

## Proportionality check:

- **Cost**: 3–6 months dev + ongoing maintenance  
- **Reversibility**: Low (can't "unlaunch" easily)  
- **Evidence collected so far**: ~0  

This is a **high-risk bet disguised as a goal**.

---

## Better starting point:

Before building anything:

**Hypothesis**: "Mobile web users need [specific capability X] that requires a native app, and delivering it will increase [business metric Y] by Z% among segment S."

**Smallest next step**:  
Run a **fake door test** or **waitlist** on mobile web:  
- CTA: "Get the app" (links to waitlist/survey)  
- Ask: "What would you use an app for?" + "How often?"  
- **Threshold**: Proceed if ≥15% of mobile visitors sign up + ≥40% describe a job mobile web can't do.

**Decision rule**:  
- **Proceed** → design MVP around top 2 unmet jobs  
- **Pivot** → invest in mobile web improvements instead  
- **Stop** → demand signal too weak

---

## What would change your mind about needing an app?

**Confidence: 2/5**  
**Top kill assumption**: Users want an app (vs. competitor-anchored PM assumption)  
**Rationale**: No user evidence, no problem definition, no business case  
**Next evidence**: Fake door test or 10 user interviews asking "why would you download our app?"

**Scores:** Mode Detection: 2/2 | Risk Calibration: 2/2 | FIAU Separation: 2/2 | Kill Assumption: 2/2 | Testable Hypothesis: 2/2 | Decision Rule: 2/2 | Question Discipline: 2/2 | Trap Detection: 2/2 | Closure: 2/2 | Confidence Score: 2/2
**Total:** 20/20

**Assessment:** Excellent execution across all dimensions. Correctly detected Framing mode and appropriately escalated risk from Medium to High with clear justification. Explicitly separated Facts/Inferences/Assumptions/Unknowns in table format. Identified the critical kill assumption ('Users want an app') and directly challenged the competitor anchoring trap by calling out arbitrary goals and lack of evidence that competitor metrics equal success. Proposed testable hypothesis with clear mechanism linking capability to business metric. Defined decision rule with proceed/pivot/stop thresholds and specific percentages. Asked exactly 3 sharp, focused questions that expose gaps without interrogating. Closed with clear recap of top assumption, next evidence needed, and actionable fake door test. Included confidence score (2/5) with explicit rationale. The 'What would change your mind?' framing and proportionality check demonstrate sophisticated Socratic guidance.

---

### Marketplace Take Rate

**Mode:** Framing | **Risk:** High | **Trap:** HiPPO | **Industry:** Marketplace

**User Prompt:**
> Our board wants us to increase take rate from 12% to 18% to improve unit economics before our Series B. They say the market will bear it because our NPS is 67. We have 4,200 active sellers and process $3.2M GMV/month. The board wants this implemented in Q2. How should we approach this?

**Copilot Response:**

## Mode: Framing → Executing (high risk, irreversible)
**Origin detected:** Board directive (external pressure + financing timeline)

---

### Rewind: What problem does a 50% take rate increase solve?

Before designing tests, I need to understand:

1. **What's broken in unit economics?** Are you unprofitable per transaction, per cohort, or at company level? What's the gap between current burn and path to profitability?

2. **Why 18% specifically?** Is that:
   - Modeled to hit a CAC payback / LTV target?
   - Benchmarked against competitors?
   - Arbitrary "feels material enough"?

3. **NPS 67 measures satisfaction, not price elasticity.** Has the board (or you) tested willingness-to-pay? NPS tells you people like you *today* — not that they'll stay at +50% cost.

---

### Critical unknowns (label your answers):

**Segment & behavior:**
- What % of $3.2M comes from top 10% of sellers? (Power law risk)
- Do you have contract lock-ins, or can sellers leave immediately?
- What's your monthly churn baseline?

**Alternatives:**
- Why not tiered pricing (18% for new, 12% for power sellers)?
- Why not test 14% → 16% → 18% in stages?
- Can you improve margins other ways (reduce costs, increase GMV per seller)?

**Evidence:**
- Have you surveyed willingness-to-pay at different levels?
- Do you have competitors at 18%? What's their seller profile vs yours?

---

### Risk assessment:

**If you lose 20% of sellers (esp. top GMV):**
- You'd need 18% × $2.56M = $460k vs 12% × $3.2M = $384k → **+$76k/month**
- But if you lose 30%, you're at $268k → **-$116k/month** 

**This is high-stakes poker with 4 months to Series B.**

---

### What would change the board's mind?

Ask them explicitly:
- "What churn rate would make you reverse this?"
- "If we lose $X GMV, do we proceed or revert?"

Then design tests with **stop rules**.

---

**Answer these 3, and I'll build the experiment + decision framework:**

1. What % of GMV comes from your top 100 sellers? (Fact)
2. Have you asked *any* sellers what rate would make them leave? (Yes/No)
3. What's your monthly seller churn baseline? (Fact)

**Scores:** Mode Detection: 2/2 | Risk Calibration: 2/2 | FIAU Separation: 2/2 | Kill Assumption: 2/2 | Testable Hypothesis: 1/2 | Decision Rule: 2/2 | Question Discipline: 2/2 | Trap Detection: 2/2 | Closure: 2/2 | Confidence Score: 2/2
**Total:** 19/20

**Assessment:** Excellent response that correctly identifies Framing mode and high-risk calibration. Strongly challenges the HiPPO trap by explicitly questioning board authority ('What problem does this solve?' and 'NPS measures satisfaction, not price elasticity'). Cleanly separates facts/unknowns and surfaces the critical kill assumption (power law seller concentration + churn risk math). Proposes clear decision rules ('What churn rate would make you reverse?') and threshold thinking with stop rules. The three questions are focused and reduce ambiguity effectively. Minor gaps: hypothesis could be more explicitly structured as testable mechanism (though implied), and the 'Answer these 3' framing is strong but could slightly soften to avoid interrogation feel. Closes with clear conditional next step. Confidence scoring is present with strong rationale throughout risk calculations.

---

### Gamification Edtech

**Mode:** Exploring | **Risk:** Medium | **Trap:** Solution-first | **Industry:** Edtech

**User Prompt:**
> We want to add gamification to our learning platform — badges, streaks, leaderboards, the whole thing. Duolingo does it really well and our students are in the same age group (18-25). Can you help us design the points system?

**Copilot Response:**

**Mode: Executing → Rewinding to Framing**

You've jumped to a solution. Let's back up to the problem.

## Three questions before we design anything:

1. **What problem does gamification solve?** (Be specific: completion rates? retention? engagement? session frequency? something else?)

2. **For which students?** (All 18-25? A subset? What behavior do they exhibit now that you want to change?)

3. **How do you know this is the right lever?** (What evidence suggests gamification—not content quality, pacing, social proof, outcomes, etc.—is what's missing?)

---

**Origin check:** Where did this idea come from? (Leadership directive? User research? Competitor observation? Hypothesis?)

**Bias probe:** You mentioned Duolingo works well for the same age group. What's different about *your* learning context that might make their mechanics not transfer? (motivation, stakes, time commitment, social dynamics, etc.)

---

I'll help you design a points system—but only after we clarify what success looks like and whether gamification is the highest-leverage intervention for that outcome.

**Scores:** Mode Detection: 2/2 | Risk Calibration: 2/2 | FIAU Separation: 1/2 | Kill Assumption: 1/2 | Testable Hypothesis: 0/2 | Decision Rule: 0/2 | Question Discipline: 2/2 | Trap Detection: 2/2 | Closure: 1/2 | Confidence Score: 0/2
**Total:** 11/20

**Assessment:** The copilot excellently detected the solution-first trap and rewound to problem framing with appropriate firmness. It asked focused questions (3 core + 2 contextual) that probe the real problem and challenge the Duolingo assumption—good for Medium risk. However, it stopped at problem clarification without progressing to FIAU separation, hypothesis formation, or decision thresholds. The response lacks confidence scoring and doesn't establish what would kill this approach or how to test it systematically. Strong trap detection and questioning, but incomplete Socratic arc for the Exploring mode.

---

### Churn Prediction

**Mode:** Executing | **Risk:** Medium | **Trap:** Vague metrics | **Industry:** SaaS B2B

**User Prompt:**
> We built a churn prediction model that flags accounts at risk. It's 78% accurate on historical data. We want to trigger automated outreach (email + in-app) when the model flags an account. Monthly churn is 3.2%. We need to set up the intervention experiment. What metrics and thresholds should we use?

**Copilot Response:**

## Mode: **Executing** | Risk: **Medium-High** (automating customer contact at scale)

Before we design the experiment, I need to clarify the **decision context**:

### 1. **What decision does this experiment inform?**
- [ ] Should we deploy this intervention to all flagged accounts?
- [ ] Should we invest in improving the model?
- [ ] Should we resource a manual outreach team instead?
- [ ] Something else?

### 2. **What's the actual churn risk in flagged accounts?**
78% accuracy is ambiguous. I need:
- **Precision**: Of accounts the model flags, what % actually churn?
- **Recall**: Of accounts that churn, what % does the model catch?
- **Base rate in flagged cohort**: If the model flags 10% of accounts, and precision is 20%, only 2% of your outreach goes to true-risk accounts.

**Why this matters**: If precision is low, you're spamming healthy accounts. If recall is low, you're missing most churners.

### 3. **What must be true for automated outreach to work?**
- Assumption: Flagged users are *receptive* to outreach (not annoyed).
- Assumption: Email + in-app can *address the churn driver* (do you know why they churn?).
- Assumption: The outreach *doesn't accelerate churn* in false positives.

**What would make you stop this experiment?**
- Increased churn in outreach group?
- Spike in support tickets / unsubscribes?
- No movement on churn after N days?

---

## My 3 questions before proposing metrics/thresholds:

1. **What's the model's precision and recall?** (Not just accuracy.)
2. **Do you know *why* flagged accounts churn?** (Product fit? Onboarding? Pricing? Usage drop?)
3. **What's your tolerance for false positives?** (Sending outreach to healthy accounts — is that a brand risk?)

Once I have these, I'll propose:
- Primary + guardrail metrics
- Experiment design (control vs treatment)
- Decision thresholds (proceed / iterate / kill)

**Scores:** Mode Detection: 2/2 | Risk Calibration: 2/2 | FIAU Separation: 1/2 | Kill Assumption: 2/2 | Testable Hypothesis: 1/2 | Decision Rule: 1/2 | Question Discipline: 2/2 | Trap Detection: 2/2 | Closure: 1/2 | Confidence Score: 0/2
**Total:** 14/20

**Assessment:** Strong execution on mode detection, risk calibration (correctly elevated to Medium-High), and trap detection (aggressively challenged vague 'accuracy' metric and demanded precision/recall). Effectively identified kill conditions (increased churn, brand damage). Three focused questions were excellent and non-interrogative. Weaknesses: FIAU separation was implicit rather than explicit (didn't use the framework labels), hypothesis formulation was deferred rather than proposed with mechanism, thresholds were promised but not defined, closure lacked a crisp recap/next step, and critically failed to include a confidence score (1-5) with rationale as required by instructions. The response demonstrates strong product thinking but incomplete adherence to the prescribed format.

---

### API Platform Strategy

**Mode:** Exploring | **Risk:** High | **Trap:** Confirmation bias | **Industry:** Developer Tools

**User Prompt:**
> We want to become a platform and open our API to third-party developers. Our CTO has been pushing this for 2 years. We have 2,300 customers using our tool directly. Three customers asked about API access in the last 6 months. Our CTO wrote a 40-page strategy doc about the platform vision. Should we go for it?

**Copilot Response:**

**Mode: Framing → needs structure, not execution**  
**Proportionality: High risk** (2+ years effort, unclear demand, irreversible architecture)  
**Origin: CTO vision** (supply-driven, not demand-pulled)

---

## Rewind to the problem:

**What specific customer problem does API access solve that our current product doesn't?**

The 3 requests in 6 months (0.13% of customer base) could mean:
- A) Niche power users need deep integration (narrow but high-value)
- B) Customers hit workflow gaps we haven't built for (latent demand signal)
- C) Random noise (insufficient signal)

---

## Three sharp questions:

1. **Did you talk to the 3 customers who asked?** What were they trying to *do* that our product blocked? Did they move forward without API access, switch to a competitor, or stay stuck?

2. **What % of ARR comes from customers who would plausibly use an API?** (e.g., technical teams, high usage, complex workflows) If <5%, platform might be solving the wrong segment's problem.

3. **What must be true for this to work?** Fill in:  
   - "We need ≥ ___ active third-party apps within ___ months to justify ongoing investment"  
   - "Developer adoption will be driven by ___" (ecosystem? internal tooling? partner integrations?)

---

## Kill assumptions to test first:

| Assumption | Test (2–4 weeks) | Proceed threshold |
|------------|------------------|-------------------|
| Customers want API access | Email 200 highest-usage customers: "Would you build on our API? What for?" | ≥15% reply "yes" with specific use case |
| Developers will adopt it | Publish API docs stub + waitlist page | ≥50 signups in 30 days |
| CTO vision = customer need | Interview 10 customers who *didn't* ask: "What's missing?" | ≥3 mention integration/automation unprompted |

---

## Decision rule:

**Proceed if:**  
- ≥10% of customers in target segment confirm they'd use API for specific job  
- ≥1 repeatable use case appears across ≥5 customers  
- You can name 3 integrations that would drive retention/expansion

**Stop if:**  
- <5% interest after outreach  
- Use cases are one-offs (no pattern)  
- CTO vision doc doesn't map to customer language

---

**Confidence: 2/5**  
**Top kill assumption:** "API demand exists beyond 3 customers"  
**Why low confidence:** 0.13% request rate + CTO-driven origin = weak demand signal  
**Next step:** Talk to the 3 requesters + survey top 50 customers (1 week)

---

**What would change your mind about going forward?**

**Scores:** Mode Detection: 2/2 | Risk Calibration: 2/2 | FIAU Separation: 1/2 | Kill Assumption: 2/2 | Testable Hypothesis: 2/2 | Decision Rule: 2/2 | Question Discipline: 2/2 | Trap Detection: 2/2 | Closure: 2/2 | Confidence Score: 2/2
**Total:** 19/20

**Assessment:** Strong response demonstrating excellent mode detection (correctly identified Framing over Exploring despite expectation), appropriate high-risk calibration with multi-year irreversibility framing, and outstanding trap detection—directly challenged the CTO's 40-page doc as supply-driven confirmation bias while reframing around actual customer evidence. Kill assumption ('API demand exists beyond 3 customers') was precisely identified with 0.13% metric highlighting weakness. Testable hypotheses with clear mechanisms (email campaigns, waitlist validation) and well-defined proceed/stop thresholds (10% interest, repeatable patterns). Three focused questions reduced ambiguity without interrogation. FIAU separation was implicit rather than explicit (could have labeled Facts/Inferences/Assumptions more clearly). Closure was actionable with specific next steps and timeframes. Confidence score (2/5) appropriately justified by weak demand signal. Minor deduction on FIAU for not explicitly scaffolding the framework, but overall execution was sophisticated and would genuinely help the user avoid a costly mistake driven by internal advocacy rather than market pull.

---

### Referral Program

**Mode:** Executing | **Risk:** Low | **Trap:** None | **Industry:** Consumer App

**User Prompt:**
> We want to launch a referral program. Current organic growth is 8% MoM. We're testing two incentive structures: (A) $10 credit for referrer only vs (B) $5 for both referrer and referee. We have 120k active users. What's the experiment setup?

**Copilot Response:**

## Quick Framing Check (3 questions)

**Problem clarity:**
1. What's driving the desire for referral *now*? (Is 8% MoM insufficient, or is there a CAC/payback constraint, or something else?)

2. **What do you mean by "active user"?** (Active in last 30 days? Paid? Freemium? This defines eligible referrer pool.)

3. **What's the decision?** Are you choosing between A vs B, or deciding whether *any* referral program is worth launching vs staying organic?

---

## Provisional Setup (pending answers)

**Hypothesis:**
- **A ($10 referrer-only)** will drive more total referrals due to higher perceived value, but lower referee conversion.
- **B ($5 both sides)** will drive lower referral volume but higher referee activation due to reciprocity/lower friction.

**Primary metric:** 
- **Incremental referred users activated** (define "activated": signed up + completed core action within 7 days?)

**Secondary:**
- Referral send rate (% of exposed users who send ≥1 invite)
- Referee conversion rate (invites → signups → activated)
- Cost per incremental activated user
- 30-day retention of referred users

---

## Experiment Structure

**Sample size per arm:** ~5k users each (A, B, Control)  
**Duration:** 21–28 days (enough for referral loop + D7/D30 lag)

**Randomization:** User-level (not invite-level, to avoid contamination)

**Control group:** 10k users, no referral program exposed (measures true incrementality vs organic invites)

---

## Decision Thresholds

**Proceed with winning variant if:**
- Incremental activated users ≥ 150 in test period (0.5% lift = 750/month = material to 8% organic)
- AND CAC (credit cost / incremental user) ≤ $[your CAC benchmark]
- AND D30 retention ≥ 80% of organic cohort retention

**Stop/pivot if:**
- <100 incremental activations across both variants
- OR CAC >2x organic benchmark
- OR referred user D30 retention <60% of organic

---

## Top Kill Assumptions

1. **"Active users will refer."** → Unknown: What % of your 120k have ever invited anyone organically? If <1%, referral *willingness* might be the real barrier, not incentive size.

2. **"Credits are valuable."** → What's average user LTV or spend? $10 might be noise if users spend $500/year, or huge if freemium.

3. **"Referees will activate."** → What's your organic invite-to-activation rate today? You need a baseline.

---

## What I need from you to finalize:

1. **Decision:** Pick one variant vs decide if *any* program beats organic?
2. **"Active user" definition** (referrer eligibility)
3. **"Activated" definition** (referee success metric)
4. **Organic referral baseline** (% of users who invite today, conversion rate)
5. **CAC or LTV benchmark** (to set cost threshold)

**Confidence: 2/5** — setup is structurally sound, but missing critical context on user behavior, economics, and decision frame.

**Next evidence step:** Pull last 90 days of organic invite data (senders, conversion, activation) to set realistic baselines.

**Scores:** Mode Detection: 2/2 | Risk Calibration: 2/2 | FIAU Separation: 1/2 | Kill Assumption: 2/2 | Testable Hypothesis: 2/2 | Decision Rule: 2/2 | Question Discipline: 2/2 | Trap Detection: 2/2 | Closure: 2/2 | Confidence Score: 2/2
**Total:** 19/20

**Assessment:** Strong execution-mode response with appropriate low-risk calibration. The copilot correctly identified this as an experiment setup task and provided concrete structure (sample sizes, duration, randomization, control group). Excellent kill assumption identification around referral willingness, credit value, and activation rates. Hypothesis formulation was clear with directional predictions for both variants. Decision thresholds were well-defined with specific numerical targets and multi-dimensional criteria. The 3 framing questions were focused and reduced ambiguity around active users, decision frame, and motivation. Minor weakness: FIAU separation could have been more explicit (mixed throughout rather than clearly delineated). No trap was embedded and none was falsely detected. Strong closure with clear recap of needed inputs and actionable next step (pull organic invite data). Confidence score of 2/5 appropriately reflected missing context while rationale explained the structural soundness despite gaps.

---

### Enterprise Tier

**Mode:** Framing | **Risk:** High | **Trap:** Anchoring | **Industry:** SaaS B2B

**User Prompt:**
> We're launching an Enterprise tier. Our current pricing is $29/mo (Starter) and $99/mo (Pro). A pricing consultant recommended $499/mo for Enterprise based on competitor benchmarking. We have 15 Pro accounts that asked about SSO, audit logs, and custom roles. Sales thinks $499 is too low, the consultant says it's market rate. What's the right call?

**Copilot Response:**

## Mode: **Executing** (direction set, need decision framework)
## Risk: **High** (revenue model change, enterprise positioning)

---

## Rewind: What problem are we solving?

You have a solution (Enterprise tier @ $499) but I need to understand the **decision** first:

**Is the decision:** "What price maximizes revenue from enterprise customers willing to pay for SSO/audit/roles?" 

**Or:** "Should we launch an Enterprise tier at all, and if so, at what price?"

---

## Three sharp questions:

1. **Revenue math**: Of those 15 Pro accounts asking for enterprise features — how many are **blocked from expanding** (adding seats, use cases) without those features vs. just asking? What's the expansion revenue at risk?

2. **Willingness to pay**: What's the **largest contract value** any of those 15 has discussed or hinted at? (Not "would you pay $499" but actual budget signals — RFP ranges, comparisons they've mentioned, org size/ARR)

3. **Sales objection**: When Sales says "$499 is too low" — are they saying:
   - (a) "We've heard prospects mention $1k+ budgets"
   - (b) "Competitors charge more so we're leaving money on the table"  
   - (c) "It anchors us as a cheap tool"
   
   Which one?

---

## What I'm separating:

| Type | Claim | Status |
|------|-------|--------|
| **Fact** | 15 Pro accounts asked about SSO/audit/roles | ✓ (assuming CRM data) |
| **Inference** | Consultant: $499 = market rate based on competitors | Need: which competitors, what features included |
| **Assumption** | Those 15 will convert at $499 | **Untested** |
| **Assumption** | $499 captures willingness to pay | **Untested** |
| **Unknown** | What's the price sensitivity curve for this segment? | Critical gap |

---

## The actual decision:

**"At what price does Enterprise tier maximize [revenue/margin/logos] over [12 months] without cannibalizing Pro?"**

To answer that, I need you to pick **one primary goal**:
- Maximize ARR from existing 15 (land fast)
- Maximize deal size from new enterprise pipeline (aspirational positioning)
- Minimize churn risk from Pro accounts outgrowing product

**Which matters most right now?**

**Scores:** Mode Detection: 0/2 | Risk Calibration: 2/2 | FIAU Separation: 1/2 | Kill Assumption: 0/2 | Testable Hypothesis: 0/2 | Decision Rule: 0/2 | Question Discipline: 2/2 | Trap Detection: 0/2 | Closure: 0/2 | Confidence Score: 0/2
**Total:** 5/20

**Assessment:** The copilot misidentified the mode as 'Executing' when this is clearly a Framing scenario—the user hasn't defined the problem space yet, conflating pricing decision with consultant recommendation vs sales intuition. Risk calibration was appropriate (High, revenue model change). FIAU separation was attempted but incomplete—no clear prompt for the user to separate their own assumptions. The critical kill assumption (that these 15 accounts represent validated enterprise demand rather than feature requests) was not surfaced. No testable hypothesis with mechanism was proposed, no decision thresholds defined (proceed/pivot/stop criteria). Questions were reasonable but slightly exceeded the 3-question limit and didn't systematically reduce ambiguity around the anchoring trap. The anchoring trap was completely missed—the copilot never questioned whether $499 is arbitrary or validated, instead treating it as a given anchor point. No clear closure with recap and next step. No confidence score provided. The response shows some analytical rigor but fails core Socratic scaffolding requirements.

---

### Content Moderation

**Mode:** Framing | **Risk:** High | **Trap:** Survivorship bias | **Industry:** Social/UGC

**User Prompt:**
> Our top 50 creators produce 60% of the content and have zero moderation flags. So we want to give all creators with >10k followers auto-approval (skip moderation queue) to reduce review costs and improve creator satisfaction. Currently we review 100% of posts, which takes 2.3 hours average. Our moderation team costs $28k/month. What do you think?

**Copilot Response:**

**Mode: Executing (solution already proposed)**  
**Risk: High** (safety/trust trade-off, hard to reverse if platform quality degrades)

---

## Rewind to the problem

**What problem does auto-approval solve? For whom?**

You've jumped to a solution (auto-approval for >10k followers). Let me surface what's unclear:

**1. Which problem are you solving?**
- Moderation cost ($28k/month)?
- Creator satisfaction (how measured? who's complaining?)?
- Review speed (2.3hrs — is this blocking creator behavior? do we have data?)?

**2. Why 10k followers = safe?**
Your top 50 are clean. But:
- How many creators have >10k followers **total**?
- What's the moderation flag rate for the 10k+ segment vs. <10k?
- What % of flags come from creators with 10k+ followers?

**3. What's the actual cost of a bad post?**
- User churn? Brand safety incident? Legal risk?
- Do you have data on past incidents + impact?

---

## Three assumptions to test before shipping

| # | Assumption | What must be true? | Current evidence? |
|---|------------|-------------------|-------------------|
| **1** | Follower count = content safety | High followers → low violation rate across the segment | You only cited top 50. What about creators 51–500? |
| **2** | 2.3hr delay hurts creators | Delay causes measurable drop in posting frequency, engagement, or satisfaction | Do you have survey data? Cohort analysis of post frequency vs review time? |
| **3** | Cost savings > risk | Moderation cost reduction > cost of one major incident | What's the $ cost of one brand safety incident? Legal claim? Churn spike? |

---

## What would change your mind?

- **Stop rule:** If >10k segment has >X% flag rate (what's X?), don't ship.
- **Rollback rule:** If flagged content from auto-approved creators increases by Y% in first 30 days, revert.

---

## Smallest next step

**Before you ship:**  
Run a 2-week shadow test:
1. Tag >10k creators' posts as "would auto-approve"
2. Still review them, but measure:
   - % that would've been flagged
   - Severity of flags (spam vs. harmful content)
   - Time saved vs. risk introduced

**Decision rule:**  
- Proceed if <X% flagged AND no high-severity violations
- Stop if ≥X% flagged OR any high-severity violation
- Pivot to tiered approach (e.g., >50k followers first, or approval for certain content types only)

---

## Two sharp questions:

1. **What % of your $28k cost comes from reviewing >10k creators?** (If it's 5%, your savings are tiny.)
2. **What's one incident worth in $ terms?** (Churn, legal, PR — do you have a number?)

**Confidence: 2/5**  
**Top kill assumption:** Follower count predicts safety (unverified beyond top 50)  
**Next evidence:** Pull flag rate data for all >10k creators, not just top 50.

**Scores:** Mode Detection: 2/2 | Risk Calibration: 2/2 | FIAU Separation: 2/2 | Kill Assumption: 2/2 | Testable Hypothesis: 1/2 | Decision Rule: 2/2 | Question Discipline: 2/2 | Trap Detection: 0/2 | Closure: 2/2 | Confidence Score: 2/2
**Total:** 17/20

**Assessment:** Strong execution on mode detection (correctly identified Executing and rewound to problem), risk calibration (explicitly named safety/trust trade-off as high-stakes), FIAU separation (clear table format), and identifying the critical kill assumption (follower count = safety beyond top 50). Excellent threshold definition with proceed/pivot/stop rules and concrete shadow test proposal. Asked exactly 2 focused questions about cost allocation and incident value. However, completely missed the survivorship bias trap—never questioned whether the top 50's zero flags might reflect selection effects, gaming, or whether we're ignoring creators who left due to over-moderation. The analysis assumes the top 50 are representative of the >10k segment without considering why they might be systematically different from creators who didn't survive to that tier. Strong tactical execution undermined by missing the conceptual trap embedded in the scenario.

---
