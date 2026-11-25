import { defineCollection, z } from 'astro:content';

const imageSchema = z.object({
  src: z.string(),
  alt: z.string(),
  caption: z.string(),
});

export const posts = defineCollection({
  type: 'content',
  schema: z.object({
    title: z.string().max(65, 'Post title must be <= 65 characters'),
    dek: z.string().max(180),
    publishedAt: z.coerce.date(),
    updatedAt: z.coerce.date().optional(),
    authors: z.array(z.enum(['andy', 'mike', 'awesome'])).min(1),
    series: z.enum([
      'the-dollar-ai-experiment',
      'get-a-job-with-ai',
      'build-a-hobby-with-ai',
      'build-the-machine',
      'ship-in-a-weekend',
    ]),
    gate: z.number().int().min(1).max(4).optional(),
    featured: z.boolean().default(false),
    experimentStatus: z.enum(['live', 'shipped', 'killed']).default('live'),
    product: z.string().optional(),
    heroImage: imageSchema.optional(),
    secondaryImage: imageSchema.optional(),
    plainEnglishTerms: z
      .array(
        z.object({
          term: z.string(),
          plain: z.string(),
          why: z.string(),
        })
      )
      .default([]),
    pullQuote: z.string().optional(),
    tradeoffTable: z
      .object({
        caption: z.string().optional(),
        rows: z.array(
          z.object({
            option: z.string(),
            cost: z.string(),
            lockIn: z.string(),
            verdict: z.string(),
            selected: z.boolean().optional(),
            rejected: z.boolean().optional(),
          })
        ),
      })
      .optional(),
  }),
});

export const collections = { posts };
