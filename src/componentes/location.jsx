import { useState } from "react";
import "../location.css";

function Location() {
  return (
    <div className="location-container">
      <header className="location-header">
        <h1>Discover Our Prime Location</h1>
        <p>Find the perfect place for your dream home.</p>
      </header>

      <div className="location-content">
        <div className="location-map">
          {/* Google Maps Embed (Reemplaza con tu dirección) */}
          <iframe
            title="location-map"
            src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d4098.20216994136!2d-107.60740882394543!3d30.010858520160454!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x86c31580fe24f745%3A0xc9e31e2e1703c0fc!2sFraccionamiento%20%22Cactus%20Acres%22!5e1!3m2!1ses-419!2smx!4v1739137527817!5m2!1ses-419!2smx"
            allowFullScreen=""
            loading="lazy"
            referrerPolicy="no-referrer-when-downgrade"
          ></iframe>
        </div>

        <div className="location-info">
          <h2>Why Choose This Location?</h2>
          <ul>
            <li>Security and tranquility for your family</li>
            <li>Spacious lots ready for construction</li>
            <li>Basic services guaranteed</li>
            <li>Modern and functional urban design</li>
          </ul>
        </div>
      </div>
    </div>
  );
}

export default Location;
