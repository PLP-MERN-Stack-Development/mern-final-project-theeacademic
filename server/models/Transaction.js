import mongoose from 'mongoose';

const transactionSchema = new mongoose.Schema({
  userId: {
    type: mongoose.Schema.Types.ObjectId,
    ref: 'User',
    required: true
  },
  symbol: {
    type: String,
    required: true,
    uppercase: true
  },
  transactionType: {
    type: String,
    enum: ['buy', 'sell'],
    required: true
  },
  quantity: {
    type: Number,
    required: true,
    min: 0
  },
  price: {
    type: Number,
    required: true,
    min: 0
  },
  totalAmount: {
    type: Number,
    required: true
  },
  transactionDate: {
    type: Date,
    default: Date.now
  },
  notes: {
    type: String,
    default: ''
  }
}, {
  timestamps: true
});

export default mongoose.model('Transaction', transactionSchema);
