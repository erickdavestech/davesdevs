import type { Metadata } from 'next';
import { DocumentPage } from '@/components/document-page';

export const metadata: Metadata = {
  title: 'Privacidad',
  description:
    'Cómo DavesDevs trata la información y protege la privacidad de sus visitantes.',
  alternates: { canonical: '/privacidad' },
};

export default function PrivacyPage() {
  return (
    <DocumentPage
      eyebrow="Privacidad"
      title="Una experiencia clara también con tus datos."
      intro="Esta política describe el funcionamiento de la versión pública actual de DavesDevs y cambiará si el sitio incorpora nuevas funciones."
      updated="29 de agosto de 2026"
    >
      <section>
        <h2>Información que recopila esta web</h2>
        <p>
          DavesDevs no utiliza formularios, cuentas, cookies de analítica,
          píxeles publicitarios ni rastreadores de marketing en esta versión. La
          navegación principal no solicita datos personales.
        </p>
      </section>
      <section>
        <h2>Registros técnicos</h2>
        <p>
          La infraestructura de alojamiento puede procesar registros técnicos
          limitados, como dirección IP, fecha, recurso solicitado y datos del
          navegador, para entregar el sitio, prevenir abuso y mantener la
          seguridad del servicio.
        </p>
      </section>
      <section>
        <h2>Enlaces externos</h2>
        <p>
          Los enlaces a GitHub y al portafolio técnico abren servicios
          independientes. Al continuar hacia ellos, se aplican sus propias
          políticas de privacidad y condiciones de uso.
        </p>
      </section>
      <section>
        <h2>Contacto</h2>
        <p>
          El contacto inicial se realiza desde el perfil público de
          ErickDavesTech en GitHub. La información que decidas compartir allí
          será tratada dentro de ese servicio y únicamente para responder a tu
          solicitud.
        </p>
      </section>
      <section>
        <h2>Cambios</h2>
        <p>
          Si se incorporan formularios, analítica, pagos u otras integraciones,
          esta política se actualizará antes de activar esas funciones y
          explicará los proveedores, finalidades y plazos de conservación
          correspondientes.
        </p>
      </section>
    </DocumentPage>
  );
}
