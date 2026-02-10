# Worked Example: Pricing Change for Vertical SaaS (Exploring → Framing, High Risk)

## The Raw Input

From a founder DM:

> so I want to raise our prices. we sell practice management software for dental offices — scheduling, patient records, billing, the works. right now we charge $149/mo per practice. been at that price since launch 18 months ago.
>
> here's the thing: three different customers have told me some version of "you guys are way too cheap" or "this is a steal for what we get." one of them literally said "I'd pay double." we have 214 paying customers, MRR is about $31k, churn is like 4% monthly which I know is high.
>
> I'm thinking we go to $249/mo. maybe $199 as a stepping stone? not sure. my cofounder thinks we should just do it and grandfather existing customers. my advisor says we should A/B test it but I don't know how you A/B test pricing when you only get like 15-20 new signups a month.
>
> also we just hired our first sales rep and she's starting next month. feels like we should figure this out before she starts.
>
> what do you think?

---

## Step 1: Detect Context

**Mode: Exploring → Framing.**
The founder has a hypothesis ("we should raise prices") based on anecdotal evidence (3 customer comments). But there's no structured analysis of willingness to pay, no segmentation of the customer base, and the decision is entangled with other factors (high churn, new sales hire, grandfather question). This starts in Exploring and needs to move into Framing before anyone picks a number.

**Risk: High.**
Pricing changes in vertical SaaS are hard to reverse. Dental practices sign annual contracts or commit operationally — a price increase that causes churn or kills new signups could damage the business for quarters. The customer base is small (214), so each lost account matters. And the founder has limited data to work with.

**Origin: Customer feedback (3 anecdotal comments) + Founder intuition.**

**Bias risks identified:**
- Selection bias: The 3 customers who said "this is a steal" are probably your happiest, most engaged users. They don't represent the 214-customer base, and they definitely don't represent prospects who decided not to buy.
- Anchoring: The founder has already anchored on $249. Every subsequent conversation will orbit that number.
- Survivorship bias: We're hearing from customers who stayed. The 4% monthly churn means roughly 8-9 practices leave every month. We don't know what they'd say about the price.
- Recency bias: Three comments in an unspecified window. Were these this week? Over 18 months?

**Bias probe:** "What would we expect to see if $149 were actually the right price — or even too high for part of the market?"

---

## Step 2: Name the Decision

**Decision:** Should we raise the price for new customers from $149/mo to a higher tier, and if so, to what price, with what migration strategy for existing customers, and on what timeline?

**By when:** Before the new sales rep starts (roughly 3-4 weeks). But this timeline is self-imposed, and a wrong pricing decision is worse than a slightly late one.

**What "do nothing" means:** Stay at $149/mo. MRR stays around $31k (minus churn). New sales rep sells at $149. If the product really is underpriced, we're leaving money on the table every month — but we're also not risking the destabilization that a bad price hike causes.

### Clarifying Questions (3)

1. **The 4% monthly churn — do you know why people leave?** Do you have exit survey data, cancellation reasons, or even anecdotal patterns? (This matters because if price sensitivity is already a factor in churn at $149, raising to $249 could accelerate it.)

2. **What does your customer base look like in terms of practice size?** Solo dentists vs. 2-3 chair practices vs. multi-location groups? (Different segments may have very different willingness to pay.)

3. **Those 3 customers who said you're underpriced — do you know anything about their practice size, how long they've been customers, or what features they use most?** (Trying to understand if they represent a specific segment.)

### Answers received:

1. No formal exit survey. Anecdotally, the founder thinks most churn is from practices that "never really got set up" — they signed up, half-implemented, then stopped paying. A few churned because they switched to a bigger platform (Dentrix, Eaglesoft). Price has come up "maybe once or twice" as a reason but it's not the main driver. He's not confident in any of this.

2. Mix. Rough guess: ~60% are 1-2 dentist practices, ~30% are 3-5 dentist practices, ~10% are multi-location. He doesn't have this segmented cleanly in the data.

3. Two of the three are larger practices (4+ dentists). The third is a 2-dentist practice but the owner is "a huge fan, refers people to us." All three have been customers for 10+ months.

---

## Step 3: Separate Reality

### Facts (with source)
- 214 paying customers at $149/mo — founder stated, presumably from billing system
- MRR ~$31k — founder stated (math checks: 214 x $149 = $31,886)
- Monthly churn ~4% — founder stated (roughly 8-9 cancellations/month)
- 15-20 new signups per month — founder stated
- 3 customers made comments about the product being underpriced — founder recalled from conversations
- 2 of the 3 "underpriced" commenters are larger practices (4+ dentists) — founder stated
- Price has been $149/mo since launch (18 months) — founder stated
- New sales rep starting in ~3-4 weeks — founder stated
- No exit survey or structured churn data exists — founder confirmed

