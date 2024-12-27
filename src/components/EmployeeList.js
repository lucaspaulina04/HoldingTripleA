import React from 'react';

const EmployeeList = ({ employees }) => {
  return (
    <div style={{ padding: '20px', width: '100%', boxSizing: 'border-box' }}>
      <h2 style={{ textAlign: 'center', marginBottom: '30px' }}>Lista de Empleados</h2>
      {employees.length === 0 ? (
        <p>No hay empleados registrados.</p>
      ) : (
        <div className="report-column">
          <table className="report-table">
            <thead>
              <tr>
                <th>Nombre</th>
                <th>RUN</th>
                <th>Estado Civil</th>
                <th>Comuna</th>
                <th>Empresa</th>
                <th>Estado</th>
              </tr>
            </thead>
            <tbody>
              {employees.map((employee, index) => (
                <tr key={index}>
                  <td>{employee.fullName}</td>
                  <td>{employee.run}</td>
                  <td>{employee.maritalStatus}</td>
                  <td>{employee.commune}</td>
                  <td>{employee.company}</td>
                  <td>{employee.status}</td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      )}
    </div>
  );
};

export default EmployeeList;


