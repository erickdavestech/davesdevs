# Evidencia de validación

## Identidad del release

- Fecha: 29 de agosto de 2026.
- URL: `https://davesdevs.aimond.chatgpt.site`.
- Repositorio: `https://github.com/erickdavestech/davesdevs`.
- Rama: `main`.
- Acceso durante la validación: privado para el propietario.
- Commit de aplicación validado: `e424680eedc46c32336b966ddf8c08df2658ba8d`.

El acceso público requiere una aprobación separada del propietario. Publicar el sitio no modifica el código ni el artefacto ya validado.

## Reproducción limpia

La verificación se repitió desde una copia temporal que excluía `.git`, `node_modules` y `dist`. La carpeta temporal se eliminó después de comprobar los resultados.

| Comprobación                  | Resultado                                 |
| ----------------------------- | ----------------------------------------- |
| `npm ci`                      | Correcto, 200 paquetes instalados         |
| Política de scripts           | Sin paquetes no revisados ni advertencias |
| `npm run check`               | Formato, lint y TypeScript correctos      |
| `npm run build`               | Correcto                                  |
| `npm run validate:build`      | 7 archivos y 4 PNG verificados            |
| `npm run audit`               | 0 vulnerabilidades                        |
| `npm run audit:signatures`    | 200 firmas y 70 attestations verificadas  |
| Reproducción limpia adicional | Correcta y sin residuos temporales        |

`allowScripts` autoriza versiones exactas de las dependencias que necesitan ejecutar scripts de instalación. `strict-allow-scripts=true` hace fallar una instalación cuando aparece un script nuevo que no ha sido revisado.

## Automatización en GitHub

El primer push de `main` completó correctamente:

- Quality: instalación, formato, lint, TypeScript, build, integridad del artefacto, auditoría y firmas.
- CodeQL: análisis de JavaScript y TypeScript.
- Dependabot: comprobación de npm y GitHub Actions.

El repositorio tiene activados vulnerability alerts, actualizaciones de seguridad de Dependabot, secret scanning, push protection y reportes privados de vulnerabilidades.

## Rutas publicadas

Las solicitudes se hicieron contra el artefacto de producción mediante HTTPS.

| Ruta                    | Estado esperado | Estado obtenido |
| ----------------------- | --------------- | --------------- |
| `/`                     | 200             | 200             |
| `/privacidad`           | 200             | 200             |
| `/accesibilidad`        | 200             | 200             |
| `/robots.txt`           | 200             | 200             |
| `/sitemap.xml`          | 200             | 200             |
| `/manifest.webmanifest` | 200             | 200             |
| `/og.png`               | 200             | 200             |
| `/no-existe`            | 404             | 404             |

Los nueve archivos CSS y JavaScript referenciados por la página principal respondieron 200 en la versión activa. Los logs del Worker no mostraron respuestas 5xx ni ejecuciones fallidas durante las pruebas finales.

## HTTPS y transporte

- La conexión HTTPS validó correctamente la cadena del certificado.
- Certificado: `CN=*.aimond.chatgpt.site`.
- Emisor observado: Google Trust Services `WE1`.
- Vigencia observada: desde el 29 de agosto de 2026 hasta el 27 de noviembre de 2026.
- Protocolo negociado en la prueba: TLS 1.2.
- La URL HTTP respondió 302 hacia la misma URL HTTPS.
- No se encontraron referencias de contenido mixto en el HTML.
- HSTS de lanzamiento: `max-age=86400`.

La vigencia documenta una observación puntual. La administración y renovación del certificado pertenecen al proveedor de hosting y deben seguir monitorizándose.

## Cabeceras de documentos

Las páginas HTML y la 404 entregaron:

- Content Security Policy.
- `Strict-Transport-Security: max-age=86400`.
- `X-Frame-Options: DENY`.
- `X-Content-Type-Options: nosniff`.
- `Referrer-Policy: strict-origin-when-cross-origin`.
- Permissions Policy restrictiva.
- Cross-Origin Opener Policy.
- Cross-Origin Resource Policy.
- Origin Agent Cluster.

Los recursos públicos estáticos no heredan necesariamente todas las cabeceras de documento. `/og.png` respondió con el MIME correcto y la CSP de la página limita su uso al mismo origen y datos embebidos.

## Metadata y descubrimiento

- Canonical apunta a la URL HTTPS de producción.
- Open Graph usa `https://davesdevs.aimond.chatgpt.site/og.png`.
- No existen referencias a `localhost` en las respuestas verificadas.
- `robots.txt` enlaza el sitemap de producción.
- `sitemap.xml` contiene únicamente el origen de producción.
- El manifest es JSON válido y referencia iconos de 192 y 512 píxeles.
- La imagen social tiene 1200 × 630 píxeles.
- La 404 devuelve el estado correcto y se marca para no indexar.

## Accesibilidad y responsive

Se revisaron vistas de escritorio a 1440 × 1000 y móvil a 500 × 900, además de las reglas para anchos inferiores a 432 píxeles.

- Un único `main` y un único `h1`.
- Jerarquía de encabezados coherente.
- Enlace de salto funcional.
- Navegación y FAQ nativas mediante `details` y `summary`.
- Foco visible y reducción de movimiento.
- Imagen con texto alternativo, dimensiones y carga diferida.
- Enlaces externos protegidos con `noopener noreferrer`.
- Sin desplazamiento horizontal detectado.
- Contrastes principales medidos entre 5.43:1 y 10.95:1; el indicador de foco se mantuvo por encima de 3:1.

Esta evidencia demuestra las comprobaciones ejecutadas; no constituye una certificación formal de conformidad WCAG.

## Riesgos residuales aceptados

- Vinext permanece en una versión beta requerida por Sites; cada actualización necesita repetir toda esta validación.
- La salida actual del framework requiere `script-src 'unsafe-inline'`; `unsafe-eval` no está permitido.
- El CTA de contacto apunta al perfil confirmado de GitHub hasta que el propietario defina un correo, formulario o WhatsApp Business profesional.
- HSTS se mantiene deliberadamente corto durante el primer release; no se solicita preload.
