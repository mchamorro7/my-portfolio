import { defineConfig } from 'astro/config'
import sanity from 'astro-sanity'
import tailwind from '@astrojs/tailwind'
import react from '@astrojs/react'

// https://astro.build/config
export default defineConfig({
  integrations: [
    sanity({
      projectId: 'xqwb2285',
      dataset: 'production',
      apiVersion: '2023-03-28',
      useCdn: true
    }),
    tailwind({
      // Example: Disable injecting a basic `base.css` import on every page.
      // Useful if you need to define and/or import your own custom `base.css`.
      config: {
        applyBaseStyles: true
      }
    }),
    react()
  ]
})