### Inferences
- Net growth is roughly break-even or slightly positive: ~17 new signups minus ~9 churned = ~8 net/month. At this rate, growth is slow.
- The "underpriced" signal is coming from larger, established, happy customers — a segment that may have fundamentally different willingness to pay than the typical 1-2 dentist practice.
- The high churn (4%) appears to be driven primarily by poor activation, not price. This means a price increase is unlikely to fix churn and might actually make the activation problem worse (higher price → higher expectations → less patience during setup).
- With 15-20 signups/month, traditional A/B testing on pricing is impractical. You'd need months to reach statistical significance.

### Assumptions
- A1: The broader customer base (not just the 3 vocal ones) would accept a $249 price point.
- A2: A price increase won't significantly increase churn among existing customers (even without grandfathering).
- A3: A price increase won't significantly reduce new signup conversion.
- A4: The value delivered justifies $249/mo across all practice sizes.
- A5: Grandfathering existing customers eliminates migration risk.

### Unknowns
- Actual willingness to pay across different practice size segments
- What churned customers would say about a price increase
- How price-sensitive prospects are (the ones who don't sign up)
- Whether the product is "worth" more because of specific features (billing? scheduling? records?) or the full package
- Competitive pricing landscape (what do Dentrix, Eaglesoft, other vertical tools charge?)
- Whether a price increase for larger practices only (tiered pricing) captures most of the upside with less risk

---

## Step 4: Pick the Kill Assumption

**Kill assumption: A1 — The broader customer base would accept $249/mo.**

Three happy customers saying "this is a steal" is not evidence that 214 customers (or future prospects) would pay $249. The 3 are larger practices, long-tenured, and self-selected as enthusiastic. If the typical 1-2 dentist practice (60% of the base) sees $249 as too expensive, the price increase could tank new signups and accelerate churn simultaneously.

This is the assumption that, if wrong, turns a revenue-growth move into a revenue-destruction move.

---

## Step 5: Turn It Into a Test

### Hypothesis
If we can validate that the median willingness to pay among dental practices in our target segment is above $200/mo, then a price increase to $199-249/mo for new customers will maintain or improve signup-to-paid conversion, because the product delivers value that supports a higher price point.

### Cheapest Experiments

Given the constraints (small volume, high-risk decision, no existing WTP data), we need to triangulate. Standard A/B testing won't work at 15-20 signups/month.

**Test 1: Van Westendorp pricing survey with existing customers (1 week)**

Survey the full 214-customer base. 4 questions:
- At what price would this be so cheap you'd question the quality?
- At what price would this be a great deal?
- At what price would it start to feel expensive but you'd still pay?
- At what price would it be too expensive, full stop?

Segment responses by practice size. Even a 25% response rate gives 50+ data points, enough to plot willingness-to-pay curves by segment.

Add one open question: "What's the single feature you'd miss most if you switched away?"

**Test 2: Competitive pricing audit (2 days)**

Research what Dentrix, Eaglesoft, Curve Dental, tab32, and other dental practice management tools charge. Get actual pricing, not just "contact us" pages — check review sites, dental forums, Reddit, ask the sales rep to do competitive calls. This establishes the market reference price.

**Test 3: 5 customer interviews focused on value and switching costs (1-2 weeks)**

Call 5 customers across segments:
- 2 solo/small practices (1-2 dentists)
- 2 mid practices (3-5 dentists)
- 1 multi-location

Don't ask "would you pay more?" (they'll say no reflexively or yes to be polite). Instead ask:
- "Walk me through how you decided to sign up. What were you comparing us to?"
- "What would have to happen for you to switch to something else?"
- "If we raised prices by $50/mo, what would you do? What about $100/mo?"
- "What's the most valuable thing we do for your practice?"

### Triangulation Plan (High risk — 2+ sources required)

**Source A (Quant):** Van Westendorp survey — gives WTP distribution by segment.
**Source B (Qual):** Customer interviews — gives depth on value perception and switching costs.
**Source C (Market):** Competitive pricing audit — gives external reference points.

If all three converge on "$200+ is supportable for mid-to-large practices," confidence is high. If the survey says $175 is the ceiling for small practices, we may need tiered pricing instead of a flat increase.

### Decision Rules

