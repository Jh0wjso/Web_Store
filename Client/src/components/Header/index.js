import React from "react";
import Container from "react-bootstrap/esm/Container";
import Nav from "react-bootstrap/esm/Nav";
import Navbar from "react-bootstrap/esm/Navbar";

export default function Header(){
    return(
        <div
            className="d-flex justify-content-start"
            style={{backgroundColor: "#723ea2"}}
        >
            <Navbar expand="lg" variant="dark">
                <Container className="d-flex align-items-center">
                    <Navbar.Brand href="#">
                        <h1>
                            <strong>Nome</strong>
                        </h1>
                    </Navbar.Brand>
                    <Navbar.Toggle aria-controls="responsive-navbar-nav" />
                    <Navbar.Collapse id="responsive-navbar-nav">
                    <Nav className="me-auto">
                        <Nav.Link href="#">Feminino</Nav.Link>
                        <Nav.Link href="#">Masculino</Nav.Link>
                        <Nav.Link href="#">Beleza</Nav.Link>
                        <Nav.Link href="#">Contato</Nav.Link>
                        <Nav.Link href="#">Sobre</Nav.Link>
                    </Nav>
                    </Navbar.Collapse>
                </Container>
            </Navbar>
        </div>
    );
}