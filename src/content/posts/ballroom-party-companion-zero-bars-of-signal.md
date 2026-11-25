---
title: "Ballroom Party Companion, built for zero bars of signal"
dek: "An offline-first party app, and the one delight we refused to cut."
publishedAt: 2026-11-19
authors: ["awesome"]
series: "ship-in-a-weekend"
gate: 2
featured: false
experimentStatus: "live"
product: "ballroom-party-companion"
plainEnglishTerms:
  - term: "Quantized ONNX audio classifier"
    plain: "A tiny 529 KB neural network compressed to run right inside the phone's processor in under four milliseconds without calling the internet."
    why: "Paying per-song cloud lookup or LLM audio fees destroys unit economics on a busy dance floor and breaks completely when basement studio Wi-Fi drops."
  - term: "Calibrated uncertainty cap"
    plain: "A strict ceiling (<= 72% 'Likely') whenever multiple dances share the exact same tempo or a cover track creates ambiguity."
    why: "Nothing destroys user trust faster than an AI app proclaiming '79% Sure' on the wrong dance."
---

Beginner social dancers at Friday studio nights need four answers in seconds: what dance is playing, which four steps they know, a muted visual refresher, and help staying on Beat-1 without counting out loud.

Early on, we rejected bulky watch-to-watch sensors and hip belts in favor of a paired Android phone and Wear OS haptic Beat Coach with "Training Wheels" that fade out after eight bars.

## Catching the half-time trap

Five of nine common social dances overlap inside 114 to 132 BPM in 4/4 time. On an echoey studio PA, a 133 BPM big-band track locked at half-time (67 BPM) on a real phone and falsely claimed high confidence for the wrong style.

Fixing that required symmetric octave disambiguation, syncopation checks, and an offline five-layer stack anchored by a 529 KB distilled classifier—bringing Top-1 accuracy to 82% and Top-2 to 89% at $0 marginal inference cost.
