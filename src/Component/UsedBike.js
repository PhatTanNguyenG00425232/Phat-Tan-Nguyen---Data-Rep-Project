import React from 'react';
import { Container, Row, Col, Button } from 'react-bootstrap';
import { useNavigate } from 'react-router-dom';
import UsedBikeItem from './UsedBikeItem';

const UsedBike = () => {
  const navigate = useNavigate(); // React Router hook for navigation

  // Mock JSON Data
  const usedBikeData = [
    {
      id: 1,
      name: "Trail Explorer",
      price: 600,
      yearProduced: 2018,
      condition: "Used"
    },
    {
      id: 2,
      name: "Road Master",
      price: 750,
      yearProduced: 2019,
      condition: "Used"
    },
    {
      id: 3,
      name: "City Commuter",
      price: 500,
      yearProduced: 2020,
      condition: "Used"
    },
    {
      id: 4,
      name: "Mountain Tracker",
      price: 800,
      yearProduced: 2021,
      condition: "Used"
    }
  ];

  return (
    <Container>
      <h2 className="text-center my-4">Used Bikes</h2>
      <Row className="justify-content-center">
        {usedBikeData.map((bike) => (
          <Col key={bike.id} md={3} sm={6} xs={12} className="d-flex justify-content-center mb-4">
            <UsedBikeItem bike={bike} />
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

export default UsedBike;
