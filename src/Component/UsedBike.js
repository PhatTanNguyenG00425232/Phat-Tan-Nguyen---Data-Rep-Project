import React, { useState, useEffect } from "react";
import axios from "axios";
import UsedBikeItem from "./UsedBikeItem";
import { Container, Row, Col, Button } from "react-bootstrap";
import { useNavigate } from "react-router-dom";

const UsedBike = () => {
  const [usedbikes, setUsedBikes] = useState([]);
  const navigate = useNavigate();
  //Fetch data from usedBike API
  useEffect(() => {
    axios
      .get("http://localhost:4000/api/usedbike")
      .then((response) => setUsedBikes(response.data))
      .catch((error) => console.error("Error fetching used bikes:", error));
  }, []);

  return (
    <Container>
       {/* Take product from the map and put in collum of 4 */}
      <h3 className="text-center my-4">Used Bikes</h3>
      <Row>
        {usedbikes.map((usedbike) => (
          <Col key={usedbike._id} md={3} sm={6} xs={12} className="mb-4">
            <UsedBikeItem bike={usedbike} setBikes={setUsedBikes} />
          </Col>
        ))}
      </Row>
      <div className="text-center my-4">
        {/* Add Item Button */}
        <Button onClick={() => navigate("/create")} className="btn btn-primary">
          Add Used Bike
        </Button>
      </div>
    </Container>
  );
};

export default UsedBike;
