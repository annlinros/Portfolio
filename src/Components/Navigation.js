import React from "react";
import { Link } from "react-router-dom";
import { Nav, Navbar } from "react-bootstrap";

export default function Navigation() {
  return (
    <Navbar bsPrefix="navbar" collapseOnSelect expand="lg">
      <Navbar.Toggle aria-controls="responsive-navbar-nav" />
      <Navbar.Collapse id="responsive-navbar-nav">
        <Nav className="ml-auto">
          <Nav.Link bsPrefix="nav-link" as={Link} to="/">
            Home
          </Nav.Link>
          <Nav.Link bsPrefix="nav-link" as={Link} to="/about">
            About
          </Nav.Link>
          <Nav.Link bsPrefix="nav-link" as={Link} to="/projects">
            Projects
          </Nav.Link>
          <Nav.Link bsPrefix="nav-link" as={Link} to="/contact">
            Contact
          </Nav.Link>
        </Nav>
      </Navbar.Collapse>
    </Navbar>
  );
}
