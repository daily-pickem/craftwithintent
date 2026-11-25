---
title: "Whitewater Co-Pilot: a $0-COGS offline blueprint"
dek: "A river companion that works with no signal and costs nothing to run."
publishedAt: 2026-11-24
authors: ["awesome"]
series: "build-a-hobby-with-ai"
gate: 3
featured: false
experimentStatus: "live"
product: "whitewater-co-pilot"
plainEnglishTerms:
  - term: "1D Kalman river snapping"
    plain: "A lightweight math filter that maps noisy canyon GPS dots onto the known curve of a river mile instead of measuring straight-line air distance."
    why: "In granite canyons and hairpin bends, standard GPS jumps across cliffs or triggers false rapid alarms while paddlers have both hands on a paddle."
  - term: "Loopback MBTiles server"
    plain: "A tiny offline map dispenser tucked inside the phone itself so mapping views read pre-downloaded public government tiles with zero cell signal."
    why: "Multi-day river trips last 3 to 14 days without reception, and cloud map APIs fail both offline and on unit economics."
---

Multi-day Class II–III+ packrafters and kayakers face five physical realities that break standard navigation apps: zero free hands, 75 to 90 dB whitewater noise, granite canyon GPS blackouts, meandering oxbow bends, and two weeks without cell service.

Before writing code, we locked a strict v1 boundary around those constraints and explicitly deferred shiny v2 features like offline voice Q&A and cross-platform watch ports.

## Isolating pure math and smoke-testing real APIs

The Android and Wear OS app splits pure domain logic into testable JVM modules backed by 132 unit and expedition integration tests plus a built-in Dry-Run Simulator. AI can iterate safely in seconds without needing a live rapid on every commit.

More importantly, we instructed our build workflow to smoke-test every free public government endpoint live instead of trusting API docs. Those probes caught dead imagery layers, zoom-level 404 errors at level 15, legacy USGS timeouts, and braided river islands before a single user downloaded a map pack.

## Zero-amnesia context across sessions

Every meaningful build decision lands chronologically in an in-repo handoff log detailing both what changed and why. Neither human builders nor fresh AI sessions start from zero when returning to the codebase weeks later.
