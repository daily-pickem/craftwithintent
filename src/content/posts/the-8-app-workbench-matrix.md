---
title: "The 8-app workbench matrix"
dek: "Eight bets, one scoring grid, and why most of them should die by Gate 2."
publishedAt: 2026-11-28
authors: ["andy"]
series: "the-dollar-ai-experiment"
gate: 1
featured: false
experimentStatus: "live"
product: "quackdown"
heroImage:
  src: "images/rig-lab.webp"
  alt: "18-Actor Variation C Rig Lab interactive 2D skeletal joint studio"
  caption: "WORKBENCH NO. 001 · Rig Lab 2D Skeletal Studio — locking puppet joint sockets before generating frames."
secondaryImage:
  src: "images/workbench-matrix.webp"
  alt: "Daily Pick'em staging matrix showing concept demos, development builds, and live store apps"
  caption: "PORTFOLIO MATRIX · Concept demos, development builds, and live store apps tracked across Gates 1–4."
plainEnglishTerms:
  - term: "2D skeletal rigging studio (Rig Lab)"
    plain: "A digital paper-puppet board that snaps heads, arms, and props onto exact joint sockets instead of redrawing every video frame from scratch."
    why: "Without anchored joints, AI-generated game characters warp and melt mid-motion, killing viewer retention before anyone clicks a store link."
  - term: "Mathematical puzzle solver"
    plain: "A fast automated playtester that walks through every generated puzzle level step by step before a human ever plays it."
    why: "Shipping even one unwinnable level makes players leave 1-star reviews and uninstall forever."
---

Prompting is free, and first drafts are cheap. Ask an AI to spit out an app screen, a game character, or a promo clip, and it looks impressive for about five seconds. Then you look closer, and buttons are buried, joints drift between frames, and users bounce in ten seconds.

Over our first eight live mobile apps and prototypes, one pattern showed up every single time: re-prompting final outputs hits a craft ceiling fast. Using AI is a skill, not a genie in a lamp.

## Stopping the prompt loop

When an AI hit a visual or structural wall, we stopped asking for better outputs and built narrow, deterministic tools to force quality:

- **Rig Lab 2D Skeletal Studio:** Locks joints and layered cutout limbs so animated shorts never tear at the seams.
- **3-Variation UX Showrooms:** Forces three genuinely distinct mobile layouts side-by-side before writing production code.
- **Mathematical Puzzle Solvers:** Verifies solvability across 45 to 100 levels automatically rather than trusting an LLM to guess fun difficulty.
- **7-Day Kill Gates:** Audits retention and view velocity on a fixed clock so losing creative formats are retired quickly.

## Grading eight bets at Gate 1

Building faster only helps if we are ruthless about what deserves Gate 3 engineering time. Every idea in our studio matrix now enters Gate 1 with one question: is this solving a concrete daily trigger with a clear cold-start distribution wedge, or is it just easy to build?

Most shiny prototypes belong in the archive by Gate 2. Keeping killed bets on the record is how we avoid fooling ourselves with busywork.
