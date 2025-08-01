import React from 'react';
import { useParams, useNavigate } from 'react-router-dom';

const mockProduct = {
  1: { name: 'iPhone 14', brand: 'Apple', price: 999, description: 'Apple latest phone', image: '' },
  2: { name: 'Galaxy S23', brand: 'Samsung', price: 899, description: 'Samsung flagship phone', image: '' },
};

const ProductView = () => {
  const { id } = useParams();
  const navigate = useNavigate();

  const product = mockProduct[id];

  if (!product) return <p>Product not found</p>;

  return (
    <div>
      <h2>Product Detail</h2>
      <p><strong>Name:</strong> {product.name}</p>
      <p><strong>Brand:</strong> {product.brand}</p>
      <p><strong>Price:</strong> ${product.price}</p>
      <p><strong>Description:</strong> {product.description}</p>
      <p><strong>Image:</strong> {product.image || 'No image'}</p>
      <button onClick={() => navigate(`/dashboard/add-product/edit/${id}`)}>Edit</button>
    </div>
  );
};

export default ProductView;
