import React, { useState, useEffect } from 'react';
import '../App.css'; // Asegúrate de tener este archivo CSS para los estilos

const ScrollToTop = () => {
  const [isVisible, setIsVisible] = useState(false);

  // Maneja el evento de scroll
  const handleScroll = () => {
    if (window.scrollY > 300) {
      setIsVisible(true); // Muestra la flecha si se desplaza más de 300px
    } else {
      setIsVisible(false); // Oculta la flecha si está cerca de la parte superior
    }
  };

  // Agregar el event listener al hacer scroll
  useEffect(() => {
    window.addEventListener('scroll', handleScroll);

    // Limpiar el event listener cuando se desmonte el componente
    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);

  // Función para subir al principio
  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: 'smooth',
    });
  };

  return (
    isVisible && (
      <button className="scroll-to-top" onClick={scrollToTop}>
        ↑
      </button>
    )
  );
};

export default ScrollToTop;
