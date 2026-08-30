import type { MetadataRoute } from 'next';
import { SITE_URL } from '@/lib/site';

export default function sitemap(): MetadataRoute.Sitemap {
  const lastModified = new Date('2026-08-29T00:00:00.000Z');
  return [
    {
      url: new URL('/', SITE_URL).toString(),
      lastModified,
      changeFrequency: 'monthly',
      priority: 1,
    },
    {
      url: new URL('/privacidad', SITE_URL).toString(),
      lastModified,
      changeFrequency: 'yearly',
      priority: 0.3,
    },
    {
      url: new URL('/accesibilidad', SITE_URL).toString(),
      lastModified,
      changeFrequency: 'yearly',
      priority: 0.3,
    },
  ];
}
