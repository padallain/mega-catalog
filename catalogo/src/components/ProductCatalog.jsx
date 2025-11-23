// ...existing code...
import "./ProductCatalog.css";
import { useNavigate } from "react-router-dom";

export default function ProductCatalog({ products }) {
  const navigate = useNavigate();

  return (
    <div className="product-catalog">
      <h2 className="catalog-title">Catálogo de Productos </h2>
      <div className="catalog-grid">
        {products.map((prod, idx) => (
          <div
            className="catalog-item"
            key={idx}
            role="button"
            tabIndex={0}
            onClick={() => navigate("/product", { state: { product: prod } })}
            onKeyDown={(e) => {
              if (e.key === "Enter" || e.key === " ") {
                e.preventDefault();
                navigate("/product", { state: { product: prod } });
              }
            }}
            style={{ cursor: "pointer" }}
          >
            <img src={prod.src} alt={prod.title} className="catalog-img" />
            <h3 className="catalog-item-title">{prod.title}</h3>
          </div>
        ))}
      </div>
    </div>
  );
}
// ...existing code...