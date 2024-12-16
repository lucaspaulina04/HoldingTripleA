import React, { useState } from 'react';
import './App.css';

import CreateEmployee from './pages/CreateEmployeePage';
import EmployeeList from './pages/EmployeeListPage';
import ReportPage from './pages/ReportsPage';
import AttendancePage from './pages/AttendancePage';
import ScrollToTop from './components/ScrollToTop'; // Importa el componente

function App() {
  const [employees, setEmployees] = useState([]);
  const [attendanceData, setAttendanceData] = useState([]);

  const handleAddEmployee = (newEmployee) => {
    setEmployees((prevEmployees) => {
      const updatedEmployees = [...prevEmployees, newEmployee];
      console.log('Empleados después de agregar:', updatedEmployees);
      return updatedEmployees;
    });
  };

  const handleMarkAttendance = (employeeName, action, timestamp) => {
    setAttendanceData((prevAttendance) => [
      ...prevAttendance,
      { employee: employeeName, action, timestamp },
    ]);
    console.log(`Asistencia marcada: ${employeeName} - ${action} - ${timestamp}`);
  };

  return (
    <div className="App">
      <header className="App-header">
        <h1>Holding Triple A - Sistema de Registro de Asistencia</h1>
        <nav>
          <ul>
            <li><a href="#create">Crear Empleado</a></li>
            <li><a href="#list">Lista de Empleados</a></li>
            <li><a href="#report">Generar Reporte</a></li>
            <li><a href="#attendance">Marcaje de Asistencia</a></li>
          </ul>
        </nav>
      </header>

      <main>
        <section id="create">
          <CreateEmployee addEmployee={handleAddEmployee} />
        </section>

        <section id="list">
          <EmployeeList employees={employees} />
        </section>

        <section id="attendance">
          <AttendancePage employees={employees} markAttendance={handleMarkAttendance} />
        </section>

        <section id="report">
          <ReportPage attendanceData={attendanceData} />
        </section>
      </main>

      {/* Agregar el componente ScrollToTop aquí */}
      <ScrollToTop />
    </div>
  );
}

export default App;
