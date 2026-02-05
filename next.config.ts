import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  /**
   * 🔹 Export estático
   * Genera HTML/CSS/JS plano (ideal para DonWeb)
   */
  output: "export",

  /**
   * 🔹 React Compiler
   */
  reactCompiler: true,

  /**
   * 🔹 Imágenes
   * next/image NO optimiza en export estático,
   * por eso se desactiva la optimización runtime
   */
  images: {
    unoptimized: true,
    formats: ["image/avif", "image/webp"],
    deviceSizes: [640, 750, 828, 1080, 1200, 1920, 2048, 3840],
    imageSizes: [16, 32, 48, 64, 96, 128, 256, 384],
    dangerouslyAllowSVG: false,
  },

  /**
   * 🔹 Compresión y headers
   */
  compress: true,
  poweredByHeader: false,

  /**
   * 🔹 Optimizaciones experimentales seguras para landing
   */
  experimental: {
    optimizePackageImports: ["react-icons"],
  },

  /**
   * 🔹 Turbopack (dev)
   */
  turbopack: {},

  /**
   * 🔹 Webpack (solo build de producción)
   */
  webpack: (config, { isServer, dev }) => {
    if (!dev && !isServer) {
      config.optimization = {
        ...config.optimization,
        usedExports: true,
      };
    }
    return config;
  },
};

export default nextConfig;
