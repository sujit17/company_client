import React from "react";
import { Link } from "react-router-dom";
import { Button, Form, FormControl, Nav, Navbar } from "react-bootstrap";

function Header() {
  return (
    <div className="header">
      <Navbar bg="dark" variant="dark">
        <Navbar.Brand href="/">
          <h1>Company</h1>
        </Navbar.Brand>
        <Nav className="mr-auto">
          {/* <Nav.Link href="#home">Home</Nav.Link>
          <Nav.Link href="#features">Features</Nav.Link>
          <Nav.Link href="#pricing">Pricing</Nav.Link> */}
        </Nav>

        <Link to="/registration">
          <Button variant="primary" className="mr-2">
            Add Company
          </Button>
        </Link>
      </Navbar>
    </div>
  );
}

export default Header;
