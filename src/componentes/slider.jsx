import React, { useEffect, useState } from "react";
import "../slider.css";

import imagen1 from "../imagenes/nuevoentrada.jpg";
import imagen2 from "../imagenes/nuevoentradapuertaabierta.jpg";
import imagen3 from "../imagenes/nuevoparque.jpg";
import imagen4 from "../imagenes/nuevoparquiedecerca.jpg";
import imagen5 from "../imagenes/nuevocorredor.jpg";
import imagen6 from "../imagenes/nuevocaminograva.jpg";

const images = [
  {
    src: imagen1,
    alt: "Entrance to Cactus Acres",
  },
  {
    src: imagen2,
    alt: "Main entrance to Cactus Acres",
  },
  {
    src: imagen3,
    alt: "Cactus Acres park",
  },
  {
    src: imagen4,
    alt: "Park area at Cactus Acres",
  },
  {
    src: imagen5,
    alt: "Cactus Acres walking area",
  },
  {
    src: imagen6,
    alt: "Gravel road at Cactus Acres",
  },
];

const texts = [
  "Your future begins with a great investment. Secure the perfect lot today.",
  "Build your dreams from the ground up. Claim your ideal location now.",
  "The best investment is in land because its value only grows. Secure your legacy today.",
];

const Slider = () => {
  const [currentImageIndex, setCurrentImageIndex] = useState(0);
  const [currentTextIndex, setCurrentTextIndex] = useState(0);

  useEffect(() => {
    const imageInterval = setInterval(() => {
      setCurrentImageIndex((prevIndex) => (prevIndex + 1) % images.length);
    }, 4500);

    return () => clearInterval(imageInterval);
  }, []);

  useEffect(() => {
    const textInterval = setInterval(() => {
      setCurrentTextIndex((prevIndex) => (prevIndex + 1) % texts.length);
    }, 6000);

    return () => clearInterval(textInterval);
  }, []);

  const nextSlide = () => {
    setCurrentImageIndex((prevIndex) => (prevIndex + 1) % images.length);
  };

  const prevSlide = () => {
    setCurrentImageIndex(
      (prevIndex) => (prevIndex - 1 + images.length) % images.length,
    );
  };

  const goToSlide = (index) => {
    setCurrentImageIndex(index);
  };

  return (
    <section className="todoslider">
      <div className="slider-content">
        <div className="anuncios">
          <span className="anuncios-small">CACTUS ACRES</span>

          <h2>{texts[currentTextIndex]}</h2>

          <div className="anuncios-line"></div>
        </div>

        <div className="slider-container">
          <div className="slider">
            <img
              className="slider-image"
              src={images[currentImageIndex].src}
              alt={images[currentImageIndex].alt}
            />

            <div className="slider-overlay"></div>

            <button
              className="slider-arrow prev"
              onClick={prevSlide}
              aria-label="Previous image"
            >
              &#10094;
            </button>

            <button
              className="slider-arrow next"
              onClick={nextSlide}
              aria-label="Next image"
            >
              &#10095;
            </button>

            <div className="slider-counter">
              {currentImageIndex + 1} / {images.length}
            </div>
          </div>

          <div className="thumbnails">
            {images.map((image, index) => (
              <button
                key={index}
                className={`thumbnail-button ${
                  currentImageIndex === index ? "active" : ""
                }`}
                onClick={() => goToSlide(index)}
                aria-label={`View image ${index + 1}`}
              >
                <img className="thumbnail" src={image.src} alt={image.alt} />
              </button>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Slider;
