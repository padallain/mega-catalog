import { useState, useEffect } from "react";
import megaProductsVideo from "../assets/video/mega.mp4";
import "./brands.css";
import ProductCatalog from "../components/ProductCatalog.jsx";
import ProductSlider from "../components/ProductSlider.jsx";
import * as logos from "../assets";

import {
  panteraImages,
  veroImages,
  cometinImages,
  delMonteImages,
  glupImages,
  esmeraldaImages,
  tresBImages,
  liptonImages,
  lumalacImages
} from "../assets/productsData";

const BRAND_LOGOS = {
  pantera: logos.pantera,
  vero: logos.vero,
  cometin: logos.cometin,
  delMonte: logos.delMonte,
  glup: logos.glup,
  esmeralda: logos.esmeralda,
  tresB: logos.tresB,
  lipton: logos.lipton,
  lumalac: logos.lumalac,
  delcampo: logos.delcampo
};

function getProductsByLogo(selectedLogo) {
  if (selectedLogo === "vero") return veroImages;
  if (selectedLogo === "cometin") return cometinImages;
  if (selectedLogo === "delMonte") return delMonteImages;
  if (selectedLogo === "glup") return glupImages;
  if (selectedLogo === "esmeralda") return esmeraldaImages;
  if (selectedLogo === "tresB") return tresBImages;
  if (selectedLogo === "lipton") return liptonImages;
  if (selectedLogo === "lumalac") return lumalacImages;
  return panteraImages;
}

const BRAND_INFO = {
  pantera: {
    title: "Granos Pantera",
    desc:
      "Especialistas en legumbres y granos seleccionados, con procesos de control de calidad que garantizan textura y sabor en cada lote. El catálogo incluye caraotas (blancas, negras y rosadas), lentejas (beluga, roja partida, francesa e ibérica), garbanzos y diferentes presentaciones de arvejas; los productos están pensados tanto para el hogar como para el comercio. Además, se prioriza el empaquetado cuidadoso y la trazabilidad para asegurar frescura y rendimiento en la cocina."
  },
  vero: {
    title: "Vero Café",
    desc:
      "Café y bebidas desarrolladas para brindar una experiencia rica en aroma y sabor, disponibles en formatos pensados para consumo doméstico y local comercial. Cada presentación busca equilibrar cuerpo y acidez para adaptarse a diferentes métodos de preparación, desde filtros tradicionales hasta espresso. La línea incluye opciones para quienes buscan intensidad y para quienes prefieren sabores más suaves y aromáticos."
  },
  cometin: {
    title: "Cometín Snacks",
    desc:
      "Snacks crujientes con propuestas de sabor para toda la familia, desarrollados con recetas que resaltan ingredientes seleccionados. La gama abarca desde aros y palitos hasta mezclas con frutos secos y palomitas, cubriendo tanto opciones saladas como dulces. Las presentaciones buscan facilitar el consumo en eventos y reuniones, ofreciendo productos listos para compartir."
  },
  delMonte: {
    title: "Del Monte",
    desc:
      "Conservas y frutas en almíbar, jugos y verduras enlatadas pensadas para acompañar recetas y facilitar la cocina diaria. La oferta incluye frutas en diferentes cortes y presentaciones, además de verduras en conserva que aportan practicidad sin sacrificar sabor. Todos los productos están formulados para mantener textura y aroma tras el envasado."
  },
  glup: {
    title: "Glup Bebidas",
    desc:
      "Gama de refrescos y bebidas con perfiles de sabor clásicos y modernos, diseñados para ser refrescantes en cualquier ocasión. Las presentaciones varían en tamaños familiares y personales, con fórmulas equilibradas que buscan una experiencia agradable al paladar. Ideales para acompañar comidas o para consumo casual."
  },
  esmeralda: {
    title: "Esmeralda Sal",
    desc:
      "Sales y condimentos elaborados para realzar platos y facilitar el sazonado en la cocina cotidiana. La línea incluye sales finas, mezclas aromáticas y variantes especiales para parrilla o recetas específicas, pensadas para aportar consistencia y sabor. Los productos combinan calidad y versatilidad para uso doméstico y profesional."
  },
  tresB: {
    title: "Tres B",
    desc:
      "Productos de higiene y cuidado personal en presentaciones prácticas, pensados para ofrecer comodidad y protección en el día a día. La gama abarca desde pañales hasta protectores y toallas sanitarias, con opciones estándar y premium según la necesidad. Los envases y formatos están diseñados para facilitar el uso y el almacenamiento."
  },
  lipton: {
    title: "Lipton",
    desc:
      "Selección de tés y mezclas aromáticas que incluyen opciones clásicas y combinaciones frutales o herbales, pensadas para distintos momentos del día. Las presentaciones están cuidadas para conservar aroma y frescura, y cada variedad ofrece un perfil de sabor definido, desde tés suaves hasta opciones más intensas. Adecuado tanto para consumo en casa como en entornos de hostelería."
  },
  lumalac: {
    title: "Lumalac",
    desc:
      "Lácteos y bebidas nutritivas formuladas para aportar energía y nutrientes en diferentes presentaciones. La línea incluye leches, bebidas con cacao y opciones enriquecidas, desarrolladas para consumo diario y uso en recetas. Se prioriza la estabilidad del producto y la conservación de propiedades nutricionales durante su vida útil."
  }
};

export default function Brands({ selectedLogo }) {
  const selectedProducts = getProductsByLogo(selectedLogo);

  const [currentProduct, setCurrentProduct] = useState(
    selectedProducts && selectedProducts.length ? selectedProducts[0] : null
  );

  useEffect(() => {
    setCurrentProduct(selectedProducts && selectedProducts.length ? selectedProducts[0] : null);
  }, [selectedLogo, selectedProducts]);

  const brand = BRAND_INFO[selectedLogo] || BRAND_INFO["pantera"];
  const logoSrc = BRAND_LOGOS[selectedLogo] || BRAND_LOGOS.pantera;

  return (
    <div className="body">
      <video src={megaProductsVideo} autoPlay loop muted className="pantera-img" />
      <div className="brands-container">
        <div className="brands-info">
          {logoSrc && <img src={logoSrc} alt={brand.title} className="brands-logo" />}
          <p className="brands-p">{brand.desc}</p>
        </div>

        <ProductSlider products={selectedProducts} onProductChange={setCurrentProduct} />
      </div>

      <ProductCatalog products={selectedProducts} />
    </div>
  );
}