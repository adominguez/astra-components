# 🌌 Astra Components

Este repositorio contiene el **Design System oficial de AstraHub**, estructurado como un monorepo gestionado con Turborepo y `pnpm`. Incluye paquetes reutilizables tanto para proyectos **React** como **Astro**.

---

Este repositorio contiene una base para crear un sistema de diseño moderno y reutilizable usando:

- 🧩 **React** → Componentes reutilizables (`@astrahub/core-react`)
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
```

2. Instala las dependencias:

```bash
pnpm install
```

## 🚀 Ejecutar el proyecto Astro de demo
Opción 1: desde la raíz del monorepo

```bash
pnpm --filter app-astra-components dev
```

Opción 2: desde dentro de astra-components

```bash
cd apps/astra-components
pnpm run dev
```

🔗 Luego visita: http://localhost:4321

## 📁 Estructura del monorepo

````
astra-components/
├── packages/
│   ├── core-react/       → Componentes en React (con Tailwind)
│   ├── core-astro/       → Componentes de Astro (con Tailwind)
│   └── tailwind-config/  → Configuración global de Tailwind
├── apps/
│   └── astra-components/       → Sitio Astro de prueba y demo
├── turbo.json            → Config de Turborepo
├── pnpm-workspace.yaml   → Config de workspaces para pnpm
````

## 🔍 Detalles técnicos

✅ Componente React (core-react)
Ubicación: packages/core-react/src/components/Button.tsx

```tsx
export function Button({ variant, ...props }) {
  return <button className="...">Botón</button>;
}
```

✅ Componente de Astro (core-astro)

```astro
---
import { Button } from '@astrahub/core-astro';
import { Button as ButtonReact } from '@astrahub/core-react/components/Button';
---
<Button>Botón de Astro</Button>
<ButtonReact>Botón de React</ButtonReact>
```
📌 Usa client:only="react" para componentes dinámicos.


## ▶️ Desarrollo

```bash
pnpm --filter astro-docs dev
```


🤝 Créditos
Desarrollado por Astrahub