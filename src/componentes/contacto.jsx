import React, { useState } from "react";
import { FaWhatsapp, FaEnvelope, FaPhone } from "react-icons/fa"; // Importamos iconos
import "../contact.css";

function Contact() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    message: "",
  });

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log("Formulario enviado:", formData);
  };

  // Número de teléfono y WhatsApp
  const phoneNumber = "6366991839 "; // Reemplaza con tu número real

  return (
    <div className="todo">
      <div className="contact-container">
        <h2>Contact Us</h2>

        {/* Información de contacto */}
        <div className="contact-info">
          <p>
            <FaPhone /> <strong>Phone:</strong>{" "}
            <a href={`tel:${phoneNumber}`}>{phoneNumber}</a>
          </p>
          <p>
            <FaEnvelope /> <strong>Email:</strong>
            <a href="rafapinongonzalez@live.com.mx">
              {" "}
              rafapinongonzalez@live.com.mx
            </a>
          </p>
        </div>

        {/* Botón de WhatsApp */}
        <a
          href={`https://wa.me/${phoneNumber}`}
          className="whatsapp-button"
          target="_blank"
          rel="noopener noreferrer"
        >
          <FaWhatsapp /> Chat on WhatsApp
        </a>

        {/* Formulario de contacto */}
        <form onSubmit={handleSubmit} className="contact-form">
          <div className="input-group">
            <label>Name</label>
            <input
              type="text"
              name="name"
              value={formData.name}
              onChange={handleChange}
              required
            />
          </div>

          <div className="input-group">
            <label>Email</label>
            <input
              type="email"
              name="email"
              value={formData.email}
              onChange={handleChange}
              required
            />
          </div>

          <div className="input-group">
            <label>Phone</label>
            <input
              type="tel"
              name="phone"
              value={formData.phone}
              onChange={handleChange}
              required
            />
          </div>

          <div className="input-group">
            <label>Message</label>
            <textarea
              name="message"
              value={formData.message}
              onChange={handleChange}
              required
            />
          </div>

          <button type="submit" className="submit-btn">
            Send Message
          </button>
        </form>
      </div>
    </div>
  );
}

export default Contact;
