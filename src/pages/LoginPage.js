import React, { useState } from 'react';

const LoginPage = () => {
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');

  const handleSubmit = (e) => {
    e.preventDefault();
    // Lógica de autenticación
  };

  return (
    <div className="login-page" style={{ padding: '50px' }}>
      <h2 style={{ textAlign: 'center', marginBottom: '20px' }}>Iniciar sesión</h2>
      <form onSubmit={handleSubmit} style={{ maxWidth: '400px', margin: 'auto', display: 'flex', flexDirection: 'column' }}>
        <div style={{ marginBottom: '15px' }}>
          <label htmlFor="username" style={{ display: 'block', marginBottom: '5px' }}>Nombre de usuario</label>
          <input
            type="text"
            id="username"
            value={username}
            onChange={(e) => setUsername(e.target.value)}
            style={{ padding: '8px', width: '100%', borderRadius: '4px', border: '1px solid #ccc' }}
            required
          />
        </div>
        <div style={{ marginBottom: '15px' }}>
          <label htmlFor="password" style={{ display: 'block', marginBottom: '5px' }}>Contraseña</label>
          <input
            type="password"
            id="password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            style={{ padding: '8px', width: '100%', borderRadius: '4px', border: '1px solid #ccc' }}
            required
          />
        </div>
        <button type="submit" style={{ padding: '10px 20px', backgroundColor: '#3498db', color: '#fff', border: 'none', borderRadius: '4px', cursor: 'pointer' }}>
          Iniciar sesión
        </button>
      </form>
    </div>
  );
};

export default LoginPage;



