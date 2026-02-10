# Worked Example: SaaS Onboarding Drop (Framing, Medium Risk)

## The Raw Input

Here's what the PM dropped in Slack on a Monday morning:

> hey, need help thinking through something. our trial-to-paid conversion has been sliding — it was ~18% six months ago and we're sitting at like 12% now. maybe lower. the team is split on what to do.
>
> half the team wants to build an onboarding wizard (step-by-step guided setup, like notion does). the other half thinks the problem is that the first-run experience is just too complicated and we need to simplify it — fewer screens, fewer options, get people to value faster.
>
> we're a B2B project management tool. mostly 5-50 person teams. 14-day free trial, no credit card required. we get about 1,100 new trial signups per month.
>
> our head of growth thinks it's a positioning problem, not a product problem, but nobody's really listening to her. our CEO keeps pointing to a competitor that added an onboarding wizard and "grew 40%" (unclear what that means exactly).
>
> can you help us figure out what to actually do? we need to decide this week because engineering capacity opens up in sprint 3.

---

## Step 1: Detect Context

**Mode: Framing.**
The team has identified a problem area (trial-to-paid conversion declining) but hasn't structured it yet. They're debating solutions without having agreed on the root cause. This is classic Framing territory — the problem needs structure before it needs solutions.

**Risk: Medium.**
Onboarding changes are significant (they touch every new user) but largely reversible behind feature flags. The 6pp conversion drop is meaningful revenue-wise, but neither proposed solution is a bet-the-company move.

**Origin: Analytics (funnel data) + Stakeholder intuition (CEO anchored on competitor).**

**Bias risks identified:**
- Solution-first framing: both proposed paths are solutions, not diagnoses
- Anchoring on competitor's "40% growth" claim (unverified, unclear metric)
- HiPPO potential: CEO's competitor story may be driving the conversation
- The head of growth's "positioning" hypothesis is being dismissed without evidence — possible loudest-voice bias going the other direction

---

## Step 2: Name the Decision

**Decision:** Should we invest sprint 3 engineering capacity into (A) building an onboarding wizard, (B) simplifying the first-run experience, (C) investigating the positioning hypothesis, or (D) running a diagnostic sprint to identify root cause before committing to a solution?

**By when:** End of this week (engineering capacity decision for sprint 3).

**What "do nothing" means:** Conversion continues at ~12%. At 1,100 signups/month, that's ~132 conversions vs. the ~198 we'd expect at 18%. Roughly 66 lost conversions/month. If average contract value is, say, $200/mo, that's about $13k/mo in missed MRR. Not catastrophic but compounding.

### Clarifying Questions (3)

1. **When you say "trial-to-paid conversion," what's the exact definition?** Is it (trials started → paid within 14 days), (trials started → paid within 30 days), or (trials that reached some activation milestone → paid)?

2. **Do you have any data on where in the trial people drop off?** Specifically: what percentage of trial signups ever complete a core action (create a project, invite a teammate, whatever your activation event is)?

3. **The drop from 18% to 12% — did it happen gradually or was there a step change?** And did anything else change in that window — pricing page, signup flow, ad channels, ICP mix?

### Answers received:

1. Trial-to-paid = signups that convert to paid plan within 30 days of trial start. Measured in Mixpanel.

2. Sort of. They know that about 40% of trials create a project (the "aha" action). Of those who create a project, ~28% convert. Of those who don't, ~3% convert. But they don't know if the "create a project" rate has changed over time.

3. Gradual slide over ~3 months. They changed their Google Ads targeting in month 1 to go broader. No other major changes to the product or signup flow.

---

## Step 3: Separate Reality

### Facts (with source)
- Trial-to-paid conversion (30-day window): currently ~12%, was ~18% six months ago — Mixpanel (PM confirmed)
- ~1,100 new trial signups/month — Mixpanel
- 40% of trials create a project; 28% of project-creators convert; 3% of non-creators convert — Mixpanel
- Google Ads targeting was broadened ~3 months ago — Growth team confirmed
- 14-day free trial, no credit card required — product fact
- Target segment: 5-50 person teams — PM stated
- The "create a project" rate over time is unknown — PM confirmed they don't have this sliced

### Inferences
- The timing of the conversion decline correlates with the Google Ads targeting change. Broader targeting may be bringing in lower-intent or worse-fit signups. This could explain some or all of the drop.
- If the create-a-project rate hasn't changed, the problem is likely upstream (traffic quality). If it has dropped, there may be a product/onboarding issue too.
- The team is debating onboarding solutions, but the root issue might be traffic quality — which no onboarding change would fix.

### Assumptions
- A1: The conversion drop is caused by a product/onboarding problem (not a traffic quality problem).
- A2: An onboarding wizard or simplified first-run will meaningfully increase the create-a-project rate.
- A3: "Create a project" is the right activation event (proxy for value discovery).
- A4: The competitor's onboarding wizard actually caused their growth (not correlation with other changes).

### Unknowns
- Has the create-a-project rate changed over the same 3-month window?
- What does the trial-to-paid funnel look like segmented by acquisition channel (Google Ads broad vs. original channels)?
- What do users who sign up but never create a project actually do in the product? Where do they get stuck or leave?
- Is the competitor's "40% growth" even real, and if so, what was the mechanism?

