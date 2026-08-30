import type { Metadata, Viewport } from 'next';
import {
  GITHUB_URL,
  PROFILE_URL,
  SITE_DESCRIPTION,
  SITE_NAME,
  SITE_TITLE,
  SITE_URL,
} from '@/lib/site';
import './globals.css';

export const metadata: Metadata = {
  metadataBase: new URL(SITE_URL),
  title: {
    default: SITE_TITLE,
    template: `%s | ${SITE_NAME}`,
  },
  description: SITE_DESCRIPTION,
  applicationName: SITE_NAME,
  authors: [{ name: 'ErickDavesTech', url: PROFILE_URL }],
  creator: 'ErickDavesTech',
  publisher: 'ErickDavesTech',
  category: 'technology',
  keywords: [
    'diseño web',
    'desarrollo web',
    'UX/UI',
    'landing page',
    'frontend',
    'DavesDevs',
    'ErickDavesTech',
  ],
  alternates: {
    canonical: '/',
  },
  icons: {
    icon: [
      { url: '/favicon.svg', type: 'image/svg+xml' },
      { url: '/favicon-32.png', sizes: '32x32', type: 'image/png' },
    ],
    apple: [
      { url: '/apple-touch-icon.png', sizes: '180x180', type: 'image/png' },
    ],
  },
  manifest: '/manifest.webmanifest',
  openGraph: {
    type: 'website',
    locale: 'es_ES',
    url: '/',
    siteName: SITE_NAME,
    title: SITE_TITLE,
    description: SITE_DESCRIPTION,
    images: [
      {
        url: '/og.png',
        width: 1200,
        height: 630,
        alt: 'DavesDevs, diseño y desarrollo web',
      },
    ],
  },
  twitter: {
    card: 'summary_large_image',
    title: SITE_TITLE,
    description: SITE_DESCRIPTION,
    images: ['/og.png'],
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      'max-image-preview': 'large',
      'max-snippet': -1,
      'max-video-preview': -1,
    },
  },
};

export const viewport: Viewport = {
  width: 'device-width',
  initialScale: 1,
  colorScheme: 'light',
  themeColor: '#101310',
};

const structuredData = {
  '@context': 'https://schema.org',
  '@type': 'ProfessionalService',
  name: SITE_NAME,
  alternateName: 'DavesDevs by ErickDavesTech',
  url: SITE_URL,
  description: SITE_DESCRIPTION,
  founder: {
    '@type': 'Person',
    name: 'ErickDavesTech',
    url: PROFILE_URL,
  },
  sameAs: [GITHUB_URL, PROFILE_URL],
  serviceType: [
    'Diseño web',
    'UX/UI',
    'Desarrollo frontend',
    'Publicación web',
  ],
};

export default function RootLayout({
  children,
}: Readonly<{ children: React.ReactNode }>) {
  return (
    <html lang="es">
      <body>
        {children}
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify(structuredData).replaceAll('<', '\\u003c'),
          }}
        />
      </body>
    </html>
  );
}
