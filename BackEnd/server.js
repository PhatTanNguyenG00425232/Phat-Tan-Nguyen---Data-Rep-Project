const express = require('express');
const cors = require('cors');
const mongoose = require('mongoose');
const app = express();
const PORT = 4000;

//the set up allow frontend to make api request for backend
app.use(function(req, res, next) {
  res.header("Access-Control-Allow-Origin", "*");
  res.header("Access-Control-Allow-Methods", "GET, POST, PUT, DELETE, OPTIONS");
  res.header("Access-Control-Allow-Headers", "Origin, X-Requested-With, Content-Type, Accept");
  next();
});
//Add body-parser middleware
const bodyParser = require('body-parser');
app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());

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
  poster: String,
});
const Bike = mongoose.model('Bike', BikeSchema);

// get data from the API
app.get('/api/:type', async (req, res) => {
    const { type } = req.params; 
    const bikes = await Bike.find({ type });
    res.json(bikes);
 
});

//Updating the Product Price
app.post('/api/:type', async (req, res) => {
    const { type } = req.params;
    const { name, year, price, poster } = req.body;

    const newBike = new Bike({ name, year, price, type, poster });
    await newBike.save();

    res.status(201).json({ message: `${type} added successfully`, bike: newBike });
 
});


// Get a specific bike by ID
app.get('/api/bike/:id', async (req, res) => {
    const bike = await Bike.findById(req.params.id);
    res.json(bike);
  
});

// Update a bike by ID
app.put('/api/bike/:id', async (req, res) => {
    const updatedBike = await Bike.findByIdAndUpdate(
      req.params.id,
      req.body,
      { new: true }
    );
    res.json(updatedBike);
});

// Delete a bike by ID
app.delete('/api/bike/:id', async (req, res) => {
    const { id } = req.params;

    // Delete the bike from the database
    const deletedBike = await Bike.findByIdAndDelete(id);

    if (!deletedBike) {
      return res.status(404).json({ message: 'Bike not found' });
    }

    res.status(200).json({ message: 'Bike successfully deleted', bike: deletedBike });
  
});

// Start the server
app.listen(PORT, () => console.log(`Server running on http://localhost:${PORT}`));