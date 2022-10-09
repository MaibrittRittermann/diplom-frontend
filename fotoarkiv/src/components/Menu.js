import React from "react";
import { Container, Navbar, Nav, NavDropdown } from "react-bootstrap";
import {LinkContainer} from 'react-router-bootstrap';

const Menu = ({user}) => {
  
    return (
      <Navbar expand="lg" bg="white" variant="light">
        <Container>
          <Navbar.Brand href="#home">
            <img src="logo.png" id="logo" alt="Logo" height="60px" />
          </Navbar.Brand>
          <Navbar.Toggle aria-controls="basic-navbar-nav" />
          <Navbar.Collapse id="basic-navbar-nav">
            <Nav className="ms-auto">
              <LinkContainer to="/">                
                <Nav.Link>Forsiden</Nav.Link>
              </LinkContainer>
              {user && <LinkContainer to="/search">
                  <Nav.Link>Søg fotos</Nav.Link>
                </LinkContainer>
              }
              {user && <LinkContainer to="/upload">
                  <Nav.Link>Upload</Nav.Link>
                </LinkContainer>
              }
              <NavDropdown title="Konto" id="basic-nav-dropdown">
                {!user && <NavDropdown.Item href="/login">Login</NavDropdown.Item>}
                {user && <NavDropdown.Item href="/logout">Logout</NavDropdown.Item>}
                {user && user.isAdmin && <NavDropdown.Item href="/users">Brugere</NavDropdown.Item>}
                
                
              </NavDropdown>
            </Nav>
          </Navbar.Collapse>
        </Container>
      </Navbar>
    );
  }


export default Menu;