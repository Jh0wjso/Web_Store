import React from 'react';
import './App.css';

import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';

function App() {
  return (

    <div className="MainContent h-100">
      <div className='d-flex justify-content-center w-screen container'>
        <Navbar collapseOnSelect expand="lg" bg="#383737" variant="dark">
          <Container>
            <Navbar.Brand href="App.js">Stylos</Navbar.Brand>
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
    </div>
  );
}

export default App;
