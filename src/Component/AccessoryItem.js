import React from 'react';
import { Card } from 'react-bootstrap';
import { Link } from 'react-router-dom';
const AccessoryItem = ({ accessory }) => {
  return (
    <Card className="bike-card" style={{ width: '18rem' }}>
      <Card.Body>
        <Card.Title>{accessory.name}</Card.Title>
        <Card.Text>
          <strong>Price:</strong> ${accessory.price} <br />
          <strong>Category:</strong> {accessory.category}
        </Card.Text>
        <Link to={`/edit/${accessory._id}`} className="btn btn-primary">
        Edit Price
      </Link>
      </Card.Body>
    </Card>
  );
};

export default AccessoryItem;
