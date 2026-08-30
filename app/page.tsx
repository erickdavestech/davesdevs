import {
  ArrowRight,
  ArrowUpRight,
  Check,
  Gauge,
  GitBranch,
  LayoutTemplate,
  LockKeyhole,
  Menu,
  MonitorSmartphone,
  PencilRuler,
  Rocket,
  SearchCheck,
  ShieldCheck,
} from 'lucide-react';
import Link from 'next/link';

const services = [
  {
    icon: SearchCheck,
    number: '01',
    title: 'Estrategia y contenido',
    description:
      'Defino qué debe entender el visitante, qué dudas necesita resolver y cuál será la acción principal del sitio.',
  },
  {
    icon: PencilRuler,
    number: '02',
    title: 'UX/UI con intención',
    description:
      'Convierto la estrategia en una interfaz clara, coherente y fácil de usar en cualquier tamaño de pantalla.',
  },
  {
    icon: MonitorSmartphone,
    number: '03',
    title: 'Desarrollo frontend',
    description:
      'Construyo una experiencia responsive, rápida, accesible y preparada para mantenerse sin peso innecesario.',
  },
  {
    icon: Rocket,
    number: '04',
    title: 'Publicación y soporte',
    description:
      'Configuro SEO técnico, dominio, HTTPS y una entrega documentada, lista para producción y evolución.',
  },
];

const processSteps = [
  {
    number: '01',
    title: 'Alineamos',
    description:
      'Hablamos del negocio, la audiencia, el objetivo del sitio y las restricciones reales del proyecto.',
  },
  {
    number: '02',
    title: 'Definimos',
    description:
      'Organizo la estructura, el recorrido principal y el contenido necesario antes de diseñar pantallas.',
  },
  {
    number: '03',
    title: 'Diseño y desarrollo',
    description:
      'Creo la interfaz responsive y construyo cada sección con revisiones claras en los puntos importantes.',
  },
  {
    number: '04',
    title: 'Probamos y publicamos',
    description:
      'Verifico contenido, accesibilidad, rendimiento, seguridad y comportamiento antes de la publicación.',
  },
];

const qualityItems = [
  {
    icon: Gauge,
    title: 'Rendimiento medido',
    description:
      'Sin animaciones pesadas ni dependencias que no aporten valor.',
  },
  {
    icon: LayoutTemplate,
    title: 'Accesibilidad como objetivo',
    description:
      'Semántica, teclado, contraste y criterios WCAG 2.2 AA desde el diseño.',
  },
  {
    icon: ShieldCheck,
    title: 'Seguridad por defecto',
    description:
      'HTTPS, cabeceras defensivas, dependencias auditadas y cero secretos en el cliente.',
  },
  {
    icon: LockKeyhole,
    title: 'Privacidad sin ruido',
    description:
      'Sin rastreadores ni cookies de marketing en esta versión de lanzamiento.',
  },
];

const faqs = [
  {
    question: '¿Qué incluye un proyecto web?',
    answer:
      'La estructura del sitio, dirección visual, diseño responsive, desarrollo, pruebas, configuración técnica esencial, publicación y documentación de entrega. El alcance exacto se define antes de comenzar.',
  },
  {
    question: '¿Cuánto tarda?',
    answer:
      'Depende del número de páginas, el estado del contenido y las integraciones necesarias. Después de revisar el proyecto recibirás un calendario realista con etapas y entregables claros.',
  },
  {
    question: '¿Puedes trabajar con una identidad visual existente?',
    answer:
      'Sí. Puedo adaptar el sitio a una identidad ya definida o crear una dirección visual digital coherente cuando la marca todavía no cuenta con un sistema completo.',
  },
  {
    question: '¿El sitio incluye dominio, hosting y SSL?',
    answer:
      'La publicación incluye configuración HTTPS/SSL y la base técnica necesaria. Dominio, hosting, correo y servicios de terceros se detallan por separado según lo que ya tengas contratado.',
  },
  {
    question: '¿Podré actualizar el contenido?',
    answer:
      'Sí. La solución se plantea según la frecuencia y el tipo de cambios que necesites hacer. También recibirás documentación para las tareas habituales.',
  },
];

