import express from 'express';
import Invoice from '../models/Invoice.js'; // Ensure correct path

const router = express.Router();

// Create a new invoice
router.post('/', async (req, res) => {
  try {
    const { customerName, amount } = req.body;

    if (!customerName || !amount) {
      return res.status(400).json({ message: 'Customer name and amount are required' });
    }

    const newInvoice = new Invoice({ customerName, amount });
    await newInvoice.save();
    res.status(201).json(newInvoice);
  } catch (error) {
    console.error(error);
    res.status(400).json({ message: error.message });
  }
});

// Get all invoices
router.get('/', async (req, res) => {
  try {
    const invoices = await Invoice.find();
    res.status(200).json(invoices);
  } catch (error) {
    console.error(error);
    res.status(500).json({ message: error.message });
  }
});

// Get a single invoice by ID
router.get('/:id', async (req, res) => {
  try {
    const invoice = await Invoice.findById(req.params.id);
    if (!invoice) {
      return res.status(404).json({ message: 'Invoice not found' });
    }
    res.status(200).json(invoice);
  } catch (error) {
    console.error(error);
    res.status(500).json({ message: error.message });
  }
});

// Update an invoice by ID
router.put('/:id', async (req, res) => {
  try {
    const updatedInvoice = await Invoice.findByIdAndUpdate(
      req.params.id,
      req.body,
      { new: true, runValidators: true }
    );

    if (!updatedInvoice) {
      return res.status(404).json({ message: 'Invoice not found' });
    }

    res.status(200).json(updatedInvoice);
  } catch (error) {
    console.error(error);
    res.status(400).json({ message: error.message });
  }
});

// Delete an invoice by ID
router.delete('/:id', async (req, res) => {
  try {
    const result = await Invoice.findByIdAndDelete(req.params.id);

    if (!result) {
      return res.status(404).json({ message: 'Invoice not found' });
    }

    res.status(204).send(); // No content
  } catch (error) {
    console.error(error);
    res.status(500).json({ message: error.message });
  }
});

export default router;
