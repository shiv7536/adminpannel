import React, { useState, useEffect } from 'react';
import { useParams, useNavigate } from 'react-router-dom';

const AddProductForm = () => {
  const { action, id } = useParams(); // action = 'new' or 'edit'
  const navigate = useNavigate();

  const [product, setProduct] = useState({
    name: '',
    brand: '',
    price: '',
    description: '',
    image: null,
  });

  useEffect(() => {
    if (action === 'edit') {
      const dummyProduct = {
        1: { name: 'iPhone 14', brand: 'Apple', price: 999, description: 'Latest iPhone', image: null },
        2: { name: 'Galaxy S23', brand: 'Samsung', price: 899, description: 'Flagship Samsung phone', image: null },
      };

      if (id && dummyProduct[id]) {
        setProduct(dummyProduct[id]);
      }
    }
  }, [action, id]);

  const handleChange = (e) => {
    const { name, value, files } = e.target;
    if (name === 'image') {
      setProduct({ ...product, image: files[0] });
    } else {
      setProduct({ ...product, [name]: value });
    }
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log('Submitted product:', product);
    navigate('/dashboard/add-product');
  };

  return (
    <div style={{ maxWidth: '600px', margin: '0 auto' }}>
      <h2>{action === 'edit' ? 'Edit Product' : 'Add Product'}</h2>
      <form onSubmit={handleSubmit}>
        <div style={{ marginBottom: '15px' }}>
          <label>Product Name:</label><br />
          <input
            type="text"
            name="name"
            value={product.name}
            onChange={handleChange}
            required
            style={{ width: '100%', padding: '8px' }}
          />
        </div>

        <div style={{ marginBottom: '15px' }}>
          <label>Brand:</label><br />
          <input
            type="text"
            name="brand"
            value={product.brand}
            onChange={handleChange}
            required
            style={{ width: '100%', padding: '8px' }}
          />
        </div>

        <div style={{ marginBottom: '15px' }}>
          <label>Price:</label><br />
          <input
            type="number"
            name="price"
            value={product.price}
            onChange={handleChange}
            required
            style={{ width: '100%', padding: '8px' }}
          />
        </div>

        <div style={{ marginBottom: '15px' }}>
          <label>Description:</label><br />
          <textarea
            name="description"
            value={product.description}
            onChange={handleChange}
            rows="4"
            style={{ width: '100%', padding: '8px' }}
          />
        </div>

        <div style={{ marginBottom: '15px' }}>
          <label>Upload Image:</label><br />
          <input
            type="file"
            name="image"
            accept="image/*"
            onChange={handleChange}
          />
        </div>

        <button type="submit" style={{ padding: '10px 20px' }}>
          {action === 'edit' ? 'Update' : 'Submit'}
        </button>
      </form>
    </div>
  );
};

export default AddProductForm;
