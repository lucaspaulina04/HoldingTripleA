import React from 'react';
import { Pie, Bar } from 'react-chartjs-2';
import { Chart as ChartJS, Title, Tooltip, Legend, ArcElement, CategoryScale, LinearScale, BarElement } from 'chart.js';

// Registrar los componentes de Chart.js
ChartJS.register(Title, Tooltip, Legend, ArcElement, CategoryScale, LinearScale, BarElement);

const DashboardPage = ({ employees, attendanceData }) => {
  const totalEmployees = employees.length;

  // Estadísticas de asistencia en general
  const checkInTotal = (attendanceData || []).filter(entry => entry.action === 'Ingreso').length;
  const checkOutTotal = (attendanceData || []).filter(entry => entry.action === 'Salida').length;

  // Estadísticas de estado civil
  const maritalStatus = employees.reduce(
    (acc, employee) => {
      switch (employee.maritalStatus) {
        case 'Soltero':
          acc.singles++;
          break;
        case 'Casado':
          acc.married++;
          break;
        case 'Unión Civil':
          acc.civilUnion++;
          break;
        case 'Viudo':
          acc.widowed++;
          break;
        default:
          break;
      }
      return acc;
    },
    { singles: 0, married: 0, civilUnion: 0, widowed: 0 }
  );

  // Datos para el gráfico de estado civil
  const maritalStatusData = {
    labels: ['Solteros', 'Casados', 'Unión Civil', 'Viudos'],
    datasets: [
      {
        data: [maritalStatus.singles, maritalStatus.married, maritalStatus.civilUnion, maritalStatus.widowed],
        backgroundColor: ['#3498db', '#2ecc71', '#f39c12', '#e74c3c'],
        hoverOffset: 4,
      },
    ],
  };

  // Estadísticas de empleados por empresa
  const companies = employees.reduce((acc, employee) => {
    acc[employee.company] = (acc[employee.company] || 0) + 1;
    return acc;
  }, {});

  // Datos para el gráfico de empleados por empresa
  const companyData = {
    labels: Object.keys(companies),
    datasets: [
      {
        label: 'Empleados por Empresa',
        data: Object.values(companies),
        backgroundColor: ['#9b59b6', '#f39c12', '#e74c3c', '#2ecc71'],
      },
    ],
  };

  return (
    <div className="dashboard-page" style={{ padding: '50px' }}>
      <h2 style={{ textAlign: 'center', marginBottom: '20px' }}>Dashboard</h2>
      
      {/* Resumen general (Distribución horizontal) */}
      <div className="dashboard-summary">
        <div className="summary-card">
          <h3>Total de Empleados</h3>
          <p>{totalEmployees}</p>
        </div>
        <div className="summary-card">
          <h3>Histórico de Asistencia (General)</h3>
          <p>Ingreso: {checkInTotal}</p>
          <p>Salida: {checkOutTotal}</p>
        </div>
        <div className="summary-card">
          <h3>Empleados por Empresa</h3>
          <Bar data={companyData} options={{ responsive: true }} height={150} />
        </div>
      </div>

      {/* Gráficos en una fila */}
      <div className="chart-container">
        <div className="chart-item">
          <h3>Distribución de Empleados por Estado Civil</h3>
          <Pie data={maritalStatusData} options={{ responsive: true, plugins: { tooltip: { callbacks: { label: (tooltipItem) => `${tooltipItem.label}: ${tooltipItem.raw}` } } } }} height={150} />
        </div>

        <div className="chart-item">
          <h3>Estadísticas de Asistencia</h3>
          <Bar
            data={{
              labels: ['Ingreso', 'Salida'],
              datasets: [
                {
                  label: 'Asistencia',
                  data: [checkInTotal, checkOutTotal],
                  backgroundColor: ['#3498db', '#e74c3c'],
                },
              ],
            }}
            options={{ responsive: true }}
            height={150}
          />
        </div>
      </div>
    </div>
  );
};

export default DashboardPage;





