// frontend/script.js

// Establish WebSocket connection
const socket = new WebSocket('ws://localhost:8080'); // Replace with your WebSocket server URL

// Function to fetch and subscribe to stocks
function fetchAndSubscribe() {
  const stockCount = parseInt(document.getElementById('stockCount').value, 10);
  if (isNaN(stockCount) || stockCount <= 0 || stockCount > 20) {
    alert('Please enter a valid number between 1 and 20.');
    return;
  }

  // Send the number of stocks to backend via WebSocket
  socket.send(JSON.stringify({ count: stockCount }));
}

// Listen for updates from WebSocket
socket.onmessage = function(event) {
  const stockData = JSON.parse(event.data);

  // Display stock updates in the UI
  const stockUpdatesDiv = document.getElementById('stockUpdates');
  const stockUpdateElement = document.createElement('div');
  stockUpdateElement.textContent = `Stock ID: ${stockData.id}, Price: $${stockData.price}`;
  stockUpdatesDiv.appendChild(stockUpdateElement);
};
