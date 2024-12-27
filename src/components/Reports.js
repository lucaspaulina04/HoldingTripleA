import React from 'react';

const ReportPage = ({ attendanceData }) => {
  // Filtramos las asistencias de ingreso y salida
  const entries = attendanceData.filter((record) => record.action === 'Ingreso');
  const exits = attendanceData.filter((record) => record.action === 'Salida');

  // Función para formatear la fecha y hora por separado
  const formatDate = (timestamp) => {
    const date = new Date(timestamp);
    return date.toLocaleDateString(); // Obtiene solo la fecha
  };

  const formatTime = (timestamp) => {
    const time = new Date(timestamp);
    return time.toLocaleTimeString(); // Obtiene solo la hora
  };

  return (
    <div className="report-page">
      <h2>Reportes de Asistencia</h2>

      <div className="report-container">
        {/* Columna de ingresos */}
        <div className="report-column">
          <h3>Ingresos</h3>
          <table className="report-table">
            <thead>
              <tr>
                <th>Empleado</th>
                <th>Fecha</th>
                <th>Hora</th>
              </tr>
            </thead>
            <tbody>
              {entries.map((record, index) => (
                <tr key={index}>
                  <td>{record.employee}</td>
                  <td>{formatDate(record.timestamp)}</td>
                  <td>{formatTime(record.timestamp)}</td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>

        {/* Columna de salidas */}
        <div className="report-column">
          <h3>Salidas</h3>
          <table className="report-table">
            <thead>
              <tr>
                <th>Empleado</th>
                <th>Fecha</th>
                <th>Hora</th>
              </tr>
            </thead>
            <tbody>
              {exits.map((record, index) => (
                <tr key={index}>
                  <td>{record.employee}</td>
                  <td>{formatDate(record.timestamp)}</td>
                  <td>{formatTime(record.timestamp)}</td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>
    </div>
  );
};

export default ReportPage;


