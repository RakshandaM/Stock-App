// src/controllers/websocketController.js

const WebSocket = require('ws');

// Create a WebSocket server
const startWebSocketServer = () => {
  const wss = new WebSocket.Server({ port: 8080 }); // WebSocket server

  wss.on('connection', (ws) => {
    console.log('Client connected');
    // Send initial stock data to the client
    ws.send(JSON.stringify(loadedStocks)); // loadedStocks should be available here
  });

  // Modify the updateStockPrices function to broadcast updated prices via WebSocket
  const updateStockPrices = (stocks) => {
    stocks.forEach(stock => {
      setInterval(() => {
        const randomChange = (Math.random() * 10) - 5;
        stock.openPrice += randomChange;
        const updatedStock = {
          symbol: stock.symbol,
          price: stock.openPrice.toFixed(2)
        };
        // Broadcast updated price to connected clients
        wss.clients.forEach(client => {
          if (client.readyState === WebSocket.OPEN) {
            client.send(JSON.stringify(updatedStock));
          }
        });
      }, stock.refreshInterval * 1000);
    });
  };

  // Add any other WebSocket-related functions here if needed

  return wss; // Return the WebSocket server instance if necessary
};

module.exports = {
  startWebSocketServer
};
