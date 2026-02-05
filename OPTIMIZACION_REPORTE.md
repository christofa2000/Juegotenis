# 📊 Reporte de Optimización - JuegoTenis Landing

**Fecha:** 5 de Febrero, 2026  
**Objetivo:** Optimizar landing para Core Web Vitals y deploy estático en DonWeb

---

## ✅ Cambios Realizados

### 1. Optimización de Imágenes

**Resultado:** Reducción del **97.82%** en tamaño de imágenes

| Métrica          | Antes    | Después | Mejora        |
| ---------------- | -------- | ------- | ------------- |
| **Tamaño total** | 49.63 MB | 1.08 MB | **-48.55 MB** |
| **Reducción**    | -        | -       | **97.82%**    |

#### Detalle por imagen:

| Imagen                                               | Original | Optimizado | Reducción |
| ---------------------------------------------------- | -------- | ---------- | --------- |
| `adultos.jpg` → `.webp`                              | 8.08 MB  | 0.08 MB    | 99.05%    |
| `sideways-kids-playing-doubles-tennis.jpg` → `.webp` | 15.09 MB | 0.07 MB    | 99.52%    |
| `quienes-somos.jpg` → `.webp`                        | 6.23 MB  | 0.08 MB    | 98.64%    |
| `doblas.jpg` → `.webp`                               | 6.91 MB  | 0.21 MB    | 97.02%    |
| `cancha.jpg` → `.webp`                               | 2.63 MB  | 0.14 MB    | 94.60%    |
| `view-tennis-racket-hitting-ball.jpg` → `.webp`      | 4.56 MB  | 0.04 MB    | 99.07%    |
| `torneos.jpg` → `.webp`                              | 2.20 MB  | 0.08 MB    | 96.53%    |
| `hero.jpg` → `.webp`                                 | 1.26 MB  | 0.08 MB    | 93.69%    |
| `nunez.jpg` → `.webp`                                | 0.97 MB  | 0.18 MB    | 81.29%    |
| `LOGO.jpg` → `.webp`                                 | 0.71 MB  | 0.02 MB    | 97.13%    |
| `NUESTROS-TORNEOS.png` → `.webp`                     | 0.52 MB  | 0.06 MB    | 89.02%    |
| `tennis Ball.png` → `.webp`                          | 0.41 MB  | 0.01 MB    | 96.86%    |
| `SOMOS-JUEGOTENIS.png` → `.webp`                     | 0.05 MB  | 0.03 MB    | 47.00%    |

**Configuración aplicada:**

- Hero/fondos: 1920px máx, calidad 80
- Secciones/cards: 1200px máx, calidad 82
- Logos: 800px máx, calidad 85
- Thumbnails: 600px máx, calidad 85

### 2. Actualización de Referencias en Código

**Archivos modificados:**

- ✅ `components/marketing/sections/Hero.tsx` - Actualizado a `.webp`
- ✅ `components/marketing/sections/About.tsx` - Actualizado a `.webp`
- ✅ `components/marketing/sections/Tournaments.tsx` - Actualizado a `.webp`
- ✅ `components/marketing/sections/Classes.tsx` - Actualizado a `.webp`
- ✅ `components/marketing/sections/Locations.tsx` - Actualizado a `.webp`
- ✅ `components/marketing/sections/classes/ClassesCard.tsx` - Removido `priority` innecesario

### 3. Optimización de `next/image`

**Cambios aplicados:**

- ✅ Removido `priority` innecesario en imágenes below-the-fold
- ✅ Mantenido `priority` y `fetchPriority="high"` solo en imagen LCP (Hero)
- ✅ Verificado `sizes` correcto en todas las imágenes
- ✅ Removido `priority` del logo en Header (no es LCP)

### 4. Mejoras SEO

**Metadata mejorado:**

- ✅ Agregado `metadataBase` en `app/layout.tsx`
- ✅ Agregado `images` en Open Graph con `/images/hero.webp`
- ✅ Mejorado Twitter Card con imagen
- ✅ Agregado `robots` con configuración optimizada
- ✅ Agregado `alternates.canonical`

**Archivos modificados:**

