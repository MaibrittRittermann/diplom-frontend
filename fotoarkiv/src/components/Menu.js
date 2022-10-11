import React from "react";
import { Container, Navbar, Nav } from "react-bootstrap";
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
              
              {user && <LinkContainer to="/upload">
                  <Nav.Link>Upload</Nav.Link>
                </LinkContainer>
              }

              {!user && <LinkContainer to="/login">
                  <Nav.Link>Login</Nav.Link>
                </LinkContainer>
              }

              {user && <LinkContainer to="/logout">
                  <Nav.Link>Logout</Nav.Link>
                </LinkContainer>
              }

              {user && user.isAdmin && <LinkContainer to="/users">
                  <Nav.Link>Brugere</Nav.Link>
                </LinkContainer>
              }
              
            </Nav>
          </Navbar.Collapse>
        </Container>
      </Navbar>
    );
  }


export default Menu;