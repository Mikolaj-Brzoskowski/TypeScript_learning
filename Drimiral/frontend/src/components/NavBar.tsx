import React from 'react';
import { Col, Container, Nav, Navbar, NavDropdown } from 'react-bootstrap';

export interface NavBarProps {

}

const NavBar: React.FC<NavBarProps> = () => {
return ( 
        <Navbar bg="dark" variant="dark" sticky="top">
        <Container className={"m-0"}>
          <Navbar.Brand>
          <img
              src="assets/drimiral.png"
              width="40"
              height="40"
              className="d-inline-block align-top"
              alt="Drimiral logo"
            />
            </Navbar.Brand>
          <Nav className="me-auto">
            <Nav.Link href="#home">Main Page</Nav.Link>
            <NavDropdown title="Features" id="collasible-nav-dropdown">
              <NavDropdown.Item href="journal">Dreams Journal</NavDropdown.Item>
              <NavDropdown.Divider />
              <NavDropdown.Item href="music">Music</NavDropdown.Item>
              <NavDropdown.Divider />
              <NavDropdown.Item href="summary">Sleep Summary</NavDropdown.Item>
            </NavDropdown>
            <Nav.Link href="contact">Contact</Nav.Link>
          </Nav>
        </Container>
      </Navbar>
    );
}

export default NavBar;