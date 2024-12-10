import React from 'react';
import { Card } from 'react-bootstrap';

const UsedBikeItem = ({ bike }) => {
  return (
    <Card className="bike-card" style={{ width: '18rem' }}>
      <Card.Body>
        <Card.Title>{bike.name}</Card.Title>
        <Card.Text>
          <strong>Price:</strong> ${bike.price} <br />
          <strong>Year Produced:</strong> {bike.yearProduced} <br />
          <strong>Condition:</strong> {bike.condition}
        </Card.Text>
      </Card.Body>
    </Card>
  );
};

export default UsedBikeItem;
