import React from 'react';
import { useNavigate } from 'react-router-dom';

const dummyProducts = [
  { id: 1, name: 'iPhone 14', brand: 'Apple', price: 999 },
  { id: 2, name: 'Galaxy S23', brand: 'Samsung', price: 899 },
];

const AddProduct = () => {
  const navigate = useNavigate();

  return (
    <div>
      <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
        <h2>Product List</h2>
        <button onClick={() => navigate('/dashboard/add-product/new')}>Add Product</button>
      </div>

      <table border="1" cellPadding="10" cellSpacing="0" style={{ marginTop: '20px', width: '100%' }}>
        <thead>
          <tr>
            <th>Name</th>
            <th>Brand</th>
            <th>Price</th>
            <th>Actions</th>
          </tr>
        </thead>
        <tbody>
          {dummyProducts.map((prod) => (
            <tr key={prod.id}>
              <td>{prod.name}</td>
              <td>{prod.brand}</td>
              <td>{prod.price}</td>
              <td>
                <button onClick={() => navigate(`/dashboard/add-product/edit/${prod.id}`)}>Edit</button>{' '}
                <button onClick={() => navigate(`/dashboard/add-product/view/${prod.id}`)}>View</button>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default AddProduct;
