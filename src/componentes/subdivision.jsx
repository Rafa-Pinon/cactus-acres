import React, { useState } from "react";
import "../subdivision.css";
import Plano from "../imagenes/plano.png";

function Subdivision() {
  // Estado para almacenar el lote seleccionado
  const [loteSeleccionado, setLoteSeleccionado] = useState(null);

  // Información de los lotes (Aquí puedes ajustar las coordenadas y medidas)
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
    // Agrega más lotes hasta llegar a 66
  ];

  // Manejar la selección del lote
  const handleLoteChange = (event) => {
    const loteId = parseInt(event.target.value);
    const lote = lotes.find((l) => l.id === loteId);
    setLoteSeleccionado(lote);
  };

  return (
    <div className="todo-lotes">
      <div className="h1">
        <h1>Choose the place where your dreams come to life</h1>
      </div>
      <div className="lotesyinfo">
        <div className="tablatodo">
          {/* Tabla de selección de lotes */}
          <div className="seleccion-lote">
            <h1>Choose the lot you want</h1>
            <select onChange={handleLoteChange}>
              <option value="">Selecciona </option>
              {lotes.map((lote) => (
                <option key={lote.id} value={lote.id}>
                  Lote {lote.id}
                </option>
              ))}
            </select>
          </div>
          {/* Mostrar información del lote seleccionado */}
          {loteSeleccionado && (
            <div className="info-lote">
              <h3>Lot Details {loteSeleccionado.id}</h3>
              <p>Measurements: {loteSeleccionado.Measurements}</p>
            </div>
          )}
        </div>
        <div className="planouno">
          <img src={Plano} alt="planoimg" />
        </div>
      </div>
    </div>
  );
}

export default Subdivision;
