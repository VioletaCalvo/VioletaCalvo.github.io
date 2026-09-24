import type { Lang } from '../data/cv';
import { en, type Content } from './en';
import { es } from './es';
import { fr } from './fr';

export type { Content };
export const content: Record<Lang, Content> = { en, es, fr };

export interface Years {
  software: number;
  total: number;
}

const escapeHtml = (s: string) =>
  s.replace(/&/g, '&amp;').replace(/</g, '&lt;').replace(/>/g, '&gt;').replace(/"/g, '&quot;');

/** Plain text with the years filled in (meta tags, PDF). */
export function fillYears(text: string, years: Years): string {
  return text.replace(/\{(software|total)\}/g, (_, k: keyof Years) => String(years[k]));
}

/** HTML with each number wrapped so the page can refresh it on load. */
export function yearsHtml(text: string, years: Years): string {
  return escapeHtml(text).replace(
    /\{(software|total)\}/g,
    (_, k: keyof Years) => `<span data-years="${k}">${years[k]}</span>`,
  );
}
