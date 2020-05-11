import React from 'react';
import Container from "react-bootstrap/Container";
import Nav from "react-bootstrap/Nav";
import Navbar from "react-bootstrap/Navbar";


function Navigation() {

  return (
    <Container fluid>
      <Nav className="justify-content-center">
        <Nav.Item>
          <Nav.Link href="/">home</Nav.Link>
        </Nav.Item>
        <Nav.Item>
          <Nav.Link href="/me">me</Nav.Link>
        </Nav.Item>
        <Nav.Item>
          <Nav.Link href="/projects">projects</Nav.Link>
        </Nav.Item>
        <Nav.Item>
          <Nav.Link href="/contact">contact</Nav.Link>
        </Nav.Item>
        <Nav.Item>
          <Nav.Link href="/explore">explore</Nav.Link>
        </Nav.Item>
      </Nav>
    </Container>
  );
}

export default Navigation;
