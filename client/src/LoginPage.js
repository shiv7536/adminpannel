import React, { useState } from 'react';
import axios from 'axios';
import { useNavigate } from 'react-router-dom';
import './App.css';


const LoginPage = () => {
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');
  const [error, setError] = useState('');
  const navigate = useNavigate();

  const handleLogin = async (e) => {
    e.preventDefault();
    try {
      await axios.post('http://localhost:3000/api/login', { username, password }, { withCredentials: true });
      navigate('/dashboard');
    } catch (err) {
      setError('Invalid credentials');
    }
  };

  return (
    <div className="login-container">
      <form onSubmit={handleLogin}>
        <div style={{ textAlign: 'center' }}>
          <img src="https://upload.wikimedia.org/wikipedia/commons/thumb/a/a7/React-icon.svg/1024px-React-icon.svg.png"
               alt="Admin Logo" width="80" style={{ marginBottom: 20 }} />
        </div>
        <center><h2>Admin Login</h2></center>
        {error && <p style={{ color: 'red' }}>{error}</p>}

        <label>ID:</label>
        <input type="text" value={username} onChange={e => setUsername(e.target.value)} required />

        <label>Password:</label>
        <input type="password" value={password} onChange={e => setPassword(e.target.value)} required />

        <button type="submit">🔒 Login</button>
      </form>
    </div>
  );
};

export default LoginPage;
