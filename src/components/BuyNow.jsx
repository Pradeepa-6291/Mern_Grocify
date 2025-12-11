import React from 'react';
import { useParams } from 'react-router-dom';
import { products } from '../utils/api';

export default function BuyNow() {
  const { id } = useParams();
  const product = products.find((item) => item.id === parseInt(id));

  if (!product) {
    return <div>Product not found</div>;
  }

  return (
    <div>
      <p>{product.name}</p>
      <p>{product.description}</p>
      <p>{product.price}</p>
      <p>{product.offer}</p>

      <img 
        src={product.image} 
        alt={product.name} 
        style={{ width: "200px", margin: "10px 0" }}
      />

      <p>Order has been placed!!</p>
    </div>
  );
}
