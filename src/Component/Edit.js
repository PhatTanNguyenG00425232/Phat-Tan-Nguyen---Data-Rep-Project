import React, { useState, useEffect } from "react";
import { useParams, useNavigate } from "react-router-dom";
import axios from "axios";

const Edit = () => {
  const { id } = useParams(); // Get the product ID from the URL
  const navigate = useNavigate();

  const [price, setPrice] = useState("");
  const [type, setType] = useState("");

  useEffect(() => {
    // Fetch product details by ID
    axios
      .get(`http://localhost:4000/api/bike/${id}`)
      .then((response) => {
        setPrice(response.data.price); // Initialize the current price
        setType(response.data.type); // Get the type to navigate back correctly
      })
      .catch((error) => console.error("Error fetching product:", error));
  }, [id]);

  const handleSubmit = (event) => {
    event.preventDefault();

    const updatedProduct = {
      price: parseFloat(price), // Update only the price
    };

    // Update the product in the database
    axios
      .put(`http://localhost:4000/api/bike/${id}`, updatedProduct)
      .then((response) => {
        console.log("Product updated:", response.data);
        navigate(`/${type}`); // Navigate back to the correct page (newbike, usedbike, accessory)
      })
      .catch((error) => console.error("Error updating product:", error));
  };

  return (
    <div>
      <h2>Edit Product Price</h2>
      <form onSubmit={handleSubmit}>
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
        <button type="submit" className="btn btn-primary mt-3">
          Save Changes
        </button>
      </form>
    </div>
  );
};

export default Edit;
