import React from 'react';
import { Navbar, Nav } from 'react-bootstrap';
import { Link } from 'react-router-dom';

function NavbarComponent() {
  return (
    <>
      <Navbar bg="light" expand="lg">
        <Navbar.Brand as={Link} to="/">React App</Navbar.Brand>
        <Nav className="mr-auto">
          <Nav.Link as={Link} to="/counter">Counter</Nav.Link>
          <Nav.Link as={Link} to="/todo">Todo</Nav.Link>
        </Nav>
      </Navbar>
    </>
  );
}

export default NavbarComponent;

