import type { Metadata } from 'next';
import { DocumentPage } from '@/components/document-page';

export const metadata: Metadata = {
  title: 'Accesibilidad',
  description: 'Compromiso y criterios de accesibilidad de DavesDevs.',
  alternates: { canonical: '/accesibilidad' },
};

export default function AccessibilityPage() {
  return (
    <DocumentPage
      eyebrow="Accesibilidad"
      title="La web debe funcionar para más personas."
      intro="DavesDevs se diseñó con WCAG 2.2 nivel AA como objetivo de referencia. Esta declaración no sustituye una certificación independiente."
      updated="29 de agosto de 2026"
    >
      <section>
        <h2>Medidas incorporadas</h2>
        <ul>
          <li>Estructura semántica y jerarquía coherente de encabezados.</li>
          <li>Navegación por teclado con indicadores de foco visibles.</li>
          <li>Enlace para saltar directamente al contenido principal.</li>
          <li>Contraste de color revisado para textos y controles.</li>
          <li>
            Objetivos táctiles amplios y diseño adaptable desde 320 píxeles.
          </li>
          <li>
            Texto alternativo en imágenes relevantes e iconos decorativos
            ocultos.
          </li>
          <li>Movimiento reducido cuando el dispositivo lo solicita.</li>
        </ul>
      </section>
      <section>
        <h2>Compatibilidad prevista</h2>
        <p>
          El contenido está preparado para navegadores modernos, ampliación de
          texto, navegación solo con teclado y tecnologías de asistencia que
          interpretan HTML semántico.
        </p>
      </section>
      <section>
        <h2>Limitaciones conocidas</h2>
        <p>
          Los conceptos visuales del portafolio condensan interfaces completas
          en un espacio reducido. Cada uno incluye una descripción textual
          equivalente; los casos publicados enlazan a su experiencia completa.
        </p>
      </section>
      <section>
        <h2>Comentarios y ayuda</h2>
        <p>
          Si encuentras una barrera, puedes comunicarla desde el perfil público
          de ErickDavesTech en GitHub. Indica la página, el dispositivo, el
          navegador y la acción que intentabas completar para facilitar la
          revisión.
        </p>
      </section>
    </DocumentPage>
  );
}
