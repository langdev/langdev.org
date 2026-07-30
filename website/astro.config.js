import sitemap from '@astrojs/sitemap'
import { defineConfig } from 'astro/config'

export default defineConfig({
  site: 'https://blog.langdev.org',
  trailingSlash: 'never',
  integrations: [sitemap()],
  markdown: {
    syntaxHighlight: false,
  },
})
