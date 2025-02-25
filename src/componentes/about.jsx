import React, { useState } from "react";
import "../about.css";
import Imagenseguridad from "../imagenes/entradanuevo.jpg";
import imageninstalacion from "../imagenes/nochelum.jpg";
import bulrvardnuevo from "../imagenes/bulevardnuevo.jpg";
import Corredornuevo from "../imagenes/corredornuevo.jpg";

function About() {
  return (
    <div className="informacion-de-proyecto">
      <div className="seguridad">
        <div className="imagenseguridad">
          <img src={Imagenseguridad} alt="Example" />;
        </div>
        <div className="textoseguridad">
          <p>
            This residential community is designed to ensure the safety and
            well-being of your family. It features a gated entrance with
            security personnel, giving you full control over who enters, as only
            those you authorize will be allowed access.
          </p>
        </div>
      </div>

      <div className="instalaciones">
        <div className="textoinstalaciones">
          <p>
            Our electrical installations are completely underground, providing
            not only a more beautiful environment but also greater safety and
            protection for your family. Additionally, the water supply is
            guaranteed thanks to high-quality piping and a storage system
            designed to meet all your needs. Here, comfort and peace of mind are
            assured. This is the perfect place to build the home of your dreams!
            Don’t miss the opportunity to invest in a lot that offers security,
            quality, and well-being.
          </p>
        </div>
        <div className="imageninstalaciones">
          <img src={imageninstalacion} alt="Example" />;
        </div>
      </div>
      <div className="calles-glorietas-banquetas">
        <div className="imagencalles">
          <img src={bulrvardnuevo} alt="Example" />;
        </div>
        <div className="textocalles">
          <p>
            We have an excellent street layout that ensures a smooth and
            efficient traffic flow. The main street is designed as a boulevard,
            with lanes divided by central lines to improve traffic organization.
            Additionally, sidewalks on the sides of both main and secondary
            streets, along with improved pathways, provide comfortable and safe
            mobility for everyone.
          </p>
        </div>
      </div>
      <div className="corredorybarda">
        <div className="textocorredor">
          <p>
            We have a pathway around the neighborhood, perfect for outdoor
            exercise. Additionally, our perimeter wall enhances the beauty of
            the area while providing extra security for the community.
          </p>
        </div>
        <div className="imagencorredor">
          <img src={Corredornuevo} alt="Example" />;
        </div>
      </div>
    </div>
  );
}

export default About;
