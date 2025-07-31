import React, { useEffect, useState } from 'react';
import axios from 'axios';
import { useNavigate } from 'react-router-dom';

const Dashboard = () => {
  const [username, setUsername] = useState('');
  const navigate = useNavigate();

  useEffect(() => {
    axios.get('http://localhost:3000/api/user', { withCredentials: true })
      .then(res => setUsername(res.data.username))
      .catch(() => navigate('/'));
  }, [navigate]); // ✅ Warning fix ho gaya

  const handleLogout = async () => {
    await axios.post('http://localhost:3000/api/logout', {}, { withCredentials: true });
    navigate('/');
  };

  return (
    <div style={{ textAlign: 'center', marginTop: '50px' }}>
      <h1>Dashboard, {username}</h1>
      <button onClick={handleLogout} style={{ marginTop: 20 }}>Logout</button>
    </div>
  );
};

export default Dashboard;
