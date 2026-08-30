import type { Metadata } from 'next';
import { ArrowLeft } from 'lucide-react';
import Link from 'next/link';

export const metadata: Metadata = {
  title: 'Página no encontrada',
  robots: { index: false, follow: false },
};

export default function NotFound() {
  return (
    <main className="not-found-page">
      <span aria-hidden="true">404</span>
      <p>DavesDevs · Ruta no encontrada</p>
      <h1>Esta página no forma parte del proyecto.</h1>
      <Link href="/">
        <ArrowLeft aria-hidden="true" size={17} />
        Volver al inicio
      </Link>
    </main>
  );
}
