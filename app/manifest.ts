import type { MetadataRoute } from 'next';

export default function manifest(): MetadataRoute.Manifest {
  return {
    name: 'DavesDevs by ErickDavesTech',
    short_name: 'DavesDevs',
    description:
      'Diseño y desarrollo web con criterio, cuidado y una entrega clara.',
    start_url: '/',
    display: 'standalone',
    background_color: '#f3f1e9',
    theme_color: '#101310',
    icons: [
      {
        src: '/icon-192.png',
        sizes: '192x192',
        type: 'image/png',
      },
      {
        src: '/icon-512.png',
        sizes: '512x512',
        type: 'image/png',
      },
    ],
  };
}
