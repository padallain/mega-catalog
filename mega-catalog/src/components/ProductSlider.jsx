// ...existing code...
import { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import "./ProductSlider.css";

export default function ProductSlider({ products }) {
  const navigate = useNavigate();
  const [current, setCurrent] = useState(0);
  const [slideDir, setSlideDir] = useState("right");

  const prev = () => {
    setSlideDir("left");
    setCurrent((prev) => (prev - 1 + products.length) % products.length);
  };
  const next = () => {
    setSlideDir("right");
    setCurrent((prev) => (prev + 1) % products.length);
  };

  useEffect(() => {
    const interval = setInterval(() => {
      setSlideDir("right");
      setCurrent((prevIndex) => (prevIndex + 1) % products.length);
    }, 3000);
    return () => clearInterval(interval);
  }, [products.length]);

  if (!products || products.length === 0) return null;

  const handleNavigate = (prod) => {
    navigate("/product", { state: { product: prod } });
  };

  const currentProd = products[current];

  return (
    <div className="brands-slider-container">
      <div className="brands-slider-row">
        <button className="brands-slider-btn" onClick={prev} aria-label="Anterior">
          &#x25C0;
        </button>

        <div
          className={`brands-slider-content slide-${slideDir}`}
          role="button"
          tabIndex={0}
          onClick={() => handleNavigate(currentProd)}
          onKeyDown={(e) => {
            if (e.key === "Enter" || e.key === " ") {
              e.preventDefault();
              handleNavigate(currentProd);
            }
          }}
          style={{ cursor: "pointer" }}
        >
          <div className="brands-slider-img-container">
            <img
              src={currentProd.src}
              alt={currentProd.title}
              className="brands-slider-img"
            />
          </div>
          <div className="brands-slider-info">
            <h1 className="brands-slider-title">{currentProd.title}</h1>
            <p className="brands-slider-desc">{currentProd.desc}</p>
            <a
              href="#"
              className="brands-slider-link"
              onClick={(e) => {
                e.preventDefault();
                // stopPropagation so parent onClick isn't doubled
                e.stopPropagation();
                handleNavigate(currentProd);
              }}
            >
              Ver más...
            </a>
          </div>
        </div>

        <button className="brands-slider-btn" onClick={next} aria-label="Siguiente">
          &#x25B6;
        </button>
      </div>
    </div>
  );
}
// ...existing code...