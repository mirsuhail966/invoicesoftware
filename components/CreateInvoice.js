// src/components/CreateInvoice.js
import React, { useState } from 'react';
import { createInvoice } from '../api';

const CreateInvoice = () => {
  const [customerName, setCustomerName] = useState('');
  const [amount, setAmount] = useState('');

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const newInvoice = { customerName, amount: parseFloat(amount) };
      await createInvoice(newInvoice);
      // Clear form or redirect
    } catch (error) {
      console.error('Failed to create invoice:', error);
    }
  };

  return (
    <form onSubmit={handleSubmit}>
      <div>
        <label>
          Customer Name:
          <input
            type="text"
            value={customerName}
            onChange={(e) => setCustomerName(e.target.value)}
            required
          />
        </label>
      </div>
      <div>
        <label>
          Amount:
          <input
            type="number"
            value={amount}
            onChange={(e) => setAmount(e.target.value)}
            required
          />
        </label>
      </div>
      <button type="submit">Create Invoice</button>
    </form>
  );
};

export default CreateInvoice;
