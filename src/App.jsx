import { useState } from "react";
import {
  BrowserRouter as Router,
  Routes,
  Route,
  NavLink,
} from "react-router-dom";

import "./App.css";

import logo from "./imagenes/logo.png";

import Slider from "./componentes/slider";
import Subdivision from "./componentes/subdivision";
import Location from "./componentes/location";
import Contact from "./componentes/contacto";
import About from "./componentes/about.jsx";

function App() {
  const [menuOpen, setMenuOpen] = useState(false);

  const cerrarMenu = () => {
    setMenuOpen(false);
  };

  return (
    <Router>
      <div className="cactus-acres">
        <header className="header">
          <div className="header-inner">
            <NavLink
              to="/"
              className="brand"
              onClick={cerrarMenu}
              aria-label="Cactus Acres Home"
            >
              <img src={logo} alt="Cactus Acres" className="brand-logo" />

              <div className="brand-text">
                <h1>CACTUS ACRES</h1>
                <span>Your place in the desert</span>
              </div>
            </NavLink>

            <nav className="desktop-nav">
              <NavLink
                to="/"
                className={({ isActive }) =>
                  isActive ? "nav-link active" : "nav-link"
                }
              >
                Home
              </NavLink>

              <NavLink
                to="/location"
                className={({ isActive }) =>
                  isActive ? "nav-link active" : "nav-link"
                }
              >
                Location
              </NavLink>

              <NavLink
                to="/subdivision"
                className={({ isActive }) =>
                  isActive ? "nav-link active" : "nav-link"
                }
              >
                Subdivision
              </NavLink>

              <NavLink
                to="/about"
                className={({ isActive }) =>
                  isActive ? "nav-link active" : "nav-link"
                }
              >
                About
              </NavLink>

              <NavLink to="/contact" className="contact-button">
                Contact
              </NavLink>
            </nav>

            <button
              className={`menu-toggle ${menuOpen ? "open" : ""}`}
              onClick={() => setMenuOpen(!menuOpen)}
              aria-label="Open navigation menu"
              aria-expanded={menuOpen}
            >
              <span></span>
              <span></span>
              <span></span>
            </button>
          </div>

          <nav className={`mobile-nav ${menuOpen ? "open" : ""}`}>
            <NavLink to="/" onClick={cerrarMenu} className="mobile-nav-link">
              Home
            </NavLink>

            <NavLink
              to="/location"
              onClick={cerrarMenu}
              className="mobile-nav-link"
            >
              Location
            </NavLink>

            <NavLink
              to="/subdivision"
              onClick={cerrarMenu}
              className="mobile-nav-link"
            >
              Subdivision
            </NavLink>

            <NavLink
              to="/about"
              onClick={cerrarMenu}
              className="mobile-nav-link"
            >
              About
            </NavLink>

            <NavLink
              to="/contact"
              onClick={cerrarMenu}
              className="mobile-contact-button"
            >
              Contact
            </NavLink>
          </nav>
        </header>

        <main className="main-content">
          <Routes>
            <Route
              path="/"
              element={
                <section className="home-page">
                  <Slider />
                </section>
              }
            />

            <Route path="/location" element={<Location />} />

            <Route path="/subdivision" element={<Subdivision />} />

            <Route path="/contact" element={<Contact />} />

            <Route path="/about" element={<About />} />
          </Routes>
        </main>
      </div>
    </Router>
  );
}

export default App;
