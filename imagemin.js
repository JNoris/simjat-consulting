const imagemin = require('imagemin');
const imageminJpegtran = require('imagemin-jpegtran');
const imageminPngquant = require('imagemin-pngquant');
const imageminWebp = require('imagemin-webp');

(async () => {
  const files = await imagemin(['src/assets/*.{jpeg,png}'], {
    destination: 'src/assets/optimized',
    plugins: [
      imageminJpegtran(),
      imageminPngquant({
        quality: [0.6, 0.8]
      })
    ]
  });

  console.log(files);

  await imagemin(['src/assets/*.{jpeg,png}'], {
    destination: 'src/assets/optimized',
    plugins: [
      imageminWebp({quality: 50})
    ]
  });

  console.log('Images optimized');
})();
