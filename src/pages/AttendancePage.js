import React from 'react';
import AttendanceForm from '../components/Attendance';  // Asegúrate de que la ruta sea correcta

const AttendancePage = ({ employees, markAttendance }) => {
  return (
    <div style={{ padding: '50px' }}>
      <h2 style={{ textAlign: 'center', marginBottom: '20px' }}>Registrar Asistencia</h2>
      <AttendanceForm employees={employees} markAttendance={markAttendance} />
    </div>
  );
};

export default AttendancePage;




