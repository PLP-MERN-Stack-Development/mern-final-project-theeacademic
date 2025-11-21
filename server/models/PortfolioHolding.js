import mongoose from 'mongoose';

const portfolioHoldingSchema = new mongoose.Schema({
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
  totalQuantity: {
    type: Number,
    required: true,
    default: 0
  },
  averageCost: {
    type: Number,
    required: true,
    default: 0
  },
  currentPrice: {
    type: Number,
    default: null
  },
  lastUpdated: {
    type: Date,
    default: Date.now
  }
}, {
  timestamps: true
});

portfolioHoldingSchema.index({ userId: 1, symbol: 1 }, { unique: true });

export default mongoose.model('PortfolioHolding', portfolioHoldingSchema);
