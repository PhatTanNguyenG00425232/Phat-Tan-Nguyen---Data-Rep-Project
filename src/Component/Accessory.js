import React from 'react';
import { Container, Row, Col, Button } from 'react-bootstrap';
import { useNavigate } from 'react-router-dom';
import AccessoryItem from './AccessoryItem';

const Accessory = () => {
  const navigate = useNavigate(); // React Router hook for navigation

  // Mock JSON Data
  const accessoryData = [
    {
      id: 1,
      name: "Helmet Pro",
      price: 100,
      category: "Safety"
    },
    {
      id: 2,
      name: "LED Lights",
      price: 50,
      category: "Lighting"
    },
    {
      id: 3,
      name: "Water Bottle Holder",
      price: 20,
      category: "Utility"
    },
    {
      id: 4,
      name: "Bike Lock",
      price: 40,
      category: "Security"
    }
  ];

  return (
    <Container>
      <h2 className="text-center my-4">Accessories</h2>
      <Row className="justify-content-center">
        {accessoryData.map((accessory) => (
          <Col key={accessory.id} md={3} sm={6} xs={12} className="d-flex justify-content-center mb-4">
            <AccessoryItem accessory={accessory} />
          </Col>
        ))}
      </Row>
      <div className="text-center my-4">
        <Button onClick={() => navigate('/create')} className="btn btn-primary">
          Add New Item
        </Button>
      </div>
    </Container>
  );
};

export default Accessory;
