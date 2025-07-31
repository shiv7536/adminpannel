// src/components/Sidebar.js
import React from 'react';
import { NavLink } from 'react-router-dom';

const Sidebar = () => {
  const linkStyle = ({ isActive }) => ({
    display: 'block',
    padding: '10px 15px',
    textDecoration: 'none',
    background: isActive ? '#007bff' : 'transparent',
    color: isActive ? '#fff' : '#000',
    borderRadius: '5px',
    margin: '5px 0'
  });

  return (
    <div style={{ width: '200px', background: '#f5f5f5', padding: '20px', minHeight: '100vh' }}>
      <h3>Admin Panel</h3>
      <NavLink to="/dashboard" end style={linkStyle}>Dashboard</NavLink>
      <NavLink to="/dashboard/orders" style={linkStyle}>Order List</NavLink>
      <NavLink to="/dashboard/add-product" style={linkStyle}>Add Product</NavLink>
      <NavLink to="/dashboard/users" style={linkStyle}>Users</NavLink>
      <NavLink to="/dashboard/settings" style={linkStyle}>Settings</NavLink>
    </div>
  );
};

export default Sidebar;
