# Evaluation v2 — pilot (2026-11-24)

Multi-turn pilot on 5 of the 20 scenarios, run with Claude Code subagents (no direct API).

- **Copilot:** Claude Sonnet 5.5, reads the full `process/socratic-1.0.md` before every turn; up to 3 replies.
- **Simulated user:** Claude Sonnet 5.5 playing the `persona` from `scenarios.json` (never sees mode/risk/trap labels).
- **Evaluator:** Claude Sonnet 5.5, same 10-criterion rubric as v1, scoring both the first reply alone (`turn1`) and the whole conversation.
- Harness: `harness.workflow.js` (Claude Code Workflow script). Raw transcripts and scores: `results.json`.

| Scenario | v1 (Sonnet 4, condensed prompt, 1 turn) | v2 turn 1 | v2 conversation |
|---|---|---|---|
| s05 Expansion vs Density | 5 | 17 | 16 |
| s19 Enterprise Tier | 5 | 19 | 19 |
| s09 Chatbot Support | 12 | 17 | 18 |
| s03 CTA Copy Test | 17 | 20 | 20 |
| s13 Mobile App Launch | 20 | 19 | 18 |

Not comparable with the v1 aggregate: model, prompt (full vs condensed) and harness all changed at once.
