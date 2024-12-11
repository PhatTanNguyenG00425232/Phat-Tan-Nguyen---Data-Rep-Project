import React from "react";
import { Card, Button } from "react-bootstrap";
import { Link } from "react-router-dom";
import axios from "axios";

const NewBikeItem = ({ bike, setBikes }) => {
  const handleDelete = () => {
    if (window.confirm("Are you sure you want to delete this bike?")) {
      axios
        .delete(`http://localhost:4000/api/bike/${bike._id}`)
        .then((response) => {
          console.log("Bike deleted:", response.data);

          // Update the UI by removing the deleted bike
          setBikes((prevBikes) => prevBikes.filter((item) => item._id !== bike._id));
        })
        .catch((error) => console.error("Error deleting bike:", error));
    }
  };

  return (
    <Card className="mb-4 bike-card" style={{ width: "18rem" }}>
      <Card.Body>
        <Card.Title>{bike.name}</Card.Title>
        <Card.Text>
          <strong>Price:</strong> ${bike.price} <br />
          <strong>Year Produced:</strong> {bike.year} <br />
          <strong>Condition:</strong> {bike.condition || "N/A"}
        </Card.Text>
        <Link to={`/edit/${bike._id}`} className="btn btn-primary me-2">
          Edit
        </Link>
        <Button variant="danger" onClick={handleDelete}>
          Buy
        </Button>
      </Card.Body>
    </Card>
  );
};

export default NewBikeItem;
