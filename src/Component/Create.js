import React, { useState } from "react";
import axios from "axios";
import { useNavigate } from "react-router-dom";

const Create = () => {
  const [name, setName] = useState("");
  const [year, setYear] = useState("");
  const [price, setPrice] = useState("");
  const [poster, setPoster] = useState('');
  const [type, setType] = useState("newbike"); 
  const navigate = useNavigate();
  
  
  // Function to handle form submission
  const handleSubmit = (e) => {
    e.preventDefault();
    const newItem = {
      name,
      year: parseInt(year, 10), 
      price: parseFloat(price),
      poster 
    };

    //Using {type} to determine the different APIs - type depends on the user entered information
    const API = `http://localhost:4000/api/${type}`;
    //Adding data to API
    axios.post(API, newItem)
      .then(() => {
        console.log("Item added successfully!");
        navigate(`/${type}`);
      })
      .catch((error) => {
        console.error("Error adding item:", error);
      });
  };

  return (
  
  <div>
  <h2>Add a New Item</h2>
  
  {/* Form for adding a new item, triggered on submit */}
  <form onSubmit={handleSubmit}>
    
    {/* Name input field for the new item */}
    <div className="form-group">
      <label>Name:</label>
      <input 
        type="text"
        className="form-control"
        value={name}
        onChange={(e) => setName(e.target.value)} 
        required  
      />
    </div>
    
    {/* Poster URL input field (optional) */}
    <div className="form-group">
      <label>Add Product Poster: </label>
      <input 
        type="text"
        className="form-control"
        value={poster}
        onChange={(e) => setPoster(e.target.value)} 
      />
    </div>
    
    {/* Year input field, limiting values to valid years */}
    <div className="form-group">
      <label>Year:</label>
      <input
        type="number"
        className="form-control"
        value={year}
        onChange={(e) => setYear(e.target.value)}  
        required  
        min="1900"  
        max={new Date().getFullYear()}  // Maximum year set to current year
      />
    </div>
    
    {/* Price input field with minimum value validation */}
    <div className="form-group">
      <label>Price:</label>
      <input
        type="number"
        className="form-control"
        value={price}
        onChange={(e) => setPrice(e.target.value)} 
        required 
        min="0"  
      />
    </div>
    
    {/* Type selection dropdown for different item categories */}
    <div className="form-group">
      <label>Type:</label>
      <select
        className="form-control"
        value={type}
        onChange={(e) => setType(e.target.value)} 
      >
        <option value="newbike">New Bike</option>
        <option value="usedbike">Used Bike</option>
        <option value="accessory">Accessory</option>
      </select>
    </div>
    
    {/* Submit button to add the item to the collection */}
    <button type="submit" className="btn btn-primary mt-3">Add Item</button>
  </form>
</div>

  );
};

export default Create;
