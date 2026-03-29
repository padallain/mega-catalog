import imagemin from 'imagemin';
import imageminWebp from 'imagemin-webp';

const files = await imagemin(['src/assets/**/*.{jpg,png}'], {
  destination: 'public/assets-webp',
  plugins: [
    imageminWebp({quality: 80})
  ]
});

console.log(`¡Imágenes convertidas a WebP! Total: ${files.length}`);