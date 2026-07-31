import { defineCollection } from 'astro:content';
import { glob } from 'astro/loaders';
import { z } from 'astro/zod';

const posts = defineCollection({
  loader: glob({ base: './src/content/posts', pattern: '**/*.{md,mdx}' }),
  schema: z.object({
    title: z.string(),
    description: z.string(),
    pubDate: z.coerce.date(),
    updatedDate: z.coerce.date().optional(),
    tags: z.array(z.string()).default([]),
    draft: z.boolean().default(false),
  }),
});

const notes = defineCollection({
  loader: glob({ base: './src/content/notes', pattern: '**/*.{md,mdx}' }),
  schema: z.object({
    title: z.string(),
    pubDate: z.coerce.date(),
    tags: z.array(z.string()).default([]),
    draft: z.boolean().default(false),
  }),
});

const inbox = defineCollection({
  loader: glob({ base: './src/content/inbox', pattern: '**/*.{md,mdx}' }),
  schema: z.object({
    title: z.string(),
    createdAt: z.coerce.date(),
    trigger: z.enum(['studied', 'learned', 'built', 'trend']).default('learned'),
    tags: z.array(z.string()).default([]),
    source: z.string().optional(),
  }),
});

export const collections = { posts, notes, inbox };
