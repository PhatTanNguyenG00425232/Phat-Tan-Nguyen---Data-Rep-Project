import React, { useState, useEffect } from "react";
import NewBikeItem from "./NewBikeItem";
import UsedBikeItem from "./UsedBikeItem";
import { Container, Row, Col, Button, Card } from "react-bootstrap";
import { useNavigate } from "react-router-dom";
import axios from "axios";

const HomePage = () => {
  const [bikes, setBikes] = useState([]);
  const [usedbikes, setUsedBikes] = useState([]);
  const [accessories, setAccessories] = useState([]);
  
  const navigate = useNavigate();
  
  // Fetch New Bikes
  useEffect(() => {
    axios
      .get("http://localhost:4000/api/newbike")
      .then((response) => setBikes(response.data))
      .catch((error) => console.error("Error fetching bikes:", error));
  }, []);

  // Fetch Used Bikes
  useEffect(() => {
    axios
      .get("http://localhost:4000/api/usedbike")
      .then((response) => setUsedBikes(response.data))
      .catch((error) => console.error("Error fetching used bikes:", error));
  }, []);

  // Fetch Accessories
  useEffect(() => {
    axios
      .get("http://localhost:4000/api/accessory")
      .then((response) => setAccessories(response.data))
      .catch((error) => console.error("Error fetching accessories:", error));
  }, []);

  // Function to limit the number of items to 4 per section
  const limitItems = (items) => {
    return items.slice(0, 4); 
  };

  return (
    <div>
      <h1 className="text-center">Welcome to our Bike shop</h1>
      <h2 className="text-center">Please find below our products</h2>
      
      {/* New Bikes Section */}
      <Container className="text-center">
        <h3 className="text-center my-4">New Bikes</h3>
        <Card className="p-4 border mb-4">
          <Row>
            {limitItems(bikes).map((bike) => (
              <Col key={bike._id} md={3} sm={6} xs={12} className="mb-4">
                <NewBikeItem bike={bike} setBikes={setBikes} />
              </Col>
            ))}
             <div className="text-center my-4">
          <Button onClick={() => navigate("/newbike")} className="btn btn-primary">
            See more
          </Button>
        </div>
          </Row>
        </Card>
       
      </Container>

      {/* Used Bikes Section */}
      <Container className="text-center">
        <h3 className="text-center my-4">Used Bikes</h3>
        <Card className="p-4 border mb-4">
          <Row>
            {limitItems(usedbikes).map((usedbike) => (
              <Col key={usedbike._id} md={3} sm={6} xs={12} className="mb-4">
                <UsedBikeItem bike={usedbike} setUsedBikes={setUsedBikes} />
              </Col>
            ))}
            <div className="text-center my-4">
          <Button onClick={() => navigate("/usedbike")} className="btn btn-primary">
            See more
          </Button>
        </div>
          </Row>
          
        </Card>
        
      </Container>

      {/* Accessories Section */}
      <Container className="text-center">
        <h3 className="text-center my-4">Accessories</h3>
        <Card className="p-4 border mb-4">
          <Row>
            {limitItems(accessories).map((accessory) => (
              <Col key={accessory._id} md={3} sm={6} xs={12} className="mb-4">
                <NewBikeItem bike={accessory} setBikes={setAccessories} />
              </Col>
            ))}
            <div className="text-center my-4">
          <Button onClick={() => navigate("/accessory")} className="btn btn-primary">See more</Button>
        </div>
          </Row>
        </Card>
        
      </Container>
    </div>
  );
};

export default HomePage;
