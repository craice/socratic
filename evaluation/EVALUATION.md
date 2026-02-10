# Evaluation: Socratic Product Discovery Copilot Test Results

**Date:** 2026-02-10
**Version under test:** v1.0
**Model:** Claude Sonnet (claude-sonnet-4-20250514)
**Evaluator:** LLM-based rubric scoring (see Limitations)

---

## 1. Methodology

### What Was Tested

The Socratic Product Discovery Copilot is a system-prompted LLM designed to function as a thinking partner for product teams. Rather than generating solutions on demand, it applies a Socratic method: detecting the user's decision-making mode, surfacing hidden assumptions, separating facts from inferences, and converging on the smallest testable next step with explicit proceed/pivot/stop criteria.

### How It Was Tested

The evaluation lab (`socratic-lab.jsx`) ran the copilot against 20 synthetic product discovery scenarios spanning different industries, decision modes, risk levels, and embedded cognitive traps. Each scenario presented a realistic user prompt -- the kind of half-formed question a PM, founder, or product lead might bring to a strategy session.

The scenarios were designed along three axes:

- **Mode** (Exploring / Framing / Executing) -- where the user sits in the discovery process
- **Risk** (Low / Medium / High) -- the proportionality of the decision
- **Trap** (Solution-first, Vague metrics, HiPPO, Opinion loop, Survivorship bias, Sunk cost, Recency bias, Confirmation bias, Anchoring, or None) -- a cognitive bias embedded in the prompt that the copilot should detect and address

### Scoring System

Each scenario was scored on 10 criteria, each worth 0-2 points (max 20 per scenario, 400 total across all 20 scenarios):

| Criteria | What It Measures |
|---|---|
| Mode Detection | Did the copilot correctly identify Exploring / Framing / Executing? |
| Risk Calibration | Did it match the scenario's risk level and adjust depth accordingly? |
| FIAU Separation | Did it explicitly label Facts, Inferences, Assumptions, and Unknowns? |
| Kill Assumption | Did it surface the single assumption that, if false, invalidates the plan? |
| Testable Hypothesis | Did it propose a hypothesis with a testable mechanism? |
| Decision Rule | Did it define proceed / pivot / stop thresholds with specific metrics? |
| Question Discipline | Did it ask <= 3 focused questions that reduce ambiguity? |
| Trap Detection | Did it catch the embedded cognitive bias (or correctly not flag one)? |
| Closure | Did it end with a clear recap, next step, and decision rule? |
| Confidence Score | Did it provide a confidence rating (1-5) with rationale? |

---

## 2. Aggregate Results

### Overall Score

**305 / 400 (76%)** across 20/20 completed scenarios.

This is a solid result that shows meaningful improvement over prior runs, though unevenness persists. The copilot's top criteria are now tightly clustered, while the bottom criteria -- though improved -- still lag by nearly half a point.

### Criteria Breakdown (averages out of 2.00)

| Criteria | Average | Assessment |
|---|---|---|
| Risk Calibration | 1.80 | Strong |
| Question Discipline | 1.80 | Strong |
| Mode Detection | 1.70 | Strong |
| Kill Assumption | 1.60 | Above average |
| Trap Detection | 1.50 | Moderate |
| Closure | 1.50 | Moderate |
| FIAU Separation | 1.45 | Moderate |
| Decision Rule | 1.45 | Moderate |
| Confidence Score | 1.30 | Below average |
| Testable Hypothesis | 1.15 | Weak |

The top three criteria (Risk Calibration, Question Discipline, Mode Detection) average 1.77/2.00. The bottom three (Decision Rule, Confidence Score, Testable Hypothesis) average 1.30/2.00. That gap -- 0.47 points -- is significantly narrower than it was, but still defines the central tension: the copilot is better at interrogating a problem than at producing the structured outputs that turn interrogation into action.

### Score Distribution

| Range | Count | Scenarios |
|---|---|---|
| 16-20 (strong) | 11 | Onboarding Edtech (20), Mobile App Launch (20), Self-serve vs Sales-led (19), Marketplace Take Rate (19), API Platform Strategy (19), Referral Program (19), Pricing Pivot Fintech (18), Meal Planner Health (18), Cold Chain Logistics (18), CTA Copy Test (17), Content Moderation (17) |
| 10-15 (moderate) | 7 | Feature Sunset (15), Push Notifications (14), Churn Prediction (14), Dashboard SaaS (13), Retention E-commerce (12), Chatbot Support (12), Gamification Edtech (11) |
| Below 10 (weak) | 2 | Expansion vs Density (5), Enterprise Tier (5) |

Eleven scenarios scored 16 or above -- more than half the set. Seven landed in the 10-15 range. Two fell below 10. The distribution is top-heavy, but the floor has gotten worse: the two weakest scenarios (both 5/20) represent catastrophic failures where the copilot misidentified the mode and missed traps entirely. The 15-point gap between the best results (20/20) and the worst (5/20) suggests the copilot's performance is still inconsistent on edge cases.

