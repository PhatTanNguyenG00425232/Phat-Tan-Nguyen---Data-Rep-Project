import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';


const NavigationBar = () => {
  return (
        <Navbar bg="dark" data-bs-theme="dark">
          <Container>
            <Navbar.Brand href="/">Bike Shop</Navbar.Brand>
            <Nav className="me-auto">
              <Nav.Link href="/newbike">New Bike</Nav.Link>
              <Nav.Link href="/usedbike">Used Bike</Nav.Link>
              <Nav.Link href="/accessory">Accessory</Nav.Link>
              <Nav.Link href="/cart">Shopping Cart</Nav.Link>     
            </Nav>
          </Container>
      </Navbar>
  );
};

export default NavigationBar;