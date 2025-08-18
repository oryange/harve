import { Container, Nav, Navbar, Button } from "react-bootstrap";

export default function CustomNavBar() {
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
            <Button
              variant="primary"
              href="/login"
            >
              Login
            </Button>
          </Nav>
        </Container>
      </Navbar>
    </>
  )
}