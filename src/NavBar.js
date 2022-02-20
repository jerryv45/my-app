import React, { Component } from "react";
import { Navbar, Nav, Form, FormControl, Button } from "react-bootstrap";
import { Routes, Route, Link } from "react-router-dom";
import Home from "./Home";
import About from "./About";
import Contact from "./Contact";
// import "./stylesheets/NavBar.css";

class NavBar extends Component {
  state = {};
  render() {
    return (
      <div>
        <div id="bar">
          <Navbar bg="light" variant="light">
            <Navbar.Brand as={Link} to="/">
              CALC-U
            </Navbar.Brand>
            <Nav className="ml-auto">
              <Nav.Link as={Link} to="/">
                Home
              </Nav.Link>
              <Nav.Link as={Link} to="/about">
                About
              </Nav.Link>
              <Nav.Link as={Link} to="/about/contact">
                Contact
              </Nav.Link>
            </Nav>
          </Navbar>
        </div>
        <div>
          <Routes>
            <Route exact path="/" component={Home} />
            <Route path="/about/contact" component={Contact} />
            <Route path="/about" component={About} />
          </Routes>
        </div>
      </div>
    );
  }
}

export default NavBar;
