# Worked Example: Marketplace Expansion — Cleaning Vertical (Executing, Medium Risk)

## The Raw Input

From a product lead during a planning session:

> ok so we've decided to expand the cleaning vertical from 2 cities (Austin and Denver) to 4 cities. the two new ones are Phoenix and Raleigh. leadership approved the budget last week. we're not debating whether to expand — that's settled.
>
> what I need help with is designing the launch experiment. we've done this twice before (Austin was our first market, Denver was the expansion) but Denver was kind of a mess honestly. we launched supply and demand at the same time and ended up with too many cleaners and not enough jobs for the first 6 weeks. half the cleaners churned before demand caught up. we burned like $40k in sign-up bonuses for cleaners who did maybe 2 jobs total.
>
> this time we want to do supply-first. get cleaners on the platform before we start marketing to homeowners. but I don't know exactly how to structure the test — like how many cleaners do we need before we turn on demand? how do we keep them engaged while we're building the demand side? what does "enough supply" even look like?
>
> our austin market does about 3,200 bookings/month with ~180 active cleaners. denver is at 1,400 bookings/month with ~95 cleaners after 8 months. average booking is $135.
>
> we want to launch Phoenix first (bigger market) and Raleigh 3 weeks later. total budget for both launches is $120k over 3 months.
>
> what's the experiment plan?

---

## Step 1: Detect Context

**Mode: Executing.**
The direction is set — expansion to Phoenix and Raleigh is approved and funded. The team isn't debating whether to expand; they need a structured launch experiment with clear thresholds. This is tactical execution support.

**Risk: Medium.**
$120k budget is meaningful but not existential. The expansion is reversible (you can pull out of a city). But the Denver experience shows that a bad launch sequence wastes money and burns supply-side trust, which is harder to rebuild. Getting the supply-demand sequencing right matters.

**Origin: Strategic decision (leadership-approved expansion) + Lessons from Denver launch (operational learning).**

**Bias check:** The main risk here isn't cognitive bias — it's the Denver anchoring. The team learned "don't launch supply and demand simultaneously" from Denver, which is reasonable. But the lesson could be over-indexed: maybe Denver's problem wasn't the timing but the sign-up bonus structure, or the market size, or the demand channel mix. Worth a quick check.

---

## Step 2: Name the Decision

**Decision:** What's the supply-first launch plan for Phoenix (and then Raleigh)? Specifically:
- (A) How many cleaners constitute "enough supply" to turn on demand marketing?
- (B) What's the cleaner engagement strategy during the supply-only phase?
- (C) What are the thresholds to proceed, adjust, or pause at each stage?

**By when:** Phoenix launch target appears to be soon (Raleigh 3 weeks after). Need the plan finalized this week.

**What "do nothing" means:** Launch without a structured experiment, risk repeating Denver. Given that the budget is approved and the cities are chosen, "do nothing" really means "launch without clear thresholds," which is what happened in Denver.

### Clarifying Questions (2 — Executing mode, so minimal)

1. **In Austin (your healthy market), what's the ratio of active cleaners to weekly bookings?** And what's the average number of bookings per cleaner per week? (Trying to back into what "enough supply" looks like.)

2. **In the Denver launch, what was the cleaner acquisition cost and the demand-side customer acquisition cost?** (Need this to model the Phoenix budget allocation.)

### Answers received:

1. Austin: ~180 active cleaners, ~800 bookings/week. That's roughly 4.4 bookings/cleaner/week. The product lead says cleaners start getting unhappy below 3 bookings/week — that's the threshold where they start looking at other platforms or dropping off.

2. Denver: cleaner acquisition cost was about $210 (sign-up bonus + recruiting ads). Demand-side CAC was around $45 per first booking. They don't have great unit economics on the demand side yet — customer LTV is still unclear because the market is only 8 months old.

---

## Step 3: Separate Reality

