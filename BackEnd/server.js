const express = require('express');
const cors = require('cors');

const app = express();
const PORT = 4000;

// Middleware
app.use(cors());
app.use(express.json());

// Mock JSON Data
const data = {
  newBikes: [], // Correctly named
  usedBikes: [], // Correctly named
  accessories: [], // Correctly named
};

// GET routes
app.get('/api/newbike', (req, res) => res.json(data.newBikes)); // Fix to use "newBikes"
app.get('/api/usedbike', (req, res) => res.json(data.usedBikes)); // Fix to use "usedBikes"
app.get('/api/accessory', (req, res) => res.json(data.accessories)); // Fix to use "accessories"

// POST routes
app.post('/api/newbike', (req, res) => {
  data.newBikes.push(req.body); // Fix to use "newBikes"
  res.status(201).send({ message: 'New bike added successfully' });
});

app.post('/api/usedbike', (req, res) => {
  data.usedBikes.push(req.body); // Fix to use "usedBikes"
  res.status(201).send({ message: 'Used bike added successfully' });
});

app.post('/api/accessory', (req, res) => {
  data.accessories.push(req.body); // Fix to use "accessories"
  res.status(201).send({ message: 'Accessory added successfully' });
});

// Start server
app.listen(PORT, () => console.log(`Server running on http://localhost:${PORT}`));
