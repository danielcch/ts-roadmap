# ts-roadmap

Proyecto base para aprender TypeScript: typescript strict + tests + lint/format + CI.

## Requisitos
- Node LTS
- pnpm

## Comandos
Instalar dependencias:
```bash
pnpm install
```

Revisar todo (lint + typecheck + tests):
```bash
pnpm check
```

Formatear código:
```bash
pnpm format
```

Tests en modo watch:
```bash
pnpm test:watch
```

## Seguridad
- `.env` y `.env.*` están ignorados (no se suben).
- `gitleaks` + `husky` bloquean commits si detectan secretos.
- CI en GitHub Actions ejecuta `gitleaks` y `pnpm check`.