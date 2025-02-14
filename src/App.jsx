// src/App.jsx
import { useState, useEffect } from "react";
import { BrowserRouter as Router, Routes, Route, Link } from "react-router-dom";
import "./App.css";
import logo from "./imagenes/logo.png";
import Slider from "./componentes/slider";
import Subdivision from "./componentes/subdivision";
import Location from "./componentes/location";
import Contact from "./componentes/contacto";

// Firebase Firestore
import { collection, getDocs } from "firebase/firestore";
import { db } from "./firebaseConfig.js";

function App() {
  const [menuOpen, setMenuOpen] = useState(false);
  const [datos, setDatos] = useState([]);

  useEffect(() => {
    const obtenerDatos = async () => {
      try {
        const querySnapshot = await getDocs(
          collection(db, "nombre_de_la_coleccion")
        );
        const datosFirestore = querySnapshot.docs.map((doc) => ({
          id: doc.id,
          ...doc.data(),
        }));
        setDatos(datosFirestore);
      } catch (error) {
        console.error("Error al obtener documentos: ", error);
      }
    };

    obtenerDatos();
  }, []);

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
                <div className="firebase-data">
                  <h2>Datos desde Firebase:</h2>
                  <ul>
                    {datos.map((item) => (
                      <li key={item.id}>{JSON.stringify(item)}</li>
                    ))}
                  </ul>
                </div>
              </>
            }
          />
          <Route path="/subdivision" element={<Subdivision />} />
          <Route path="/location" element={<Location />} />
          <Route path="/contact" element={<Contact />} />
        </Routes>
      </div>
    </Router>
  );
}

export default App;
