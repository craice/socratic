# Evaluation v2 (2026-11-24)

20 scenarios, multi-turn, run with Claude Code subagents (`harness.workflow.js`).

- **Copilot:** Claude Sonnet 5.5, reads the full `process/socratic-1.0.md` before every reply; up to 3 replies.
- **Simulated user:** Claude Sonnet 5.5 playing the `persona` in `../scenarios.json` (never sees mode/risk/trap labels).
- **Evaluator:** Claude Sonnet 5.5. v1 rubric (10 criteria) + **concision** (11th). Scores the first reply alone (`turn1`) and the whole conversation.
- **Control:** the condensed prompt used by the v1 lab (`control-prompt-condensed.md`) on the same model, first reply only, 5 scenarios.
- One run per scenario. Re-running the same scenario moved scores by up to 5 points (s13: 19 in the pilot, 14 here), so read per-scenario numbers as noisy.

## Headline

| | v1 (Sonnet 4, condensed prompt, 1 turn) | v2 first reply | v2 conversation |
|---|---|---|---|
| 10 original criteria | 305/400 (76%) | 365/400 (91%) | 370/400 (93%) |
| + concision | — | 373/440 (85%) | 376/440 (85%) |

## Per criterion (avg, 0–2; first reply | conversation)

| Criterion | v2 |
|---|---|
| FIAU, Kill assumption, Decision rule, Confidence | 2.00 (ceiling) |
| Closure | 1.95 |
| Question discipline | 1.90 / 1.85 |
| Testable hypothesis | 1.75 / 1.90 |
| Trap detection | 1.80 / 1.90 |
| Risk calibration | 1.45 / 1.50 |
| **Mode detection** | **1.40** |
| **Concision** | **0.40 / 0.30** |

## Findings

1. **No detectable difference between the full and the condensed prompt** (n=5): the condensed prompt scored 86/100 and the full prompt 84/100 on the 10 original criteria, within run-to-run noise. The full prompt produced ~25% longer first replies. The gain over v1 cannot yet be attributed to the copilot model vs a more lenient evaluator, since both changed (see open questions).
2. **Multi-turn barely matters** (+5 points over 20 scenarios). With this model, the first reply already contains every element of the loop.
3. **No conversation closed on its own.** All 20 reached the 3-reply cap; the copilot kept producing ~1,000-word replies with further questions. "Conversation" scores are for cut-off conversations.
4. **Concision is the real weakness.** First replies average ~950 words regardless of risk; Low-risk scenarios averaged 1,054 words, the longest of any tier.
5. **Mode detection: every Exploring scenario lost points (7/7).** Where the copilot states a mode, it says Framing. These scenarios all arrive with a solution in hand (dashboard, chatbot, gamification, API platform). `socratic-1.0.md` defines Exploring as "no clear problem yet", describing the mode the user *is in*; the answer key labels the mode the user *should be in*. The disagreement is in the definition, not only in the copilot.
6. **Rubric is saturated.** Four criteria are at 2.00 on every scenario; they no longer discriminate.

## Caveats

- **Harness context:** subagents run inside Claude Code and received the repository owner's global `CLAUDE.md` (working-style instructions such as "point out risks even when not asked"). This may push replies toward thoroughness and is a confound for the concision result. A direct-API run would remove it.
- **Same-family judge:** copilot, simulated user and evaluator are the same model.
- No subagent read anything other than its prompt file or persona file (audited from transcripts).

## Open questions

- Re-score the 20 v1 replies (`../socratic-lab-results.md`) with this evaluator to separate "better copilot" from "more lenient judge".
