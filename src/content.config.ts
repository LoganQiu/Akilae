import { defineCollection, z } from 'astro:content';
import { glob } from "astro/loaders";

const blog = defineCollection({
  loader: glob({ pattern: "**/*.md", base: "./src/data/blog" }),
  schema: z.object({
    title: z.string(),
    subtitle: z.string().optional(),
    author: z.string().optional(),
    slug: z.string(),
    date: z.date(),
    categories: z.array(z.string()).optional(),
    tags: z.array(z.string()).optional(),
    draft: z.boolean().default(false),
  }),
});

export const collections = {
  blog,
};
