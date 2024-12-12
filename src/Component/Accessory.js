import React, { useState, useEffect } from "react";
import axios from "axios";
import AccessoryItem from "./AccessoryItem";
import { Container, Row, Col, Button } from "react-bootstrap";
import { useNavigate } from "react-router-dom";

const Accessory = () => {
  // State to hold the list of accessories fetched from the API
  const [accessories, setAccessories] = useState([]);
  const navigate = useNavigate();

  useEffect(() => {
    // Making GET request to fetch accessories from the backend
    axios
      .get("http://localhost:4000/api/accessory")
      .then((response) => setAccessories(response.data))  
      .catch((error) => console.error("Error fetching accessories:", error));  
  }, []); 

  return (
    <Container>
      {/* Heading for the Accessories page */}
      <h3 className="text-center my-4">Accessories</h3>
      
      <Row>
        {/* Map over accessories array and render each accessory */}
        {accessories.map((accessory) => (
          <Col key={accessory._id} className="mb-4">
            <AccessoryItem accessory={accessory} accessories={setAccessories} />
          </Col>
        ))}
      </Row>

      {/* Button to navigate to the page for adding a new accessory */}
      <div className="text-center my-4">
        <Button onClick={() => navigate("/create")} className="btn btn-primary">Add Accessory</Button>
      </div>
    </Container>
  );
};

export default Accessory;
