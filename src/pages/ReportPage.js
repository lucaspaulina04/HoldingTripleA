import React from 'react';
import Report from '../components/Reports';

const ReportPage = ({ attendanceData }) => {
  // Aseguramos que attendanceData esté definido y sea un array antes de pasarlo
  if (!attendanceData || attendanceData.length === 0) {
    return <div>No hay datos de asistencia disponibles.</div>;
  }

  return (
    <div>
      <Report attendanceData={attendanceData} />
    </div>
  );
};

export default ReportPage;
