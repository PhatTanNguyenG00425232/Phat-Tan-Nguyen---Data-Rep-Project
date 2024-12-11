import React, { useState, useEffect } from "react";
import axios from "axios";
import NewBikeItem from "./NewBikeItem";
import { Container, Row, Col, Button } from "react-bootstrap";
import { useNavigate } from "react-router-dom";

const Accessory = () => {
  const [accessories, setAccessories] = useState([]);
  const navigate = useNavigate(); 

  useEffect(() => {
    axios
      .get("http://localhost:4000/api/accessory")
      .then((response) => setAccessories(response.data))
      .catch((error) => console.error("Error fetching accessories:", error));
  }, []);

  return (
    <Container>
      <h3 className="text-center my-4">Accessories</h3>
      <Row>
        {accessories.map((accessory) => (
          <Col key={accessory._id} md={3} sm={6} xs={12} className="mb-4">
            <NewBikeItem bike={accessory} setBikes={setAccessories} />
          </Col>
        ))}
      </Row>
      <div className="text-center my-4">
        {/* Add Item Button */}
        <Button onClick={() => navigate("/create")} className="btn btn-primary">
          Add Accessory
        </Button>
      </div>
    </Container>
  );
};

export default Accessory;
