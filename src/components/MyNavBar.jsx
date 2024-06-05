import React, { useState } from 'react'
import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import NavDropdown from 'react-bootstrap/NavDropdown';
import { useNavigate } from 'react-router-dom';
import { useAuth } from '../context/AuthContext';
import { ButtonGroup, Dropdown, DropdownButton } from 'react-bootstrap';
import { DropDown } from './DropDown';

export const MyNavBar = () => {
  const auth = useAuth();
  const [tabs, setTabs] = useState([]);
  useState(() => {
    if (auth.isLoggedIn) {
      setTabs(["Home", "Profile", "Logout"]);
    } else {
      setTabs(["Home", "Login", "Register"]);
    }
  }, [])
  return (

    <Navbar expand="lg" className="bg-body-tertiary" bg="dark" data-bs-theme="dark">
      <Container>
        <Navbar.Brand href="#home">Learn Lib</Navbar.Brand>
        <Navbar.Toggle aria-controls="basic-navbar-nav" />
        <Navbar.Collapse id="basic-navbar-nav">

          <Nav className="ms-auto">
            {
              tabs.map((title, index) => <Nav.Item>
                <Nav.Link key={index} onClick={() => auth.navigate(`/${title.toLowerCase()}`)}>{title}</Nav.Link>
              </Nav.Item>)
            }
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
    // </Container>
  )
}
