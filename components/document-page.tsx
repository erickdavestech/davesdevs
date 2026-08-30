import { ArrowLeft, ArrowUpRight } from 'lucide-react';
import Link from 'next/link';
import type { ReactNode } from 'react';

type DocumentPageProps = {
  eyebrow: string;
  title: string;
  intro: string;
  updated: string;
  children: ReactNode;
};

export function DocumentPage({
  eyebrow,
  title,
  intro,
  updated,
  children,
}: DocumentPageProps) {
  return (
    <main className="document-page">
      <header className="document-header">
        <Link href="/" aria-label="Volver a DavesDevs">
          <span aria-hidden="true">DD</span>
          <strong>DavesDevs.</strong>
        </Link>
        <Link href="/" className="document-back">
          <ArrowLeft aria-hidden="true" size={16} />
          Volver al inicio
        </Link>
      </header>

      <article className="document-shell">
        <div className="document-heading">
          <p className="eyebrow">{eyebrow}</p>
          <h1>{title}</h1>
          <p>{intro}</p>
          <small>Última actualización: {updated}</small>
        </div>
        <div className="document-body">{children}</div>
      </article>

      <footer className="document-footer">
        <p>© 2026 ErickDavesTech.</p>
        <a
          href="https://github.com/erickdavestech"
          target="_blank"
          rel="noopener noreferrer"
        >
          Contacto en GitHub
          <ArrowUpRight aria-hidden="true" size={15} />
        </a>
      </footer>
    </main>
  );
}
