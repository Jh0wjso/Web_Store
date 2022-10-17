import React from "react";
import Container from "react-bootstrap/esm/Container";
import Nav from "react-bootstrap/esm/Nav";
import Navbar from "react-bootstrap/esm/Navbar";
import "./styles.css";

export default function Header() {
  return (
    <div className="content-header d-flex justify-content-start">
      <Navbar expand="lg" variant="dark">
        <Container className="d-flex flex-row align-items-center justify-content-between">
          <Navbar.Brand href="#">
            <h1>
              <strong>Nome</strong>
            </h1>
          </Navbar.Brand>
          <Navbar.Toggle aria-controls="responsive-navbar-nav" />
          <Navbar.Collapse id="responsive-navbar-nav">
            <Nav className="me-auto">
              <Nav.Link href="#feminino">Feminino</Nav.Link>
              <Nav.Link href="#man">Masculino</Nav.Link>
              <Nav.Link href="#beauty">Beleza</Nav.Link>
              <Nav.Link href="#">Sobre</Nav.Link>
              <Nav.Link href="#">Contato</Nav.Link>
            </Nav>
          </Navbar.Collapse>
        </Container>
      </Navbar>
    </div>
  );
}
