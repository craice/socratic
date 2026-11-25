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

1. **The jump from v1 is the model, not the full prompt.** On the 5 control scenarios, the condensed prompt scored 86/100 and the full prompt 84/100 (10 criteria). The full prompt produced ~25% longer first replies.
2. **Multi-turn barely matters** (+5 points over 20 scenarios). v1's weak hypothesis/confidence scores were not mainly a single-turn artifact.
3. **Concision is the real weakness.** First replies average ~950 words regardless of risk; Low-risk scenarios averaged 1,054 words, the longest of any tier.
4. **Mode detection fails in one direction:** 7 of 8 errors are Exploring scenarios labeled Framing. Either the prompt's definition of Exploring is too narrow or the expected labels are debatable.
5. **Rubric is saturated.** Four criteria are at 2.00 on every scenario; they no longer discriminate.
