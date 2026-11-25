export type SeriesSlug =
  | 'the-dollar-ai-experiment'
  | 'get-a-job-with-ai'
  | 'build-a-hobby-with-ai'
  | 'build-the-machine'
  | 'ship-in-a-weekend';

export type FounderId = 'andy' | 'mike' | 'awesome';

export interface SeriesMeta {
  slug: SeriesSlug;
  index: number;
  name: string;
  shortLabel: string;
  shortTag: string;
  color: string;
  subtitle: string;
  thesis: string;
}

export const SERIES_LIST: SeriesMeta[] = [
  {
    slug: 'the-dollar-ai-experiment',
    index: 1,
    name: 'The $AI Experiment',
    shortLabel: 'The $AI Experiment',
    shortTag: 'Monetization',
    color: '#C8321E',
    subtitle: 'Can you make money using AI?',
    thesis:
      'Our flagship question, asked in public. We place small product bets, walk each one through the four gates, and report what it cost, what it earned, and what we would do differently. Revenue numbers appear only once a bet shows real signal.',
  },
  {
    slug: 'get-a-job-with-ai',
    index: 2,
    name: 'Get a Job with AI',
    shortLabel: 'Get a Job',
    shortTag: 'Hireability',
    color: '#1D4ED8',
    subtitle: 'Proof-of-work shipping for AI-era careers.',
    thesis:
      'Prompting tricks do not pass technical interviews or hiring bars. Shipping constraint-hardened products with documented trade-offs, automated tests, and honest postmortems does.',
  },
  {
    slug: 'build-a-hobby-with-ai',
    index: 3,
    name: 'Build a Hobby with AI',
    shortLabel: 'Hobby',
    shortTag: 'Passion tools',
    color: '#1B6E43',
    subtitle: 'Solving real physical-world personal problems.',
    thesis:
      'Software built for whitewater canyons, Friday dance floors, and offline edges where cloud AI wrappers fail on Day 1 and $0 running costs keep tools alive forever.',
  },
  {
    slug: 'build-the-machine',
    index: 4,
    name: 'Build the Machine',
    shortLabel: 'Build the Machine',
    shortTag: 'Workbenches',
    color: '#8A5E24',
    subtitle: 'Custom solvers, rig studios, and agent harnesses.',
    thesis:
      'Novices keep re-prompting outputs. Experienced builders wrap AI inside deterministic solvers, skeletal rigging workbenches, real-device bridges, and independent evals.',
  },
  {
    slug: 'ship-in-a-weekend',
    index: 5,
    name: 'Ship in a Weekend',
    shortLabel: 'Weekend',
    shortTag: 'Fast bets',
    color: '#111111',
    subtitle: 'Rapid 48-hour slices with honest keep-or-kill verdicts.',
    thesis:
      'Small scope, fast store submissions, and hard post-launch telemetry. Every weekend slice stays on the ledger whether it climbs the charts or gets killed.',
  },
];

export const SERIES_MAP: Record<SeriesSlug, SeriesMeta> = Object.fromEntries(
  SERIES_LIST.map((s) => [s.slug, s])
) as Record<SeriesSlug, SeriesMeta>;

export interface FounderMeta {
  id: FounderId;
  name: string;
  shortName: string;
  initials: string;
  avatarBg: string;
  role: string;
  lens: string;
  question: string;
  shortLine: string;
  bio: string;
}

