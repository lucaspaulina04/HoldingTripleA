import React, { useState } from 'react';
import { BrowserRouter as Router, Route, Routes, Link } from 'react-router-dom';
import './App.css';

import LoginPage from './pages/LoginPage';
import CreateEmployeePage from './pages/CreateEmployeePage';
import EmployeeListPage from './pages/EmployeeListPage';
import AttendancePage from './pages/AttendancePage';
import ReportPage from './pages/ReportPage';
import DashboardPage from './pages/DashboardPage';

function App() {
  
  const defaultEmployees = [
    { fullName: 'Juan Pérez', run: '12345678-9', maritalStatus: 'Soltero', commune: 'Santiago', company: 'Austral Corp', status: 'activo' },
    { fullName: 'Ana Gómez', run: '98765432-1', maritalStatus: 'Casado', commune: 'Valparaíso', company: 'American Tur', status: 'activo' },
    { fullName: 'Carlos Martínez', run: '11223344-5', maritalStatus: 'Unión Civil', commune: 'La Serena', company: 'Astral Trip', status: 'activo' },
    { fullName: 'Laura Díaz', run: '66778899-0', maritalStatus: 'Casado', commune: 'Concepción', company: 'Austral Corp', status: 'activo' },
    { fullName: 'Pedro Fernández', run: '33445566-7', maritalStatus: 'Soltero', commune: 'Antofagasta', company: 'American Tur', status: 'activo' },
    { fullName: 'Isabel Morales', run: '77665544-3', maritalStatus: 'Casado', commune: 'Temuco', company: 'Astral Trip', status: 'activo' },
    { fullName: 'José Sánchez', run: '99887766-4', maritalStatus: 'Unión Civil', commune: 'Rancagua', company: 'Austral Corp', status: 'activo' },
    { fullName: 'María López', run: '55667788-9', maritalStatus: 'Casado', commune: 'Punta Arenas', company: 'American Tur', status: 'activo' },
    { fullName: 'Ricardo Ramírez', run: '44556677-8', maritalStatus: 'Unión Civil', commune: 'Iquique', company: 'Astral Trip', status: 'activo' },
    { fullName: 'Sandra Fernández', run: '22334455-2', maritalStatus: 'Casado', commune: 'La Serena', company: 'Austral Corp', status: 'activo' },
    { fullName: 'Fernando Martínez', run: '66778855-3', maritalStatus: 'Unión Civil', commune: 'Valparaíso', company: 'American Tur', status: 'activo' },
    { fullName: 'Paula Gómez', run: '77889900-1', maritalStatus: 'Viudo', commune: 'Santiago', company: 'Astral Trip', status: 'activo' },
    { fullName: 'Sergio Pérez', run: '44332211-4', maritalStatus: 'Soltero', commune: 'Antofagasta', company: 'Austral Corp', status: 'activo' },
    { fullName: 'Andrea Díaz', run: '99887700-5', maritalStatus: 'Casado', commune: 'Concepción', company: 'American Tur', status: 'activo' },
    { fullName: 'Eduardo Rodríguez', run: '22334466-7', maritalStatus: 'Unión Civil', commune: 'Santiago', company: 'Astral Trip', status: 'activo' },
    { fullName: 'Camila Gómez', run: '88990011-6', maritalStatus: 'Casado', commune: 'La Serena', company: 'Austral Corp', status: 'activo' },
  ];

  const [employees, setEmployees] = useState(defaultEmployees);
  
  const [attendanceData, setAtendanceData] = useState ([
    { employee: 'Juan Pérez', action: 'Ingreso', timestamp: '2024-12-01 08:00' },
    { employee: 'Ana Gómez', action: 'Ingreso', timestamp: '2024-12-02 07:55' },
    { employee: 'Carlos Martínez', action: 'Ingreso', timestamp: '2024-12-03 08:10' },
    { employee: 'Laura Díaz', action: 'Salida', timestamp: '2024-12-01 12:15' },
    { employee: 'Pedro Fernández', action: 'Ingreso', timestamp: '2024-12-02 08:20' },
    { employee: 'Isabel Morales', action: 'Ingreso', timestamp: '2024-12-03 08:25' },
    { employee: 'José Sánchez', action: 'Salida', timestamp: '2024-12-01 13:30' },
    { employee: 'María López', action: 'Salida', timestamp: '2024-12-02 16:35' },
    { employee: 'Ricardo Ramírez', action: 'Ingreso', timestamp: '2024-12-03 08:40' },
    { employee: 'Sandra Fernández', action: 'Ingreso', timestamp: '2024-12-01 09:45' },
    { employee: 'Fernando Martínez', action: 'Ingreso', timestamp: '2024-12-02 09:50' },
    { employee: 'Paula Gómez', action: 'Ingreso', timestamp: '2024-12-03 10:00' },
    { employee: 'Sergio Pérez', action: 'Ingreso', timestamp: '2024-12-01 08:10' },
    { employee: 'Andrea Díaz', action: 'Salida', timestamp: '2024-12-02 11:05' },
    { employee: 'Eduardo Rodríguez', action: 'Ingreso', timestamp: '2024-12-03 07:50' },
    { employee: 'Camila Gómez', action: 'Salida', timestamp: '2024-12-01 08:55' },
  ]);

 
  const handleAddEmployee = (newEmployee) => {
    setEmployees((prevEmployees) => [...prevEmployees, newEmployee]);
  };

  const handleMarkAttendance = (employeeName, action, timestamp) => {
    setAtendanceData((prevAttendance) => [
      ...prevAttendance,
      { employee: employeeName, action, timestamp },
    ]);
  };

  return (
    <Router>
      <div className="App">
        <header className="App-header">
          <h1>Holding Triple A - Sistema de Gestión</h1>
          <nav>
            <ul>
              <li><Link to="/">Inicio</Link></li>
              <li><Link to="/dashboard">Dashboard</Link></li>
              <li><Link to="/create">Crear Empleado</Link></li>
              <li><Link to="/list">Lista de Empleados</Link></li>
              <li><Link to="/attendance">Asistencia</Link></li>
              <li><Link to="/reports">Reportes</Link></li>
            </ul>
          </nav>
        </header>
        <main>
          <Routes>
            <Route path="/" element={<LoginPage />} />
            <Route path="/dashboard" element={<DashboardPage employees={employees} attendanceData={attendanceData} />} />
            <Route path="/create" element={<CreateEmployeePage addEmployee={handleAddEmployee} />} />
            <Route path="/list" element={<EmployeeListPage employees={employees} />} />
            <Route path="/attendance" element={<AttendancePage employees={employees} attendanceData={attendanceData} markAttendance={handleMarkAttendance} />} />
            <Route path="/reports" element={<ReportPage attendanceData={attendanceData} />} />
          </Routes>
        </main>
      </div>
    </Router>
  );
}

export default App;


