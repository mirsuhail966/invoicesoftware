import mongoose from 'mongoose';

const InvoiceSchema = new mongoose.Schema({
  customerName: { type: String, required: true },
  amount: { type: Number, required: true },
  date: { type: Date, default: Date.now },
});

export default mongoose.model('Invoice', InvoiceSchema);
