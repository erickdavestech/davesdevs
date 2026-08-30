# Contribuir

## Principios

- Mantener la experiencia rápida, accesible y fácil de entender.
- No introducir dependencias sin una necesidad concreta.
- No publicar información de clientes sin autorización.
- No añadir métricas, testimonios o afirmaciones sin evidencia.
- Mantener el código legible por estructura y nombres; este repositorio no usa comentarios dentro del código.
- Guardar toda decisión operativa importante en la documentación correspondiente.

## Flujo de trabajo

1. Crea una rama desde `main`.
2. Limita el cambio a un propósito claro.
3. Actualiza documentación y pruebas cuando cambie el comportamiento.
4. Ejecuta las comprobaciones locales.
5. Abre un pull request con contexto, alcance y evidencia de validación.

```powershell
npm ci
npm run check
npm run build
npm run validate:build
npm audit --audit-level=high
npm run audit:signatures
```

## Commits

Se utiliza un formato semántico breve:

- `chore:` preparación, herramientas o mantenimiento.
- `feat:` capacidad o experiencia nueva.
- `fix:` corrección de un defecto.
- `docs:` documentación.
- `refactor:` cambio interno sin comportamiento nuevo.
- `test:` validaciones automatizadas.

Ejemplo:

```text
feat: add accessible portfolio showcase
```

## Pull requests

Un pull request debe explicar:

- Problema u objetivo.
- Solución aplicada.
- Riesgos y límites.
- Rutas afectadas.
- Comprobaciones ejecutadas.
- Capturas solo cuando sean necesarias y no contengan datos privados.

No se aceptan secretos, credenciales, recursos sin licencia o cambios de contenido de cliente sin autorización verificable.