---

## Step 4: Pick the Kill Assumption

**Kill assumption: A1 — The conversion drop is caused by a product/onboarding problem, not a traffic quality problem.**

If the drop is primarily from the Google Ads targeting change bringing in worse-fit leads, then neither an onboarding wizard nor a simplified first-run will fix it. The team would be spending a full sprint solving the wrong problem.

This matters because the timing is suspicious. The decline started around the same time as the targeting change. Before investing engineering effort, we need to separate these two causes.

---

## Step 5: Turn It Into a Test

### Hypothesis
If the conversion drop is driven by traffic quality (broader Google Ads targeting), then the trial-to-paid conversion rate for organic and original-channel signups will be roughly stable at ~18%, while the conversion rate for new-channel signups will be significantly lower.

### Cheapest Experiment
**Diagnostic analysis, not a product build.** This can be done in a day, no engineering required.

**Test:** Slice the last 6 months of trial data in Mixpanel by acquisition channel:
- Cohort A: Signups from original Google Ads targeting + organic + direct
- Cohort B: Signups from broadened Google Ads targeting

Measure:
1. Trial-to-paid conversion rate for each cohort
2. Create-a-project rate for each cohort
3. Time-to-first-project for each cohort

**Time window:** This is a retrospective analysis of existing data. Can be done in 1 day.

### Triangulation (Medium risk — 2 sources)

**Source A (Quant):** The cohort analysis above.

**Source B (Qual):** Pull 10 recent trial-no-convert accounts from the new-channel cohort. Look at their session recordings in FullStory or Mixpanel (if available). Alternatively, email 20 of them with a 1-question survey: "What were you looking for when you signed up? Did you find it?" Even a 20% response rate gives us 4 data points.

### Decision Rules

**If Cohort A (original channels) conversion is still ~16-18% and Cohort B (new channels) is pulling the average down:**
- The problem is traffic quality, not product. Kill the onboarding wizard project. Instead, work with growth to tighten ad targeting or add qualification steps.
- Head of growth was probably right. Revisit her positioning hypothesis for the new audience.

**If both cohorts show similar decline (~12%):**
- The problem is in the product. Proceed with onboarding investigation. But before choosing wizard vs. simplification, look at session recordings to see where trial users actually get stuck.

**If Cohort A declined moderately (~15%) and Cohort B is much worse (~8%):**
- It's both. Tighten targeting AND investigate product friction. Prioritize the traffic quality fix first (faster, cheaper) and queue the product investigation for the next sprint.

---

## Step 6: Close the Loop

### Recap
The team is debating two onboarding solutions (wizard vs. simplification), but there's a prior question that hasn't been answered: is this a product problem or a traffic quality problem? The conversion decline started around the same time as a Google Ads targeting change, and nobody has checked whether the two are related.

### Next Step
Run the cohort analysis this week (1 day of analyst time). Results determine whether sprint 3 goes to onboarding work or traffic quality fixes.

### Confidence: 2/5
We have a plausible hypothesis (traffic quality) and circumstantial evidence (timing), but zero validated data. The cohort split will move this to 3 or 4 quickly.

---

## Slack/DM Summary

**Decision:** Should we build an onboarding wizard, simplify first-run, or investigate root cause first?
**Segment/context:** B2B project management tool, trial-to-paid dropped from 18% to 12% over 3 months. Google Ads targeting broadened in the same window.
**Kill assumption:** The conversion drop is a product/onboarding problem (not traffic quality from the ad targeting change).
**Next test:** Cohort analysis — slice trial-to-paid conversion by acquisition channel (original vs. broadened targeting). 1 day, existing data. Back it up with 10 session recordings from new-channel non-converters.
**Decision rule:** If original-channel conversion is stable (~16-18%), it's a traffic problem — tighten targeting, skip the wizard. If both cohorts dropped, it's product — investigate onboarding friction. (Confidence: 2/5, will be 3-4 after analysis.)

---

## Decision Log

| Field | Value |
|---|---|
| **Decision** | Defer the onboarding wizard vs. simplification debate. Run a diagnostic cohort analysis first to identify whether the conversion drop is driven by traffic quality or product friction. |
| **Rationale** | The timing of the decline correlates with a Google Ads targeting change. If traffic quality is the cause, neither proposed solution addresses the root problem. A 1-day analysis can resolve this before committing a full sprint. |
| **Evidence used** | Mixpanel conversion data (18% → 12%), confirmed Google Ads targeting change timing, create-a-project activation rates (40% rate, 28% conversion for creators vs. 3% for non-creators) |
| **Remaining assumptions** | That create-a-project is the right activation event; that Mixpanel data is reliable for channel attribution; that the ad targeting change is the primary confound |
| **Confidence** | 2/5 — strong circumstantial signal but unvalidated. The cohort analysis is specifically designed to raise this. |
| **Next review** | End of week, after cohort analysis results are in. If traffic quality is confirmed, growth team owns next steps. If product, PM schedules session recording review for Monday. |
