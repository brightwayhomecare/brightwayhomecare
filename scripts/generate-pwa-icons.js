const sharp = require('sharp');
const fs = require('fs');
const path = require('path');

const sizes = [72, 96, 128, 144, 152, 192, 384, 512];
const inputPath = path.join(__dirname, '../public/favicon.png');
const outputDir = path.join(__dirname, '../public/icons');

// Ensure output directory exists
if (!fs.existsSync(outputDir)) {
  fs.mkdirSync(outputDir, { recursive: true });
}

async function generateIcons() {
  console.log('Generating PWA icons from favicon.png...\n');

  for (const size of sizes) {
    const outputPath = path.join(outputDir, `icon-${size}x${size}.png`);

    await sharp(inputPath)
      .resize(size, size, {
        fit: 'contain',
        background: { r: 255, g: 255, b: 255, alpha: 0 }
      })
      .png()
      .toFile(outputPath);

    console.log(`✓ Generated icon-${size}x${size}.png`);
  }

  // Generate maskable icons (with padding for safe area)
  const maskableSizes = [192, 512];

  for (const size of maskableSizes) {
    const outputPath = path.join(outputDir, `icon-maskable-${size}x${size}.png`);
    const innerSize = Math.floor(size * 0.8); // 80% of total size for safe area

    await sharp(inputPath)
      .resize(innerSize, innerSize, {
        fit: 'contain',
        background: { r: 255, g: 255, b: 255, alpha: 0 }
      })
      .extend({
        top: Math.floor((size - innerSize) / 2),
        bottom: Math.ceil((size - innerSize) / 2),
        left: Math.floor((size - innerSize) / 2),
        right: Math.ceil((size - innerSize) / 2),
        background: { r: 30, g: 58, b: 138, alpha: 1 } // Blue 800 background
      })
      .png()
      .toFile(outputPath);

    console.log(`✓ Generated icon-maskable-${size}x${size}.png`);
  }

  console.log('\n✓ All PWA icons generated successfully!');
}

generateIcons().catch(console.error);
