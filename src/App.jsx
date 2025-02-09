import { useState } from "react";
import { BrowserRouter as Router, Routes, Route, Link } from "react-router-dom";
import "./App.css";
import logo from "./imagenes/logo.png";
import Slider from "./componentes/slider";
import Subdivision from "./componentes/subdivision"; // Importar el componente
import Location from "./componentes/location";
import Contact from "./componentes/contacto";

function App() {
  const [menuOpen, setMenuOpen] = useState(false);

  return (
    <Router>
      <div className="cactus-acres">
        <div className="cabeza">
          <div className="logo">
            <img src={logo} alt="Logo" />
          </div>

          <div className="nombre">
            <h1>CACTUS ACRES</h1>
          </div>

          <div className="button-container">
            <Link to="/" className="button">
              Home
            </Link>
            <Link to="/location" className="button">
              Location
            </Link>
            <Link to="/subdivision" className="button">
              Subdivision
            </Link>

            <Link to="/contact" className="button">
              Contact
            </Link>
          </div>

          <button className="menu-icon" onClick={() => setMenuOpen(!menuOpen)}>
            ☰
          </button>

          <div className={`mobile-menu ${menuOpen ? "show-menu" : ""}`}>
            <Link to="/" className="button" onClick={() => setMenuOpen(false)}>
              Home
            </Link>
            <Link
              to="/location"
              className="button"
              onClick={() => setMenuOpen(false)}
            >
              Location
            </Link>
            <Link
              to="/subdivision"
              className="button"
              onClick={() => setMenuOpen(false)}
            >
              Subdivision
            </Link>

            <Link
              to="/contact"
              className="button"
              onClick={() => setMenuOpen(false)}
            >
              Contact
            </Link>
          </div>
        </div>

        <Routes>
          <Route
            path="/"
            element={
              <>
                <div className="piso-dos">
                  <Slider />
                </div>
              </>
            }
          />
          <Route path="/subdivision" element={<Subdivision />} />
          <Route path="/location" element={<Location />} />
          <Route path="/contact" element={<Contact />} />
          {/* Puedes agregar más rutas aquí */}
        </Routes>
      </div>
    </Router>
  );
}

export default App;
