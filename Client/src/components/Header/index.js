import React from "react";
import Container from "react-bootstrap/esm/Container";
import Nav from "react-bootstrap/esm/Nav";
import Navbar from "react-bootstrap/esm/Navbar";

export default function Header(){
    return(
        <div>
            <Navbar collapseOnSelect expand="lg" bg="#383737" variant="dark">
                <Container className="d-flex justify-content-between align-items-center">
                    <Navbar.Brand href="App.js">
                    <h1>Stylos</h1>
                    </Navbar.Brand>
                    <Navbar.Toggle aria-controls="responsive-navbar-nav" />
                    <Navbar.Collapse id="responsive-navbar-nav">
                    <Nav className="me-auto">
                        <Nav.Link href="#">Feminino</Nav.Link>
                        <Nav.Link href="#">Masculino</Nav.Link>
                        <Nav.Link href="#">Perfumes</Nav.Link>
                        <Nav.Link href="#">Contato</Nav.Link>
                    </Nav>
                    </Navbar.Collapse>
                </Container>
            </Navbar>
        </div>
    );
}