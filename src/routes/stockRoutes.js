// src/routes/stockRoutes.js

const express = require('express');
const router = express.Router();
const stockController = require('../controllers/stockController');

// Define route for fetching and updating stock data
router.get('/stocks', async (req, res) => {
  try {
    // Fetch and store top stocks
    const topStocks = await stockController.fetchAndStoreTopStocks();
    
    // Update stock prices
    stockController.updateStockPrices(topStocks);

    res.status(200).json({ message: 'Stocks updated successfully' });
  } catch (error) {
    res.status(500).json({ error: 'Internal server error' });
  }
});

module.exports = router;
