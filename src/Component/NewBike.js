import React from 'react';
import { Container, Row, Col } from 'react-bootstrap';
import NewBikeItem from './NewBikeItem';

const NewBike = () => {
  // Mock JSON Data
  const newBikeData = [
    {
      id: 1,
      name: "Speedster 300",
      price: 1200,
      yearProduced: 2022,
      condition: "New"
    },
    {
      id: 2,
      name: "Mountain King X5",
      price: 1500,
      yearProduced: 2023,
      condition: "New"
    },
    {
      id: 3,
      name: "Urban Cruiser",
      price: 900,
      yearProduced: 2021,
      condition: "New"
    },
    {
      id: 4,
      name: "Trail Blazer",
      price: 2000,
      yearProduced: 2023,
      condition: "New"
    },
    {
      id: 5,
      name: "Road Runner",
      price: 800,
      yearProduced: 2020,
      condition: "New"
    }
  ];

  return (
    <Container>
      <h2 className="text-center my-4">New Bikes</h2>
      <Row className="justify-content-center">
        {newBikeData.map((bike) => (
          <Col key={bike.id} md={3} sm={6} xs={12} className="d-flex justify-content-center mb-4">
            <NewBikeItem bike={bike} />
          </Col>
        ))}
      </Row>
    </Container>
  );
};

export default NewBike;
