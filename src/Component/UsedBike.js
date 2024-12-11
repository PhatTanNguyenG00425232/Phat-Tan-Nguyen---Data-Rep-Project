import React, { useState, useEffect } from "react";
import axios from "axios";
import NewBikeItem from "./NewBikeItem"; // Reuse the same item component
import { Container, Row, Col, Button } from "react-bootstrap";
import { useNavigate } from "react-router-dom";

const UsedBike = () => {
  const [bikes, setBikes] = useState([]);
  const navigate = useNavigate();

  useEffect(() => {
    axios
      .get("http://localhost:4000/api/usedbike")
      .then((response) => setBikes(response.data))
      .catch((error) => console.error("Error fetching used bikes:", error));
  }, []);

  return (
    <Container>
      <h3 className="text-center my-4">Used Bikes</h3>
      <Row>
        {bikes.map((bike) => (
          <Col key={bike._id} md={3} sm={6} xs={12} className="mb-4">
            <NewBikeItem bike={bike} setBikes={setBikes} />
          </Col>
        ))}
      </Row>
      <div className="text-center my-4">
        {/* Add Item Button */}
        <Button onClick={() => navigate("/create")} className="btn btn-primary">
          Add Used Bike
        </Button>
      </div>
    </Container>
  );
};

export default UsedBike;
