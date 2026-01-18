import { useLocation, Link } from "react-router-dom";
import OneProduct from "../components/OneProduct";
import ProductCatalog from "../components/ProductCatalog";
import { useEffect } from "react";
import "./ProductDetail.css";
import {
  panteraImages,
  veroImages,
  cometinImages,
  delMonteImages,
  glupImages,
  esmeraldaImages,
  tresBImages,
  liptonImages,
  lumalacImages,
  faparcaImages
} from "../assets/productsData";

// ...existing code...
export default function ProductDetail() {
  const location = useLocation();
  const product = location.state?.product ?? null;

  useEffect(() => {
    if (product) {
      window.scrollTo({ top: 0, left: 0, behavior: "auto" });
    }
  }, [product]);

  if (!product) {
    return (
      <div style={{ padding: "2rem", textAlign: "center" }}>
        <h1>Producto no encontrado</h1>
        <p>No se recibió información del catálogo.</p>
        <p>
          Volver a <Link to="/brands">Marcas</Link> o al{" "}
          <Link to="/">inicio</Link>.
        </p>
      </div>
    );
  }

  // Map de marcas -> arrays (usa los arrays exportados en productsData.js)
  const brandMap = {
    pantera: panteraImages,
    vero: veroImages,
    cometin: cometinImages,
    delMonte: delMonteImages,
    glup: glupImages,
    esmeralda: esmeraldaImages,
    tresB: tresBImages,
    lipton: liptonImages,
    lumalac: lumalacImages,
    faparca: faparcaImages,
  };

  // Encontrar la marca buscando por src (preferible) o por title
  const foundBrandKey = Object.keys(brandMap).find(
    (key) =>
      Array.isArray(brandMap[key]) &&
      brandMap[key].some(
        (p) => p.src === product.src || p.title === product.title
      )
  );

  const brandProducts = foundBrandKey ? brandMap[foundBrandKey] : [];

  return (
    <>
      <OneProduct product={product} />
      {/* Mostrar catálogo de la misma marca debajo del detalle */}
      {brandProducts.length > 0 && (
        <div style={{ width: "100%", marginTop: "2rem" }}>
          <ProductCatalog products={brandProducts} />
        </div>
      )}
    </>
  );
}
// ...existing code...
