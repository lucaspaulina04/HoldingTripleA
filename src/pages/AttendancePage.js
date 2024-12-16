import React from 'react';
import AttendanceForm from '../components/Attendance';  // Asegúrate de que la ruta sea correcta

const AttendancePage = ({ employees, markAttendance }) => {
  return (
    <div>
      <h2>Marcaje de Asistencia</h2>
      <AttendanceForm employees={employees} markAttendance={markAttendance} />
    </div>
  );
};

export default AttendancePage;
