import vercel from '@astrojs/vercel';
import { defineConfig } from 'astro/config';

// Static by default; only the /api/check endpoint renders on demand.
export default defineConfig({
  adapter: vercel(),
});
