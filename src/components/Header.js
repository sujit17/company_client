import React from "react";
import { Button, Form, FormControl, Nav, Navbar } from "react-bootstrap";

function Header() {
  return (
    <div className="header">
      <Navbar bg="dark" variant="dark">
        <Navbar.Brand href="/">Company</Navbar.Brand>
        <Nav className="mr-auto">
          {/* <Nav.Link href="#home">Home</Nav.Link>
          <Nav.Link href="#features">Features</Nav.Link>
          <Nav.Link href="#pricing">Pricing</Nav.Link> */}
        </Nav>
        <Form inline>
          <FormControl type="text" placeholder="Search" className="mr-sm-2" />
          <Button variant="outline-info" className="mr-3">
            Search
          </Button>
        </Form>
        <Button href="/registration" variant="primary" className="mr-2">
          Add Company
        </Button>
      </Navbar>
    </div>
  );
}

export default Header;
