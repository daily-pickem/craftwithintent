---
title: "An autonomous Slack agent, graded by four eval harnesses"
dek: "What it took to trust an agent with real work, and where it still fails."
publishedAt: 2026-11-26
authors: ["mike"]
series: "build-the-machine"
gate: 3
featured: false
experimentStatus: "live"
heroImage:
  src: "images/eval-architecture.webp"
  alt: "Quip 6-Plane Architecture and 4-Harness Automated Evaluation Scorecard"
  caption: "LIVE HARNESS · 6 execution planes graded nightly across Skills, Routing, Mastery, and Structural Codebase Health."
plainEnglishTerms:
  - term: "Isolated git worktrees"
    plain: "Separate, sandboxed copies of our codebase folder where an AI builder can write and test code for one ticket without colliding with another ticket."
    why: "Jamming planning, coding, and QA into one giant chat causes context rot and breaks working features."
  - term: "4-harness replay evals"
    plain: "Four automated report cards calibrated to human benchmarks that grade our agent's conversations, skills, model cost, and structural code health every night."
    why: "If you let an AI grade its own homework, it gives itself an A+ while quality quietly decays."
---

Most "vibe coding" tutorials end at the ten-minute happy path. Then you run an AI workflow in production, and three things break immediately: yesterday's working flow regresses quietly, per-call model spend threatens gross margin, and platforms without clean APIs block automation cold.

The difference between a weekend demo and a reliable system is never a cleverer prompt. It is the engineering harness wrapped around the model.

## Separating planning from execution

We stopped running everything inside one long-running chat session. Instead, planning produces strict five-part issue specifications with explicit out-of-scope boundaries, independent builders work inside isolated git worktrees, and a separate reviewer audits the diff and live browser screenshots.

When an agent fixes a mistake twice, we encode the check into a deterministic script rather than repeating instructions in chat.

## Real-device bridges and $0 infrastructure

Where web portals lack public APIs or block datacenter requests, our on-device Phone Agent operates a real Android handset under strict human-approval gates for store submissions and spend.

Meanwhile, our routing ladder keeps simple lookups on fast, low-cost models and reserves heavier reasoning for design, root-cause debugging, and independent review—keeping fixed hosting and telemetry on $0 edge tiers.
