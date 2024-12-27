import React, { useState } from 'react';

const AttendanceForm = ({ employees, markAttendance }) => {
  const [selectedEmployee, setSelectedEmployee] = useState('');
  const [action, setAction] = useState('');

  const handleSelectEmployee = (event) => {
    setSelectedEmployee(event.target.value);
  };

  const handleActionChange = (event) => {
    setAction(event.target.value);
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    if (selectedEmployee && action) {
      const timestamp = new Date().toISOString();
      markAttendance(selectedEmployee, action, timestamp);
    }
  };

  return (
    <form onSubmit={handleSubmit}>
            
      <label>
        Empleado:
        <select value={selectedEmployee} onChange={handleSelectEmployee}>
          <option value="">Seleccione un empleado</option>
          {employees && employees.length > 0 ? (
            employees.map((employee) => (
              <option key={employee.run} value={employee.fullName}>
                {employee.fullName}
              </option>
            ))
          ) : (
            <option disabled>No hay empleados disponibles</option>
          )}
        </select>
      </label>

      <label>
        Acción:
        <select value={action} onChange={handleActionChange}>
          <option value="">Seleccione acción</option>
          <option value="Ingreso">Ingreso</option>
          <option value="Salida">Salida</option>
        </select>
      </label>

      <button type="submit">Registrar</button>
    </form>
  );
};

export default AttendanceForm;


