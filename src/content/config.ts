import { defineCollection, z } from 'astro:content';

const appsCollection = defineCollection({
  type: 'content',
  schema: z.object({
    title: z.string(),
    tagline: z.string(),
    description: z.string(),
    playStoreId: z.string().optional(),
    storeLink: z.string().default('https://play.google.com/store/apps/dev?id=9029737187135646839'),
    icon: z.string(),
    category: z.string(),
    platform: z.string().default('Android Native'),
    rating: z.string().default('4.8 / 5'),
    downloads: z.string().default('10,000+'),
    features: z.array(z.string()).default([]),
    version: z.string().default('1.0.0'),
    order: z.number().default(0)
  })
});

const blogCollection = defineCollection({
  type: 'content',
  schema: z.object({
    title: z.string(),
    description: z.string(),
    pubDate: z.coerce.date(),
    updatedDate: z.coerce.date().optional(),
    author: z.string().default('NI18 Engineering Team'),
    appId: z.string().describe('Slug of the associated app in apps collection'),
    category: z.string(),
    tags: z.array(z.string()).default([]),
    image: z.string().optional(),
    featured: z.boolean().default(false),
    draft: z.boolean().default(false)
  })
});

const pagesCollection = defineCollection({
  type: 'content',
  schema: z.object({
    title: z.string(),
    description: z.string(),
    lastUpdated: z.coerce.date().optional()
  })
});

export const collections = {
  apps: appsCollection,
  blog: blogCollection,
  pages: pagesCollection
};
