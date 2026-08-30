# Diseño de seguridad

## Alcance actual

La landing es pública y de solo lectura. No procesa formularios, cuentas, pagos, archivos, cookies ni contenido proporcionado por visitantes. Toda la información visible se versiona dentro del repositorio.

## Controles incorporados

### Transporte

El despliegue de producción usa HTTPS administrado. La validación final debe comprobar certificado, redirección desde HTTP, ausencia de contenido mixto y renovación automática.

### Cabeceras

`next.config.ts` aplica:

- `X-Content-Type-Options: nosniff`
- `Referrer-Policy: strict-origin-when-cross-origin`
- `Permissions-Policy` con cámara, micrófono, geolocalización, pagos y USB deshabilitados
- `X-Frame-Options: DENY`
- `Cross-Origin-Opener-Policy: same-origin`
- `Cross-Origin-Resource-Policy: same-origin`
- `X-Permitted-Cross-Domain-Policies: none`
- `Origin-Agent-Cluster: ?1`
- Content Security Policy en producción
- HSTS inicial con duración conservadora

La política CSP limita recursos al mismo origen, bloquea objetos, marcos, formularios externos, atributos de script y atributos de estilo. El bootstrap del framework requiere scripts inline en la salida actual; por eso `script-src` permite `unsafe-inline`, pero no `unsafe-eval`. Si el framework habilita una ruta de nonce sin sacrificar la caché estática, esta decisión debe reevaluarse.

### Dependencias

- Versiones exactas en `package.json` y `package-lock.json`.
- Auditoría local y en CI.
- Dependabot semanal.
- CodeQL para JavaScript y TypeScript.
- Acciones de GitHub fijadas a SHA completa.
- Permisos mínimos en workflows.

Vinext permanece en una versión anterior a 1.0 porque es la capa de compatibilidad requerida por Sites. Sus actualizaciones no se fusionan automáticamente: cada cambio requiere instalación limpia, compilación, validación de rutas, metadata y cabeceras, además de una nueva prueba del despliegue.

### Secretos

El sitio no requiere secretos. `.env*`, `.dev.vars*`, certificados y claves privadas están ignorados. Las plantillas sanitizadas pueden conservarse con extensión `.example`.

Un valor con prefijo `NEXT_PUBLIC_` siempre debe considerarse público. `NEXT_PUBLIC_SITE_URL` contiene únicamente la URL canónica.

## Modelo de amenazas resumido

| Riesgo                       | Exposición actual        | Control                                                          |
| ---------------------------- | ------------------------ | ---------------------------------------------------------------- |
| XSS                          | Baja, contenido estático | React escaping, sin HTML de usuario, CSP                         |
| Clickjacking                 | Baja                     | `frame-ancestors 'none'` y `X-Frame-Options: DENY`               |
| Fuga de secretos             | Baja                     | Sin secretos de runtime, reglas de ignore, revisión de historial |
| Cadena de suministro         | Media                    | Lockfile, versiones exactas, audit, Dependabot, CodeQL           |
| Datos de cliente en capturas | Depende del contenido    | Revisión y autorización antes de publicar                        |
| Enlaces externos             | Limitada                 | Navegación explícita, `noopener noreferrer`                      |

## Cambios que exigen nueva revisión

### Formularios

Antes de activar un formulario se deben añadir validación en servidor, límites de tamaño, normalización, protección contra inyección de cabeceras, comprobación de origen, rate limiting, mitigación anti-bot, política de retención y un canal de error seguro.

### Analítica

Debe documentarse proveedor, finalidad, cookies, base legal, retención y mecanismo de consentimiento cuando aplique. La política de privacidad tiene que actualizarse antes del despliegue.

### Contenido remoto

Todo contenido procedente de CMS o API debe validarse. No se deben interpolar HTML, selectores, estilos o URLs sin una lista de permitidos y sanitización apropiada.

## Verificación de release

1. Ejecutar `npm ci` desde un estado limpio.
2. Ejecutar `npm run check`.
3. Ejecutar `npm run build`.
4. Ejecutar `npm run validate:build`.
5. Ejecutar `npm audit --audit-level=high`.
6. Verificar rutas, metadata y recursos generados.
7. Desplegar el commit exacto validado.
8. Comprobar certificado, redirección, cabeceras y contenido mixto en la URL pública.
9. Revisar que canonical, Open Graph, robots y sitemap usen el dominio final.

La divulgación responsable se gestiona mediante [SECURITY.md](../SECURITY.md).
