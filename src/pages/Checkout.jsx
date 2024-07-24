import React, { useState } from 'react';
import { createOrder } from '../services/api';

const Checkout = () => {
  const [orderDetails, setOrderDetails] = useState({
    name: '',
    address: '',
    paymentMethod: 'credit-card'
  });

  const handleChange = e => {
    const { name, value } = e.target;
    setOrderDetails({ ...orderDetails, [name]: value });
  };

  const handleSubmit = e => {
    e.preventDefault();
    createOrder(orderDetails)
      .then(response => {
        console.log('Order created:', response.data);
        // Redirect to a success page or clear the cart
      })
      .catch(error => console.error('Error creating order:', error));
  };

  return (
    <div>
      <h1>Checkout</h1>
      <form onSubmit={handleSubmit}>
        <div>
          <label>Name</label>
          <input type="text" name="name" value={orderDetails.name} onChange={handleChange} />
        </div>
        <div>
          <label>Address</label>
          <input type="text" name="address" value={orderDetails.address} onChange={handleChange} />
        </div>
        <div>
          <label>Payment Method</label>
          <select name="paymentMethod" value={orderDetails.paymentMethod} onChange={handleChange}>
            <option value="credit-card">Credit Card</option>
            <option value="paypal">PayPal</option>
          </select>
        </div>
        <button type="submit">Place Order</button>
      </form>
    </div>
  );
};

export default Checkout;
