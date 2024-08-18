// src/components/InvoicesList.js
import React, { useEffect, useState } from 'react';
import { getInvoices } from '../api';

const InvoicesList = () => {
  const [invoices, setInvoices] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchInvoices = async () => {
      try {
        const data = await getInvoices();
        setInvoices(data);
      } catch (error) {
        console.error('Failed to fetch invoices:', error);
      } finally {
        setLoading(false);
      }
    };

    fetchInvoices();
  }, []);

  if (loading) return <div>Loading...</div>;

  return (
    <div>
      <h1>Invoices</h1>
      <ul>
        {invoices.map(invoice => (
          <li key={invoice._id}>
            {invoice.customerName} - ${invoice.amount}
          </li>
        ))}
      </ul>
    </div>
  );
};

export default InvoicesList;
