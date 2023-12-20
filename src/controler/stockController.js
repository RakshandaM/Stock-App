// src/controllers/stockController.js

const axios = require('axios');
const fs = require('fs');

const fetchTopStocks = async () => {
  try {
    const response = await axios.get('https://api.polygon.io/v2/snapshot/locale/us/markets/stocks/gainers?apiKey=YOUR_API_KEY');
    const topStocks = response.data.tickers.slice(0, 20).map(stock => ({
      symbol: stock.ticker,
      openPrice: stock.lastTrade['p']
    }));
    return topStocks;
  } catch (error) {
    console.error('Error fetching top stocks:', error.message);
    return [];
  }
};

const storeStocksToFile = (stocks) => {
  const data = JSON.stringify(stocks, null, 2);
  fs.writeFileSync('topStocks.json', data);
};

const initiateDataFetchAndStorage = async () => {
  try {
    const topStocks = await fetchTopStocks();

    const stocksWithIntervals = topStocks.map(stock => ({
      ...stock,
      refreshInterval: Math.floor(Math.random() * 5) + 1
    }));

    storeStocksToFile(stocksWithIntervals);

    console.log('Top stocks with refresh intervals:', stocksWithIntervals);
  } catch (err) {
    console.error('Error:', err);
  }
};

initiateDataFetchAndStorage();
