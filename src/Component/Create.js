import React, { useState } from "react";
import axios from "axios";
import { useNavigate } from "react-router-dom";

const Create = () => {
  const [name, setName] = useState(""); 
  const [year, setYear] = useState(""); 
  const [price, setPrice] = useState(""); 
  const [type, setType] = useState("newbike");
  const navigate = useNavigate(); 

  // Function to handle form submission
  const handleSubmit = (e) => {
    e.preventDefault();

    const newItem = {
      name,
      year: parseInt(year, 10),
      price: parseFloat(price), 
    };

    // Determine the API endpoint based on the selected type
    const endpoint = `http://localhost:4000/api/${type}`;

    // Send POST request to the backend
    axios
      .post(endpoint, newItem)
      .then((response) => {
        console.log("Item added successfully:", response.data);
        // Navigate back to the corresponding page
        navigate(`/${type}`);
      })
      .catch((error) => {
        console.error("Error adding item:", error);
      });
  };

  return (
    <div>
      <h2>Add a New Item</h2>
      <form onSubmit={handleSubmit}>
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
        <div className="form-group">
          <label>Year:</label>
          <input
            type="number"
            className="form-control"
            value={year}
            onChange={(e) => setYear(e.target.value)}
            required
            min="1900"
            max={new Date().getFullYear()}
          />
        </div>
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
        <button type="submit" className="btn btn-primary mt-3">
          Add Item
        </button>
      </form>
    </div>
  );
};

export default Create;
