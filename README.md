# 🪐 Design System Monorepo (Astro + React + Tailwind + Turborepo)

Este repositorio contiene una base para crear un sistema de diseño moderno y reutilizable usando:

- 🧩 **React** → Componentes reutilizables (`@ds/core-react`)
- 🌌 **Astro** → Sitio de demostración con integración de React (`astra-components`)
- 🎨 **Tailwind CSS** → Utilidades de estilo personalizadas
- 🚀 **Turborepo** + `pnpm` Workspaces → Gestión de monorepo eficiente

---

## ⚙️ Requisitos

- Node.js 18 o superior
- pnpm (`npm install -g pnpm`)

---

## 📦 Instalación

1. Clona este repositorio:

```bash
git clone https://tu-repo.git
cd design-system
````

2. Instala las dependencias:

```bash
pnpm install
````

## 🚀 Ejecutar el proyecto Astro de demo
Opción 1: desde la raíz del monorepo

```bash
pnpm --filter astra-components dev
````

Opción 2: desde dentro de astra-components

```bash
cd apps/astra-components
pnpm run dev
```

🔗 Luego visita: http://localhost:4321

## 📁 Estructura del monorepo

```psgl
design-system/
├── packages/
│   ├── core-react/       → Componentes en React (con Tailwind)
│   ├── core-astro/       → Wrappers para Astro que usan los React
│   └── tailwind-config/  → Configuración global de Tailwind
├── apps/
│   └── astra-components/       → Sitio Astro de prueba y demo
├── turbo.json            → Config de Turborepo
├── pnpm-workspace.yaml   → Config de workspaces para pnpm
```

## 🔍 Detalles técnicos

✅ Componente React (core-react)
Ubicación: packages/core-react/src/components/Button.tsx

```tsx
export function Button({ variant, ...props }) {
  return <button className="...">Botón</button>;
}
```

✅ Wrapper Astro (core-astro)

```astro
---
import { Button } from '@ds/core-react/components/Button';
---
<Button client:only="react">Botón desde React</Button>
```
📌 Usa client:only="react" para renderizarlo en Astro sin error.


✅ Próximos pasos sugeridos
Añadir más componentes (Input, Modal, Card, etc.)

Integrar Storybook para documentación visual

Añadir README.md por paquete

Publicar core-react como paquete NPM (npm publish)

Usar Starlight o Astro para documentación final

🤝 Créditos
Desarrollado por Astrahub