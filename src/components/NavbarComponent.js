import React from "react";
import { Navbar, Container, Nav, NavDropdown,Form, Button, FormControl } from "react-bootstrap";

const NavbarComponent = () => {
  return (
    <div>
      <Navbar expand="lg" bg="dark" data-bs-theme="dark">
        <Container>
          <Navbar.Brand href="#home">ShoesKoe</Navbar.Brand>
          <Navbar.Toggle aria-controls="basic-navbar-nav" />
          <Navbar.Collapse id="basic-navbar-nav">
            <Nav className="me-2">
              <NavDropdown title="Merk" id="basic-nav-dropdown">
                <NavDropdown.Item href="#action/3.1">Adidas</NavDropdown.Item>
                <NavDropdown.Item href="#action/3.2">Nike</NavDropdown.Item>
                <NavDropdown.Item href="#action/3.3">Diadora</NavDropdown.Item>
                <NavDropdown.Divider />
                <NavDropdown.Item href="#action/3.4">Separated link</NavDropdown.Item>
              </NavDropdown>
            </Nav>
            <Nav className="me-auto">
              <NavDropdown title="Kategori" id="basic-nav-dropdown">
                <NavDropdown.Item href="#action/3.1">Sepatu Bola</NavDropdown.Item>
                <NavDropdown.Item href="#action/3.2">Sepatu Lari</NavDropdown.Item>
                <NavDropdown.Item href="#action/3.3">Sepatu Badminton</NavDropdown.Item>
                <NavDropdown.Divider />
                <NavDropdown.Item href="#action/3.4">Separated link</NavDropdown.Item>
              </NavDropdown>
            </Nav>

            <Nav className="ms-auto">
              
            </Nav>
          </Navbar.Collapse>
        </Container>
      </Navbar>
    </div>
  );
};

export default NavbarComponent;
