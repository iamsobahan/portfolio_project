import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import logo from '../assets/logo.png';
import { Button } from 'react-bootstrap';
import './Header.css';
import { NavLink } from 'react-router-dom';
import { useEffect, useState } from 'react';

function Header() {
  const [scrolled, setScrolled] = useState(false);

  const handleScroll = () => {
    const offset = window.scrollY;
    setScrolled(offset > 50);
  };

  useEffect(() => {
    window.addEventListener('scroll', handleScroll);
    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);

  return (
    <Navbar
      collapseOnSelect
      expand="lg"
      className={`navbar-custom ${scrolled ? 'scrolled' : ''}`}
      variant="dark"
    >
      <Container>
        <Navbar.Brand href="/">
          <img src={logo} alt="logo" className="logo" />
        </Navbar.Brand>
        <Navbar.Toggle aria-controls="responsive-navbar-nav" />
        <Navbar.Collapse id="responsive-navbar-nav">
          <Nav className="ms-auto align-items-center bg">
            <NavLink to="/" className="nav-link text-white me-4 fs-6">
              Home
            </NavLink>
            <NavLink to="/about" className="nav-link text-white me-4 fs-6">
              About Me
            </NavLink>
            <NavLink to="/skill" className="nav-link text-white me-4 fs-6">
              Skills
            </NavLink>
            <NavLink to="/project" className="nav-link text-white me-4 fs-6">
              Projects
            </NavLink>
            <NavLink to="/contact" className="nav-link text-white me-4 fs-6">
              Contact Me
            </NavLink>
            <a className='textDecoration' href="https://drive.google.com/file/d/1TMzOS1ofxPkK42y7Qn4EIa766Bs4OcH8/view?usp=sharing" target='_blank'>
              <Button
                variant="outline-danger"
                className="download-btn fs-6 mt-2 mt-lg-0"
              >
                DOWNLOAD CV
              </Button>
            </a>
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
}

export default Header;