---

## 3. Analysis by Dimension

### By Mode

| Mode | Scenarios | Scores | Average |
|---|---|---|---|
| Exploring | 7 | 13, 5, 18, 12, 19, 11, 19 | 13.9 |
| Framing | 8 | 12, 18, 18, 15, 20, 19, 5, 17 | 15.5 |
| Executing | 5 | 17, 20, 14, 14, 19 | 16.8 |

Executing mode scores highest (16.8), which makes sense: when the user has a clear direction, the copilot's strengths (sharp questions, risk calibration) align well with what's needed, and its weaknesses (hypothesis formation, decision rules) are partially masked because the user has already done some of that work.

Exploring mode scores lowest (13.9), dragged down by the Expansion vs Density result (5/20). Without that outlier, Exploring averages 15.3 -- competitive with the other modes. The copilot handles ambiguity well in general but can fail completely when it misreads the situation.

Framing mode sits in the middle (15.5), with a wide range from 5 (Enterprise Tier) to 20 (Onboarding Edtech). The Enterprise Tier collapse -- where the copilot misidentified the mode as Executing instead of Framing -- confirms that mode detection errors are the single most damaging failure type. Get the mode wrong and the entire response is miscalibrated.

### By Risk Level

| Risk | Scenarios | Scores | Average |
|---|---|---|---|
| Low | 3 | 17, 14, 19 | 16.7 |
| Medium | 7 | 13, 5, 20, 12, 11, 14, 20 | 13.6 |
| High | 10 | 12, 18, 18, 18, 15, 19, 19, 19, 5, 17 | 16.0 |

The pattern from prior runs persists: **Medium-risk scenarios score lowest (13.6) while Low (16.7) and High (16.0) both perform well.**

This reflects the copilot's design. The system prompt instructs it to escalate depth for high-risk situations -- triangulate evidence, run pre-mortems, set explicit stop rules. When stakes are clearly high, the copilot engages its full toolkit. When stakes are low, it correctly limits scope. Medium-risk scenarios occupy an awkward middle ground where the copilot seems unsure how much structure to provide, producing responses that are neither the full Socratic treatment nor the lean tactical output appropriate for low-risk work.

### By Trap Type

| Trap | Scenarios | Trap Scores | Assessment |
|---|---|---|---|
| Solution-first | s01, s09, s15 | 2, 2, 2 | Perfect detection (3/3) |
| Confirmation bias | s12, s17 | 2, 2 | Perfect detection (2/2) |
| HiPPO | s04, s14 | 2, 2 | Perfect detection (2/2) |
| None | s03, s11, s18 | 2, 2, 2 | Correctly didn't flag (3/3) |
| Recency bias | s08 | 2 | Caught |
| Survivorship bias | s06, s20 | 2, 0 | Inconsistent |
| Vague metrics | s02, s16 | 0, 2 | Inconsistent |
| Sunk cost | s07, s10 | 2, 0 | Inconsistent |
| Anchoring | s13, s19 | 2, 0 | Inconsistent |
| Opinion loop | s05 | 0 | Missed entirely |

Three patterns emerge:

**Consistently caught:** Solution-first (3/3 perfect), Confirmation bias (2/2 perfect), HiPPO (2/2 perfect), and "no trap" scenarios (3/3 correct). The copilot reliably detects when someone is building a solution without a problem, when authority is driving the decision, and when confirmation bias is shaping the analysis. It also avoids crying wolf when no bias is present.

**Inconsistent:** Survivorship bias, Vague metrics, Sunk cost, and Anchoring all show a split pattern -- perfect detection in one scenario, complete miss in another. The copilot caught sunk cost in Meal Planner but missed it in Feature Sunset. It caught the anchoring trap in one scenario but failed to challenge it in Enterprise Tier. These inconsistencies suggest the copilot's trap detection depends heavily on how obviously the bias is presented, rather than on a reliable pattern-matching capability.

**Systematically missed:** The Opinion loop trap -- a team cycling through opinions without evidence -- was missed entirely in the only scenario that tested it (s05, which scored 0). This remains a blind spot.

---

## 4. Strengths

### Risk Calibration (1.80/2.00)

Tied for the top criterion. The copilot reliably adjusts its depth and urgency to match the stakes. High-risk scenarios received longer responses with more scaffolding. Low-risk scenarios got leaner, more tactical answers. The Cold Chain Logistics response correctly treated a $2M+ capex decision with full rigor, while the CTA Copy Test appropriately stayed focused on experiment setup.

### Question Discipline (1.80/2.00)

