// server.js - Starter Express server for Week 2 assignment

const express = require('express');
const app = express();
const PORT = process.env.PORT || 3000;
require('dotenv').config(); // Load environment variables

const productRoutes = require('./routes/products');
const logger = require('./middleware/logger');
const auth = require('./middleware/auth');
const errorHandler = require('./middleware/errorHandler');

// Middleware
app.use(express.json()); // Parses incoming JSON requests
app.use(logger); // Custom logger middleware
app.use(auth); // Authentication middleware

// Routes
app.use('/api/products', productRoutes); // Mount product routes under /api/products

// Root Endpoint
app.get('/', (req, res) => {
  res.send('Hello World');
});

// Error Handler
app.use(errorHandler); // Global error handling middleware

app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
});