**Proceed with $249 for all new customers if:**
- Van Westendorp "acceptable" range median is above $220 for the overall base
- Competitive audit shows comparable tools charge $200+/mo
- Interviews confirm low switching intent at a $100/mo increase
- Confidence: 4/5

**Proceed with tiered pricing ($149 solo / $249 multi-dentist) if:**
- Van Westendorp shows a split: small practices ceiling at $175, larger practices at $300+
- Interviews confirm different value perception by practice size
- This captures upside from larger practices without losing the small-practice pipeline
- Confidence: 3/5

**Hold at $149 and focus on activation/churn if:**
- Van Westendorp median "too expensive" is at or below $200
- Competitive audit shows we're already at market rate
- Interviews reveal price sensitivity or low switching costs
- Confidence: 3/5

**Regardless of pricing outcome, address the churn problem separately.** 4% monthly churn is the bigger threat to the business than being $50-100 underpriced. If most churn is from poor activation, that's a distinct workstream.

---

## Step 6: Close the Loop

### Recap
The founder wants to raise prices from $149 to $249 based on 3 customer comments. But the evidence is thin and biased toward happy, large-practice customers. Before picking a number, we need to understand willingness to pay across segments, competitive pricing context, and the interaction between pricing and the existing 4% churn problem.

### Next Step
This week: Launch the Van Westendorp survey and start the competitive pricing audit. Next week: Conduct 5 customer interviews. The new sales rep's start date is not a hard deadline — it's better to start her with the right price than a rushed wrong one.

### Confidence: 1/5
Almost no validated evidence right now. Three anecdotal comments from a biased sample. The survey + interviews + competitive audit should move this to 3-4 within 2 weeks.

### A Note on the Sales Rep Timeline
The founder is anchoring on the sales rep's start date as a deadline. But a sales rep can start at $149 and switch to the new price once validated. Starting her with a bad price is worse than starting her with the current price and adjusting in week 3-4. Don't let an arbitrary timeline force a high-risk decision.

---

## Slack/DM Summary

**Decision:** Should we raise dental SaaS pricing from $149/mo to $249/mo based on 3 customer comments?
**Segment/context:** 214 dental practices, $31k MRR, 4% monthly churn. Anecdotal "you're too cheap" from 3 large, happy customers. No WTP data, no competitive pricing analysis, no churn exit data.
**Kill assumption:** The broader customer base (especially the 60% that are small practices) would accept $249/mo — not just the 3 vocal fans.
**Next test:** Van Westendorp survey to all 214 customers (1 week) + competitive pricing audit (2 days) + 5 customer interviews segmented by practice size (1-2 weeks). Total: ~2 weeks, zero engineering cost.
**Decision rule:** If WTP median is above $220 and competitors charge $200+, proceed with increase. If small-practice WTP is low, go tiered ($149/$249 by practice size). If WTP median is at or below $200, hold and fix churn instead. (Confidence: 1/5 now, targeting 3-4 after research.)

---

## Decision Log

| Field | Value |
|---|---|
| **Decision** | Do not raise prices yet. Run a 2-week pricing research sprint: Van Westendorp survey, competitive audit, and 5 segmented customer interviews. |
| **Rationale** | Current evidence (3 anecdotal comments from biased sample) is insufficient for a high-risk, hard-to-reverse pricing decision. The customer base is small enough that a wrong move materially hurts the business. 2 weeks of research is cheap insurance. |
| **Evidence used** | 3 customer comments (selection bias noted), MRR and customer count, churn rate (4% monthly), practice size distribution (rough: 60% small, 30% mid, 10% multi-location), no exit survey data, no WTP data |
| **Remaining assumptions** | That Van Westendorp surveys produce reliable WTP data in B2B vertical SaaS (they're better for consumer, but still directional here); that 25%+ response rate is achievable; that competitive pricing data is obtainable; that the churn problem is independent of the pricing question |
| **Confidence** | 1/5 — decision to research is high-confidence, but the pricing decision itself has almost no evidence yet |
| **Next review** | 2 weeks from today. Review survey results + competitive data + interview notes. Make the pricing call then, with actual data. |

### Open Threads
- The 4% churn rate needs its own investigation. It's probably a bigger revenue problem than underpricing. If ~9 customers churn/month and each pays $149, that's $1,341/mo in lost revenue — compared to the ~$17/mo * 17 new customers = $289/mo you'd gain from a $100 price increase on new signups. Fix churn first, price increase second.
- Grandfathering vs. migrating existing customers is a separate decision. Don't make it until you know the new price. The survey data will also inform migration risk.