Also tied for the top. The copilot consistently asks focused, non-redundant questions that cut toward the core ambiguity. It rarely exceeds the 3-question limit, and when it does, the additional questions are still diagnostic rather than exploratory.

The Onboarding Edtech response is a strong example. Each question eliminates a distinct category of uncertainty rather than circling the same issue from different angles. This matters because excessive questioning is one of the most common failure modes for Socratic systems. The copilot avoids it consistently.

### Mode Detection (1.70/2.00)

The copilot correctly identified the user's position in the discovery process in most scenarios. More importantly, it frequently detected when the user was in the wrong mode -- presenting a solution (Executing) when they hadn't yet defined the problem (should be Exploring or Framing).

The failures were specific and damaging: Expansion vs Density was misread entirely, and Enterprise Tier was misidentified as Executing when it was Framing. These errors correlated with the two lowest total scores (both 5/20), confirming that mode detection is foundational -- get it wrong and everything downstream collapses.

### Kill Assumption Identification (1.60/2.00)

In most scenarios, the copilot correctly identified the single assumption whose falsity would invalidate the entire plan. When the copilot names a kill assumption well, it reframes the entire conversation around the most consequential question. This is the core value proposition of the Socratic approach, and it works more often than not.

---

## 5. Weaknesses

### Testable Hypothesis (1.15/2.00)

This remains the copilot's worst criterion, though it has improved from the prior run. The copilot is good at asking questions and surfacing assumptions, but still struggles to take the next step and formalize those insights into a statement of the form "We believe [X] because [mechanism]. We will test this by [method]. We will know we're right if [metric] reaches [threshold] within [timeframe]."

This is a significant gap. The entire point of the Socratic process is to convert uncertainty into testable claims. If the copilot consistently stops at "here are good questions" without reaching "here is what we should test," it's doing half the job.

**v1.1 proposal:** Add a hard requirement in the system prompt that every response must include at least one hypothesis in the format: "If [action], then [outcome], because [mechanism]." Make this non-optional regardless of mode.

### Confidence Score (1.30/2.00)

The copilot still omits or underspecifies the confidence score too often. When it does include one, the scores are well-calibrated with clear rationale -- the Onboarding Edtech and Cold Chain responses both demonstrate this capability. The issue is consistency, not ability.

The most likely explanation is that the confidence score instruction gets deprioritized when the response is already long, or when the copilot is focused on questions and reframing.

**v1.1 proposal:** Move the confidence score requirement to the top of the output format, not the bottom. Alternatively, enforce it as a mandatory first line (e.g., "Confidence: X/5 -- [one sentence rationale]") so it cannot be dropped when the response runs long.

### FIAU Separation (1.45/2.00)

The copilot's separation of Facts, Inferences, Assumptions, and Unknowns is present in most responses but often incomplete or implicit. In the strongest responses (Onboarding Edtech, Mobile App Launch), the FIAU labels are explicit and clearly distinguished. In weaker responses, the copilot blurs the lines -- treating inferences as facts, or folding assumptions into questions rather than labeling them directly.

**v1.1 proposal:** Require an explicit FIAU block in every response, formatted as a labeled list. Even when information is sparse, the copilot should state what it's treating as fact vs. inference vs. assumption vs. unknown. Making the structure visible forces the intellectual work it represents.

---

## 6. Notable Scenarios

### Exemplary: Onboarding Edtech (20/20)

A perfect score. This response demonstrates what the copilot looks like at its best. It scored 2/2 on every criterion: correct mode detection, appropriate risk calibration, clean FIAU separation, a sharp kill assumption, a testable hypothesis, explicit decision rules, focused questions, the survivorship bias trap caught masterfully, clear closure, and a calibrated confidence score. This is the copilot operating as intended -- every element of the framework present, none of them perfunctory.

### Exemplary: Mobile App Launch (20/20)

The second perfect score. The copilot caught the anchoring trap, challenged the embedded assumption, and proposed a fake door test as the minimum viable experiment. Every structured output was present and well-formed. This scenario is particularly notable because it scored 13/20 in the prior run -- the improvement demonstrates that the copilot's gains are real, not just statistical noise.

### Exemplary: Self-serve vs Sales-led (19/20)

The copilot caught the confirmation bias embedded in the VP's Slack/Notion comparison and dismantled it systematically: the comparison was structurally invalid because the referenced companies had viral/network effects, low entry prices, and individual-user adoption paths -- none of which applied to a $25k enterprise product with 340 accounts. The copilot offered concrete next steps with thresholds for each. Near-perfect execution of the Socratic method.

### Fell Short: Expansion vs Density (5/20)

The copilot misidentified the mode, missed the opinion loop trap entirely, and produced no structured outputs -- no hypothesis, no decision rule, no confidence score. When the copilot gets the mode wrong on an ambiguous scenario, everything downstream collapses. The response reads as generic consulting questions rather than Socratic guidance calibrated to the trap and context.

