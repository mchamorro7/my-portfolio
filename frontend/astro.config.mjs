import { defineConfig } from 'astro/config';

import sanity from "astro-sanity";

// https://astro.build/config
export default defineConfig({
  integrations: [
    sanity({
      projectId: 'xqwb2285',
      dataset: 'production',
      useCdn: true,
    })
  ]
});