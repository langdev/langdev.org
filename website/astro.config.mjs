import { defineConfig } from 'astro/config'

export default defineConfig({
  site: 'https://blog.langdev.org',
  trailingSlash: 'never',
  markdown: {
    syntaxHighlight: false,
  },
})
