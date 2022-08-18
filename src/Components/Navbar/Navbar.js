import React from "react";
import { Navbar, Nav, Container } from "react-bootstrap";
import "./Navbar.scss";
import useScrollPosition from "../../Hooks/useScrollPosition";
const AppBar = ({ home, skills, work }) => {
  const scrollPosition = useScrollPosition();
  const scrollToSection = (elementRef) => {
    window.scrollTo({
      top: elementRef.current.offsetTop,
      behavior: "smooth",
    });
  };
  return (
    <Navbar
      expand="lg"
      className={scrollPosition > 90 && "navbar_shadow"}
      fixed="top"
    >
      <Container>
        <Navbar.Brand href="#home">
          KR<span>RS</span>
        </Navbar.Brand>
        <Navbar.Toggle aria-controls="basic-navbar-nav" />
        <Navbar.Collapse id="basic-navbar-nav">
          <Nav className="ml-auto">
            <Nav.Link onClick={() => scrollToSection(home)}>Home</Nav.Link>
            <Nav.Link onClick={() => scrollToSection(skills)}>Skills</Nav.Link>
            <Nav.Link onClick={() => scrollToSection(work)}>Work</Nav.Link>
            <Nav.Link target="_blank" href="https://wa.me/8074076155">
              Contact
            </Nav.Link>
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
};

export default AppBar;
