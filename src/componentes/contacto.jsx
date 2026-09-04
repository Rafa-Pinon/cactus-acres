import React, { useState } from "react";
import {
  FaWhatsapp,
  FaEnvelope,
  FaPhone,
  FaMapMarkerAlt,
} from "react-icons/fa";

import "../contact.css";

function Contact() {
  const phoneNumber = "6366991839";

  // Cambia este correo por el correo REAL que quieras usar.
  const emailAddress = "josiahlebaron@yahoo.com";

  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    message: "",
  });

  const handleChange = (event) => {
    const { name, value } = event.target;

    setFormData((prev) => ({
      ...prev,
      [name]: value,
    }));
  };

  const handleSubmit = (event) => {
    event.preventDefault();

    const { name, email, phone, message } = formData;

    const whatsappMessage = `
Hello, I am contacting you from the Cactus Acres website.

Name: ${name}
Email: ${email}
Phone: ${phone}

Message:
${message}
    `.trim();

    const whatsappURL = `https://wa.me/${phoneNumber}?text=${encodeURIComponent(
      whatsappMessage,
    )}`;

    window.open(whatsappURL, "_blank", "noopener,noreferrer");
  };

  return (
    <section className="contact-page">
      <div className="contact-wrapper">
        <header className="contact-header">
          <span className="contact-eyebrow">CACTUS ACRES</span>

          <h1>We would be happy to hear from you</h1>

          <p>
            Contact us for information about available lots, reservations or any
            questions about Cactus Acres.
          </p>
        </header>

        <div className="contact-grid">
          <div className="contact-information-card">
            <span className="contact-card-label">CONTACT INFORMATION</span>

            <h2>Let's talk about your future property</h2>

            <p className="contact-description">
              Reach us directly by phone, email or WhatsApp. We will be happy to
              answer your questions.
            </p>

            <div className="contact-methods">
              <a href={`tel:${phoneNumber}`} className="contact-method">
                <div className="contact-icon">
                  <FaPhone />
                </div>

                <div>
                  <span>Phone</span>
                  <strong>{phoneNumber}</strong>
                </div>
              </a>

              <a href={`mailto:${emailAddress}`} className="contact-method">
                <div className="contact-icon">
                  <FaEnvelope />
                </div>

                <div>
                  <span>Email</span>
                  <strong>{emailAddress}</strong>
                </div>
              </a>

              <div className="contact-method">
                <div className="contact-icon">
                  <FaMapMarkerAlt />
                </div>

                <div>
                  <span>Development</span>
                  <strong>Cactus Acres</strong>
                </div>
              </div>
            </div>

            <a
              href={`https://wa.me/${phoneNumber}`}
              target="_blank"
              rel="noopener noreferrer"
              className="contact-whatsapp-button"
            >
              <FaWhatsapp />
              Chat with us on WhatsApp
            </a>
          </div>

          <div className="contact-form-card">
            <span className="contact-card-label">SEND A MESSAGE</span>

            <h2>Tell us how we can help</h2>

            <p className="contact-form-intro">
              Complete the form and your message will open directly in WhatsApp
              ready to send.
            </p>

            <form onSubmit={handleSubmit} className="contact-form">
              <div className="contact-form-group">
                <label htmlFor="name">Full name</label>

                <input
                  id="name"
                  type="text"
                  name="name"
                  value={formData.name}
                  onChange={handleChange}
                  placeholder="Your full name"
                  autoComplete="name"
                  required
                />
              </div>

              <div className="contact-form-group">
                <label htmlFor="email">Email address</label>

                <input
                  id="email"
                  type="email"
                  name="email"
                  value={formData.email}
                  onChange={handleChange}
                  placeholder="you@example.com"
                  autoComplete="email"
                  required
                />
              </div>

              <div className="contact-form-group">
                <label htmlFor="phone">Phone number</label>

                <input
                  id="phone"
                  type="tel"
                  name="phone"
                  value={formData.phone}
                  onChange={handleChange}
                  placeholder="Your phone number"
                  autoComplete="tel"
                  required
                />
              </div>

              <div className="contact-form-group">
                <label htmlFor="message">Message</label>

                <textarea
                  id="message"
                  name="message"
                  value={formData.message}
                  onChange={handleChange}
                  placeholder="I'm interested in learning more about..."
                  required
                />
              </div>

              <button type="submit" className="contact-submit-button">
                <FaWhatsapp />
                Send through WhatsApp
              </button>
            </form>
          </div>
        </div>

        <div className="contact-bottom">
          <div>
            <span>AVAILABLE LOTS</span>

            <h2>Ready to find the right place for your future?</h2>
          </div>

          <a href="/subdivision" className="contact-lots-button">
            View available lots
          </a>
        </div>
      </div>
    </section>
  );
}

export default Contact;
