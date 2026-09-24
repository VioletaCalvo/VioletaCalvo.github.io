// Prints the one-page CV of each language (dist/cv/<lang>/) to
// dist/cv/violeta-calvo-cv-<lang>.pdf. Fails if a CV overflows its A4 page.
import { createServer } from 'node:http';
import { readFile, stat } from 'node:fs/promises';
import { extname, join, normalize } from 'node:path';
import { chromium } from 'playwright';

const DIST = new URL('../dist/', import.meta.url).pathname;
const LANGS = ['en', 'es', 'fr'];
const PAGE = { width: 794, height: 1123 }; // A4 at 96 dpi

const types = {
  '.html': 'text/html; charset=utf-8',
  '.css': 'text/css',
  '.js': 'text/javascript',
  '.woff2': 'font/woff2',
  '.png': 'image/png',
  '.jpg': 'image/jpeg',
  '.webp': 'image/webp',
  '.svg': 'image/svg+xml',
};

const server = createServer(async (req, res) => {
  try {
    let path = normalize(join(DIST, decodeURIComponent(new URL(req.url, 'http://x').pathname)));
    if (!path.startsWith(DIST)) throw new Error('outside dist');
    if ((await stat(path)).isDirectory()) path = join(path, 'index.html');
    res.writeHead(200, { 'content-type': types[extname(path)] ?? 'application/octet-stream' });
    res.end(await readFile(path));
  } catch {
    res.writeHead(404).end();
  }
});
await new Promise((resolve) => server.listen(0, '127.0.0.1', resolve));
const base = `http://127.0.0.1:${server.address().port}`;

const browser = await chromium.launch();
try {
  const page = await browser.newPage({ viewport: PAGE });
  for (const lang of LANGS) {
    await page.goto(`${base}/cv/${lang}/`, { waitUntil: 'networkidle' });
    await page.evaluate(() => document.fonts.ready);

    const overflow = await page.evaluate(() => {
      const cv = document.querySelector('[data-cv-page]');
      return [...cv.children].map((col) => col.scrollHeight - col.clientHeight).filter((d) => d > 0);
    });
    if (overflow.length) throw new Error(`CV (${lang}) does not fit on one A4 page: overflows by ${overflow.join(', ')}px`);

    const file = join(DIST, 'cv', `violeta-calvo-cv-${lang}.pdf`);
    await page.pdf({ path: file, width: `${PAGE.width}px`, height: `${PAGE.height}px`, printBackground: true, pageRanges: '1' });
    console.log(`✓ ${file.replace(DIST, 'dist/')}`);
  }
} finally {
  await browser.close();
  server.close();
}
