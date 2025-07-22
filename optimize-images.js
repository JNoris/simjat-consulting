const sharp = require('sharp');
const fs = require('fs');
const path = require('path');

const assetsDir = path.join(__dirname, 'src', 'assets');
const optimizedDir = path.join(assetsDir, 'optimized');

if (!fs.existsSync(optimizedDir)) {
  fs.mkdirSync(optimizedDir);
}

fs.readdir(assetsDir, (err, files) => {
  if (err) {
    console.error('Error reading assets directory:', err);
    return;
  }

  files.forEach(file => {
    const ext = path.extname(file).toLowerCase();
    if (ext === '.jpeg' || ext === '.jpg' || ext === '.png') {
      const inputPath = path.join(assetsDir, file);
      const optimizedPath = path.join(optimizedDir, file);
      const webpPath = path.join(optimizedDir, `${path.basename(file, ext)}.webp`);

      // Optimize original image
      sharp(inputPath)
        .jpeg({ quality: 80 })
        .png({ quality: 80 })
        .toFile(optimizedPath, (err, info) => {
          if (err) {
            console.error(`Error optimizing ${file}:`, err);
          } else {
            console.log(`Optimized ${file}:`, info);
          }
        });

      // Convert to WebP
      sharp(inputPath)
        .webp({ quality: 80 })
        .toFile(webpPath, (err, info) => {
          if (err) {
            console.error(`Error converting ${file} to WebP:`, err);
          } else {
            console.log(`Converted ${file} to WebP:`, info);
          }
        });
    }
  });
});
