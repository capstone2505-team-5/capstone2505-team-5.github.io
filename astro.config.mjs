// @ts-check
import { defineConfig } from 'astro/config';
import react from '@astrojs/react';
export default defineConfig({
  site: 'https://llmonade.github.io/',
  integrations: [react()],
});
// https://astro.build/config
