# violetacalvo.github.io

CV online de Violeta Calvo, en inglés (`/`), castellano (`/es/`) y francés (`/fr/`).
Hecho con [Astro](https://astro.build) y publicado en GitHub Pages.

## Cambiar textos

- Textos de cada idioma: `src/i18n/en.ts`, `src/i18n/es.ts`, `src/i18n/fr.ts`
  (la web y el CV en PDF, sección `cv`).
- Fechas, enlaces y tecnologías (comunes a los tres idiomas): `src/data/cv.ts`.
  Los años de experiencia se calculan solos a partir de estas fechas.
- Foto y logo: `src/assets/`.

## Publicar

Al hacer merge a `master`, GitHub Actions construye la web, genera los PDFs
(`/cv/violeta-calvo-cv-<idioma>.pdf`) y la publica. En cada pull request se
ejecuta el mismo build para comprobar que todo funciona; si un CV no cabe en
una hoja A4, el build falla.

## En local (opcional)

```sh
npm install
npx playwright install chromium   # solo para generar los PDFs
npm run dev                       # http://localhost:4321
npm run build                     # comprobación de tipos + build + PDFs
```
