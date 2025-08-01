import React from 'react';
import { useNavigate } from 'react-router-dom';

const dummyUsers = [
  {
    id: 1,
    name: 'Shiv Shankar',
    email: 'shiv@example.com',
    status: 'Active',
    phone: '9876543210',
    address: '123 Main Street, Jaipur',
    pincode: '302001'
  },
  {
    id: 2,
    name: 'Amit Verma',
    email: 'amit@example.com',
    status: 'Inactive',
    phone: '9876543211',
    address: '456 Park Avenue, Delhi',
    pincode: '110001'
  },

  {
    id: 3,
    name: 'Manisha Gupta',
    email: 'mashia@example.com',
    status: 'Active',
    phone: '758543210',
    address: '456 Park Avenue, jaipur',
    pincode: '302020'
  },

   {
    id: 4,
    name: 'Manisha Gupta',
    email: 'mashia@example.com',
    status: 'Active',
    phone: '758543210',
    address: '456 Park Avenue, jaipur',
    pincode: '302020'
  },

   {
    id: 3,
    name: 'Manisha Gupta',
    email: 'mashia@example.com',
    status: 'Active',
    phone: '758543210',
    address: '456 Park Avenue, jaipur',
    pincode: '302020'
  },

  {
    id: 4,
    name: 'Krishna Yadav',
    email: 'Krishna@gmail.com',
    status: 'Active',
    phone: '758543210',
    address: '456 Park Avenue, jaipur',
    pincode: '101010'
  },

  {
    id: 6,
    name: 'Murali Sharma',
    email: 'murari@example.com',
    status: 'Active',
    phone: '758543210',
    address: '456 Park Avenue, jaipur',
    pincode: '302020'
  },
];

const Users = () => {
  const navigate = useNavigate();

  return (
    <div>
      <h2>Users</h2>
      <table border="1" cellPadding="10" style={{ width: '100%', borderCollapse: 'collapse' }}>
        <thead>
          <tr>
            <th>User Name</th>
            <th>User Email</th>
            <th>Status</th>
            <th>Action</th>
            
          </tr>
        </thead>
        <tbody>
          {dummyUsers.map(user => (
            <tr key={user.id}>
              <td>{user.name}</td>
              <td>{user.email}</td>
              <td>{user.status}</td>
              <td>
                <button onClick={() => navigate(`/dashboard/users/${user.id}`, { state: user })}>
                  View
                </button>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default Users;
