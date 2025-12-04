import { useState, useEffect } from "react";
import { Container, Nav, Navbar, Button } from "react-bootstrap";

export default function CustomNavBar() {
  const [isLoggedIn, setIsLoggedIn] = useState(false);

  useEffect(() => {
    const token = localStorage.getItem('token');
    setIsLoggedIn(!!token);
  }, []);

  return (
    <>
      <Navbar bg="dark" variant="dark" fixed="top">
        <Container>
          <Navbar.Brand href="/">Ecommerce</Navbar.Brand>
          <Nav className="me-auto">
            <Nav.Link href="/">Home</Nav.Link>
            <Nav.Link href="/products">Produtos</Nav.Link>
          </Nav>
          <Nav className="ms-auto">
            <Nav.Link href="/cart" className="me-3">
              <i className="fas fa-shopping-cart" style={{ fontSize: '1.2rem' }}></i>
              <span className="ms-1">Carrinho</span>
            </Nav.Link>
            {isLoggedIn ? (
              <Button variant="success" disabled>
                Logado
              </Button>
            ) : (
              <Button variant="primary" href="/login">
                Login
              </Button>
            )}
          </Nav>
        </Container>
      </Navbar>
    </>
  )
}