import type { MetadataRoute } from 'next';
import { projects } from '../data/projectData';

const base = 'https://downtownrealtyj.com';

export default function sitemap(): MetadataRoute.Sitemap {
    const now = new Date();
    return [
        { url: base, lastModified: now, changeFrequency: 'weekly', priority: 1 },
        { url: `${base}/projects`, lastModified: now, changeFrequency: 'weekly', priority: 0.9 },
        ...projects.map((p) => ({
            url: `${base}/projects/${p.slug}`,
            lastModified: now,
            changeFrequency: 'weekly' as const,
            priority: 0.8,
        })),
        { url: `${base}/about`, lastModified: now, changeFrequency: 'monthly', priority: 0.8 },
        { url: `${base}/contact`, lastModified: now, changeFrequency: 'monthly', priority: 0.6 },
        { url: `${base}/privacy-policy`, lastModified: now, changeFrequency: 'yearly', priority: 0.3 },
    ];
}