import type { MetadataRoute } from 'next';
 
export default function sitemap(): MetadataRoute.Sitemap {
    return [
        {
            url: 'https://downtownrealtyj.com',
            lastModified: new Date(),
            changeFrequency: 'weekly',
            priority: 1,
        },
        {
            url: 'https://downtownrealtyj.com/about',
            lastModified: new Date(),
            changeFrequency: 'monthly',
            priority: 0.8,
        },
        {
            url: 'https://downtownrealtyj.com/contact',
            lastModified: new Date(),
            changeFrequency: 'monthly',
            priority: 0.6,
        },
        {
            url: 'https://downtownrealtyj.com/privacy-policy',
            lastModified: new Date(),
            changeFrequency: 'yearly',
            priority: 0.3,
        }
    ];
}