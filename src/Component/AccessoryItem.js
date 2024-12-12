import React from 'react';
import { Card, Button } from "react-bootstrap";
import { Link } from 'react-router-dom';
import axios from 'axios';

const AccessoryItem = ({ accessory,setAccessories }) => {
  const handleDelete = () => {
    if (window.confirm("Are you sure you want to buy this product?")) {
      axios
        .delete(`http://localhost:4000/api/bike/${accessory._id}`)
        .then((response) => {
          console.log("Accessory deleted:", response.data);
            // Update the UI by removing the deleted bike
            setAccessories((prevBikes) => prevBikes.filter((item) => item._id !== accessory._id));
        })
        .catch((error) => console.error("Error deleting bike:", error));
    }
  };
  return (
    //Card of the product - Name, Poster, Price, Year, an Edit and Buy button
    <Card className="bike-card" style={{ width: '18rem' }}>
      <Card.Body>
        <Card.Title className="text-center">{accessory.name}</Card.Title>
        <Card.Text>
        <img src={accessory.poster} style={{ width: "100%", height: "auto", objectFit: "cover" }}/>
          <strong>Price:</strong> ${accessory.price} <br />
          <strong>Category:</strong> {accessory.category}
        </Card.Text>
        <Link to={`/edit/${accessory._id}`} className="btn btn-primary">Edit Price</Link>
        <Button variant="danger" onClick={handleDelete}>Buy</Button>
      </Card.Body>
    </Card>
  );
};

export default AccessoryItem;
