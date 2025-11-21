import express from 'express';
import PortfolioHolding from '../models/PortfolioHolding.js';
import { authenticate } from '../middleware/auth.js';

const router = express.Router();

// Get all holdings for user
router.get('/', authenticate, async (req, res) => {
  try {
    const holdings = await PortfolioHolding.find({ userId: req.userId });
    res.json({
      status: 'success',
      data: { holdings }
    });
  } catch (error) {
    res.status(500).json({ 
      status: 'error',
      message: error.message 
    });
  }
});

// Get single holding
router.get('/:symbol', authenticate, async (req, res) => {
  try {
    const holding = await PortfolioHolding.findOne({ 
      userId: req.userId, 
      symbol: req.params.symbol.toUpperCase() 
    });
    
    if (!holding) {
      return res.status(404).json({ 
        status: 'error',
        message: 'Holding not found' 
      });
    }

    res.json({
      status: 'success',
      data: { holding }
    });
  } catch (error) {
    res.status(500).json({ 
      status: 'error',
      message: error.message 
    });
  }
});

// Update holding
router.put('/:symbol', authenticate, async (req, res) => {
  try {
    const { currentPrice } = req.body;
    
    const holding = await PortfolioHolding.findOneAndUpdate(
      { userId: req.userId, symbol: req.params.symbol.toUpperCase() },
      { currentPrice, lastUpdated: Date.now() },
      { new: true }
    );

    if (!holding) {
      return res.status(404).json({ 
        status: 'error',
        message: 'Holding not found' 
      });
    }

    res.json({
      status: 'success',
      data: { holding }
    });
  } catch (error) {
    res.status(500).json({ 
      status: 'error',
      message: error.message 
    });
  }
});

export default router;
