import { useState } from "react";
import "./App.css";
import logo from "./imagenes/logo.png";
import Slider from "./componentes/slider";

function App() {
  const [menuOpen, setMenuOpen] = useState(false);

  return (
    <div className="cactus-acres">
      <div className="cabeza">
        <div className="logo">
          <img src={logo} alt="Logo" />
        </div>

        {/* Título que se ocultará en móviles */}
        <div className="nombre">
          <h1>CACTUS ACRES</h1>
        </div>

        {/* Menú en pantallas grandes */}
        <div className="button-container">
          <button className="button">Home</button>
          <button className="button">Lotes</button>
          <button className="button">Location</button>
          <button className="button">Contact</button>
        </div>

        {/* Icono de menú hamburguesa SOLO en móviles */}
        <button className="menu-icon" onClick={() => setMenuOpen(!menuOpen)}>
          ☰
        </button>

        {/* Menú hamburguesa SOLO en móviles */}
        <div className={`mobile-menu ${menuOpen ? "show-menu" : ""}`}>
          <button className="button" onClick={() => setMenuOpen(false)}>
            Home
          </button>
          <button className="button" onClick={() => setMenuOpen(false)}>
            Lotes
          </button>
          <button className="button" onClick={() => setMenuOpen(false)}>
            Location
          </button>
          <button className="button" onClick={() => setMenuOpen(false)}>
            Contact
          </button>
        </div>
      </div>
      <div className="piso-dos">
        <Slider />
      </div>
    </div>
  );
}

export default App;
