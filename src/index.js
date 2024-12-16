import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';

// Establecer el título de la pestaña
document.title = 'Holding Triple'; // Cambia aquí el nombre

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
);

// Si deseas medir el rendimiento, puedes pasar una función como se muestra abajo
// reportWebVitals(console.log);
