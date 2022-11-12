import React from "react";
import Container from "react-bootstrap/esm/Container";
import Nav from "react-bootstrap/esm/Nav";
import Navbar from "react-bootstrap/esm/Navbar";
import "./styles.css";

export default function Header() {
  return (
    <Navbar
      expand="lg"
      className="content-header"
      variant="dark"
      style={{ backgroundColor: "transparent" }}
    >
      <Container className="d-flex flex-row justify-content-between">
        <Navbar.Brand className="justify-content-start">
          <h1>
            <strong className="nameStore">Stylos</strong>
          </h1>
        </Navbar.Brand>
        <Navbar.Toggle aria-controls="responsive-navbar-nav" className="justify-content-end" />
        <Navbar.Collapse id="responsive-navbar-nav" className="justify-content-end">
          <Nav className="me-auto">
            <Nav.Link href="#feminino">Feminino</Nav.Link>
            <Nav.Link href="#shoes">Sapatos</Nav.Link>
            <Nav.Link href="#man">Masculino</Nav.Link>
            <Nav.Link href="#beauty">Beleza</Nav.Link>
            <Nav.Link href="#about">Sobre</Nav.Link>
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
}
