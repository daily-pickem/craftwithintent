export type ProductStatus = 'live' | 'beta' | 'open-source' | 'killed';

export interface ProductItem {
  slug: string;
  name: string;
  oneLiner: string;
  builtBy: string;
  status: ProductStatus;
  statusLabel: string;
  gate: 1 | 2 | 3 | 4;
  updatedAt: string;
  primaryCtaLabel?: string;
  primaryCtaUrl?: string;
  teardownSlug?: string;
  screenshot?: {
    src: string;
    alt: string;
  };
}

export const PRODUCTS: ProductItem[] = [
  {
    slug: 'askquip',
    name: 'AskQuip',
    oneLiner: 'A dictionary app for kids. Built by Andy and Mike; earns modest, real revenue.',
    builtBy: 'BUILT BY ANDY + MIKE',
    status: 'live',
    statusLabel: 'LIVE',
    gate: 4,
    updatedAt: '2026-11-20',
    primaryCtaLabel: 'Get the app',
    primaryCtaUrl: 'https://askquip.com',
    teardownSlug: 'ai-is-the-tool-craft-is-the-edge',
    screenshot: {
      src: 'images/askquip-web.webp',
      alt: 'AskQuip children dictionary app homepage and camera word lookup showcase',
    },
  },
  {
    slug: 'sortin-goods',
    name: "Sortin' Goods",
    oneLiner: 'A holiday goods-sorting puzzle game with multiplayer speed duels.',
    builtBy: 'BUILT BY ANDY + MIKE',
    status: 'live',
    statusLabel: 'LIVE · APP STORE',
    gate: 4,
    updatedAt: '2026-11-23',
    primaryCtaLabel: 'Play / Store',
    primaryCtaUrl: 'https://sortingood.dailypickgames.com',
    teardownSlug: 'sortin-goods-holiday-game-shipped-and-measured',
    screenshot: {
      src: 'images/sortingood-web.webp',
      alt: "Sortin' Goods holiday puzzle game homepage and live gameplay preview",
    },
  },
  {
    slug: 'quackdown',
    name: 'Quackdown',
    oneLiner: 'A duck-squad horde survivor RPG with solver-checked builds and portals.',
    builtBy: 'BUILT BY ANDY + MIKE',
    status: 'live',
    statusLabel: 'LIVE · APP STORE / PLAY',
    gate: 4,
    updatedAt: '2026-11-18',
    primaryCtaLabel: 'View site',
    primaryCtaUrl: 'https://quackdown.dailypickem.net',
    teardownSlug: 'the-8-app-workbench-matrix',
    screenshot: {
      src: 'images/quackdown-web.webp',
      alt: 'Quackdown horde survivor game storefront and playable portal preview',
    },
  },
  {
    slug: 'open-sesame',
    name: 'Open Sesame',
    oneLiner: 'A 45-vault tactile safecracking puzzle game verified by BFS solvers.',
    builtBy: 'BUILT BY DAILY PICK GAMES',
    status: 'live',
    statusLabel: 'LIVE · APP STORE / PLAY',
    gate: 4,
    updatedAt: '2026-11-23',
    primaryCtaLabel: 'Play slice',
    primaryCtaUrl: 'https://opensesame.dailypickem.net',
    teardownSlug: 'the-8-app-workbench-matrix',
    screenshot: {
      src: 'images/opensesame-web.webp',
      alt: 'Open Sesame 45-vault puzzle game site and interactive dial trailer',
    },
  },
  {
    slug: 'whitewater-co-pilot',
    name: 'Whitewater Co-Pilot',
    oneLiner: 'A river companion that works offline in granite canyons, at $0 cost of goods.',
    builtBy: 'BUILT BY AWESOME',
    status: 'beta',
    statusLabel: 'BETA · INTERNAL',
    gate: 3,
    updatedAt: '2026-11-24',
    teardownSlug: 'whitewater-co-pilot-zero-cogs-offline-blueprint',
  },
  {
    slug: 'ballroom-party-companion',
    name: 'Ballroom Party Companion',
    oneLiner: 'An offline-first Phone + Wear OS party dance companion calibrated to 82% Top-1.',
    builtBy: 'BUILT BY AWESOME',
    status: 'beta',
    statusLabel: 'BETA · INTERNAL',
    gate: 2,
    updatedAt: '2026-11-24',
    teardownSlug: 'ballroom-party-companion-zero-bars-of-signal',
  },
];

const STATUS_ORDER: Record<ProductStatus, number> = {
  live: 0,
  beta: 1,
  'open-source': 2,
  killed: 3,
};

export function sortedProducts(): ProductItem[] {
  return [...PRODUCTS].sort((a, b) => {
    const rankDiff = STATUS_ORDER[a.status] - STATUS_ORDER[b.status];
    if (rankDiff !== 0) return rankDiff;
    return b.updatedAt.localeCompare(a.updatedAt);
  });
}
