// @ts-check
import { defineConfig } from 'astro/config';

export default defineConfig({
  site: 'https://violetacalvo.github.io',
  trailingSlash: 'ignore',
  build: { format: 'directory' },
});
