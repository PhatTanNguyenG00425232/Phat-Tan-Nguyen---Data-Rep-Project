import React, { useEffect, useState } from "react";
import axios from "axios";
import UsedBikeItem from "./UsedBikeItem";
import { Container, Row, Col, Button } from "react-bootstrap";
import { useNavigate } from "react-router-dom";

const UsedBike = () => {
  const [usedBikes, setUsedBikes] = useState([]);
  const navigate = useNavigate(); // React Router hook for navigation

  useEffect(() => {
    axios
      .get("http://localhost:4000/api/usedbike")
      .then((response) => {
        console.log(response.data);
        setUsedBikes(response.data);
      })
      .catch((error) => {
        console.log(error);
      });
  }, []);

  return (
    <Container>
      <h3 className="text-center my-4">Used Bikes</h3>
      <Row>
        {usedBikes.map((bike) => (
          <Col key={bike.id} md={3} sm={6} xs={12} className="mb-4">
            <UsedBikeItem bike={bike} />
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

export default UsedBike;