export default function Home() {
  return (
    <>
      <a href="#contenido" className="skip-link">
        Saltar al contenido
      </a>

      <header className="site-header">
        <nav aria-label="Navegación principal" className="nav-shell">
          <a
            href="#inicio"
            className="brand"
            aria-label="DavesDevs, ir al inicio"
          >
            <span className="brand-mark" aria-hidden="true">
              DD
            </span>
            <span className="brand-copy">
              <strong>
                DavesDevs<span>.</span>
              </strong>
              <small>by ErickDavesTech</small>
            </span>
          </a>

          <div className="desktop-nav">
            <a href="#portafolio">Proyectos</a>
            <a href="#servicios">Servicios</a>
            <a href="#proceso">Proceso</a>
            <a href="#preguntas">Preguntas</a>
          </div>

          <a href="#contacto" className="nav-cta">
            Cuéntame tu proyecto
            <ArrowUpRight aria-hidden="true" size={16} />
          </a>

          <details className="mobile-nav">
            <summary aria-label="Menú de navegación">
              <Menu aria-hidden="true" size={20} />
              <span className="sr-only">Menú de navegación</span>
            </summary>
            <div>
              <a href="#portafolio">Proyectos</a>
              <a href="#servicios">Servicios</a>
              <a href="#proceso">Proceso</a>
              <a href="#preguntas">Preguntas</a>
              <a href="#contacto">Contacto</a>
            </div>
          </details>
        </nav>
      </header>

      <main id="contenido" tabIndex={-1}>
        <section
          id="inicio"
          className="hero-section"
          aria-labelledby="hero-title"
        >
          <div aria-hidden="true" className="hero-grid" />
          <div aria-hidden="true" className="hero-glow" />
          <div className="hero-shell">
            <div className="hero-layout">
              <div>
                <p className="hero-eyebrow">
                  <span />
                  Estudio independiente · Diseño y desarrollo web
                </p>
                <h1 id="hero-title">
                  Una web que explica bien tu negocio<span>.</span>
                </h1>
              </div>

              <div className="hero-aside">
                <p>
                  Diseño y desarrollo sitios para marcas que necesitan presentar
                  mejor su oferta, ganar confianza y convertir visitas en
                  conversaciones reales.
                </p>
                <div className="hero-actions">
                  <a href="#portafolio" className="button button-light">
                    Ver proyectos
                    <ArrowRight aria-hidden="true" size={17} />
                  </a>
                  <a href="#contacto" className="text-link text-link-lime">
                    Contar mi proyecto
                    <ArrowUpRight aria-hidden="true" size={16} />
                  </a>
                </div>
              </div>
            </div>

            <div className="trust-strip" aria-label="Criterios de trabajo">
              <p>
                <Check aria-hidden="true" size={15} /> Responsive desde el
                boceto
              </p>
              <p>
                <Check aria-hidden="true" size={15} /> Accesible por teclado
              </p>
              <p>
                <Check aria-hidden="true" size={15} /> Rápida en conexiones
                reales
              </p>
              <p>
                <Check aria-hidden="true" size={15} /> Entrega documentada
              </p>
            </div>
          </div>
        </section>

        <section
          className="intro-section section-pad"
          aria-labelledby="intro-title"
        >
          <div className="section-shell intro-grid">
            <p className="eyebrow">El criterio antes que el efecto</p>
            <div>
              <h2 id="intro-title" className="display-heading">
                No necesitas más ruido. Necesitas una web que tome buenas
                decisiones.
              </h2>
              <div className="intro-copy">
                <p>
                  Cada página parte de una pregunta simple: ¿qué debe entender,
                  sentir y hacer la persona que llega aquí?
                </p>
                <p>
                  DavesDevs reúne estrategia, diseño y desarrollo en una sola
                  dirección para que el resultado se vea consistente y funcione
                  como negocio.
                </p>
              </div>
            </div>
          </div>
        </section>

        <section
          id="portafolio"
          className="portfolio-section section-pad"
          aria-labelledby="portfolio-title"
        >
          <div className="section-shell">
            <div className="section-heading-row">
              <div>
                <p className="eyebrow">Proyectos seleccionados</p>
                <h2 id="portfolio-title" className="display-heading">
                  Diseño que responde a un problema concreto.
                </h2>
              </div>
              <p className="section-intro">
                Un caso publicado y direcciones de diseño identificadas con
                transparencia. Los trabajos de clientes se muestran únicamente
                con su autorización.
              </p>
            </div>

            <figure className="featured-visual">
              <img
                src="/og.png"
                width="1200"
                height="630"
                loading="lazy"
                decoding="async"
                alt="Sistema visual de DavesDevs con tres interfaces web minimalistas en negro, marfil y verde lima"
              />
              <figcaption>
                <span>Sistema visual DavesDevs</span>
                <span>Dirección creativa · UI · Desarrollo</span>
              </figcaption>
            </figure>

            <div className="project-grid">
              <article className="project-card project-card-wide">
                <div
                  className="project-visual project-visual-personal"
                  aria-hidden="true"
                >
                  <div className="browser-bar">
                    <span />
                    <span />
                    <span />
                    <small>erickdaves-itdev.pages.dev</small>
                  </div>
                  <div className="personal-preview">
                    <p>ERICK DAVES GARCIA PEREZ</p>
                    <strong>I solve the problem behind the ticket.</strong>
                    <span>Tier 2 IT Support · Flutter Developer</span>
                    <div>
                      <i />
                      <i />
                      <i />
                    </div>
                  </div>
                </div>
                <div className="project-copy">
                  <div>
                    <p className="project-meta">
                      Caso publicado · Portafolio profesional · 2026
                    </p>
                    <h3>Erick Daves ITDev</h3>
                    <p>
                      Una narrativa bilingüe que organiza soporte Tier 2,
                      desarrollo Flutter, proyectos y credenciales en una
                      experiencia profesional directa.
                    </p>
                  </div>
                  <a
                    href="https://erickdaves-itdev.pages.dev/"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="project-link"
                  >
                    Ver caso publicado
                    <ArrowUpRight aria-hidden="true" size={17} />
                  </a>
                </div>
              </article>

              <article className="project-card">
                <div
                  className="project-visual project-visual-editorial"
                  aria-hidden="true"
                >
                  <div className="concept-label">MESA / 24</div>
                  <div className="concept-copy">
                    <small>COCINA DE ORIGEN</small>
                    <strong>
                      Una mesa.
                      <br />
                      Todo el barrio.
                    </strong>
                    <span>RESERVAR</span>
                  </div>
                  <div className="concept-orbit" />
                </div>
                <div className="project-copy">
                  <div>
                    <p className="project-meta">
                      Concepto demostrativo · Hospitalidad
                    </p>
                    <h3>Dirección editorial</h3>
                    <p>
                      Una exploración visual para presentar historia, menú y
                      reserva con una jerarquía cálida y sin distracciones.
                    </p>
                  </div>
                  <span className="project-status">
                    Marca ficticia · No es trabajo de cliente
                  </span>
                </div>
              </article>

              <article className="project-card">
                <div
                  className="project-visual project-visual-product"
                  aria-hidden="true"
                >
                  <div className="product-sidebar">
                    <b>N</b>
                    <i />
                    <i />
                    <i />
                  </div>
                  <div className="product-main">
                    <small>OPERATIONS / WEEK 32</small>
                    <strong>Everything on track.</strong>
                    <div className="product-chart">
                      <i />
                      <i />
                      <i />
                      <i />
                      <i />
                      <i />
                      <i />
                    </div>
                    <div className="product-stats">
                      <span>
                        98.4<small>Uptime</small>
                      </span>
                      <span>
                        12<small>Active</small>
                      </span>
                    </div>
                  </div>
                </div>
                <div className="project-copy">
                  <div>
                    <p className="project-meta">
                      Concepto demostrativo · Producto B2B
                    </p>
                    <h3>Interfaz de operaciones</h3>
                    <p>
                      Una superficie de trabajo que prioriza estado, lectura
                      rápida y decisiones sin convertir los datos en decoración.
                    </p>
                  </div>
                  <span className="project-status">
                    Marca ficticia · No es trabajo de cliente
                  </span>
                </div>
              </article>
            </div>
          </div>
        </section>

        <section
          id="servicios"
          className="services-section section-pad"
          aria-labelledby="services-title"
        >
          <div className="section-shell">
            <div className="section-heading-row">
              <div>
                <p className="eyebrow">Servicios</p>
                <h2 id="services-title" className="display-heading">
                  Un proceso completo, sin piezas sueltas.
                </h2>
              </div>
              <p className="section-intro">
                Si aún no sabes exactamente qué necesitas, empezamos por el
                objetivo y las restricciones reales, no por la tecnología.
              </p>
            </div>

            <div className="services-grid">
              {services.map((service) => {
                const Icon = service.icon;
                return (
                  <article key={service.number} className="service-card">
                    <div className="service-card-top">
                      <span>
                        <Icon aria-hidden="true" size={22} />
                      </span>
                      <small>{service.number}</small>
                    </div>
                    <h3>{service.title}</h3>
                    <p>{service.description}</p>
                  </article>
                );
              })}
            </div>
          </div>
        </section>

        <section
          id="proceso"
          className="process-section section-pad"
          aria-labelledby="process-title"
        >
          <div className="section-shell process-layout">
            <div className="process-sticky">
              <p className="eyebrow eyebrow-light">Proceso</p>
              <h2
                id="process-title"
                className="display-heading display-heading-light"
              >
                Así avanza el proyecto, sin sorpresas.
              </h2>
              <p>Cada etapa se revisa antes de avanzar a la siguiente.</p>
            </div>

            <ol className="process-list">
              {processSteps.map((step) => (
                <li key={step.number}>
                  <span>{step.number}</span>
                  <div>
                    <h3>{step.title}</h3>
                    <p>{step.description}</p>
                  </div>
                </li>
              ))}
            </ol>
          </div>
        </section>

        <section
          className="quality-section section-pad"
          aria-labelledby="quality-title"
        >
          <div className="section-shell">
            <div className="quality-heading">
              <p className="eyebrow">Calidad de entrega</p>
              <h2 id="quality-title" className="display-heading">
                Lo que no se ve también importa.
              </h2>
              <p>
                Las afirmaciones técnicas se respaldan con pruebas, revisiones y
                documentación; no con etiquetas comerciales.
              </p>
            </div>

            <div className="quality-grid">
              {qualityItems.map((item) => {
                const Icon = item.icon;
                return (
                  <article key={item.title}>
                    <Icon aria-hidden="true" size={23} />
                    <h3>{item.title}</h3>
                    <p>{item.description}</p>
                  </article>
                );
              })}
            </div>
          </div>
        </section>

        <section
          className="about-section section-pad"
          aria-labelledby="about-title"
        >
          <div className="section-shell about-layout">
            <div className="about-mark" aria-hidden="true">
              DD
            </div>
            <div>
              <p className="eyebrow">Detrás del estudio</p>
              <h2 id="about-title" className="display-heading">
                Dirección directa, sin capas innecesarias.
              </h2>
              <p className="about-copy">
                DavesDevs es el estudio web de ErickDavesTech. Hablas
                directamente con quien define la estructura, diseña la interfaz
                y construye el sitio. Menos traspasos; más contexto en cada
                decisión.
              </p>
              <a
                href="https://erickdaves-itdev.pages.dev/"
                target="_blank"
                rel="noopener noreferrer"
                className="text-link"
              >
                Conocer el perfil técnico
                <ArrowUpRight aria-hidden="true" size={17} />
              </a>
            </div>
          </div>
        </section>

        <section
          id="preguntas"
          className="faq-section section-pad"
          aria-labelledby="faq-title"
        >
          <div className="section-shell faq-layout">
            <div>
              <p className="eyebrow">Preguntas frecuentes</p>
              <h2 id="faq-title" className="display-heading">
                Lo importante, antes de empezar.
              </h2>
            </div>
            <div className="faq-list">
              {faqs.map((faq) => (
                <details key={faq.question}>
                  <summary>
                    <span>{faq.question}</span>
                    <i aria-hidden="true" />
                  </summary>
                  <p>{faq.answer}</p>
                </details>
              ))}
            </div>
          </div>
        </section>

        <section
          id="contacto"
          className="contact-section section-pad"
          aria-labelledby="contact-title"
        >
          <div className="section-shell contact-layout">
            <div>
              <p className="eyebrow">Nuevo proyecto</p>
              <h2 id="contact-title">
                Hablemos de lo que tu web debe resolver.
              </h2>
            </div>
            <div className="contact-copy">
              <p>
                Cuéntame qué ofreces, a quién quieres llegar y qué debería pasar
                cuando alguien visite el sitio. Empezaremos con preguntas
                concretas y el siguiente paso recomendado.
              </p>
              <a
                href="https://github.com/erickdavestech"
                target="_blank"
                rel="noopener noreferrer"
                className="button button-dark"
              >
                Abrir conversación en GitHub
                <GitBranch aria-hidden="true" size={18} />
              </a>
              <small>
                Primera conversación sin compromiso. Sin listas de marketing ni
                llamadas insistentes.
              </small>
            </div>
          </div>
        </section>
      </main>

      <footer className="site-footer">
        <div className="section-shell footer-top">
          <a
            href="#inicio"
            className="brand brand-footer"
            aria-label="DavesDevs, volver al inicio"
          >
            <span className="brand-mark" aria-hidden="true">
              DD
            </span>
            <span className="brand-copy">
              <strong>
                DavesDevs<span>.</span>
              </strong>
              <small>by ErickDavesTech</small>
            </span>
          </a>
          <p>Webs hechas con criterio, cuidado y una entrega clara.</p>
          <nav aria-label="Enlaces del pie">
            <a href="#portafolio">Proyectos</a>
            <a href="#servicios">Servicios</a>
            <Link href="/privacidad">Privacidad</Link>
            <Link href="/accesibilidad">Accesibilidad</Link>
          </nav>
        </div>
        <div className="section-shell footer-bottom">
          <p>© 2026 ErickDavesTech. Todos los derechos reservados.</p>
          <a
            href="https://github.com/erickdavestech"
            target="_blank"
            rel="noopener noreferrer"
          >
            GitHub <ArrowUpRight aria-hidden="true" size={14} />
          </a>
        </div>
      </footer>
    </>
  );
}
