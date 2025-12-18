# JuegoTenis - Sitio Web de Escuela de Tenis

Sitio web moderno y responsive para JuegoTenis, una escuela de tenis que ofrece clases para adultos, niños y adolescentes. Desarrollado con Next.js 16, React 19 y Tailwind CSS 4.

## 🎾 Descripción

JuegoTenis es una plataforma web que presenta los servicios de una escuela de tenis, incluyendo información sobre clases para diferentes edades, torneos, sedes y más. El sitio está diseñado con un enfoque en la experiencia del usuario, accesibilidad y rendimiento.

## 🚀 Tecnologías Utilizadas

- **Next.js 16.0.10** - Framework React con App Router
- **React 19.2.1** - Biblioteca de UI
- **TypeScript 5** - Tipado estático
- **Tailwind CSS 4** - Framework de utilidades CSS
- **React Compiler** - Optimización automática de React

## 📦 Instalación

### Prerrequisitos

- Node.js 18+ 
- npm, yarn, pnpm o bun

### Pasos

1. Clonar el repositorio (o navegar al directorio del proyecto)

2. Instalar dependencias:

```bash
npm install
# o
yarn install
# o
pnpm install
```

3. Ejecutar el servidor de desarrollo:

```bash
npm run dev
# o
yarn dev
# o
pnpm dev
```

4. Abrir [http://localhost:3000](http://localhost:3000) en el navegador

## 📜 Scripts Disponibles

- `npm run dev` - Inicia el servidor de desarrollo
- `npm run build` - Construye la aplicación para producción
- `npm run start` - Inicia el servidor de producción
- `npm run lint` - Ejecuta ESLint para verificar el código

## 📁 Estructura del Proyecto

```
tenis/
├── app/
│   ├── (marketing)/
│   │   ├── layout.tsx          # Layout del marketing
│   │   └── page.tsx             # Página principal
│   ├── layout.tsx               # Layout raíz
│   ├── page.tsx                 # Página raíz
│   ├── globals.css              # Estilos globales y variables CSS
│   └── fonts.ts                 # Configuración de fuentes
├── components/
│   └── marketing/
│       ├── header/
│       │   └── Header.tsx       # Header con navegación sticky
│       ├── footer/
│       │   └── Footer.tsx       # Footer del sitio
│       ├── sections/
│       │   ├── Hero.tsx         # Sección hero principal
│       │   ├── Classes.tsx      # Sección de clases (adultos/niños)
│       │   │   └── classes/
│       │   │       ├── ClassesCard.tsx    # Card reutilizable
│       │   │       ├── AdultsExpanded.tsx # Contenido expandido adultos
│       │   │       └── KidsExpanded.tsx   # Contenido expandido niños
│       │   ├── Tournaments.tsx  # Sección de torneos
│       │   ├── About.tsx        # Sección "Quiénes somos"
│       │   ├── Locations.tsx    # Sección de sedes
│       │   └── FinalCTA.tsx     # Call-to-action final
│       └── ui/
│           ├── Button.tsx        # Componente de botón reutilizable
│           └── Section.tsx       # Componente de sección
├── lib/
│   └── seo/
│       └── metadata.ts          # Configuración SEO
├── public/
│   ├── images/                  # Imágenes del sitio
│   └── fonts/                   # Fuentes personalizadas
├── next.config.ts               # Configuración de Next.js
├── tsconfig.json                # Configuración de TypeScript
└── package.json                 # Dependencias y scripts
```

## 🎨 Características Principales

### Secciones del Sitio

1. **Hero Section**
   - Imagen de fondo con overlay
   - Título principal "SOMOS JuegoTenis"
   - Botón CTA para reservar clase de prueba

2. **Clases**
   - **Adultos**: 
     - Modalidades: Clases individuales y grupos reducidos
     - Niveles: Inicial, Inicial con experiencia, Intermedio, Avanzado
   - **Niños & Adolescentes**:
     - Metodología "Play and Stay"
     - Canchas por colores (Roja, Naranja, Verde, Amarilla)
     - Badges tipo pill con colores distintivos

3. **Torneos**
   - Información sobre torneos disponibles

4. **Quiénes Somos**
   - Información sobre la escuela

5. **Sedes**
   - Ubicaciones de las sedes

6. **Final CTA**
   - Sección de contacto final

### Componentes Interactivos

- **Header Sticky**: Navegación que cambia de estilo al hacer scroll
- **Acordeón de Clases**: Sistema expandible/colapsable para mostrar información detallada
- **Badges de Canchas**: Badges tipo pill con colores personalizados para las canchas Play & Stay

## 🎨 Sistema de Diseño

### Colores

El proyecto utiliza un sistema de colores basado en OKLCH para mejor consistencia:

- **Brand Colors**: Naranja (tenis) - `brand-50` a `brand-950`
- **Surface Colors**: Grises neutros - `surface-0` a `surface-950`
- **Text Colors**: Escala de grises para texto - `text-50` a `text-950`
- **Court Colors**: Colores para canchas Play & Stay:
  - `court-red`: Cancha Roja
  - `court-orange`: Cancha Naranja
  - `court-green`: Cancha Verde
  - `court-yellow`: Cancha Amarilla

### Tipografía

- **Fuente Principal**: Lexend (Variable Font)
- **Clases de Tipografía**:
  - `.heading-hero` - Títulos hero grandes
  - `.heading-section` - Títulos de sección
  - `.heading-subsection` - Subtítulos
  - `.heading-uppercase` - Títulos en mayúsculas
  - `.eyebrow` - Texto pequeño en mayúsculas

### Componentes UI

- **Button**: Componente reutilizable con variantes (primary, secondary, whatsapp)
- **Section**: Componente contenedor de secciones

## 🔧 Configuración

### TypeScript

El proyecto está completamente tipado con TypeScript. La configuración permite:
- Path aliases (`@/*` apunta a la raíz)
- JSX React
- Strict mode habilitado

### Next.js

- React Compiler habilitado para optimizaciones automáticas
- App Router configurado
- Optimización de imágenes con `next/image`
- Optimización de fuentes con `next/font`

### Tailwind CSS

- Tailwind CSS 4 con PostCSS
- Variables CSS personalizadas para colores
- Utilidades responsive
- Soporte para modo oscuro (preparado)

## 📱 Responsive Design

El sitio está completamente optimizado para:
- **Mobile**: Diseño adaptativo para pantallas pequeñas
- **Tablet**: Layout intermedio optimizado
- **Desktop**: Experiencia completa con todas las funcionalidades

## ♿ Accesibilidad

- Navegación por teclado
- Atributos ARIA apropiados
- Contraste de colores adecuado
- Focus visible en elementos interactivos
- Textos alternativos en imágenes

## 🚀 Despliegue

### Vercel (Recomendado)

La forma más fácil de desplegar es usando [Vercel](https://vercel.com):

1. Conectar el repositorio a Vercel
2. Vercel detectará automáticamente Next.js
3. El despliegue se realizará automáticamente

### Otros Proveedores

El proyecto puede desplegarse en cualquier plataforma que soporte Next.js:
- Netlify
- AWS Amplify
- Railway
- Render

## 📝 Notas de Desarrollo

- El proyecto utiliza React Compiler para optimizaciones automáticas
- Las imágenes están optimizadas con Next.js Image
- Los estilos utilizan variables CSS para fácil mantenimiento
- El código sigue las mejores prácticas de React y Next.js

## 👥 Créditos

Desarrollado con ❤️ para JuegoTenis

---

**Versión**: 0.1.0  
**Última actualización**: 2024
