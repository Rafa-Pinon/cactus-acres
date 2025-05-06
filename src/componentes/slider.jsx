import React, { useState, useEffect } from "react";
import "../slider.css";

// Importa las imágenes desde la carpeta 'src/images'
import imagen1 from "../imagenes/entradanuevo.jpg";
import imagen2 from "../imagenes/corredornuevo.jpg";
import imagen3 from "../imagenes/glorietanuevo.jpg";
import imagen4 from "../imagenes/bulevardnuevo.jpg";
import imagen5 from "../imagenes/nochelum.jpg";
import imagen6 from "../imagenes/parquenuevo.jpg";

const images = [
  { src: imagen1, alt: "Imagen 1" },
  { src: imagen2, alt: "Imagen 2" },
  { src: imagen3, alt: "Imagen 3" },
  { src: imagen4, alt: "Imagen 4" },
  { src: imagen5, alt: "Imagen 5" },
  { src: imagen6, alt: "Imagen 6" },
];

const texts = [
  "Your future begins with a great investment. Secure the perfect lot today.",
  "Build your dreams from the ground up. Claim your ideal location now.",
  "The best investment is in land because its value only grows. Secure your legacy today.",
];

const Slider = () => {
  const [currentImageIndex, setCurrentImageIndex] = useState(0);
  const [currentTextIndex, setCurrentTextIndex] = useState(0);

  // Cambia las imágenes automáticamente cada 3 segundos
  useEffect(() => {
    const imageInterval = setInterval(() => {
      setCurrentImageIndex((prevIndex) => (prevIndex + 1) % images.length);
    }, 3000);

    return () => clearInterval(imageInterval);
  }, []);

  // Cambia los textos automáticamente cada 5 segundos (independiente de las imágenes)
  useEffect(() => {
    const textInterval = setInterval(() => {
      setCurrentTextIndex((prevIndex) => (prevIndex + 1) % texts.length);
    }, 5000);

    return () => clearInterval(textInterval);
  }, []);

  // Cambiar imagen manualmente
  const nextSlide = () => {
    setCurrentImageIndex((prevIndex) => (prevIndex + 1) % images.length);
  };

  const prevSlide = () => {
    setCurrentImageIndex(
      (prevIndex) => (prevIndex - 1 + images.length) % images.length
    );
  };

  // Cambiar imagen con miniaturas
  const goToSlide = (index) => {
    setCurrentImageIndex(index);
  };

  return (
    <div className="todoslider">
      {/* Contenedor de textos (cambia independientemente de las imágenes) */}
      <div className="anuncios">
        {texts.map((text, index) => (
          <h1
            key={index}
            style={{ display: index === currentTextIndex ? "block" : "none" }}
          >
            {text}
          </h1>
        ))}
      </div>

      {/* Contenedor del slider */}
      <div className="slider-container">
        <div className="slider">
          {/* Botón para imagen anterior */}
          <button className="prev" onClick={prevSlide}>
            &#10094;
          </button>

          {/* Imagen actual */}
          <img
            className="slider-image"
            src={images[currentImageIndex].src}
            alt={images[currentImageIndex].alt}
          />

          {/* Botón para imagen siguiente */}
          <button className="next" onClick={nextSlide}>
            &#10095;
          </button>
        </div>

        {/* Miniaturas de las imágenes */}
        <div className="thumbnails">
          {images.map((image, index) => (
            <img
              key={index}
              className={`thumbnail ${
                currentImageIndex === index ? "active" : ""
              }`}
              src={image.src}
              alt={image.alt}
              onClick={() => goToSlide(index)}
            />
          ))}
        </div>
      </div>
    </div>
  );
};

export default Slider;
