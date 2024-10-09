const express = require('express');
const app = express();
const PORT = process.env.PORT || 8080;

// Health check endpoint
app.get('/health', (req, res) => {
  res.status(200).send('Healthy');
});

// Main service endpoint
app.get('/v2', (req, res) => {
  res.send('Hello, World from Microservice A! -V2');
});

// Start the server
app.listen(PORT, () => {
  console.log(`Microservice is running on port ${PORT}`);
});
