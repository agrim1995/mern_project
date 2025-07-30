import React, { useState } from 'react';
import API from '../services/api';

function Orders() {
  const [order, setOrder] = useState({ userId: '', productIds: '', totalAmount: '' });

  const handleChange = e => setOrder({ ...order, [e.target.name]: e.target.value });

  const handleSubmit = async e => {
    e.preventDefault();
    try {
      const payload = {
        ...order,
        productIds: order.productIds.split(',').map(id => id.trim())
      };
      await API.post("/orders", payload);
      alert("Order created");
    } catch (err) {
      alert("Failed to create order");
    }
  };

  return (
    <div className="container mt-4">
      <h3>Create Order</h3>
      <form onSubmit={handleSubmit}>
        <input className="form-control my-2" placeholder="User ID" name="userId" onChange={handleChange} />
        <input className="form-control my-2" placeholder="Product IDs (comma separated)" name="productIds" onChange={handleChange} />
        <input className="form-control my-2" placeholder="Total Amount" name="totalAmount" onChange={handleChange} />
        <button className="btn btn-info">Submit Order</button>
      </form>
    </div>
  );
}

export default Orders;
