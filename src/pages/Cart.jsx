import React from 'react';
import { Link } from 'react-router-dom';

const Cart = () => {
  // Mock data, replace with actual cart data
  const cartItems = [
    { id: 1, name: 'Product 1', price: 10, quantity: 2 },
    { id: 2, name: 'Product 2', price: 20, quantity: 1 }
  ];

  const total = cartItems.reduce((acc, item) => acc + item.price * item.quantity, 0);

  return (
    <div>
      <h1>Cart</h1>
      {cartItems.length === 0 ? (
        <p>Your cart is empty</p>
      ) : (
        <div>
          <ul>
            {cartItems.map(item => (
              <li key={item.id}>
                {item.name} - ${item.price} x {item.quantity}
              </li>
            ))}
          </ul>
          <h3>Total: ${total}</h3>
          <Link to="/checkout">Proceed to Checkout</Link>
        </div>
      )}
    </div>
  );
};

export default Cart;
