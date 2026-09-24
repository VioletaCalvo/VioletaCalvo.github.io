// Facts shared by every language: dates, links and technologies.
// Translatable text lives in src/i18n/<lang>.ts.

export const langs = ['en', 'es', 'fr'] as const;
export type Lang = (typeof langs)[number];

export const homePath: Record<Lang, string> = { en: '/', es: '/es/', fr: '/fr/' };
export const cvPdfPath = (lang: Lang) => `/cv/violeta-calvo-cv-${lang}.pdf`;

export const contact = {
  email: 'violeta.itt@gmail.com',
  website: 'https://violetacalvo.github.io',
  github: { url: 'https://github.com/VioletaCalvo', handle: 'VioletaCalvo' },
  linkedin: {
    url: 'https://www.linkedin.com/in/violeta-calvo-ilundain-46b47932',
    handle: 'violeta-calvo-ilundain',
  },
  instagram: { url: 'https://www.instagram.com/katuarraina', handle: '@katuarraina' },
};

// Dates are ISO days. `end: null` means "present".
export interface Range {
  start: string;
  end: string | null;
}

export type JobId = 'sustrailab' | 'hiboo' | 'greenly' | 'flitdesk' | 'brozerly';
export type BreakId = 'health' | 'family';
export type EarlierId = 'ulma' | 'hoff' | 'bonopark' | 'gamesa' | 'schneider';

export const jobs: ({ id: JobId; company: string; url?: string; tech: string[] } & Range)[] = [
  {
    id: 'sustrailab',
    company: 'SustraiLab',
    start: '2025-06-01',
    end: null,
    tech: [],
  },
  {
    id: 'hiboo',
    company: 'Hiboo',
    url: 'https://www.hiboo.io',
    start: '2024-05-02',
    end: '2025-01-13',
    tech: ['TypeScript', 'Node.js', 'React', 'Express', 'PostgreSQL', 'GraphQL', 'REST'],
  },
  {
    id: 'greenly',
    company: 'Greenly',
    url: 'https://www.greenly.earth',
    start: '2022-04-04',
    end: '2023-06-27',
    tech: ['Node.js', 'React', 'Express', 'TSOA', 'PostgreSQL', 'TypeORM', 'Heroku', 'AWS'],
  },
  {
    id: 'flitdesk',
    company: 'Flitdesk',
    url: 'https://www.flitdesk.com',
    start: '2020-07-14',
    end: '2022-03-04',
    tech: ['Node.js', 'NestJS', 'Next.js', 'LoopBack', 'GraphQL', 'TypeScript', 'Stripe API', 'GCP', 'MongoDB'],
  },
  {
    id: 'brozerly',
    company: 'Brozerly',
    start: '2015-03-01',
    end: '2018-11-30',
    tech: ['Meteor', 'MongoDB', 'JavaScript', 'CoffeeScript', 'Stripe API', 'Jekyll', 'Heroku', 'AWS'],
  },
];

export const careerBreaks: ({ id: BreakId } & Range)[] = [
  { id: 'health', start: '2023-06-28', end: '2024-05-01' },
  { id: 'family', start: '2018-12-01', end: '2020-07-13' },
];

export const earlier: ({ id: EarlierId; company: string; url?: string; industrial: boolean } & Range)[] = [
  { id: 'ulma', company: 'ULMA Embedded Solutions', url: 'http://www.ulmaembedded.com', start: '2014-05-01', end: '2014-09-30', industrial: false },
  { id: 'hoff', company: 'HOFF distribution', url: 'https://youtu.be/u1Z9eipeNeU', start: '2014-11-01', end: '2014-12-31', industrial: false },
  { id: 'bonopark', company: 'Bonopark', url: 'https://www.dbizi.com/about/station/', start: '2011-09-01', end: '2013-03-30', industrial: true },
  { id: 'gamesa', company: 'Matis Hispania · Gamesa', url: 'https://www.siemensgamesa.com/', start: '2007-07-01', end: '2009-06-30', industrial: true },
  { id: 'schneider', company: 'Schneider Electric', url: 'https://www.se.com/', start: '2004-03-01', end: '2007-05-30', industrial: true },
];

// Timeline order: jobs and career breaks, newest first.
export const timeline = [
  ...jobs.map((j) => ({ kind: 'job' as const, ...j })),
  ...careerBreaks.map((b) => ({ kind: 'break' as const, ...b })),
].sort((a, b) => b.start.localeCompare(a.start));

// ---- Years of experience -------------------------------------------------
// Only paid engineering time counts: software jobs plus the industrial jobs
// (internships and career breaks are left out). The page recomputes these on
// load with the same ranges, so the numbers stay current between deploys.

const MS_PER_YEAR = 1000 * 60 * 60 * 24 * 365;

export const experienceRanges = {
  software: jobs.map(({ start, end }) => ({ start, end })),
  industrial: earlier.filter((e) => e.industrial).map(({ start, end }) => ({ start, end })),
};

export function yearsOf(ranges: Range[], now = new Date()): number {
  const ms = ranges.reduce(
    (sum, r) => sum + ((r.end ? new Date(r.end) : now).getTime() - new Date(r.start).getTime()),
    0,
  );
  return Math.floor(ms / MS_PER_YEAR);
}

export function experienceYears(now = new Date()) {
  return {
    software: yearsOf(experienceRanges.software, now),
    total: yearsOf([...experienceRanges.software, ...experienceRanges.industrial], now),
  };
}

// ---- Date formatting -----------------------------------------------------

export function monthYear(iso: string, lang: Lang): string {
  const s = new Intl.DateTimeFormat(lang, { month: 'short', year: 'numeric', timeZone: 'UTC' }).format(
    new Date(iso),
  );
  return s;
}

export function year(iso: string): string {
  return iso.slice(0, 4);
}

// Whole months between two dates, counting both the first and last month.
export function monthsBetween(r: Range, now = new Date()): number {
  const a = new Date(r.start);
  const b = r.end ? new Date(r.end) : now;
  return (b.getUTCFullYear() - a.getUTCFullYear()) * 12 + (b.getUTCMonth() - a.getUTCMonth()) + 1;
}
