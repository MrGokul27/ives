import React, { useEffect, useState } from 'react';
import { fetchProducts } from '../services/api';
import Product from '../components/Product/Product';

const Shop = () => {
  const [products, setProducts] = useState([]);

  useEffect(() => {
    fetchProducts()
      .then(response => setProducts(response.data))
      .catch(error => console.error('Error fetching products:', error));
  }, []);

  return (
    <div>
      <h1>Shop</h1>
      <div className="product-list">
        {products.map(product => (
          <Product key={product.id} product={product} />
        ))}
      </div>
    </div>
  );
};

export default Shop;
