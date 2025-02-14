import React, { useState, useEffect } from "react";
import {
  collection,
  addDoc,
  getDocs,
  onSnapshot,
  query,
  doc,
  deleteDoc,
} from "firebase/firestore";
import { db } from "../firebaseConfig";
import "../subdivision.css";
import Plano from "../imagenes/distribucionplanonuevo.jpg";

function Subdivision() {
  const [loteSeleccionado, setLoteSeleccionado] = useState(null);
  const [lotesApartados, setLotesApartados] = useState([]);
  const [clienteInfo, setClienteInfo] = useState({
    nombre: "",
    telefono: "",
    direccion: "",
  });
  const [mensaje, setMensaje] = useState("");

  // Obtener lotes apartados en tiempo real
  useEffect(() => {
    const q = query(collection(db, "lotesApartados"));
    const unsubscribe = onSnapshot(q, (snapshot) => {
      const lotes = snapshot.docs.map((doc) => ({
        id: doc.id,
        ...doc.data(),
      }));
      console.log("Lotes obtenidos:", lotes); // Debug para revisar datos
      setLotesApartados(lotes || []);
    });

    return () => unsubscribe(); // Desuscribirse al desmontar el componente
  }, []);

  // Manejar la selección del lote
  const handleLoteChange = (event) => {
    const loteId = parseInt(event.target.value);
    if (lotesApartados.some((lote) => lote.loteId === loteId)) {
      setMensaje("Este lote ya está apartado, elige otro.");
      setLoteSeleccionado(null);
    } else {
      setLoteSeleccionado(loteId);
      setMensaje("");
    }
  };

  // Manejar el formulario de cliente
  const handleChange = (e) => {
    const { name, value } = e.target;
    setClienteInfo({
      ...clienteInfo,
      [name]: value,
    });
  };

  // Función para apartar el lote y guardar en Firestore
  const apartarLote = async () => {
    if (!loteSeleccionado) {
      setMensaje("Por favor, selecciona un lote.");
      return;
    }
    if (
      !clienteInfo.nombre ||
      !clienteInfo.telefono ||
      !clienteInfo.direccion
    ) {
      setMensaje("Por favor, llena todos los campos.");
      return;
    }

    try {
      const docRef = await addDoc(collection(db, "lotesApartados"), {
        loteId: loteSeleccionado,
        clienteInfo,
      });
      console.log("Documento escrito con ID: ", docRef.id); // <-- Agrega este console.log
      setMensaje(`Lote ${loteSeleccionado} apartado con éxito.`);
      setLoteSeleccionado(null);
      setClienteInfo({ nombre: "", telefono: "", direccion: "" });
    } catch (error) {
      console.error("Error al apartar el lote:", error);
      setMensaje("Hubo un problema al apartar el lote.");
    }
  };
  // ** Función para quitar un apartado con contraseña **
  const quitarApartado = async (id) => {
    const contraseña = prompt(
      "Introduce la contraseña para quitar el apartado:"
    );
    if (contraseña === "1234") {
      try {
        await deleteDoc(doc(db, "lotesApartados", id));
        setMensaje(`Lote liberado con éxito.`);
      } catch (error) {
        console.error("Error al liberar el lote:", error);
        setMensaje("Hubo un problema al liberar el lote.");
      }
    } else {
      alert("Contraseña incorrecta. No se quitó el apartado.");
    }
  };

  return (
    <div className="todo-lotes">
      <div className="h1">
        <h1>Choose the place where your dreams come to life</h1>
      </div>
      <div className="lotesyinfo">
        <div className="planouno">
          <img src={Plano} alt="Plano de la subdivisión" />
        </div>
        <div className="tablatodo">
          <div className="seleccion-lote">
            <h1>Choose the lot you want</h1>
            <select onChange={handleLoteChange} value={loteSeleccionado || ""}>
              <option value="">Selecciona</option>
              {[...Array(66)].map((_, index) => (
                <option
                  key={index + 1}
                  value={index + 1}
                  disabled={lotesApartados.some(
                    (lote) => lote.loteId === index + 1
                  )}
                >
                  Lote {index + 1}
                </option>
              ))}
            </select>
          </div>

          {mensaje && <div className="mensaje">{mensaje}</div>}

          <div className="formulario-cliente">
            <input
              type="text"
              name="nombre"
              placeholder="Nombre Completo"
              value={clienteInfo.nombre}
              onChange={handleChange}
            />
            <input
              type="text"
              name="telefono"
              placeholder="Teléfono"
              value={clienteInfo.telefono}
              onChange={handleChange}
            />
            <input
              type="text"
              name="direccion"
              placeholder="Dirección Actual"
              value={clienteInfo.direccion}
              onChange={handleChange}
            />
            <button onClick={apartarLote}>Apartar Lote</button>
          </div>

          <div className="lotes-apartados">
            <h2>Lotes Apartados:</h2>
            {lotesApartados.length > 0 ? (
              <ul>
                {lotesApartados.map((lote) => (
                  <li key={lote.id}>
                    Lote {lote.loteId} -{" "}
                    {lote.clienteInfo?.nombre || "No disponible"}
                    <button onClick={() => quitarApartado(lote.id)}>
                      Liberar
                    </button>
                  </li>
                ))}
              </ul>
            ) : (
              <p>No hay lotes apartados.</p>
            )}
          </div>
        </div>
      </div>
    </div>
  );
}

export default Subdivision;
