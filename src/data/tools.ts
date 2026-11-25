export interface ToolReceipt {
  no: string;
  slug: string;
  name: string;
  purpose: string;
  buy: string;
  buildPre: string;
  workbench: string;
  cogs: string;
  postSlug: string;
  screenshot?: {
    src: string;
    alt: string;
  };
}

export const TOOLS: ToolReceipt[] = [
  {
    no: 'NO. 001',
    slug: 'rig-lab',
    name: 'Rig Lab 2D Skeletal Studio',
    purpose: 'Rigs and poses 2D characters for game animation, without a commercial animation suite.',
    buy: '$329 / yr',
    buildPre: '4 weeks',
    workbench: '2 days',
    cogs: '$0.00 / MO',
    postSlug: 'the-8-app-workbench-matrix',
    screenshot: {
      src: 'images/rig-lab.webp',
      alt: 'Rig Lab 2D skeletal rigging workbench showing puppet joint sockets and keyframes',
    },
  },
  {
    no: 'NO. 002',
    slug: 'puzzle-solvers',
    name: 'Mathematical Puzzle Solvers',
    purpose: 'Proves every generated puzzle level is solvable without deadlocks before a player sees it.',
    buy: '—',
    buildPre: '2 weeks',
    workbench: '1 day',
    cogs: '$0.00 / MO',
    postSlug: 'the-8-app-workbench-matrix',
    screenshot: {
      src: 'images/opensesame-trailer-ui.webp',
      alt: 'Open Sesame solver-verified vault mechanics and interactive trailer preview',
    },
  },
  {
    no: 'NO. 003',
    slug: 'on-device-phone-agent',
    name: 'On-Device Phone Agent',
    purpose: 'Operates a real Android phone for workflows that lack APIs or block datacenter requests.',
    buy: '$250 / mo',
    buildPre: '6 weeks',
    workbench: '4 days',
    cogs: '$0.00 / MO',
    postSlug: 'autonomous-slack-agent-four-eval-harnesses',
    screenshot: {
      src: 'images/askquip-camera-qa.webp',
      alt: '4-panel real-device camera word scanner and voice search QA verification',
    },
  },
  {
    no: 'NO. 004',
    slug: 'replay-eval-harnesses',
    name: 'Replay Eval Harnesses',
    purpose: 'Replays real sessions and 4 independent scorecards against every agent or app change.',
    buy: '$150 / mo',
    buildPre: '3 weeks',
    workbench: '3 days',
    cogs: '$0.00 / MO',
    postSlug: 'autonomous-slack-agent-four-eval-harnesses',
    screenshot: {
      src: 'images/eval-architecture.webp',
      alt: '6-Plane codebase architecture and automated evaluation fitness dashboard',
    },
  },
  {
    no: 'NO. 005',
    slug: 'offline-river-map-stack',
    name: 'Offline Gov Map & Flow Stack',
    purpose: 'Serves public-domain river tiles and 1D Kalman snapping locally with zero cell coverage.',
    buy: '$199 / mo',
    buildPre: '5 weeks',
    workbench: '3 days',
    cogs: '$0.00 / MO',
    postSlug: 'whitewater-co-pilot-zero-cogs-offline-blueprint',
  },
  {
    no: 'NO. 006',
    slug: 'offline-ballroom-classifier',
    name: '529 KB Offline Dance Classifier',
    purpose: 'Distills beat and dance-style recognition into a 3.9 ms on-device model with zero API fees.',
    buy: '$99 / mo',
    buildPre: '4 weeks',
    workbench: '2 days',
    cogs: '$0.00 / MO',
    postSlug: 'ballroom-party-companion-zero-bars-of-signal',
  },
];
