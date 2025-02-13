import React, { useState, useEffect } from "react";
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

  // Cargar lotes apartados del Local Storage SOLO al cargar la página
  useEffect(() => {
    const lotesGuardados = localStorage.getItem("lotesApartados");
    console.log("Lotes cargados del Local Storage:", lotesGuardados);

    if (lotesGuardados) {
      try {
        const parsedLotes = JSON.parse(lotesGuardados);
        if (Array.isArray(parsedLotes)) {
          setLotesApartados(parsedLotes);
        } else {
          console.warn(
            "Los lotes guardados no son un array válido:",
            parsedLotes
          );
        }
      } catch (error) {
        console.error("Error al parsear Local Storage:", error);
      }
    }
  }, []);

  // Guardar en Local Storage cada vez que cambian los lotes apartados
  useEffect(() => {
    if (lotesApartados.length > 0) {
      localStorage.setItem("lotesApartados", JSON.stringify(lotesApartados));
      console.log("Lotes guardados en Local Storage:", lotesApartados);
    } else {
      console.log("No se guardó en Local Storage porque el array está vacío.");
    }
  }, [lotesApartados]);

  // Información de los lotes
  const lotes = [
    { id: 1, Measurements: "10m x 12m 2,025m2" },
    { id: 2, Measurements: "12m x 15m 2,025m2" },
    { id: 3, Measurements: "8m x 10m 2,025m2" },
    { id: 4, Measurements: "14m x 16m 2,025m2" },
    { id: 5, Measurements: "11m x 12m 2,025m2" },
    { id: 6, Measurements: "13m x 10m 2,025m2" },
    { id: 7, Measurements: "9m x 14m 2,025m2" },
    { id: 8, Measurements: "15m x 10m 2,025m2" },
    { id: 9, Measurements: "12m x 12m 2,025m2" },
    { id: 10, Measurements: "10m x 10m 2,025m2" },
    { id: 11, Measurements: "10m x 12m 2,025m2" },
    { id: 12, Measurements: "12m x 15m 2,025m2" },
    { id: 13, Measurements: "8m x 10m 2,025m2" },
    { id: 14, Measurements: "14m x 16m 2,025m2" },
    { id: 15, Measurements: "11m x 12m 2,025m2" },
    { id: 16, Measurements: "13m x 10m 2,025m2" },
    { id: 17, Measurements: "9m x 14m 2,025m2" },
    { id: 18, Measurements: "15m x 10m 2,025m2" },
    { id: 19, Measurements: "12m x 12m 2,025m2" },
    { id: 21, Measurements: "12m x 15m 2,025m2" },
    { id: 22, Measurements: "8m x 10m 2,025m2" },
    { id: 23, Measurements: "14m x 16m 2,025m2" },
    { id: 24, Measurements: "11m x 12m 2,025m2" },
    { id: 25, Measurements: "13m x 10m 2,025m2" },
    { id: 26, Measurements: "9m x 14m 2,025m2" },
    { id: 27, Measurements: "15m x 10m 2,025m2" },
    { id: 28, Measurements: "12m x 12m 2,025m2" },
    { id: 30, Measurements: "12m x 15m 2,025m2" },
    { id: 31, Measurements: "8m x 10m 2,025m2" },
    { id: 32, Measurements: "14m x 16 2,025m2m" },
    { id: 33, Measurements: "11m x 12m 2,025m2" },
    { id: 34, Measurements: "13m x 10m 2,025m2" },
    { id: 35, Measurements: "9m x 14m 2,025m2" },
    { id: 36, Measurements: "15m x 10m 2,025m2" },
    { id: 37, Measurements: "12m x 12m 2,025m2" },
    { id: 39, Measurements: "12m x 15m 2,025m2" },
    { id: 40, Measurements: "8m x 10m 2,025m2" },
    { id: 41, Measurements: "14m x 16m 2,025m2" },
    { id: 42, Measurements: "11m x 12m 2,025m2" },
    { id: 43, Measurements: "13m x 10m 2,025m2" },
    { id: 44, Measurements: "9m x 14m 2,025m2" },
    { id: 45, Measurements: "15m x 10m 2,025m2" },
    { id: 46, Measurements: "12m x 12m 2,025m2" },
    { id: 48, Measurements: "12m x 15m 2,025m2" },
    { id: 49, Measurements: "8m x 10m 2,025m2" },
    { id: 50, Measurements: "14m x 16m 2,025m2" },
    { id: 51, Measurements: "11m x 12m 2,025m2" },
    { id: 52, Measurements: "13m x 10m 2,025m2" },
    { id: 53, Measurements: "9m x 14m 2,025m2" },
    { id: 54, Measurements: "15m x 10m 2,025m2" },
    { id: 55, Measurements: "12m x 12m 2,025m2" },
    { id: 56, Measurements: "10m x 10m 2,025m2" },
    { id: 58, Measurements: "12m x 15m 2,025m2" },
    { id: 59, Measurements: "8m x 10m 2,025m2" },
    { id: 60, Measurements: "14m x 16m 2,025m2" },
    { id: 61, Measurements: "11m x 12m 2,025m2" },
    { id: 62, Measurements: "13m x 10m 2,025m2" },
    { id: 63, Measurements: "9m x 14m 2,025m2" },
    { id: 64, Measurements: "15m x 10m 2,025m2" },
    { id: 65, Measurements: "12m x 12m 2,025m2" },
    { id: 66, Measurements: "10m x 10m 2,025m2" },
  ];

  // Manejar la selección del lote
  const handleLoteChange = (event) => {
    const loteId = parseInt(event.target.value);
    if (lotesApartados.includes(loteId)) {
      setMensaje("Este lote ya está apartado, elige otro.");
      setLoteSeleccionado(null);
    } else {
      const lote = lotes.find((l) => l.id === loteId);
      setLoteSeleccionado(lote);
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

  // ** Apartar el lote y guardar en Local Storage **
  const apartarLote = () => {
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

    // Verificar si el lote ya está apartado
    if (lotesApartados.includes(loteSeleccionado.id)) {
      setMensaje("Este lote ya está apartado. Elige otro.");
      return;
    }

    // Apartar el lote
    const nuevosLotes = [...lotesApartados, loteSeleccionado.id];
    setLotesApartados(nuevosLotes);
    setMensaje(`Lote ${loteSeleccionado.id} apartado con éxito.`);
    setLoteSeleccionado(null);
    setClienteInfo({ nombre: "", telefono: "", direccion: "" });
  };

  // ** Función para quitar un apartado con contraseña **
  const quitarApartado = (loteId) => {
    const contraseña = prompt(
      "Introduce la contraseña para quitar el apartado:"
    );
    if (contraseña === "1234") {
      setLotesApartados((prevLotes) => {
        const nuevosLotes = prevLotes.filter((id) => id !== loteId);
        console.log("Lotes actualizados después de quitar:", nuevosLotes);
        // Guardar en Local Storage al eliminar un lote
        localStorage.setItem("lotesApartados", JSON.stringify(nuevosLotes));
        return nuevosLotes;
      });
      setMensaje(`Lote ${loteId} liberado con éxito.`);
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
            <select
              onChange={handleLoteChange}
              value={loteSeleccionado ? loteSeleccionado.id : ""}
            >
              <option value="">Selecciona</option>
              {lotes.map((lote) => (
                <option
                  key={lote.id}
                  value={lote.id}
                  disabled={lotesApartados.includes(lote.id)}
                >
                  Lote {lote.id}
                </option>
              ))}
            </select>
          </div>

          {mensaje && <div className="mensaje">{mensaje}</div>}

          {loteSeleccionado && (
            <div className="info-lote">
              <h3>Lot Details {loteSeleccionado.id}</h3>
              <p>Measurements: {loteSeleccionado.Measurements}</p>
            </div>
          )}

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
                {lotesApartados.map((id) => (
                  <li key={id}>
                    Lote {id}
                    <button onClick={() => quitarApartado(id)}>Liberar</button>
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
