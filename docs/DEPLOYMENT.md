# Despliegue y HTTPS

## Requisitos

- Árbol de trabajo limpio o cambios de release claramente identificados.
- Node.js compatible con `.node-version`.
- Dependencias instaladas con `npm ci`.
- URL pública definitiva disponible para metadata.

## Validación previa

```powershell
npm ci
npm run check
npm run build
npm run validate:build
npm audit --audit-level=high
npm run audit:signatures
```

La compilación de release debe recibir `NEXT_PUBLIC_SITE_URL` con el origen final, sin barra final ni rutas adicionales.

## Publicación

El sitio se publica desde el commit exacto que pasó las comprobaciones. El repositorio de GitHub conserva el historial y ejecuta CI; OpenAI Sites administra la versión desplegada sobre infraestructura Cloudflare Worker.

No se deben almacenar credenciales en la URL del remoto, archivos versionados, logs o variables `NEXT_PUBLIC_*`.

## Verificación HTTPS

Después de desplegar:

1. Abrir la URL HTTPS y confirmar que el certificado corresponde al hostname.
2. Solicitar la URL HTTP y comprobar una redirección permanente hacia HTTPS.
3. Verificar que no existe contenido mixto.
4. Revisar las cabeceras de `/`, `/privacidad`, `/accesibilidad`, una ruta 404 y un recurso estático.
5. Confirmar que HSTS aparece solo sobre HTTPS.
6. Confirmar renovación automática del certificado en el proveedor.
7. Probar TLS con una herramienta independiente cuando se configure un dominio propio.

Las respuestas dinámicas del Worker y los recursos estáticos pueden recorrer capas distintas del proveedor. La evidencia de release debe indicar por separado qué cabeceras entrega cada tipo de respuesta, sin asumir que una CSP de documento también aparecerá en imágenes o archivos estáticos.

Si se conecta un dominio propio detrás de Cloudflare, el modo SSL debe ser `Full (strict)`. No se debe usar `Flexible`.

## Dominio propio

Antes de aumentar HSTS o solicitar preload:

- El dominio raíz y `www` deben resolver correctamente si ambos se publican.
- Todos los subdominios incluidos deben usar exclusivamente HTTPS.
- El certificado debe cubrir cada hostname publicado.
- La redirección canónica debe evitar cadenas.

HSTS preload es una decisión de larga duración. No se activa como parte del primer despliegue.

## Verificación de descubrimiento

- Canonical apunta a la URL pública.
- Open Graph usa una imagen accesible de 1200 × 630.
- `/robots.txt` permite las rutas públicas.
- `/sitemap.xml` contiene solo URLs canónicas.
- `/manifest.webmanifest` referencia iconos válidos.
- La 404 no es indexable.

## Reversión

Las versiones desplegadas deben conservar un identificador de commit. Si una validación posterior falla, se vuelve a publicar la última versión conocida como correcta y se corrige el problema en una rama nueva. No se reescribe el historial de `main`.
