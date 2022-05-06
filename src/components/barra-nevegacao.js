import Navbar from "react-bootstrap/Navbar";
import NavDropdown from "react-bootstrap/NavDropdown";
import Nav from "react-bootstrap/Nav";
import { Container } from "react-bootstrap";

const BarraNavegacao = () => {
  return (
    <Navbar collapseOnSelect expand="lg" bg="dark" variant="dark">
      <Container>
        <Navbar.Brand href="#home">Jeferson Art Designs</Navbar.Brand>
        <Navbar.Toggle aria-controls="responsive-navbar-nav" />
        <Navbar.Collapse id="responsive-navbar-nav">
          <Nav className="me-auto">
            <Nav.Link href="#features">Contatos</Nav.Link>
            <Nav.Link href="https://www.youtube.com/channel/UC1O62x8zLFKa7rFr6X2VHrA">
              Youtube
            </Nav.Link>
            <NavDropdown title="Melhores arts" id="collasible-nav-dropdown">
              <NavDropdown.Item href="#Laura">
                Biblioteca Publica
              </NavDropdown.Item>
              <NavDropdown.Item href="#Laura">Laurinha</NavDropdown.Item>
              <NavDropdown.Item href="#action/3.3">Strike</NavDropdown.Item>
              <NavDropdown.Divider />
            </NavDropdown>
          </Nav>
          <Nav>
            <Nav.Link href="#deets">Whats-App</Nav.Link>
            <Nav.Link
              eventKey={2}
              href="https://www.instagram.com/jefersonartdesign/"
            >
              Instagram
            </Nav.Link>
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
};

export default BarraNavegacao;
