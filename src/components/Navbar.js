import React from 'react';
import { Link } from 'react-router-dom';

const Navbar = () => {
  return (
    <nav>
      <ul>
        <li><Link to="/">Inicio</Link></li>
        <li><Link to="/create-employee">Crear Empleado</Link></li>
        <li><Link to="/employee-list">Listado de Empleados</Link></li>
        <li><Link to="/reports">Reportes</Link></li>
        <li><Link to="/attendance">Asistencia</Link></li>
      </ul>
    </nav>
  );
};

export default Navbar;

