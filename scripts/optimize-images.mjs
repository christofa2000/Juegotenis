#!/usr/bin/env node
/**
 * Script para optimizar imágenes a WEBP
 * Convierte todas las imágenes JPG/PNG en public/images a WEBP optimizado
 */

import { existsSync } from "fs";
import { readdir, stat } from "fs/promises";
import { basename, extname, join } from "path";
import sharp from "sharp";

const IMAGES_DIR = join(process.cwd(), "public", "images");
const REPORT_FILE = join(process.cwd(), "scripts", "image-report.json");

// Configuración de optimización según tipo de imagen
const OPTIMIZATION_CONFIG = {
  // Hero / fondo principal: ancho máx 1920px, calidad 75-80
  hero: { maxWidth: 1920, quality: 80 },
  cancha: { maxWidth: 1920, quality: 80 },
  torneos: { maxWidth: 1920, quality: 80 },

  // Secciones/locations/cards: ancho 1200px, calidad 75-82
  adultos: { maxWidth: 1200, quality: 82 },
  "quienes-somos": { maxWidth: 1200, quality: 82 },
  nunez: { maxWidth: 1200, quality: 82 },
  doblas: { maxWidth: 1200, quality: 82 },
  "sideways-kids-playing-doubles-tennis": { maxWidth: 1200, quality: 82 },
  "view-tennis-racket-hitting-ball": { maxWidth: 1200, quality: 82 },

  // Logos y elementos pequeños: ancho 800px, calidad 85
  LOGO: { maxWidth: 800, quality: 85 },
  "NUESTROS-TORNEOS": { maxWidth: 800, quality: 85 },
  "SOMOS-JUEGOTENIS": { maxWidth: 800, quality: 85 },

  // Thumbnails: ancho 600px, calidad 85
  "tennis Ball": { maxWidth: 600, quality: 85 },
};

function getConfigForImage(filename) {
  const nameWithoutExt = basename(filename, extname(filename));
  const lowerName = nameWithoutExt.toLowerCase();

  // Buscar coincidencia exacta primero
  if (OPTIMIZATION_CONFIG[nameWithoutExt]) {
    return OPTIMIZATION_CONFIG[nameWithoutExt];
  }

  // Buscar por palabras clave
  for (const [key, config] of Object.entries(OPTIMIZATION_CONFIG)) {
    if (lowerName.includes(key.toLowerCase())) {
      return config;
    }
  }

  // Default: 1200px, calidad 80
  return { maxWidth: 1200, quality: 80 };
}

async function getFileSize(filePath) {
  const stats = await stat(filePath);
  return stats.size;
}

async function optimizeImage(inputPath, outputPath, config) {
  const image = sharp(inputPath);
  const metadata = await image.metadata();

  const originalSize = await getFileSize(inputPath);

  // Redimensionar si es necesario
  let pipeline = image;
  if (metadata.width > config.maxWidth) {
    pipeline = pipeline.resize(config.maxWidth, null, {
      withoutEnlargement: true,
      fit: "inside",
    });
  }

  // Convertir a WEBP
  await pipeline
    .webp({
      quality: config.quality,
      effort: 6, // Balance entre velocidad y compresión
    })
    .toFile(outputPath);

  const optimizedSize = await getFileSize(outputPath);
  const newMetadata = await sharp(outputPath).metadata();

  return {
    original: {
      path: inputPath,
      size: originalSize,
      width: metadata.width,
      height: metadata.height,
      format: metadata.format,
    },
    optimized: {
      path: outputPath,
      size: optimizedSize,
      width: newMetadata.width,
      height: newMetadata.height,
      format: "webp",
    },
    reduction: {
      bytes: originalSize - optimizedSize,
      percent: (((originalSize - optimizedSize) / originalSize) * 100).toFixed(
        2
      ),
    },
  };
}

async function processImages() {
  const report = {
    timestamp: new Date().toISOString(),
    images: [],
    summary: {
      totalOriginalSize: 0,
      totalOptimizedSize: 0,
      totalReduction: 0,
      totalReductionPercent: 0,
    },
  };

  try {
    const files = await readdir(IMAGES_DIR);
    const imageFiles = files.filter((file) =>
      /\.(jpg|jpeg|png|JPG|JPEG|PNG)$/i.test(file)
    );

    console.log(
      `\n📸 Encontradas ${imageFiles.length} imágenes para optimizar\n`
    );

    for (const file of imageFiles) {
      const inputPath = join(IMAGES_DIR, file);
      const ext = extname(file);
      const nameWithoutExt = basename(file, ext);
      const outputPath = join(IMAGES_DIR, `${nameWithoutExt}.webp`);

      // Saltar si ya existe el WEBP (a menos que sea más nuevo que el original)
      if (existsSync(outputPath)) {
        const inputStats = await stat(inputPath);
        const outputStats = await stat(outputPath);
        if (outputStats.mtime > inputStats.mtime) {
          console.log(`⏭️  ${file} → ya existe .webp (más reciente), saltando`);
          continue;
        }
      }

      const config = getConfigForImage(file);
      console.log(`🔄 Optimizando ${file}...`);
      console.log(`   Config: ${config.maxWidth}px, calidad ${config.quality}`);

      try {
        const result = await optimizeImage(inputPath, outputPath, config);
        report.images.push({
          filename: file,
          ...result,
        });

        const originalMB = (result.original.size / 1024 / 1024).toFixed(2);
        const optimizedMB = (result.optimized.size / 1024 / 1024).toFixed(2);
        const reductionMB = (result.reduction.bytes / 1024 / 1024).toFixed(2);

        console.log(
          `   ✅ ${originalMB}MB → ${optimizedMB}MB (reducción: ${reductionMB}MB, ${result.reduction.percent}%)\n`
        );
      } catch (error) {
        console.error(`   ❌ Error procesando ${file}:`, error.message);
      }
    }

    // Calcular resumen
    report.summary.totalOriginalSize = report.images.reduce(
      (sum, img) => sum + img.original.size,
      0
    );
    report.summary.totalOptimizedSize = report.images.reduce(
      (sum, img) => sum + img.optimized.size,
      0
    );
    report.summary.totalReduction =
      report.summary.totalOriginalSize - report.summary.totalOptimizedSize;
    report.summary.totalReductionPercent = (
      (report.summary.totalReduction / report.summary.totalOriginalSize) *
      100
    ).toFixed(2);

    // Guardar reporte
    const fs = await import("fs");
    fs.writeFileSync(REPORT_FILE, JSON.stringify(report, null, 2));

    // Mostrar resumen
    console.log("\n" + "=".repeat(60));
    console.log("📊 RESUMEN DE OPTIMIZACIÓN");
    console.log("=".repeat(60));
    const totalOriginalMB = (
      report.summary.totalOriginalSize /
      1024 /
      1024
    ).toFixed(2);
    const totalOptimizedMB = (
      report.summary.totalOptimizedSize /
      1024 /
      1024
    ).toFixed(2);
    const totalReductionMB = (
      report.summary.totalReduction /
      1024 /
      1024
    ).toFixed(2);
    console.log(`Total original: ${totalOriginalMB} MB`);
    console.log(`Total optimizado: ${totalOptimizedMB} MB`);
    console.log(
      `Reducción total: ${totalReductionMB} MB (${report.summary.totalReductionPercent}%)`
    );
    console.log(`\n✅ Reporte guardado en: ${REPORT_FILE}`);
    console.log("=".repeat(60) + "\n");
  } catch (error) {
    console.error("❌ Error:", error);
    process.exit(1);
  }
}

processImages();
