# 🎾 JuegoTenis — Sitio Web Oficial

Sitio web moderno, rápido y responsive para **JuegoTenis**, una escuela de tenis que ofrece clases para adultos, niños y adolescentes.  
Desarrollado con tecnologías de última generación, priorizando **experiencia de usuario, rendimiento, accesibilidad y SEO**.

---

## 📌 Descripción

**JuegoTenis** es una plataforma web institucional que presenta los servicios de la escuela:  
clases por niveles y edades, torneos, sedes, información institucional y llamados a la acción para reservas y contacto.

El sitio fue diseñado con una estética moderna, animaciones sutiles y una arquitectura sólida, pensada para escalar y mantenerse en el tiempo.

---

## 🚀 Stack Tecnológico

- **Next.js 16 (App Router)** — Framework React de última generación
- **React 19** — UI moderna con optimizaciones automáticas
- **TypeScript** — Tipado estricto y mantenibilidad
- **Tailwind CSS v4** — Sistema de diseño basado en utilidades
- **React Compiler** — Optimización automática del renderizado
- **PostCSS** — Procesamiento avanzado de estilos

---

## ✨ Características Principales

### 🧭 Secciones del Sitio

1. **Hero**

   - Imagen de fondo optimizada
   - Overlay de contraste
   - CTA principal para reserva de clase de prueba

2. **Clases**

   - **Adultos**
     - Clases individuales y grupos reducidos
     - Niveles: Inicial, Intermedio y Avanzado
   - **Niños & Adolescentes**
     - Metodología _Play & Stay_
     - Canchas por colores (Roja, Naranja, Verde y Amarilla)
     - Badges visuales tipo pill

3. **Torneos**

   - Información y presentación de competencias

4. **Quiénes Somos**

   - Identidad y valores de la escuela

5. **Sedes**

   - Ubicaciones con foco visual y claridad

6. **CTA Final**
   - Llamado a la acción de contacto

---

## 🧩 Componentes Interactivos

- **Header Sticky** con efecto al hacer scroll
- **Acordeón de Clases** expandible/colapsable
- **Badges de Canchas** con colores personalizados
- **Botones CTA** con variantes (primary, secondary, WhatsApp)

---

## 🎨 Sistema de Diseño

### 🎨 Paleta de Colores

Sistema basado en **OKLCH** para mayor consistencia visual:

- **Brand**: `brand-50 → brand-950` (naranja tenis)
- **Surface**: `surface-0 → surface-950`
- **Text**: `text-50 → text-950`
- **Play & Stay Courts**:
  - `court-red`
  - `court-orange`
  - `court-green`
  - `court-yellow`

### 🔤 Tipografía

- **Fuente principal**: Lexend (Variable Font)

Clases utilitarias:

- `.heading-hero`
- `.heading-section`
- `.heading-subsection`
- `.heading-uppercase`
- `.eyebrow`

---

## 🗂️ Estructura del Proyecto

tenis/
├── app/
│ ├── (marketing)/
│ │ ├── layout.tsx
│ │ └── page.tsx
│ ├── layout.tsx
│ ├── page.tsx
│ ├── globals.css
│ └── fonts.ts
├── components/
│ └── marketing/
│ ├── header/
│ ├── footer/
│ ├── sections/
│ └── ui/
├── lib/
│ └── seo/
│ └── metadata.ts
├── public/
│ ├── images/
│ └── fonts/
├── next.config.ts
├── tsconfig.json
└── package.json

---

## 🛠️ Instalación y Desarrollo

### Requisitos

- Node.js **18+**
- npm / yarn / pnpm / bun

### Pasos

```bash
npm install
npm run dev
Abrir 👉 http://localhost:3000

📜 Scripts Disponibles
dev — servidor de desarrollo

build — build de producción

start — servidor de producción

lint — chequeo de código

📱 Responsive & Accesibilidad
Mobile, tablet y desktop optimizados

Navegación por teclado

ARIA attributes

Contraste correcto

Focus visible

Imágenes con texto alternativo

🚀 Despliegue
Opción recomendada — Vercel
Deploy automático

HTTPS incluido

Excelente performance

Otros entornos
Netlify

Railway

Render

AWS Amplify

🧠 Notas Técnicas
Uso de React Compiler

Optimización de imágenes con next/image

Optimización de fuentes con next/font

Código modular, escalable y mantenible

Preparado para futuras extensiones

👨‍💻 Créditos
Desarrollado con ❤️ para JuegoTenis
```
