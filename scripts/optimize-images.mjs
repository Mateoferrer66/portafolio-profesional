
import sharp from 'sharp';
import fs from 'fs/promises';
import path from 'path';

const ASSETS_DIR = './public/assets';
const MAX_WIDTH = 800;
const QUALITY = 80;

async function optimizeImages() {
    try {
        const files = await fs.readdir(ASSETS_DIR);

        for (const file of files) {
            if (!file.match(/\.(jpg|jpeg|png)$/i)) continue;

            const filePath = path.join(ASSETS_DIR, file);
            const stat = await fs.stat(filePath);

            // Skip small files (already optimized or icons)
            if (stat.size < 50000) { // < 50KB
                console.log(`Skipping small file: ${file}`);
                continue;
            }

            console.log(`Optimizing: ${file} (${(stat.size / 1024).toFixed(2)} KB)`);

            const buffer = await fs.readFile(filePath);

            // Overwrite with optimized version
            // We use standard sharp logic: transform -> buffer -> write
            // to avoid race conditions on same file, we write to temp buffer first

            let pipeline = sharp(buffer)
                .resize(MAX_WIDTH, null, {
                    fit: 'inside',
                    withoutEnlargement: true
                });

            if (file.toLowerCase().endsWith('.png')) {
                pipeline = pipeline.png({ quality: QUALITY, compressionLevel: 9 });
            } else {
                pipeline = pipeline.jpeg({ quality: QUALITY, mozjpeg: true });
            }

            const outputBuffer = await pipeline.toBuffer();

            await fs.writeFile(filePath, outputBuffer);

            const newStat = await fs.stat(filePath);
            console.log(`  -> Done. New size: ${(newStat.size / 1024).toFixed(2)} KB`);
        }
        console.log('Optimization complete!');
    } catch (error) {
        console.error('Error optimizing images:', error);
    }
}

optimizeImages();
