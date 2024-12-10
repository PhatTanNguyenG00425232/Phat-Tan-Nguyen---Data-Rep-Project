import React, { useEffect, useState } from "react";
import axios from "axios";
import AccessoryItem from "./AccessoryItem";
import { Container, Row, Col, Button } from "react-bootstrap";
import { useNavigate } from "react-router-dom";

const Accessory = () => {
  const [accessories, setAccessories] = useState([]);
  const navigate = useNavigate(); // React Router hook for navigation

  useEffect(() => {
    axios
      .get("http://localhost:4000/api/accessory")
      .then((response) => {
        console.log(response.data);
        setAccessories(response.data);
      })
      .catch((error) => {
        console.log(error);
      });
  }, []);

  return (
    <Container>
      <h3 className="text-center my-4">Accessories</h3>
      <Row>
        {accessories.map((accessory) => (
          <Col key={accessory.id} md={3} sm={6} xs={12} className="mb-4">
            <AccessoryItem accessory={accessory} />
          </Col>
        ))}
      </Row>
      <div className="text-center my-4">
        <Button onClick={() => navigate("/create")} className="btn btn-primary">
          Add New Item
        </Button>
      </div>
    </Container>
  );
};

export default Accessory;
