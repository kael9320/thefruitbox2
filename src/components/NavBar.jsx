import logo from "../logo.png";
import React from 'react';
import { Button, Container, Navbar, Nav, Form, FormControl } from "react-bootstrap";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

const NavBar = () => {
    return (
        <Navbar bg="dark" expand="lg" variant="dark">
          <Container>
            <Navbar.Brand href="#"><img src={logo} className="img-fluid" alt="logo" /></Navbar.Brand>
            <Navbar.Toggle aria-controls="navbarScroll" />
            <Navbar.Collapse id="navbarScroll">
              <Nav
                className="me-auto my-2 my-lg-0"
                style={{ maxHeight: "100px" }}
                navbarScroll
              >
                <Nav.Link href="#">Promociones</Nav.Link>
                <Nav.Link href="#">Tienda</Nav.Link>
                <Nav.Link href="#">Nosotros</Nav.Link>
                <Nav.Link href="#">Contacto</Nav.Link>
              </Nav>
              <Form className="d-flex">
                <FormControl
                  type="search"
                  placeholder="Nombre del producto"
                  className="form-header"
                  aria-label="Search"
                />
                <FontAwesomeIcon icon={["far", "coffee"]} />
                <Button variant="outline-success">Buscar</Button>
              </Form>
            </Navbar.Collapse>
          </Container>
        </Navbar>
    );
}
 
export default NavBar;