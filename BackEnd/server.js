const express = require('express');
const cors = require('cors');
const mongoose = require('mongoose');

const app = express();
const PORT = 4000;

// Middleware
app.use(cors());
app.use(express.json());

// MongoDB Connection
mongoose.connect('mongodb+srv://admin:admin@cluster0.kjdsv.mongodb.net/DB11');

// Mongoose Schemas and Models
const BikeSchema = new mongoose.Schema({
  name: String,
  year: Number,
  price: Number,
  type: String,
});

const Bike = mongoose.model('Bike', BikeSchema);

// API Routes
app.get('/api/:type', async (req, res) => {
  try {
    const { type } = req.params; 
    const bikes = await Bike.find({ type });
    res.json(bikes);
  } catch (error) {
    res.status(500).json({ message: 'Error retrieving data', error });
  }
});

app.post('/api/:type', async (req, res) => {
  try {
    const { type } = req.params;
    const { name, year, price } = req.body;

    const newBike = new Bike({ name, year, price, type });
    await newBike.save();

    res.status(201).json({ message: `${type} added successfully`, bike: newBike });
  } catch (error) {
    res.status(500).json({ message: 'Error adding data', error });
  }
});

// Start the server
app.listen(PORT, () => console.log(`Server running on http://localhost:${PORT}`));
