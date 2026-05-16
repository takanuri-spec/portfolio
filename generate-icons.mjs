import sharp from 'sharp';
import fs from 'fs';
import path from 'path';
import { fileURLToPath } from 'url';

const __dirname = path.dirname(fileURLToPath(import.meta.url));

const svgPath = path.join(__dirname, 'public', 'favicon.svg');
const publicDir = path.join(__dirname, 'public');

const sizes = [
  { name: 'icon-192.png', size: 192 },
  { name: 'icon-512.png', size: 512 },
  { name: 'icon-192-maskable.png', size: 192 },
  { name: 'icon-512-maskable.png', size: 512 },
];

async function generateIcons() {
  try {
    const svgBuffer = fs.readFileSync(svgPath);

    for (const { name, size } of sizes) {
      const outputPath = path.join(publicDir, name);
      await sharp(svgBuffer)
        .resize(size, size, {
          fit: 'contain',
          background: { r: 242, g: 237, b: 225, alpha: 1 }
        })
        .png()
        .toFile(outputPath);
      console.log(`✓ Generated ${name}`);
    }

    console.log('\n✓ All icons generated successfully!');
  } catch (error) {
    console.error('✗ Error generating icons:', error);
    process.exit(1);
  }
}

generateIcons();
