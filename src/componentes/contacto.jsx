import React, { useState } from "react";
import { FaWhatsapp, FaEnvelope, FaPhone } from "react-icons/fa";
import "../contact.css";

function Contact() {
  const phoneNumber = "6366991839"; // Definir phoneNumber antes de usarlo

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
    const { name, email, phone, message } = formData;

    const whatsappMessage = `Hola, mi nombre es ${name}.%0AEmail: ${email}%0ATeléfono: ${phone}%0AMensaje: ${message}`;
    const whatsappURL = `https://wa.me/${phoneNumber}?text=${whatsappMessage}`;

    window.open(whatsappURL, "_blank");
  };

  return (
    <div className="todo">
      <div className="contact-container">
        <h2>Contact Us</h2>

        <div className="contact-info">
          <p>
            <FaPhone /> <strong>Phone:</strong>{" "}
            <a href={`tel:${phoneNumber}`}>{phoneNumber}</a>
          </p>
          <p>
            <FaEnvelope /> <strong>Email:</strong>
            <a href="mailto:rafapinongonzalez@live.com.mx">
              {" "}
              josiahlebaron@yahoo.com
            </a>
          </p>
        </div>

        <a
          href={`https://wa.me/${phoneNumber}`}
          className="whatsapp-button"
          target="_blank"
          rel="noopener noreferrer"
        >
          <FaWhatsapp /> Chat on WhatsApp
        </a>

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
