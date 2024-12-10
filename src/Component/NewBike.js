import React, { useEffect, useState } from "react";
import axios from "axios";
import NewBikeItem from "./NewBikeItem";
import { Container, Row, Col, Button } from "react-bootstrap";
import { useNavigate } from "react-router-dom";

const NewBike = () => {
  const [newBikes, setNewBikes] = useState([]);
  const navigate = useNavigate(); // React Router hook for navigation

  useEffect(() => {
    axios
      .get("http://localhost:4000/api/newbike")
      .then((response) => {
        console.log(response.data);
        setNewBikes(response.data);
      })
      .catch((error) => {
        console.log(error);
      });
  }, []);

  return (
    <Container>
      <h3 className="text-center my-4">New Bikes</h3>
      <Row>
        {newBikes.map((bike) => (
          <Col key={bike.id} md={3} sm={6} xs={12} className="mb-4">
            <NewBikeItem bike={bike} />
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

export default NewBike;
