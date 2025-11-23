// ...existing code...
import "./OneProduct.css";
import { useRef, useState, useEffect } from "react";
import detailBg from "../assets/video/one.mp4";

export const zoom = 0.5; // puedes ajustar aquí en pruebas

export default function OneProduct({ product }) {
  // Hooks siempre al inicio
  const containerRef = useRef(null);
  const lensRef = useRef(null);
  const imgRef = useRef(null);
  const [showLens, setShowLens] = useState(false);
  const localZoom = zoom;

  useEffect(() => {
    if (!lensRef.current || !product?.src) return;
    lensRef.current.style.backgroundImage = `url(${product.src})`;
  }, [product]);

  useEffect(() => {
    const img = imgRef.current;
    if (!img) return;
    // cuando la imagen cargue actualizamos el background para mayor fiabilidad
    const onLoad = () => {
      if (lensRef.current && product?.src) {
        lensRef.current.style.backgroundImage = `url(${product.src})`;
      }
    };
    img.addEventListener("load", onLoad);
    if (img.complete) onLoad();
    return () => img.removeEventListener("load", onLoad);
  }, [product]);

  const handleMouseEnter = () => {
    if (lensRef.current && product?.src) {
      lensRef.current.style.backgroundImage = `url(${product.src})`;
    }
    setShowLens(true);
  };

  const handleMouseLeave = () => {
    setShowLens(false);
  };

  const handleMouseMove = (e) => {
    const container = containerRef.current;
    const lens = lensRef.current;
    const img = imgRef.current;
    if (!container || !lens || !img) return;

    const containerRect = container.getBoundingClientRect();
    const imgRect = img.getBoundingClientRect();

    // posición del cursor dentro de la imagen renderizada
    const offsetX = e.clientX - imgRect.left;
    const offsetY = e.clientY - imgRect.top;

    // tamaño de la lente
    const lensW = lens.offsetWidth;
    const lensH = lens.offsetHeight;

    // limitar la posición de la lente dentro del contenedor
    const left = Math.max(lensW / 2, Math.min(containerRect.width - lensW / 2, e.clientX - containerRect.left));
    const top = Math.max(lensH / 2, Math.min(containerRect.height - lensH / 2, e.clientY - containerRect.top));
    lens.style.left = `${left}px`;
    lens.style.top = `${top}px`;

    // usar dimensiones naturales de la imagen para calcular background-size (esto produce zoom real)
    const naturalW = img.naturalWidth || imgRect.width;
    const naturalH = img.naturalHeight || imgRect.height;
    const bgW = Math.round(naturalW * localZoom);
    const bgH = Math.round(naturalH * localZoom);
    lens.style.backgroundSize = `${bgW}px ${bgH}px`;
    lens.style.backgroundRepeat = "no-repeat";

    // background-position usando porcentaje respecto a la imagen renderizada
    const bgPosX = ((offsetX / imgRect.width) * 100).toFixed(2);
    const bgPosY = ((offsetY / imgRect.height) * 100).toFixed(2);
    lens.style.backgroundPosition = `${bgPosX}% ${bgPosY}%`;
  };

  if (!product) {
    return <div style={{ padding: "2rem" }}>Producto no encontrado.</div>;
  }

    // Preferir datos concretos pasados desde ProductDetail (productData), sino usar product
  const details = {
    id: product.id || null,
    marca: product.brand || product.brand || "Pantera",
    presentacion: product.presentation || product.presentation || product.pack || "500g",
    origen: product.origin || product.origin || "Venezuela",
    peso: product.weight || product.weight || null,
    precio: product.price || product.price || null,
    additional: product.additional || product.additional || null,
  };

  return (
     <div className="one-product-fullscreen">
      {/* video de fondo */}
      <video
        className="one-product-bg-video"
        src={detailBg}
        autoPlay
        loop
        muted
        playsInline
        aria-hidden="true"
      />
      <div
        className="one-product-image-container"
        ref={containerRef}
        onMouseEnter={handleMouseEnter}
        onMouseLeave={handleMouseLeave}
        onMouseMove={handleMouseMove}
      >
        <img
          ref={imgRef}
          src={product.src}
          alt={product.title}
          className="one-product-image"
          draggable={false}
        />
        <div
          ref={lensRef}
          aria-hidden
          className={`zoom-lens ${showLens ? "visible" : ""}`}
        />
      </div>

      <div className="one-product-info" style={{ maxWidth: 420, textAlign: "left" }}>
        <h1 className="one-product-title">{product.title}</h1>
        <p className="one-product-desc">{product.desc }</p>
        <div className="one-product-details">
          <strong>Detalles del producto:</strong>
          <ul style={{ margin: "0.5rem 0 0 1rem" }}>
            {details.id && <li>ID: {details.id}</li>}
            <li>Marca: {details.marca}</li>
            <li>Presentación: {details.presentacion}</li>
            {details.peso && <li>Peso: {details.peso}</li>}
            {details.precio && <li>Precio: {details.precio}</li>}
            <li>Origen: {details.origen}</li>
            {details.additional && <li>{details.additional}</li>}
          </ul>
        </div>
        <button className="one-product-buy-btn">Comprar ahora</button>
      </div>
    </div>
  );
}
// ...existing code...