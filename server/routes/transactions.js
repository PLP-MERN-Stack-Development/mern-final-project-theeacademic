import express from 'express';
import Transaction from '../models/Transaction.js';
import PortfolioHolding from '../models/PortfolioHolding.js';
import { authenticate } from '../middleware/auth.js';

const router = express.Router();

// Get all transactions for user
router.get('/', authenticate, async (req, res) => {
  try {
    const transactions = await Transaction.find({ userId: req.userId })
      .sort({ transactionDate: -1 });
    
    res.json({
      status: 'success',
      data: { transactions }
    });
  } catch (error) {
    res.status(500).json({ 
      status: 'error',
      message: error.message 
    });
  }
});

// Create new transaction
router.post('/', authenticate, async (req, res) => {
  try {
    const { symbol, transactionType, quantity, price, notes } = req.body;
    
    const totalAmount = quantity * price;
    
    const transaction = new Transaction({
      userId: req.userId,
      symbol: symbol.toUpperCase(),
      transactionType,
      quantity,
      price,
      totalAmount,
      notes
    });

    await transaction.save();

    // Update portfolio holding
    const holding = await PortfolioHolding.findOne({ 
      userId: req.userId, 
      symbol: symbol.toUpperCase() 
    });

    if (transactionType === 'buy') {
      if (holding) {
        const newTotalQuantity = holding.totalQuantity + quantity;
        const newAverageCost = 
          ((holding.averageCost * holding.totalQuantity) + totalAmount) / newTotalQuantity;
        
        holding.totalQuantity = newTotalQuantity;
        holding.averageCost = newAverageCost;
        await holding.save();
      } else {
        await PortfolioHolding.create({
          userId: req.userId,
          symbol: symbol.toUpperCase(),
          totalQuantity: quantity,
          averageCost: price
        });
      }
    } else if (transactionType === 'sell') {
      if (holding) {
        holding.totalQuantity -= quantity;
        if (holding.totalQuantity <= 0) {
          await PortfolioHolding.deleteOne({ _id: holding._id });
        } else {
          await holding.save();
        }
      }
    }

    res.status(201).json({
      status: 'success',
      data: { transaction }
    });
  } catch (error) {
    res.status(500).json({ 
      status: 'error',
      message: error.message 
    });
  }
});

// Get transaction by ID
router.get('/:id', authenticate, async (req, res) => {
  try {
    const transaction = await Transaction.findOne({ 
      _id: req.params.id, 
      userId: req.userId 
    });
    
    if (!transaction) {
      return res.status(404).json({ 
        status: 'error',
        message: 'Transaction not found' 
      });
    }

    res.json({
      status: 'success',
      data: { transaction }
    });
  } catch (error) {
    res.status(500).json({ 
      status: 'error',
      message: error.message 
    });
  }
});

export default router;
