import React from 'react';
import { Container, FormControl, Nav, Navbar, Button, Form } from 'react-bootstrap';
import { Link } from 'react-router-dom';
import Home from '../../Home/Home';
import Carosul from '../Carosul/Carosul';
import './Navbar.css'
const Header = () => {
    return (
        <div>
            <Navbar bg="primary" expand="lg">
     <Container fluid>
     <Navbar.Toggle aria-controls="navbarScroll" />
     <Navbar.Collapse id="navbarScroll">
      <Nav
        className="me-auto my-2 my-lg-0"
        style={{ maxHeight: '100px' }}
        navbarScroll>
        <Link className="header-panel" to="/home">Home</Link>
        <Link className="header-panel" to="/options">Options</Link>
        <Link className="header-panel" to="/travel">Travel Guide</Link>
        <Link className="header-panel" to="/login">Login</Link>
      </Nav>
      <Form className="d-flex">
        <FormControl
          type="search"
          placeholder="Search your Tour"
          className="me-2"
          aria-label="Search"
        />
        <Button variant="outline-warning">Search</Button>
      </Form>
    </Navbar.Collapse>
  </Container>
</Navbar>
<Carosul></Carosul>
<Home></Home>
        </div>
    );
};

export default Header;