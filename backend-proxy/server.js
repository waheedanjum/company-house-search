// server.js
const express = require('express'); // Use require instead of import
const request = require('request'); // Use require instead of import

const app = express();
const port = 4000;

// Middleware to handle CORS
app.use((req, res, next) => {
  res.header('Access-Control-Allow-Origin', '*');
  res.header('Access-Control-Allow-Methods', 'GET, POST, PUT, DELETE');
  res.header('Access-Control-Allow-Headers', 'Content-Type, x-api-key');
  next();
});

// Route to handle API requests and forward them to the target server
app.get('/api/*', (req, res) => {
  const apiUrl = `https://angular-exercise.trunarrative.cloud${req.originalUrl.replace('/api', '')}`;
  const apiKey = req.headers['x-api-key'];

  request(
    { url: apiUrl, headers: { 'x-api-key': apiKey } },
    (error, response, body) => {
      if (error) {
        res.status(500).send(error);
      } else {
        res.status(response.statusCode).send(body);
      }
    }
  );
});

// Start the server
app.listen(port, () => {
  console.log(`Proxy server running on http://localhost:${port}`);
});
