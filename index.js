// Import the Express.js library
const express = require('express');

// Create an Express application
const app = express();

// Define a route for the root URL ("/")
app.get('/', (req, res) => {
  res.send('Hello, Express!');
});

// Start the server on a specific port (e.g., 3000)
const port = 3000;
app.listen(port, () => {
  console.log(`Server is running on http://localhost:${port}`);
});