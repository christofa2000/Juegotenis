# Optimizaciones de Performance - LCP y Lighthouse

## ✅ Cambios Aplicados

### 1. Optimización de Imagen LCP (Hero.tsx)
- ✅ Agregado `fetchPriority="high"` a la imagen SOMOS-JUEGOTENIS
- ✅ Agregado `loading="eager"` para evitar lazy loading
- ✅ Mantenido `priority` (ya existía)
- ✅ Actualizado src a `/images/SOMOS-JUEGOTENIS.webp` (requiere conversión)

### 2. Conversión de Imagen a WebP
**ACCIÓN REQUERIDA**: Convertir `SOMOS-JUEGOTENIS.png` a WebP:

```bash
# Opción 1: Usando cwebp (Google WebP)
cwebp -q 85 public/images/SOMOS-JUEGOTENIS.png -o public/images/SOMOS-JUEGOTENIS.webp

# Opción 2: Usando ImageMagick
magick public/images/SOMOS-JUEGOTENIS.png -quality 85 public/images/SOMOS-JUEGOTENIS.webp

# Opción 3: Usando herramienta online
# Subir a https://squoosh.app/ y descargar como WebP con calidad 85
```

**Recomendación**: Usar calidad 80-85 para balance entre tamaño y calidad.

### 3. Optimización de Componentes Client-Side
- ✅ `Classes` componente movido a dynamic import (below-the-fold)
- ✅ Mantenido SSR para SEO (`ssr: true`)
- ✅ Agregado loading state para mejor UX

### 4. Optimización de Fuentes
- ✅ Agregado `preload: true` a Lexend font
- ✅ Agregado `fallback` con system fonts para evitar FOIT
- ✅ Ya estaba usando `next/font/local` (óptimo)

### 5. Optimización de Transpilación
- ✅ Actualizado `tsconfig.json` target de `ES2017` a `ES2020`
- ✅ Agregado `browserslist` en `package.json` para builds modernos
- ✅ Next.js ya usa SWC (no Babel necesario)

### 6. Optimización de Next.js Config
- ✅ Habilitado compresión automática
- ✅ Configurado soporte AVIF y WebP automático
- ✅ Optimizado deviceSizes e imageSizes
- ✅ Removido `X-Powered-By` header

## 📁 Archivos Modificados

1. **tenis/components/marketing/sections/Hero.tsx**
   - Agregado `fetchPriority="high"` y `loading="eager"`
   - Cambiado src a `.webp`

2. **tenis/app/(marketing)/page.tsx**
   - `Classes` movido a dynamic import

3. **tenis/app/fonts.ts**
   - Agregado `preload: true` y `fallback`

4. **tenis/tsconfig.json**
   - Target actualizado a ES2020

5. **tenis/package.json**
   - Agregado `browserslist` configuration

6. **tenis/next.config.ts**
   - Optimizaciones de imágenes y compresión

## ✅ Checklist para Validar en Lighthouse

### Antes de Correr Lighthouse:
- [ ] Convertir `SOMOS-JUEGOTENIS.png` a WebP y colocar en `public/images/`
- [ ] Ejecutar `npm run build` para verificar que no hay errores
- [ ] Verificar que la imagen WebP se carga correctamente en producción

### Métricas a Validar:
- [ ] **LCP < 2.5s**: La imagen SOMOS-JUEGOTENIS.webp debe aparecer como LCP
- [ ] **LCP Element**: Debe ser la imagen del hero (no texto ni otros elementos)
- [ ] **LCP Score**: Debe estar en verde (> 75)
- [ ] **Total Blocking Time**: Debe mejorar por reducción de JS legacy
- [ ] **Cumulative Layout Shift (CLS)**: Debe mantenerse bajo (< 0.1)
- [ ] **First Input Delay (FID)**: Debe estar optimizado

### Verificaciones Adicionales:
- [ ] Verificar en Network tab que la imagen tiene `fetchpriority="high"`
- [ ] Verificar que no hay warnings de "JavaScript legacy" (debe reducirse)
- [ ] Verificar que el CSS crítico se carga antes del LCP
- [ ] Verificar que `Classes` se carga después del LCP (dynamic import)

### Comandos Útiles:
```bash
# Build de producción
npm run build

# Iniciar servidor de producción local
npm start

# Verificar bundle size
npm run build -- --analyze
```

## 🔍 Debugging

Si LCP sigue siendo problemático:

1. **Verificar que la imagen WebP existe**:
   ```bash
   ls -lh public/images/SOMOS-JUEGOTENIS.webp
   ```

2. **Verificar tamaño de imagen**:
   - Debe ser < 200KB para WebP
   - Si es mayor, reducir calidad o dimensiones

3. **Verificar en DevTools**:
   - Network tab: buscar `SOMOS-JUEGOTENIS.webp`
   - Verificar que tiene `Priority: High`
   - Verificar que se carga antes del LCP

4. **Verificar HTML inicial**:
   - View Source: buscar `SOMOS-JUEGOTENIS.webp`
   - Debe estar en el HTML inicial (no lazy loaded)

## 📊 Resultados Esperados

- **LCP**: Debe mejorar de ~3-4s a < 2.5s
- **Performance Score**: Debe mejorar 10-20 puntos
- **JS Legacy**: Debe reducirse significativamente
- **Bundle Size**: Debe reducirse por dynamic imports

## 🚀 Próximos Pasos Opcionales

1. **Preload de imagen crítica**: Agregar `<link rel="preload">` en layout si es necesario
2. **Resource Hints**: Considerar `dns-prefetch` para dominios externos
3. **Service Worker**: Para cacheo agresivo en producción
4. **Image CDN**: Considerar Vercel Image Optimization o Cloudinary