### Facts (with source)
- Austin: ~180 active cleaners, ~3,200 bookings/month (~800/week), ~4.4 bookings/cleaner/week — product lead, internal data
- Denver: ~95 active cleaners, ~1,400 bookings/month, 8 months post-launch — product lead, internal data
- Denver launch: supply and demand launched simultaneously, ~50% cleaner churn in first 6 weeks, ~$40k in sign-up bonuses largely wasted — product lead
- Cleaner satisfaction threshold: ~3 bookings/week minimum before they disengage — product lead (anecdotal but experience-based)
- Average booking value: $135 — product lead
- Denver cleaner acquisition cost: ~$210/cleaner — product lead
- Denver demand-side CAC: ~$45/first booking — product lead
- Budget: $120k for both cities over 3 months — approved by leadership
- Timeline: Phoenix first, Raleigh 3 weeks later — product lead

### Inferences
- Austin's steady state is ~18 bookings/cleaner/month. If the satisfaction floor is ~12/month (3/week), that gives a healthy buffer. Austin cleaners are probably fairly happy.
- Denver at 95 cleaners and 1,400 bookings/month = ~14.7 bookings/cleaner/month. That's above the floor but not as healthy as Austin. Suggests Denver may still be slightly oversupplied relative to demand maturity.
- If cleaner acquisition cost is ~$210, the $120k budget can acquire roughly 570 cleaners total if spent only on supply. Obviously it won't all go to supply, but this sets the upper bound.
- A supply-first launch means we need to accept that early cleaners will have low booking volume. The engagement strategy during the gap is critical to retention.

### Assumptions
- A1: The 3 bookings/week satisfaction threshold holds in Phoenix and Raleigh (not just Austin).
- A2: Supply-first sequencing will result in better cleaner retention than simultaneous launch.
- A3: Demand can be ramped predictably once supply is in place (i.e., marketing channels that worked in Austin/Denver will work here).
- A4: Phoenix and Raleigh are similar enough to Austin/Denver that the operational model transfers.

### Unknowns
- Competitive landscape for cleaning services in Phoenix and Raleigh (how saturated are these markets?)
- Whether the sign-up bonus structure or the launch sequencing caused Denver's cleaner churn (could be both)
- Demand ramp curve: how quickly can you go from 0 to 200+ bookings/week in a new market?
- Seasonal effects: are we launching at a good or bad time for cleaning demand?

---

## Step 4: Pick the Kill Assumption

**Kill assumption: A2 — Supply-first sequencing will result in better cleaner retention than simultaneous launch.**

The entire plan rests on this. If we recruit cleaners first but can't keep them engaged during the demand ramp, we'll burn through the supply budget and end up in the same place as Denver — just delayed by a few weeks. The risk isn't sequencing per se; it's whether we can maintain supply during the gap between recruitment and steady bookings.

---

## Step 5: Turn It Into a Test

### The Launch Experiment: Phoenix Supply-First Staged Rollout

This is structured as a 3-phase launch with explicit go/no-go gates between phases.

---

**Phase 1: Supply Seeding (Weeks 1-3)**

Goal: Recruit an initial pool of cleaners before turning on any demand marketing.

**Target:** 40-50 active cleaners in Phoenix.

Rationale: Austin's steady state is 180 cleaners / 800 bookings per week. We're not aiming for steady state on day 1. We want enough cleaners to service early demand without long wait times, but few enough that each cleaner gets meaningful bookings once demand turns on. At 40 cleaners and a target of 3 bookings/week minimum, we need at least 120 bookings/week to keep them at floor satisfaction. That's our Phase 2 demand target.

