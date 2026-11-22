import { defineCollection, z } from 'astro:content';
import { glob, file } from 'astro/loaders';

const projects = defineCollection({
  loader: glob({ pattern: '**/*.md', base: './src/content/projects', ignore: ['**/_*.md'] }),
  schema: z.object({
    title: z.string(),
    year: z.number(),
    type: z.enum(['short', 'feature', 'documentary', 'commercial', 'music-video', 'series', 'print']),
    role: z.array(z.string()),
    duration: z.string().optional(),
    festival: z.array(z.string()).optional(),
    description: z.string(),
    thumbnail: z.string(),
    heroImage: z.string().optional(),
    gallery: z.array(z.string()).optional(),
    videoUrl: z.string().optional(),
    status: z.enum(['completed', 'in-production', 'pre-production', 'development']).default('completed'),
    featured: z.boolean().default(false),
    order: z.number().default(0),
  }),
});

export const collections = { projects };