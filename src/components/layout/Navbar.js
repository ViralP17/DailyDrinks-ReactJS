import React from "react";
import { Link } from "react-router-dom";
import { Navbar,Nav,Form } from 'react-bootstrap';


const navBar = () => {
  return (
    <Navbar bg="dark" variant="dark" >
    <Navbar.Brand href="#home">Daily-Drinks</Navbar.Brand>
    <Navbar.Toggle aria-controls="basic-navbar-nav" />
    <Navbar.Collapse id="basic-navbar-nav">
      <Nav className="mr-auto">
          <Nav.Link href="/">Home</Nav.Link>
          <Nav.Link href="/about">About</Nav.Link>
      </Nav>
      <Form inline>
          <Link className="btn btn-outline-light" to="/orders/add">
            Add Order
          </Link>
        </Form>
    </Navbar.Collapse>
  </Navbar>


   
    
    
  );
};

export default navBar;
