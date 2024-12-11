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


// Get a specific bike by ID
app.get('/api/bike/:id', async (req, res) => {
  try {
    const bike = await Bike.findById(req.params.id);
    res.json(bike);
  } catch (error) {
    res.status(500).json({ message: 'Error fetching bike', error });
  }
});

// Update a bike by ID
app.put('/api/bike/:id', async (req, res) => {
  try {
    const updatedBike = await Bike.findByIdAndUpdate(
      req.params.id,
      req.body,
      { new: true }
    );
    res.json(updatedBike);
  } catch (error) {
    res.status(500).json({ message: 'Error updating bike', error });
  }
});

// Delete a bike by ID
app.delete('/api/bike/:id', async (req, res) => {
  try {
    const { id } = req.params;

    // Delete the bike from the database
    const deletedBike = await Bike.findByIdAndDelete(id);

    if (!deletedBike) {
      return res.status(404).json({ message: 'Bike not found' });
    }

    res.status(200).json({ message: 'Bike successfully deleted', bike: deletedBike });
  } catch (error) {
    console.error('Error deleting bike:', error);
    res.status(500).json({ message: 'Error deleting bike', error });
  }
});





// Start the server
app.listen(PORT, () => console.log(`Server running on http://localhost:${PORT}`));