**Cleaner acquisition approach:**
- Budget: $12k for Phase 1 (at ~$210/cleaner, gets ~57 signups; assume 75% activation = ~43 active)
- Channels: local job boards, cleaning industry Facebook groups, Indeed, referrals from Austin/Denver cleaners who know people in Phoenix
- Modified sign-up bonus: $100 on signup, $100 after 5th completed booking (Denver's mistake was paying the full bonus upfront with no completion requirement)

**Engagement during the gap:**
- Weekly "launch crew" emails/texts: transparent about the timeline ("we're building demand in Phoenix — you're our founding cleaners, bookings start ramping in week 3-4")
- Guaranteed minimum: $150/week floor for the first 4 weeks for any cleaner who keeps their availability open for 20+ hours/week. This costs ~$6k/week worst case (40 cleaners x $150) but prevents early attrition. Cap total guarantee spend at $18k.
- "Founding cleaner" badge/status: priority booking, slightly higher payout rate for first 90 days (e.g., $5 more per booking than standard). Not a huge cost, but signals commitment.

**Phase 1 gate (end of Week 3):**
- Proceed to Phase 2 if: 35+ cleaners are active and have availability set
- Adjust if: 25-34 active cleaners (extend Phase 1 by 1 week, increase recruiting spend)
- Pause if: <25 active cleaners after 3 weeks (investigate why — recruiting channels, market conditions, competitive issues)

---

**Phase 2: Demand Ignition (Weeks 4-6)**

Goal: Begin demand marketing. Ramp to 120+ bookings/week to hit the 3 bookings/cleaner/week floor.

**Demand channels (based on what worked in Austin/Denver):**
- Google Ads (local "house cleaning Phoenix" etc.): allocate $8k for 3 weeks
- Nextdoor promoted posts: allocate $3k
- Launch promotion: first cleaning $89 (vs. $135 regular), limited to first 200 customers
- Referral from existing Austin/Denver customers who've moved or have Phoenix connections

**Budget for Phase 2:** ~$18k (ads + first-booking promotion subsidies)

**Metrics to track weekly:**
- Bookings/week (target: 120+ by end of Week 6)
- Bookings/cleaner/week (target: 3+ average)
- Cleaner retention: % of Phase 1 cleaners still active
- Customer rebooking rate: % of first-time customers who book a second cleaning within 14 days
- Average rating (first bookings are highest-risk for quality issues)

**Phase 2 gate (end of Week 6):**
- Proceed to Phase 3 if: 100+ bookings/week AND cleaner retention >70% AND average rating >4.5
- Adjust if: 60-99 bookings/week OR cleaner retention 50-70% (increase demand spend, check cleaner satisfaction, review pricing)
- Pause if: <60 bookings/week OR cleaner retention <50% OR average rating <4.0 (something is fundamentally off — could be market, pricing, quality, or competitive issue)

---

**Phase 3: Scale to Steady State (Weeks 7-12)**

Goal: Ramp both supply and demand toward a sustainable equilibrium. Begin recruiting additional cleaners as demand grows.

**Targets by end of Week 12:**
- 80-100 active cleaners
- 300+ bookings/week
- 3.5+ bookings/cleaner/week (above the satisfaction floor, trending toward Austin's 4.4)
- Customer rebooking rate >35% (indicating demand stickiness)
- Cleaner 30-day retention >65%

**Supply/demand balance rule:** Add 10 new cleaners for every consistent week of 3.5+ bookings/cleaner/week. If bookings/cleaner dips below 3, pause supply recruitment and increase demand spend.

**Budget for Phase 3:** ~$30k (recruiting + demand marketing + guarantee wind-down)

**Phase 3 success criteria (Week 12 review):**
- **Healthy launch:** 250+ bookings/week, 70+ active cleaners, bookings/cleaner >3/week, customer rebooking >30%. Proceed with steady-state operations, begin planning Raleigh Phase 1.
- **Struggling but viable:** 150-249 bookings/week, 50-69 cleaners, metrics trending up. Extend Phase 3 by 4 weeks, delay Raleigh.
- **Failed launch:** <150 bookings/week after 12 weeks, or cleaner retention <40%, or customer rating <4.2. Pause Phoenix, conduct post-mortem, reassess Raleigh.

---

### Budget Summary

| Phase | Duration | Budget | Purpose |
|-------|----------|--------|---------|
| Phase 1 | Weeks 1-3 | $30k | Cleaner recruitment ($12k) + minimum guarantees ($18k) |
| Phase 2 | Weeks 4-6 | $18k | Demand marketing + first-booking promos |
| Phase 3 | Weeks 7-12 | $30k | Scaling supply + demand |
| **Phoenix total** | **12 weeks** | **$78k** | |
| **Raleigh reserve** | | **$42k** | Starts 3 weeks after Phoenix (if Phase 1 gate passes) |

Note: Raleigh budget is tighter. Apply Phoenix learnings to be more efficient. If Phoenix Phase 1 or 2 fails, reallocate Raleigh budget to fix Phoenix or save it.

---

### Raleigh Timing

Original plan was to launch Raleigh 3 weeks after Phoenix. Adjusted recommendation: **launch Raleigh Phase 1 when Phoenix passes the Phase 2 gate (end of Week 6),** not on a fixed calendar. If Phoenix struggles, you don't want two struggling markets at once. If Phoenix goes smoothly, Raleigh Phase 1 can overlap with Phoenix Phase 3, which is fine operationally.

---

## Step 6: Close the Loop

### Recap
The team has approval to expand cleaning from 2 to 4 cities. The Denver launch taught them that simultaneous supply/demand launch burns supply-side trust and money. The plan is a 3-phase staged rollout: seed supply, ignite demand, scale to equilibrium — with explicit go/no-go gates between phases.

### Key Metrics Dashboard (track weekly)
1. Active cleaners (with availability set)
2. Bookings/week
3. Bookings/cleaner/week (floor: 3.0)
4. Cleaner 7-day and 30-day retention
5. Customer rebooking rate (within 14 days)
6. Average booking rating
7. Spend vs. budget by phase

### Confidence: 3/5
The approach is grounded in Austin/Denver data, and supply-first is a reasonable hypothesis based on the Denver failure. But we haven't validated that the "guaranteed minimum" engagement strategy will actually retain cleaners, and we don't know the competitive dynamics in Phoenix/Raleigh. The Phase 1 gate will quickly tell us if the market is receptive.

---

## Slack/DM Summary

**Decision:** How to structure the supply-first launch experiment for Phoenix and Raleigh cleaning expansion.
**Segment/context:** Home services marketplace. 180 cleaners / 3,200 bookings in Austin, 95/1,400 in Denver. Denver launch was a mess — simultaneous supply/demand launch burned $40k in wasted sign-up bonuses and 50% cleaner churn.
**Kill assumption:** Supply-first sequencing actually retains cleaners better — i.e., we can keep 35+ cleaners engaged during the 3-week gap before demand ramps.
**Next test:** 3-phase staged rollout in Phoenix. Phase 1 (wks 1-3): recruit 40-50 cleaners with restructured bonuses + $150/wk guaranteed minimum. Phase 2 (wks 4-6): demand marketing targeting 120+ bookings/wk. Phase 3 (wks 7-12): scale to 250+ bookings/wk. Go/no-go gates between each phase.
**Decision rule:** Phase 1 gate: 35+ active cleaners by wk 3. Phase 2 gate: 100+ bookings/wk, >70% cleaner retention, >4.5 avg rating by wk 6. Launch Raleigh only when Phoenix passes Phase 2 gate. (Confidence: 3/5)

---

## Decision Log

| Field | Value |
|---|---|
| **Decision** | Launch Phoenix with a 3-phase supply-first staged rollout. Defer Raleigh start until Phoenix passes the Phase 2 gate (not on a fixed 3-week offset). Budget: $78k Phoenix / $42k Raleigh reserve. |
| **Rationale** | Denver's simultaneous launch caused 50% cleaner churn and $40k in wasted bonuses. Supply-first with guaranteed minimums and explicit phase gates reduces the risk of repeating this. The budget split allows learning from Phoenix before committing to Raleigh. |
| **Evidence used** | Austin steady-state metrics (180 cleaners, 4.4 bookings/cleaner/week), Denver launch data ($210 cleaner CAC, $45 demand CAC, 50% early churn), cleaner satisfaction floor (~3 bookings/week), $120k total budget |
| **Remaining assumptions** | That the guaranteed minimum ($150/wk) is enough to retain cleaners during the gap; that Austin/Denver demand channels will work in Phoenix; that the 3 bookings/week satisfaction threshold transfers to new markets; that Phoenix competitive dynamics are manageable |
| **Confidence** | 3/5 — grounded in operational data from 2 markets, but untested engagement strategy and unknown competitive landscape |
| **Next review** | End of Week 3 (Phase 1 gate). If 35+ cleaners active, proceed to demand. If not, diagnose and decide whether to extend, pivot approach, or pause. |
