# Catalogo Megaconfites

Catalogo React preparado para funcionar como PWA instalable y con soporte offline despues de la primera carga.

## Desarrollo

```bash
npm install
npm run dev
```

## Build de produccion

```bash
npm run build
```

El build final queda en `dist/`.

## Uso offline

La app ya esta configurada con:

- `HashRouter` para no depender de configuracion del servidor.
- `base: './'` para que el build estatico funcione desde rutas relativas.
- `manifest.webmanifest` para instalacion tipo app.
- `service worker` para cachear archivos y permitir uso sin internet despues de la primera carga.

## Importante

El modo offline real de la PWA funciona cuando el catalogo se abre una primera vez desde `http://`, `https://` o `localhost` y luego se instala o se vuelve a abrir sin internet.

Abrir `dist/index.html` directamente con `file://` puede funcionar parcialmente, pero los navegadores moviles no suelen permitir todas las capacidades PWA en ese modo.

## Recomendacion para trabajadores

1. Publicar el build `dist/` en un hosting simple o servidor local.
2. Abrir el catalogo una vez con internet o red local.
3. Instalarlo en la tablet o telefono desde el navegador.
4. Usarlo despues sin conexion.

## Archivos clave

- `src/main.jsx`
- `src/assets/assetPath.js`
- `public/manifest.webmanifest`
- `public/sw.js`