### Fell Short: Enterprise Tier (5/20)

A major regression from the prior run (previously 16/20). The copilot misidentified the mode as Executing instead of Framing, missed the anchoring trap entirely, and failed to produce a hypothesis, decision rule, or confidence score. This is the most concerning result in the set: the copilot didn't just fail to improve on this scenario -- it got substantially worse. The most likely explanation is that something in the prompt structure caused the copilot to treat the scenario as more resolved than it was, skipping the framing work it needed to do.

---

## 7. Limitations and Caveats

### Single-Turn Evaluation

Every scenario was evaluated on a single exchange: one user prompt, one copilot response. In practice, the Socratic process is inherently multi-turn. The copilot's tendency to defer hypothesis formation and decision rules ("answer my questions first") might be entirely appropriate in a real conversation -- the problem is that this evaluation format punishes deferral because there is no second turn.

A multi-turn evaluation would likely produce higher scores on Testable Hypothesis, Decision Rule, and Closure, but would also surface different failure modes (e.g., losing thread across turns, asking redundant questions, failing to converge).

### LLM Evaluating LLM

The scoring was performed by an LLM evaluator applying the rubric to copilot outputs. This introduces several risks:

- **Leniency bias:** LLMs tend to be generous in evaluating text that is fluent and well-structured, even when it lacks substantive content.
- **Rubric interpretation drift:** Criteria like "Did it surface the kill assumption?" require judgment about what counts as "surfacing." Different evaluators might score the same response differently.
- **Blindness to subtle failures:** An LLM evaluator may not catch when the copilot uses the right vocabulary (e.g., says "assumption" and "hypothesis") without doing the actual intellectual work those terms represent.

The scores should be treated as directional, not precise. A 76% aggregate is meaningfully different from 50% or 90%, but the difference between a 13/20 and a 15/20 on any individual scenario is within the noise of evaluator judgment.

### Model-Specific Results

These results are specific to Claude Sonnet (claude-sonnet-4-20250514) running the v1.0 system prompt. Different foundation models (GPT-4, Gemini, etc.) would produce different results on the same scenarios. The strengths and weaknesses described here reflect both the system prompt design and the model's tendencies -- they cannot be fully disentangled.

### Synthetic Scenarios

All 20 scenarios were constructed specifically for this evaluation. They cover a range of industries and decision types, but they are stylized. Real product discovery conversations are messier: users interrupt, change topics, provide contradictory information, push back on the copilot's reframing, or ask for things the copilot is not designed to do.

Performance on synthetic scenarios is a necessary but insufficient indicator of real-world utility.

---

## 8. Conclusion

### Overall Assessment

The Socratic Product Discovery Copilot at v1.0 is a capable system showing clear improvement. At 305/400 (76%), up from 282/400 (71%) in the prior run, it demonstrates strong fundamentals in the areas that matter most for the Socratic approach: calibrating to risk (1.80), asking the right questions (1.80), detecting the user's mode (1.70), and surfacing assumptions that could kill the plan (1.60).

The structured output gap has narrowed considerably. Decision Rule improved from 1.05 to 1.45. Confidence Score improved from 0.90 to 1.30. Testable Hypothesis improved from 0.85 to 1.15. The top-to-bottom gap shrank from 0.87 points to 0.47 points. The copilot is still better at opening up a problem than closing it down, but the imbalance is less severe than before.

The inconsistency concern has shifted rather than resolved. The worst score dropped from 3/20 to two scenarios at 5/20, and the Enterprise Tier regression (16/20 to 5/20) shows the copilot can get worse on specific scenarios even as it improves overall. A thinking partner that scores 20/20 on one scenario and 5/20 on another is still hard to trust, even if the average is higher.

### What v1.1 Should Address

Three changes, in priority order:

1. **Mandatory hypothesis output.** Every response must include at least one testable hypothesis, even if provisional. Format: "If [action], then [outcome], because [mechanism]." This addresses the weakest criterion (1.15) directly.

2. **Front-loaded confidence score.** Move the confidence score from an afterthought to a required opening element. This fixes the omission pattern and forces the copilot to anchor its response in an honest assessment of certainty. The current average of 1.30 should be closer to 1.70 with this change.

3. **Explicit FIAU block.** Require a labeled Facts / Inferences / Assumptions / Unknowns section in every response. The current average of 1.45 reflects too many responses where the separation is implicit or incomplete. Making the structure mandatory and visible should close this gap.

These are prompt-level changes, not architectural ones. The underlying capability is present -- the Onboarding Edtech, Mobile App Launch, and Self-serve vs Sales-led responses prove the copilot can produce hypotheses, confidence scores, decision rules, and clean FIAU separation when it does. The task for v1.1 is to make that behavior consistent rather than occasional.
