import { useState } from "react";
import "../location.css";

function Location() {
  return (
    <div className="location-container">
      <header className="location-header">
        <h2>
          Private gated community Security and tranquility for you family or
          vacation home Modern and funcitional design Title property ready for
          ownership title transfer Spacious lots ready for construction Water
          and power to each lot. Private well, excess water available Power
          ready to hook up with Commision. Contracts approved. Under ground
          power with double meter for each lot. No overhead powerlines
        </h2>
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
