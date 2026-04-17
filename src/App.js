import React from 'react';
import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import { Navbar, Nav, Container, Button } from 'react-bootstrap';
import { BrowserRouter as Router, Routes, Route, Link, useLocation } from "react-router-dom";
import Home from './Component/Home';
import Api from './Component/Api';
import About from './Component/About';
import Services from './Component/Services';

function Navigation() {
  const location = useLocation();

  return (
    <Navbar collapseOnSelect expand="lg" variant="dark" className="glass fixed-top">
      <Container>
        <Navbar.Brand as={Link} to="/">
          <span className="text-gradient">Dilshada</span>webify
        </Navbar.Brand>
        <Navbar.Toggle aria-controls="responsive-navbar-nav" />
        <Navbar.Collapse id="responsive-navbar-nav">
          <Nav className="ms-auto align-items-center">
            <Nav.Link as={Link} to="/Home" className={location.pathname === '/Home' ? 'active' : ''}>Home</Nav.Link>
            <Nav.Link as={Link} to="/Api" className={location.pathname === '/Api' ? 'active' : ''}>All Users</Nav.Link>
            <Nav.Link as={Link} to="/About" className={location.pathname === '/About' ? 'active' : ''}>About</Nav.Link>
            <Nav.Link as={Link} to="/Services" className={location.pathname === '/Services' ? 'active' : ''}>Services</Nav.Link>
            <Button className="btn-premium ms-lg-3">Contact Me</Button>
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
}

function App() {
  return (
    <Router>
      <div className="App">
        <Navigation />
        <div className="main-content">
          <Routes>
            <Route exact path="/" element={<Home />} />
            <Route path="/Home" element={<Home />} />
            <Route path="/Api" element={<Api />} />
            <Route path="/About" element={<About />} />
            <Route path="/Services" element={<Services />} />
          </Routes>
        </div>
        <footer className="footer">
          <Container>
            <p>&copy; 2024 Muhammad Dilshad. Created with passion for the web.</p>
          </Container>
        </footer>
      </div>
    </Router>
  );
}

export default App;
