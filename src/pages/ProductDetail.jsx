import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import { fetchProduct } from '../services/api';

const ProductDetail = () => {
  const { id } = useParams();
  const [product, setProduct] = useState({});

  useEffect(() => {
    fetchProduct(id)
      .then(response => setProduct(response.data))
      .catch(error => console.error('Error fetching product:', error));
  }, [id]);

  return (
    <div>
      <h1>Product Detail</h1>
      <div>
        <h2>{product.name}</h2>
        <img src={product.imageUrl} alt={product.name} />
        <p>{product.description}</p>
        <p>${product.price}</p>
      </div>
    </div>
  );
};

export default ProductDetail;
