<p align="center">
  <img src="public/icon-192.png" width="88" height="88" alt="Monograma DD de DavesDevs" />
</p>

<h1 align="center">DavesDevs</h1>

<p align="center">
  Landing page de diseño y desarrollo web creada por <strong>ErickDavesTech</strong>.
</p>

<p align="center">
  <a href="https://github.com/erickdavestech/davesdevs/actions/workflows/quality.yml"><img alt="Quality checks" src="https://github.com/erickdavestech/davesdevs/actions/workflows/quality.yml/badge.svg" /></a>
  <a href="https://github.com/erickdavestech/davesdevs/actions/workflows/codeql.yml"><img alt="CodeQL" src="https://github.com/erickdavestech/davesdevs/actions/workflows/codeql.yml/badge.svg" /></a>
</p>

## Estado

- Producción: [davesdevs.aimond.chatgpt.site](https://davesdevs.aimond.chatgpt.site)
- Código fuente: `https://github.com/erickdavestech/davesdevs`
- Licencia: todos los derechos reservados.

## Propósito

DavesDevs presenta un estudio web independiente con una propuesta clara: estrategia, UX/UI, desarrollo y publicación en un solo proceso. La página está pensada para que un posible cliente pueda entender la oferta, revisar el enfoque de trabajo y abrir una conversación sin navegar por una estructura innecesariamente compleja.

La sección de portafolio separa de forma explícita el caso publicado de los conceptos demostrativos. No se inventan clientes, cifras, testimonios ni resultados.

## Características

- Diseño editorial minimalista con identidad propia.
- Responsive desde 320 píxeles hasta pantallas amplias.
- Navegación por teclado, enlace de salto, foco visible y movimiento reducido.
- Objetivo de accesibilidad WCAG 2.2 nivel AA.
- Metadata completa, Open Graph, Twitter Card, manifest, robots y sitemap.
- Tarjeta social de 1200 × 630 píxeles e iconos de marca.
- Páginas de privacidad, accesibilidad y error 404.
- Cabeceras defensivas y Content Security Policy en producción.
- Dependencias exactas, lockfile reproducible y auditoría sin vulnerabilidades conocidas.
- CI con formato, lint, TypeScript, build y auditoría de producción.
- CodeQL, Dependabot, plantillas de incidencias y política de seguridad.
- Sin formularios, cookies de marketing, analítica ni scripts de terceros.

## Tecnologías

| Capa     | Elección                    | Motivo                                                             |
| -------- | --------------------------- | ------------------------------------------------------------------ |
| Interfaz | React 19 + Vinext           | Componentes de servidor y salida compatible con Cloudflare Workers |
| Estilos  | Tailwind CSS 4 + CSS propio | Tokens compartidos y control visual sin runtime adicional          |
| Iconos   | Lucide React                | Iconografía lineal consistente y accesible                         |
| Lenguaje | TypeScript estricto         | Contratos verificables y errores tempranos                         |
| Calidad  | Oxlint + Oxfmt              | Comprobaciones rápidas y deterministas                             |
| Hosting  | OpenAI Sites                | Despliegue administrado sobre infraestructura Cloudflare con HTTPS |
| Fuente   | Git + GitHub                | Historial, revisión, CI y controles de seguridad                   |

## Inicio local

Requisitos:

- Node.js `22.13.0` o compatible con el rango declarado.
- npm `11.19.0`.

```powershell
npm ci
npm run dev
```

La aplicación estará disponible en `http://localhost:3000`.

## Comandos

| Comando                    | Función                                               |
| -------------------------- | ----------------------------------------------------- |
| `npm run dev`              | Inicia el entorno local                               |
| `npm run format`           | Formatea los archivos admitidos                       |
| `npm run format:check`     | Comprueba el formato sin modificar archivos           |
| `npm run lint`             | Ejecuta reglas de código, React, Next y accesibilidad |
| `npm run typecheck`        | Verifica TypeScript sin generar salida                |
| `npm run check`            | Ejecuta formato, lint y TypeScript                    |
| `npm run build`            | Genera la salida de producción                        |
| `npm run validate:build`   | Verifica la integridad de la salida generada          |
| `npm run audit`            | Revisa vulnerabilidades de dependencias               |
| `npm run audit:signatures` | Verifica firmas y attestations del registro           |
| `npm run start`            | Sirve localmente la salida Worker compilada           |

## Configuración

`NEXT_PUBLIC_SITE_URL` define el origen público usado para canonical, Open Graph, sitemap y datos estructurados.

```text
NEXT_PUBLIC_SITE_URL=https://davesdevs.aimond.chatgpt.site
```

Esta variable es pública y no debe contener secretos. El sitio no necesita claves para funcionar.

## Estructura

```text
app/
  accesibilidad/       Declaración de accesibilidad
  privacidad/          Política de privacidad
  globals.css          Sistema visual y estados responsive
  layout.tsx           Metadata global y datos estructurados
  page.tsx             Landing principal
components/
  document-page.tsx    Layout compartido para documentos
docs/                  Arquitectura, seguridad, contenido y despliegue
lib/
  site.ts              Constantes públicas del sitio
public/                Iconos y tarjeta social
.github/               CI, CodeQL, Dependabot y plantillas
```

## Documentación

- [Arquitectura](docs/ARCHITECTURE.md)
- [Seguridad](docs/SECURITY.md)
- [Guía de contenido y portafolio](docs/CONTENT-GUIDE.md)
- [Despliegue y HTTPS](docs/DEPLOYMENT.md)
- [Política de reporte de vulnerabilidades](SECURITY.md)
- [Cómo contribuir](CONTRIBUTING.md)

## Política de portafolio

Antes de publicar un trabajo de cliente se requiere autorización para el nombre, logotipo, capturas, testimonio y métricas. Los conceptos internos siempre deben identificarse como ficticios o demostrativos. Consulta la [guía de contenido](docs/CONTENT-GUIDE.md) antes de añadir un caso.

## Seguridad

No abras una incidencia pública para reportar una vulnerabilidad. Utiliza un aviso privado desde la pestaña **Security** del repositorio. La política completa está en [SECURITY.md](SECURITY.md).

## Derechos

Copyright © 2026 ErickDavesTech. Consulta [LICENSE.md](LICENSE.md). El código, la identidad, los textos y los recursos visuales no se licencian para reutilización sin autorización escrita.
