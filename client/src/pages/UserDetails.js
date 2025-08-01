import React from 'react';
import { useLocation, useNavigate } from 'react-router-dom';

const UserDetails = () => {
  const { state: user } = useLocation();
  const navigate = useNavigate();

  if (!user) return <p>User data not available</p>;

  return (
    <div>
      <h2>User Details</h2>
      <p><strong>Name:</strong> {user.name}</p>
      <p><strong>Email:</strong> {user.email}</p>
      <p><strong>Phone:</strong> {user.phone}</p>
      <p><strong>Address:</strong> {user.address}</p>
      <p><strong>Pincode:</strong> {user.pincode}</p>

      <button onClick={() => navigate(-1)}>Back</button>
    </div>
  );
};

export default UserDetails;