- ✅ `lib/seo/metadata.ts` - Metadata completo con OG images
- ✅ `app/layout.tsx` - Metadata base mejorado

### 5. Configuración Next.js

**Verificado `next.config.ts`:**

- ✅ `output: "export"` - Configurado para export estático
- ✅ `images.unoptimized: true` - Correcto para export estático
- ✅ `compress: true` - Habilitado
- ✅ `poweredByHeader: false` - Deshabilitado
- ✅ `experimental.optimizePackageImports: ["react-icons"]` - Optimización de imports

### 6. Script de Optimización

**Creado:** `scripts/optimize-images.mjs`

- Convierte automáticamente JPG/PNG a WEBP
- Redimensiona según tipo de imagen
- Genera reporte JSON con métricas
- Agregado script `npm run optimize-images` en `package.json`

---

## 📦 Deploy en DonWeb

### Pasos para deploy:

1. **Build del proyecto:**

   ```bash
   npm run build
   ```

2. **Verificar carpeta `out/`:**

   - Next.js genera la carpeta `out/` con todos los archivos estáticos
   - Abrir `out/index.html` en navegador para verificar

3. **Subir a DonWeb:**
   - Subir **todo el contenido** de la carpeta `out/` a `public_html` en DonWeb
   - Mantener la estructura de carpetas (`images/`, `fonts/`, etc.)

### Estructura esperada en DonWeb:

```
public_html/
  ├── index.html
  ├── _next/
  │   └── static/
  ├── images/
  │   ├── *.webp (todas las imágenes optimizadas)
  │   └── logo-blanco.webp
  ├── fonts/
  │   └── Lexend-VariableFont_wght.ttf
  └── ... (otros archivos estáticos)
```

---

## 🎯 Impacto en Core Web Vitals

### Mejoras esperadas:

1. **LCP (Largest Contentful Paint):**

   - ✅ Imagen hero optimizada (1.26 MB → 0.08 MB)
   - ✅ `priority` y `fetchPriority="high"` en imagen LCP
   - ✅ `loading="eager"` en logo principal

2. **FID (First Input Delay):**

   - ✅ Dynamic imports para componentes below-the-fold
   - ✅ Bundle JS reducido por lazy loading

3. **CLS (Cumulative Layout Shift):**

   - ✅ `sizes` correcto en todas las imágenes
   - ✅ `width/height` o `fill` con contenedor definido

4. **Tamaño total del sitio:**
   - ✅ Reducción de ~48 MB en imágenes
   - ✅ Mejor tiempo de carga inicial

---

## 📝 Recomendaciones Adicionales

### Opcionales (no críticos):

1. **AVIF adicional:**

   - Actualmente solo WEBP (compatible con 97%+ navegadores)
   - AVIF ofrece ~20% más compresión pero requiere fallback
   - **Decisión:** Mantener solo WEBP por simplicidad y compatibilidad

2. **Preload de fuentes:**

   - Ya configurado con `preload: true` en `app/fonts.ts`
   - ✅ `display: 'swap'` para evitar FOIT

3. **Service Worker (PWA):**

   - Opcional para cache offline
   - No crítico para landing estática

4. **Sitemap.xml y robots.txt:**
   - Generar automáticamente si Next.js lo permite en export estático
   - O crear manualmente en `public/`

---

## ✅ Checklist Final

- [x] Imágenes convertidas a WEBP
- [x] Referencias actualizadas en código
- [x] `next/image` optimizado (sizes, priority)
- [x] Metadata SEO mejorado
- [x] `next.config.ts` verificado para export estático
- [x] Script de optimización creado
- [x] Reporte generado

---

## 🚀 Próximos Pasos

1. Ejecutar `npm run build` y verificar carpeta `out/`
2. Probar localmente abriendo `out/index.html`
3. Subir contenido de `out/` a DonWeb `public_html/`
4. Verificar funcionamiento en producción
5. Medir Core Web Vitals con Lighthouse o PageSpeed Insights

---

**Nota:** Todas las imágenes originales (`.jpg`, `.png`) se mantienen en `public/images/` por si se necesitan en el futuro. Solo las referencias en el código apuntan a `.webp`.
