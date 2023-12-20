// src/models/Stock.js

class Stock {
    constructor(symbol, openPrice, refreshInterval) {
      this.symbol = symbol;
      this.openPrice = openPrice;
      this.refreshInterval = refreshInterval;
    }
  
    // Getter methods
    getSymbol() {
      return this.symbol;
    }
  
    getOpenPrice() {
      return this.openPrice;
    }
  
    getRefreshInterval() {
      return this.refreshInterval;
    }
  
    // Setter methods
    setOpenPrice(newPrice) {
      this.openPrice = newPrice;
    }
  
    setRefreshInterval(newInterval) {
      this.refreshInterval = newInterval;
    }
  
    // Other methods related to Stock model can be added here
  }
  
  module.exports = Stock;
  