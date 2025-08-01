// import React from 'react';
// import { BrowserRouter, Routes, Route } from 'react-router-dom';
// import LoginPage from './LoginPage';
// import Dashboard from './Dashboard';

// function App() {
//   return (
//     <BrowserRouter>
//       <Routes>
//         <Route path="/" element={<LoginPage />} />
//         <Route path="/dashboard" element={<Dashboard />} />
//       </Routes>
//     </BrowserRouter>
//   );
// }

// export default App;

import React from 'react';
import { BrowserRouter, Routes, Route, Navigate } from 'react-router-dom';
import LoginPage from './LoginPage';
import Sidebar from './components/Sidebar';
import Dashboard from './pages/Dashboard';
import Orders from './pages/Orders';
import AddProduct from './pages/AddProduct';
import AddProductForm from './pages/AddProductForm';
import ProductView from './pages/ProductView';
import Users from './pages/Users';
import Settings from './pages/Settings';
import UserDetails from './pages/UserDetails';

function App() {
  const isLoggedIn = true; // Replace with actual auth logic

  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<LoginPage />} />

        {isLoggedIn && (
          <Route
            path="/dashboard/*"
            element={
              <div style={{ display: 'flex' }}>
                <Sidebar />
                <div style={{ flex: 1, padding: '20px' }}>
                  <Routes>
                    <Route path="" element={<Dashboard />} />
                    <Route path="orders" element={<Orders />} />
                    <Route path="add-product" element={<AddProduct />} />
                    <Route path="add-product/new" element={<AddProductForm />} />
                    <Route path="add-product/edit/:id" element={<AddProductForm />} />
                    <Route path="add-product/view/:id" element={<ProductView />} />
                    <Route path="users" element={<Users />} />
                    <Route path="users/:id" element={<UserDetails />} />
                    <Route path="settings" element={<Settings />} />
                  </Routes>
                </div>
              </div>
            }
          />
        )}

        <Route path="*" element={<Navigate to="/" />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;

