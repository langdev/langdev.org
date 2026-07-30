import { defineCollection } from 'astro:content'
import { glob } from 'astro/loaders'
import { z } from 'astro/zod'

const posts = defineCollection({
  loader: glob({ base: '../posts', pattern: '*.md' }),
  schema: z.object({
    path: z.string().startsWith('/'),
    date: z.string(),
    title: z.string(),
    authors: z.string(),
  }),
})

export const collections = { posts }
