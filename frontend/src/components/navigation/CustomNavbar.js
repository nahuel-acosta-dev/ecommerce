import React from 'react';
import {Button, Col, Container, Form, Navbar, Nav, NavDropdown, Row} from 'react-bootstrap';
import { Link } from 'react-router-dom';
 
const CustomNavbar = () => {

    return(
      <Navbar bg="dark" variant="dark">
        <Container>
          <Navbar.Brand href="/">
            <img
              alt=""
              src="/logo.svg"
              width="30"
              height="30"
              className="d-inline-block align-top"
            />{' '}
            React Bootstrap
          </Navbar.Brand>
          <Navbar.Toggle aria-controls="navbarScroll" />
        <Navbar.Collapse id="navbarScroll">
          <Nav
            className="me-auto my-2 my-lg-0"
            style={{ maxHeight: '100px' }}
            navbarScroll
          >
            <li className="nav-item">
              <Link to="/signup" className="nav-link active">Home</Link>
            </li>
            <li className="nav-item">
              <Link to="/signup" className="nav-link">Signup</Link>
            </li>
            <li className="nav-item">
              <Link to="/login" className="nav-link">Login</Link>
            </li>
          </Nav>
          <Form className="d-flex">
            <Button variant="outline-info" style={{'marginRight': "10px"}}>Sign in</Button>
            <Button variant="primary">Sign up</Button>
          </Form>
        </Navbar.Collapse>
        </Container>
      </Navbar>
    )
}

export default CustomNavbar;