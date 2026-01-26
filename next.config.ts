import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  reactCompiler: true,
  images: {
    formats: ['image/avif', 'image/webp'],
    deviceSizes: [640, 750, 828, 1080, 1200, 1920, 2048, 3840],
    imageSizes: [16, 32, 48, 64, 96, 128, 256, 384],
    minimumCacheTTL: 60,
    // Optimizar calidad de imágenes para reducir tamaño
    dangerouslyAllowSVG: false,
  },
  compress: true,
  poweredByHeader: false,
  // Optimización para reducir JavaScript sin usar
  experimental: {
    optimizePackageImports: ['react-icons'],
  },
  // Configuración de Turbopack (Next.js 16 usa Turbopack por defecto)
  turbopack: {},
  // Configuración de webpack para builds de producción (no desarrollo con Turbopack)
  webpack: (config, { isServer, dev }) => {
    // Solo aplicar en builds de producción (webpack)
    if (!dev && !isServer) {
      // Optimizar tree-shaking y reducir bundle size
      config.optimization = {
        ...config.optimization,
        usedExports: true,
        // No establecer sideEffects: false globalmente para evitar problemas con CSS y otros assets
      };
    }
    return config;
  },
};

export default nextConfig;
