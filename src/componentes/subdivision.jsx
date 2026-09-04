import React, { useEffect, useMemo, useState } from "react";
import {
  addDoc,
  collection,
  deleteDoc,
  doc,
  onSnapshot,
  query,
} from "firebase/firestore";

import { db } from "../firebaseConfig";
import "../subdivision.css";

import Plano from "../imagenes/distribucionplanonuevo.jpg";

const TOTAL_LOTES = 66;

function Subdivision() {
  const [adminAccess, setAdminAccess] = useState(false);
  const [adminVisible, setAdminVisible] = useState(false);
  const [passwordInput, setPasswordInput] = useState("");

  const [clientesRegistrados, setClientesRegistrados] = useState([]);
  const [loteSeleccionado, setLoteSeleccionado] = useState("");
  const [lotesApartados, setLotesApartados] = useState([]);

  const [clienteInfo, setClienteInfo] = useState({
    nombre: "",
    telefono: "",
    direccion: "",
  });

  const [mensaje, setMensaje] = useState("");
  const [tipoMensaje, setTipoMensaje] = useState("");
  const [enviando, setEnviando] = useState(false);

  useEffect(() => {
    const q = query(collection(db, "lotesApartados"));

    const unsubscribe = onSnapshot(
      q,
      (snapshot) => {
        const lotes = snapshot.docs.map((documento) => ({
          id: documento.id,
          ...documento.data(),
        }));

        setLotesApartados(lotes);
        setClientesRegistrados(lotes);
      },
      (error) => {
        console.error("Error al cargar los lotes:", error);
        setMensaje("No fue posible cargar la disponibilidad.");
        setTipoMensaje("error");
      },
    );

    return () => unsubscribe();
  }, []);

  const lotesApartadosIds = useMemo(
    () => new Set(lotesApartados.map((lote) => Number(lote.loteId))),
    [lotesApartados],
  );

  const lotesDisponibles = TOTAL_LOTES - lotesApartados.length;

  const handleLoteChange = (event) => {
    const valor = event.target.value;

    if (!valor) {
      setLoteSeleccionado("");
      setMensaje("");
      return;
    }

    const loteId = Number(valor);

    if (lotesApartadosIds.has(loteId)) {
      setMensaje("This lot is already reserved. Please choose another lot.");
      setTipoMensaje("error");
      setLoteSeleccionado("");
      return;
    }

    setLoteSeleccionado(loteId);
    setMensaje("");
  };

  const handleChange = (event) => {
    const { name, value } = event.target;

    setClienteInfo((prev) => ({
      ...prev,
      [name]: value,
    }));
  };

  const apartarLote = async (event) => {
    event.preventDefault();

    if (!loteSeleccionado) {
      setMensaje("Please choose a lot.");
      setTipoMensaje("error");
      return;
    }

    if (
      !clienteInfo.nombre.trim() ||
      !clienteInfo.telefono.trim() ||
      !clienteInfo.direccion.trim()
    ) {
      setMensaje("Please complete all contact information.");
      setTipoMensaje("error");
      return;
    }

    if (lotesApartadosIds.has(Number(loteSeleccionado))) {
      setMensaje("This lot has already been reserved.");
      setTipoMensaje("error");
      return;
    }

    try {
      setEnviando(true);

      await addDoc(collection(db, "lotesApartados"), {
        loteId: Number(loteSeleccionado),
        nombre: clienteInfo.nombre.trim(),
        telefono: clienteInfo.telefono.trim(),
        direccion: clienteInfo.direccion.trim(),
        fechaRegistro: new Date().toISOString(),
      });

      setMensaje(`Lot ${loteSeleccionado} has been reserved successfully.`);
      setTipoMensaje("success");

      setLoteSeleccionado("");
      setClienteInfo({
        nombre: "",
        telefono: "",
        direccion: "",
      });
    } catch (error) {
      console.error("Error al apartar el lote:", error);

      setMensaje("There was a problem reserving the lot. Please try again.");
      setTipoMensaje("error");
    } finally {
      setEnviando(false);
    }
  };

  const verificarAdmin = () => {
    if (passwordInput === "admin12345") {
      setAdminAccess(true);
      setAdminVisible(false);
      setPasswordInput("");

      setMensaje("Administrator mode activated.");
      setTipoMensaje("success");
    } else {
      setMensaje("Incorrect administrator password.");
      setTipoMensaje("error");
    }
  };

  const quitarApartado = async (id, loteId) => {
    if (!adminAccess) return;

    const confirmar = window.confirm(
      `Are you sure you want to release Lot ${loteId}?`,
    );

    if (!confirmar) return;

    try {
      await deleteDoc(doc(db, "lotesApartados", id));

      setMensaje(`Lot ${loteId} is now available.`);
      setTipoMensaje("success");
    } catch (error) {
      console.error("Error al liberar el lote:", error);

      setMensaje("There was a problem releasing the lot.");
      setTipoMensaje("error");
    }
  };

  return (
    <section className="subdivision-page">
      <div className="subdivision-wrapper">
        <div className="subdivision-heading">
          <span className="subdivision-eyebrow">CACTUS ACRES</span>

          <h1>Choose the place where your dreams come to life</h1>

          <p>
            Explore our subdivision map, select an available lot and send us
            your information to begin the reservation process.
          </p>

          <div className="subdivision-stats">
            <div className="stat">
              <strong>{TOTAL_LOTES}</strong>
              <span>Total lots</span>
            </div>

            <div className="stat">
              <strong>{lotesDisponibles}</strong>
              <span>Available</span>
            </div>

            <div className="stat">
              <strong>{lotesApartados.length}</strong>
              <span>Reserved</span>
            </div>
          </div>
        </div>

        <div className="subdivision-grid">
          <div className="plan-card">
            <div className="plan-card-heading">
              <div>
                <span>Subdivision map</span>
                <h2>Find your ideal lot</h2>
              </div>

              <span className="availability-badge">
                {lotesDisponibles} available
              </span>
            </div>

            <div className="plan-image-container">
              <img
                src={Plano}
                alt="Cactus Acres subdivision lot map"
                className="plan-image"
              />
            </div>

            <p className="plan-help">
              Use the lot selector to check current availability.
            </p>
          </div>

          <div className="reservation-card">
            <div className="reservation-heading">
              <span>LOT RESERVATION</span>
              <h2>Choose your lot</h2>
              <p>Reserved lots are automatically disabled in the selector.</p>
            </div>

            <form onSubmit={apartarLote}>
              <div className="form-group">
                <label htmlFor="lote">Lot number</label>

                <select
                  id="lote"
                  value={loteSeleccionado}
                  onChange={handleLoteChange}
                >
                  <option value="">Select an available lot</option>

                  {Array.from(
                    { length: TOTAL_LOTES },
                    (_, index) => index + 1,
                  ).map((numeroLote) => (
                    <option
                      key={numeroLote}
                      value={numeroLote}
                      disabled={lotesApartadosIds.has(numeroLote)}
                    >
                      Lot {numeroLote}
                      {lotesApartadosIds.has(numeroLote) ? " — Reserved" : ""}
                    </option>
                  ))}
                </select>
              </div>

              <div className="form-group">
                <label htmlFor="nombre">Full name</label>

                <input
                  id="nombre"
                  type="text"
                  name="nombre"
                  placeholder="Your full name"
                  value={clienteInfo.nombre}
                  onChange={handleChange}
                  autoComplete="name"
                />
              </div>

              <div className="form-group">
                <label htmlFor="telefono">Phone number</label>

                <input
                  id="telefono"
                  type="tel"
                  name="telefono"
                  placeholder="Your phone number"
                  value={clienteInfo.telefono}
                  onChange={handleChange}
                  autoComplete="tel"
                />
              </div>

              <div className="form-group">
                <label htmlFor="direccion">Current address</label>

                <input
                  id="direccion"
                  type="text"
                  name="direccion"
                  placeholder="Your current address"
                  value={clienteInfo.direccion}
                  onChange={handleChange}
                  autoComplete="street-address"
                />
              </div>

              {mensaje && (
                <div className={`mensaje ${tipoMensaje}`}>{mensaje}</div>
              )}

              <button
                type="submit"
                className="reserve-button"
                disabled={enviando}
              >
                {enviando ? "Sending..." : "Reserve this lot"}
              </button>
            </form>

            <div className="reservation-note">
              <strong>Important:</strong> Sending this form registers the lot
              reservation request in our system.
            </div>
          </div>
        </div>

        {adminAccess && (
          <section className="admin-panel">
            <div className="admin-panel-heading">
              <div>
                <span>ADMINISTRATION</span>
                <h2>Reserved lots</h2>
              </div>

              <button
                className="logout-admin"
                onClick={() => setAdminAccess(false)}
              >
                Exit admin
              </button>
            </div>

            {clientesRegistrados.length > 0 ? (
              <div className="admin-list">
                {clientesRegistrados
                  .slice()
                  .sort((a, b) => Number(a.loteId) - Number(b.loteId))
                  .map((cliente) => (
                    <article className="admin-lot-card" key={cliente.id}>
                      <div className="admin-lot-number">
                        Lot {cliente.loteId}
                      </div>

                      <div className="admin-client-info">
                        <p>
                          <strong>Name:</strong> {cliente.nombre}
                        </p>

                        <p>
                          <strong>Phone:</strong> {cliente.telefono}
                        </p>

                        <p>
                          <strong>Address:</strong> {cliente.direccion}
                        </p>
                      </div>

                      <button
                        className="release-button"
                        onClick={() =>
                          quitarApartado(cliente.id, cliente.loteId)
                        }
                      >
                        Release
                      </button>
                    </article>
                  ))}
              </div>
            ) : (
              <p className="no-reservations">
                There are currently no reserved lots.
              </p>
            )}
          </section>
        )}

        <div className="admin-access">
          {!adminAccess && (
            <button
              className="admin-btn"
              onClick={() => {
                setAdminVisible(true);
                setPasswordInput("");
              }}
            >
              Administrator access
            </button>
          )}
        </div>
      </div>

      {adminVisible && (
        <div
          className="modal"
          onMouseDown={(event) => {
            if (event.target === event.currentTarget) {
              setAdminVisible(false);
            }
          }}
        >
          <div className="modal-content">
            <span className="modal-label">CACTUS ACRES</span>

            <h2>Administrator access</h2>

            <p>Enter the administrator password to continue.</p>

            <input
              type="password"
              placeholder="Password"
              value={passwordInput}
              onChange={(event) => setPasswordInput(event.target.value)}
              onKeyDown={(event) => {
                if (event.key === "Enter") {
                  verificarAdmin();
                }
              }}
              autoFocus
            />

            <div className="modal-buttons">
              <button
                className="cancel-btn"
                onClick={() => setAdminVisible(false)}
              >
                Cancel
              </button>

              <button className="confirm-btn" onClick={verificarAdmin}>
                Enter
              </button>
            </div>
          </div>
        </div>
      )}
    </section>
  );
}

export default Subdivision;
