import React, { useState } from 'react';

const CreateEmployee = ({ addEmployee }) => {
  const [employee, setEmployee] = useState({
    fullName: '',
    run: '',
    maritalStatus: '',
    commune: '',
    company: '',
    status: 'activo',
  });
  
  const [successMessage, setSuccessMessage] = useState(''); // Estado para el mensaje de éxito

  const handleChange = (e) => {
    const { name, value } = e.target;
    setEmployee({ ...employee, [name]: value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    // Llama a la función que viene de App para agregar el empleado
    addEmployee(employee);
    setEmployee({
      fullName: '',
      run: '',
      maritalStatus: '',
      commune: '',
      company: '',
      status: 'activo',
    });

    setSuccessMessage('Empleado creado con éxito'); // Mostrar el mensaje de éxito

    setTimeout(() => {
      setSuccessMessage(''); // Ocultar el mensaje después de 5 segundos
    }, 5000);
  };

  return (
    <div style={{ padding: '50px' }}>
      <h2 style={{ textAlign: 'center', marginBottom: '20px' }}>Crear Empleado</h2> {/* Título agregado */}
      
      {successMessage && <p className="success-message">{successMessage}</p>} {/* Mostrar mensaje si existe */}
      
      <form onSubmit={handleSubmit}>
        <label>Nombre Completo:</label>
        <input
          type="text"
          name="fullName"
          value={employee.fullName}
          onChange={handleChange}
          required
        />
        
        <label>RUN:</label>
        <input
          type="text"
          name="run"
          value={employee.run}
          onChange={handleChange}
          required
        />
        
        <label>Estado Civil:</label>
        <select
          name="maritalStatus"
          value={employee.maritalStatus}
          onChange={handleChange}
          required
        >
          <option value="">Seleccionar...</option>
          <option value="Soltero">Soltero</option>
          <option value="Casado">Casado</option>
          <option value="Unión Civil">Unión Civil</option>
          <option value="Viudo">Viudo</option>
        </select>
        
        <label>Comuna:</label>
        <input
          type="text"
          name="commune"
          value={employee.commune}
          onChange={handleChange}
          required
        />
        
        <label>Empresa:</label>
        <select name="company" onChange={handleChange} required>
          <option value="">Seleccionar...</option>
          <option value="Austral Corp">Austral Corp</option>
          <option value="American Tur">American Tur</option>
          <option value="Astral Trip">Astral Trip</option>
        </select>
        
        <label>Estado:</label>
        <input
          type="checkbox"
          name="status"
          checked={employee.status === 'activo'}
          onChange={() => setEmployee({ ...employee, status: employee.status === 'activo' ? 'inactivo' : 'activo' })}
        />
        
        <button type="submit">Crear Empleado</button>
      </form>
    </div>
  );
};

export default CreateEmployee;