export const FOUNDERS: Record<FounderId, FounderMeta> = {
  andy: {
    id: 'andy',
    name: 'Andy Chiang',
    shortName: 'Andy',
    initials: 'AC',
    avatarBg: '#111111',
    role: 'Design Leader',
    lens: 'Design',
    question: 'Will anyone love it?',
    shortLine: 'Design lead. Asks whether anyone will love it.',
    bio: 'Product design leader across fintech, health and consumer apps, including Wave, MindBeacon and Marco Polo. Co-built AskQuip with Mike.',
  },
  mike: {
    id: 'mike',
    name: 'Mike',
    shortName: 'Mike',
    initials: 'M',
    avatarBg: '#4A4843',
    role: 'Engineering Leader',
    lens: 'Engineering',
    question: 'Will it hold?',
    shortLine: 'Engineering lead. Asks whether it will hold.',
    bio: 'Systems and AI engineering leader focused on reliability harnesses, real-device QA, and $0-COGS edge infrastructure. Co-built AskQuip with Andy.',
  },
  awesome: {
    id: 'awesome',
    name: 'Awesome',
    shortName: 'Awesome',
    initials: 'AW',
    avatarBg: '#8C8880',
    role: 'Product Leader · Arpit',
    lens: 'Product',
    question: 'Will it pay?',
    shortLine: 'Product lead. Asks whether it will pay.',
    bio: 'Product leader across AI platforms and consumer software focused on 4-Gate scoping and physical-world constraints. Building the offline, $0-COGS app line.',
  },
};

export const FOUNDER_LIST: FounderMeta[] = [FOUNDERS.andy, FOUNDERS.mike, FOUNDERS.awesome];

export const CHARTER_ITEMS = [
  {
    n: '01',
    title: 'A live experiment, never a playbook.',
    body: 'We say "watch us try", because we are still trying. No solved systems, no guaranteed outcomes.',
  },
  {
    n: '02',
    title: 'Revenue only after real signal.',
    body: 'Exact numbers for a new bet are published once it shows real traction, so one lucky week never reads like a business.',
  },
  {
    n: '03',
    title: 'Credit goes to whoever built it.',
    body: 'Every product and teardown names its builders. AskQuip is Andy and Mike\'s, and we describe it as it is.',
  },
  {
    n: '04',
    title: 'Losing bets stay on the record.',
    body: 'Killed projects remain in the ledger with what we learned. Falsifying a bad idea is part of the work.',
  },
];

export const GATE_PHASES = [
  { gate: 1, name: 'Discovery', prompt: 'Problem discovery.', question: 'Is this worth building?' },
  { gate: 2, name: 'MVP', prompt: 'Middle-path MVP.', question: 'Small, with one intentional delight.' },
  { gate: 3, name: 'Trade-offs', prompt: 'Trade-offs.', question: 'What does each active user cost us?' },
  { gate: 4, name: 'Distribution', prompt: 'Shipped.', question: 'Real code, real distribution.' },
];

export function url(path = '/'): string {
  const base = import.meta.env.BASE_URL || '/';
  const cleanBase = base.endsWith('/') ? base : `${base}/`;
  const cleanPath = path.replace(/^\/+/, '');
  if (!cleanPath) return cleanBase;
  if (cleanPath.startsWith('#')) return `${cleanBase}${cleanPath}`;
  return `${cleanBase}${cleanPath}`;
}

export function formatAuthors(authorIds: FounderId[], includeRole = false): string {
  const names = authorIds.map((id) => FOUNDERS[id].shortName);
  if (includeRole && authorIds.length === 1) {
    const f = FOUNDERS[authorIds[0]];
    return `${f.shortName} · ${f.lens}`;
  }
  if (names.length === 1) return names[0];
  if (names.length === 2) return `${names[0]} & ${names[1]}`;
  return `${names.slice(0, -1).join(', ')} & ${names[names.length - 1]}`;
}

export function formatMonoDate(date: Date): string {
  const months = ['JAN', 'FEB', 'MAR', 'APR', 'MAY', 'JUN', 'JUL', 'AUG', 'SEP', 'OCT', 'NOV', 'DEC'];
  const d = String(date.getUTCDate()).padStart(2, '0');
  const m = months[date.getUTCMonth()];
  const y = date.getUTCFullYear();
  return `${d} ${m} ${y}`;
}

export function calcReadMinutes(body: string): number {
  const words = body.trim().split(/\s+/).filter(Boolean).length;
  return Math.max(1, Math.ceil(words / 230));
}
