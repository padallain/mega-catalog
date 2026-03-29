// filepath: catalogo/src/views/Recetas.jsx
import * as backgrounds from "../assets/background/index.js";

export default function Recetas() {
  return (
    <div style={{ width: "100vw", minHeight: "100vh", background: "#fff" }}>
      <img
        src={backgrounds.recetas}
        alt="Recetas fondo"
        style={{
          width: "100vw",
          maxWidth: "100vw",
          height: "auto",
          objectFit: "cover",
          display: "block",
          borderRadius: 0,
          marginBottom: "2rem"
        }}
      />
      <h1 style={{ textAlign: "center" }}>Recetas</h1>
      {/* Aquí puedes agregar el contenido de tus recetas */}
    </div>
  );
}