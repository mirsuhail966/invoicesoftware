import express from 'express';
import Invoice from '../models/Invoice.js';

const router = express.Router();

// DELETE request to remove an invoice by ID
router.delete('/:id', async (req, res) => {
    try {
        const { id } = req.params;
        const result = await Invoice.findByIdAndDelete(id);

        if (!result) {
            return res.status(404).json({ message: 'Invoice not found' });
        }

        res.json({ message: 'Invoice deleted successfully' });
    } catch (error) {
        res.status(500).json({ message: error.message });
    }
});

export default router;
