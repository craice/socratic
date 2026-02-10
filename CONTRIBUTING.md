# Contributing to Socratic Product Discovery

Thanks for your interest in improving this project. Whether you're a product manager, designer, engineer, or anyone who makes product decisions — your perspective is valuable.

## Ways to Contribute

### Suggest Process Improvements

The Socratic process (v1.0) is a starting point, not a finished product. If you've used it and found gaps, ambiguities, or areas where it could be stronger:

1. Open an issue with the **process** label
2. Describe the current behavior and what you think should change
3. Include evidence if you have it — a scenario where the process fell short, a common failure mode it doesn't address, or feedback from your team

### Submit Test Scenarios

The evaluation harness (`evaluation/socratic-lab.jsx`) tests the process against product scenarios. More diverse scenarios make the evaluation more robust.

A good test scenario includes:
- A realistic product situation described the way a real PM would describe it
- An expected mode (Exploring / Framing / Executing)
- A risk level (Low / Medium / High)
- An embedded cognitive trap or anti-pattern (or "None")
- An industry label

Open an issue or PR with your scenario using the format in `evaluation/scenarios.json`.

### Report Issues

Found a broken link, a factual error, or something unclear in the documentation? Open a bug report using the issue template.

### Contribute to the Website

The site lives in `site/` and is built with Astro + Tailwind CSS.

```bash
cd site
npm install
npm run dev
```

For site contributions:
- Keep the editorial tone — clear, confident, no hype
- Test responsiveness at 375px, 768px, and 1440px
- No AI slop language ("revolutionary", "game-changing", "cutting-edge", etc.)
- Every claim should be traceable to the process doc or test results

## Pull Request Guidelines

- Keep PRs focused — one change per PR when possible
- Describe what changed and why
- If modifying the process itself, explain what evidence or reasoning supports the change

## Code of Conduct

Be respectful, constructive, and assume good intent. This project values substance over polish and evidence over opinion — the same principles the Socratic process itself teaches.

## License

By contributing, you agree that your contributions will be licensed under the MIT License.
