import { defineCollection, z } from 'astro:content';

const blogCollection = defineCollection({
  type: 'content',
  schema: z.object({
    title: z.string(),
    description: z.string(),
    pubDate: z.coerce.date(),
    updatedDate: z.coerce.date().optional(),
    author: z.string().default('NI18 Engineering Team'),
    category: z.string(),
    tags: z.array(z.string()).default([]),
    image: z.string().optional(),
    featured: z.boolean().default(false),
    draft: z.boolean().default(false)
  })
});

const servicesCollection = defineCollection({
  type: 'content',
  schema: z.object({
    title: z.string(),
    description: z.string(),
    icon: z.string(),
    summary: z.string(),
    features: z.array(z.string()).default([]),
    order: z.number().default(0)
  })
});

const productsCollection = defineCollection({
  type: 'content',
  schema: z.object({
    title: z.string(),
    description: z.string(),
    icon: z.string(),
    summary: z.string(),
    features: z.array(z.string()).default([]),
    link: z.string().optional()
  })
});

const appsCollection = defineCollection({
  type: 'content',
  schema: z.object({
    title: z.string(),
    description: z.string(),
    platform: z.string().default('Android'),
    icon: z.string(),
    storeLink: z.string().optional(),
    rating: z.string().optional(),
    downloads: z.string().optional()
  })
});

const caseStudiesCollection = defineCollection({
  type: 'content',
  schema: z.object({
    title: z.string(),
    client: z.string(),
    description: z.string(),
    summary: z.string(),
    metrics: z.array(z.string()).default([]),
    image: z.string().optional()
  })
});

const careersCollection = defineCollection({
  type: 'content',
  schema: z.object({
    title: z.string(),
    department: z.string(),
    location: z.string().default('Remote / India'),
    type: z.string().default('Full-Time'),
    experience: z.string()
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
  blog: blogCollection,
  services: servicesCollection,
  products: productsCollection,
  apps: appsCollection,
  'case-studies': caseStudiesCollection,
  careers: careersCollection,
  pages: pagesCollection
};
