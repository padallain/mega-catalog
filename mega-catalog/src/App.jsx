import "./App.css";
import * as images from "./assets";
import * as usImages from "./assets/us";
import * as background from "./assets/background";
import { useState, useRef, useEffect } from "react";
import megaProductsVideo from "./assets/video/mega.mp4";
import { Link, Routes, Route } from "react-router-dom";
import Brands from "./views/brands.jsx";
import Product from "./views/ProductDetail.jsx";
import * as logos from "./assets/logos";
import DotLoader from "react-spinners/DotLoader";
import ScrollToTop from "./components/ScrollToTop.jsx";

function App() {
  const [showHola, setShowHola] = useState(false);
  const logoKeys = [
    "pantera",
    "cometin",
    "delMonte",
    "lipton",
    "tresB",
    "glup",
    "lumalac",
    "delcampo",
    "esmeralda",
    "vero",
  ];
  const [selectedLogo, setSelectedLogo] = useState("pantera");
  const [loading, setLoading] = useState(true);
  const missionText =
    "Nuestra misión es abastecer cada rincón de la región occidental con eficiencia y confiabilidad, impulsando el crecimiento de nuestros aliados comerciales y garantizando la satisfacción de los consumidores finales.";
  const visionText =
    "Nuestra visión es ser el puente que conecta los mejores alimentos con cada hogar y negocio en el occidente de Venezuela.";
  const valoresText =
    "Valores: confianza, transparencia y compromiso con la excelencia.";

  const videoRef = useRef(null);

  const carruselItems = [
    {
      img: usImages.mision,
      label: "Misión",
      text: missionText,
    },
    {
      img: usImages.vision,
      label: "Visión",
      text: visionText,
    },
    {
      img: usImages.valores,
      label: "Valores",
      text: valoresText,
    },
  ];

  useEffect(() => {
    const timeout = setTimeout(() => {
      setLoading(false);
    }, 2000);
    return () => clearTimeout(timeout);
  }, []);

  // Intentar reproducir el video (algunos navegadores bloquean autoplay si no está muted/playsInline)
  useEffect(() => {
    if (videoRef.current) {
      videoRef.current.muted = true;
      videoRef.current.playsInline = true;
      const p = videoRef.current.play();
      if (p && typeof p.then === "function") {
        p.catch(() => {
          // autoplay fue bloqueado, esperamos eventos de carga para ocultar loader
        });
      }
    }

    // Fallback: si en 10s no se dispara onPlaying/onCanPlayThrough, ocultar loader igualmente.
    const fallback = setTimeout(() => {
      setLoading(false);
    }, 10000);
    return () => clearTimeout(fallback);
  }, []);

  const hideTimeout = useRef(null);

  const handleMouseEnter = () => {
    if (hideTimeout.current) {
      clearTimeout(hideTimeout.current);
      hideTimeout.current = null;
    }
    setShowHola(true);
  };

  const handleMouseLeave = () => {
    hideTimeout.current = setTimeout(() => {
      setShowHola(false);
    }, 100);
  };

  return (
    <div className="app-container">
      {/* loader overlay para no bloquear el montaje del video */}
      {loading && (
        <div
          style={{
            position: "fixed",
            inset: 0,
            display: "flex",
            alignItems: "center",
            justifyContent: "center",
            background: "#ffffff",
            zIndex: 9999,
          }}
        >
          <DotLoader color="#a259e6" size={40} />
        </div>
      )}
      <ScrollToTop />
      <header className="app-header">
        <img src={images.logo} alt="Logo" className="app-logo" />
        <div className="app-menu">
          <Link to="/">Quiénes Somos</Link>
          <div onMouseEnter={handleMouseEnter} onMouseLeave={handleMouseLeave}>
            <p
              style={{
                margin: 0,
                display: "flex",
                alignItems: "center",
                gap: "0.5rem",
              }}
            >
              Nuestras Marcas <span style={{ fontSize: "0.5em" }}>▼</span>
            </p>
            {showHola && (
              <div
                className="dropdown-logos"
                style={{
                  position: "absolute",
                  top: "100%",
                  left: "50%",
                  transform: "translateX(-50%)",
                  background: "#fff",
                  border: "1px solid #e0e0e0",
                  borderRadius: "6px",
                  boxShadow: "0 2px 8px rgba(0,0,0,0.08)",
                  marginTop: "0.5rem",
                  zIndex: 10,
                  whiteSpace: "nowrap",
                }}
                onMouseEnter={handleMouseEnter}
                onMouseLeave={handleMouseLeave}
              >
                {Array.from({ length: Math.ceil(logoKeys.length / 6) }).map(
                  (_, rowIdx) => (
                    <div className="dropdown-logos-row" key={rowIdx}>
                      {logoKeys.slice(rowIdx * 6, rowIdx * 6 + 6).map((key) =>
                        logos[key] ? (
                          <Link
                            to="/brands"
                            key={key}
                            onClick={() => setSelectedLogo(key)}
                          >
                            <img
                              src={logos[key]}
                              alt={key}
                              className="logo-pantera-hover"
                              style={{
                                width: "80px",
                                maxWidth: "120px",
                                cursor: "pointer",
                                border:
                                  selectedLogo === key
                                    ? "3px solid #623386"
                                    : "none",
                                borderRadius: "12px",
                              }}
                            />
                          </Link>
                        ) : null
                      )}
                    </div>
                  )
                )}
              </div>
            )}
          </div>
          <Link to="/recetas">Recetas</Link>
          <Link to="/contacto">Contáctanos</Link>
        </div>
      </header>
      <Routes>
        <Route
          path="/"
          element={
            <>
              <div className="body">
                {loading && (
                  <div
                    style={{
                      width: "100vw",
                      height: "300px",
                      display: "flex",
                      alignItems: "center",
                      justifyContent: "center",
                      background: "#fff",
                    }}
                  >
                    <DotLoader color="#a259e6" size={40} />
                  </div>
                )}
                <video
                   ref={videoRef}
                  src={megaProductsVideo}
                  preload="auto"
                  autoPlay
                  loop
                  muted
                   playsInline
                  className="pantera-img"
                  style={{ display: loading ? "none" : "block" }}
                  onCanPlayThrough={() => setLoading(false)}
                />
              </div>
              <img src={images.quien} className="quien" alt="Quiénes Somos" />
              <p className="quien-text">
                En Megaconfites, somos más que distribuidores: somos el puente
                que conecta los mejores alimentos con cada hogar y negocio en el
                occidente de Venezuela. Nos dedicamos apasionadamente a llevar
                una amplia variedad de productos de alta calidad, asegurando que
                desde los supermercados más grandes hasta las pequeñas bodegas,
                todos tengan acceso a lo que necesitan.
                <br /> <br />
                Nuestra misión es clara: abastecer cada rincón de la región
                occidental con eficiencia y confiabilidad, impulsando el
                crecimiento de nuestros aliados comerciales y garantizando la
                satisfacción de los consumidores finales. Con años de
                experiencia en el mercado, hemos construido una sólida red
                logística que nos permite llegar a donde otros no llegan,
                incluso en las zonas más remotas.
                <br /> <br />
                En Megaconfites, nos enorgullecemos de ser un socio estratégico
                para nuestros proveedores y clientes, construyendo relaciones
                duraderas basadas en la confianza, la transparencia y el
                compromiso con la excelencia.
              </p>
              <div className="us">
                <div className="us-carrusel-scroll">
                  {carruselItems.map((item, idx) => (
                    <div className="us-carrusel-content" key={idx}>
                      <img src={item.img} alt={item.label} className="us-img" />
                      <div className="us-label">{item.label}</div>
                      <div className="us-expanded-text">{item.text}</div>
                    </div>
                  ))}
                </div>
              </div>
              <div
                className="pantera-back-full"
                style={{ position: "relative" }}
              >
                <img
                  src={background[selectedLogo]}
                  alt={`${selectedLogo} Back`}
                  className="pantera-back-img"
                  style={{
                    position: "relative",
                    zIndex: 1,
                    pointerEvents: "auto",
                  }}
                />
                <div
                  style={{
                    position: "absolute",
                    top: "85%",
                    left: "50%",
                    transform: "translate(-50%, -50%)",
                    display: "flex",
                    gap: "1rem",
                    zIndex: 2,
                  }}
                >
                  <div className="logo-slider">
                    {logoKeys.map((key) => (
                      <img
                        key={key}
                        src={logos[key]}
                        alt={key}
                        className="logo-pantera-hover"
                        style={{
                          width: "90px",
                          maxWidth: "120px",
                          cursor: "pointer",
                          border:
                            selectedLogo === key ? "3px solid #623386" : "none",
                          borderRadius: "12px",
                        }}
                        onClick={() => setSelectedLogo(key)}
                      />
                    ))}
                  </div>
                </div>
              </div>
            </>
          }
        />
        <Route
          path="/brands"
          element={<Brands selectedLogo={selectedLogo} />}
        />
        <Route path="/product" element={<Product />} />
      </Routes>
    </div>
  );
}

export default App;
