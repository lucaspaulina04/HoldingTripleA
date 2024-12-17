import React, { useState } from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';

import './App.css';

import CreateEmployeePage from './pages/CreateEmployeePage';
import EmployeeListPage from './pages/EmployeeListPage';
import ReportPage from './pages/ReportsPage';
import AttendancePage from './pages/AttendancePage';
import Navbar from './components/Navbar';
import ScrollToTop from './components/ScrollToTop';

function App() {
  const [employees, setEmployees] = useState([]);
  const [attendanceData, setAttendanceData] = useState([]);

  const handleAddEmployee = (newEmployee) => {
    setEmployees((prevEmployees) => [...prevEmployees, newEmployee]);
  };

  const handleMarkAttendance = (employeeName, action, timestamp) => {
    setAttendanceData((prevAttendance) => [
      ...prevAttendance,
      { employee: employeeName, action, timestamp },
    ]);
  };

  return (
    <Router>
      <div className="App">
        <header className="App-header">
          <h1>Holding Triple A - Sistema de Registro de Asistencia</h1>
          <Navbar />
        </header>

        <main>
          <Routes>
            <Route
              path="/create-employee"
              element={<CreateEmployeePage addEmployee={handleAddEmployee} />}
            />
            <Route
              path="/employee-list"
              element={<EmployeeListPage employees={employees} />}
            />
            <Route
              path="/attendance"
              element={
                <AttendancePage
                  employees={employees}
                  markAttendance={handleMarkAttendance}
                />
              }
            />
            <Route
              path="/reports"
              element={<ReportPage attendanceData={attendanceData} />}
            />
            <Route path="/" element={<h2>Bienvenido al Sistema</h2>} />
          </Routes>
        </main>

        <ScrollToTop />
      </div>
    </Router>
  );
}

export default App;
