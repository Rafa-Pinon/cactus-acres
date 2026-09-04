import React from "react";
import "../about.css";

import entrada from "../imagenes/nuevoentradapuertaabierta.jpg";
import instalaciones from "../imagenes/nochelum.jpg";
import boulevard from "../imagenes/nuevocaminograva.jpg";
import corredor from "../imagenes/nuevocorredor.jpg";

function About() {
  const sections = [
    {
      number: "01",
      label: "SECURITY & PRIVACY",
      title: "A private community designed for peace of mind",
      text: "Cactus Acres is a gated residential community designed to provide security, privacy and controlled access. The private entrance helps reduce unnecessary traffic while creating a more peaceful environment for residents and visitors.",
      image: entrada,
      alt: "Gated entrance to Cactus Acres",
    },
    {
      number: "02",
      label: "INFRASTRUCTURE",
      title: "Essential services ready for your future home",
      text: "Our electrical infrastructure is installed underground to maintain a clean appearance while improving safety throughout the community. Cactus Acres also has a private well, quality water piping and a storage system designed to support the development.",
      image: instalaciones,
      alt: "Cactus Acres infrastructure at night",
    },
    {
      number: "03",
      label: "STREETS & ACCESS",
      title: "A community planned for comfortable movement",
      text: "The development includes a well-planned street layout designed for smooth and efficient traffic flow. The main access is designed as a boulevard, while sidewalks and secondary streets help provide safer and more comfortable movement throughout the community.",
      image: boulevard,
      alt: "Road and boulevard at Cactus Acres",
    },
    {
      number: "04",
      label: "OUTDOOR LIVING",
      title: "Space to walk, exercise and enjoy the outdoors",
      text: "A pathway around the neighborhood provides a comfortable place for walking, running and outdoor exercise. The perimeter design helps enhance privacy and security while maintaining the natural beauty and peaceful atmosphere of Cactus Acres.",
      image: corredor,
      alt: "Walking path at Cactus Acres",
    },
  ];

  return (
    <section className="about-page">
      <div className="about-wrapper">
        <header className="about-header">
          <span className="about-eyebrow">ABOUT CACTUS ACRES</span>

          <h1>More than a lot. A place designed for your future.</h1>

          <p>
            Cactus Acres combines privacy, essential infrastructure, thoughtful
            planning and outdoor living in a residential community designed for
            families, future homes and long-term investment.
          </p>
        </header>

        <div className="about-sections">
          {sections.map((section, index) => (
            <article
              className={`about-section ${index % 2 !== 0 ? "reverse" : ""}`}
              key={section.number}
            >
              <div className="about-image-container">
                <img
                  src={section.image}
                  alt={section.alt}
                  className="about-image"
                />

                <div className="about-image-number">{section.number}</div>
              </div>

              <div className="about-content">
                <span className="about-label">{section.label}</span>

                <h2>{section.title}</h2>

                <p>{section.text}</p>

                <div className="about-divider"></div>
              </div>
            </article>
          ))}
        </div>

        <section className="about-highlight">
          <div className="about-highlight-content">
            <span>CACTUS ACRES</span>

            <h2>
              Build with confidence in a community designed for the future.
            </h2>

            <p>
              Explore the subdivision and discover which available lot is right
              for you.
            </p>
          </div>

          <a href="/subdivision" className="about-highlight-button">
            View available lots
          </a>
        </section>
      </div>
    </section>
  );
}

export default About;
