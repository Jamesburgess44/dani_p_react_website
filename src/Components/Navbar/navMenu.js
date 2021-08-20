import React, { Component } from "react";
import { Navbar, Nav, Container} from "react-bootstrap";
import { 
  BrowserRouter as Router,
    Switch,
    Route,
    Link 
} from 'react-router-dom';
import About from "../About/about";
import Contact from "../Home/Contact/contact";
import Home from "../Home/home";
import Galleries from "../Galleries/galleries";


export default class NavMenu extends Component {
  render() {
    return (
      <Router>
      <div>
        <Navbar bg="dark" variant={"dark"} expand="lg">
          <Container>
          <Navbar.Brand href="#home">Dani Paskevitch</Navbar.Brand>
            <Navbar.Toggle aria-controls="basic-navbar-nav" />
            <Navbar.Collapse id="basic-navbar-nav">
              <Nav className="me-auto">
                <Nav.Link as={Link} to={"/"}>Home</Nav.Link>
                <Nav.Link as={Link} to={"/galleries"}>Galleries</Nav.Link>
                <Nav.Link as={Link} to={"/contact"}>Contact</Nav.Link>
                <Nav.Link as={Link} to={"/about"}>About</Nav.Link>
              </Nav>
            </Navbar.Collapse>
          </Container>
        </Navbar>
      </div>
      <div>
        <Switch>
          <Route path="/about">
            <About />
          </Route>
          <Route path="/galleries">
            <Galleries />
          </Route>
          <Route path="/contact">
            <Contact />
          </Route>
          <Route path="/">
            <Home />
          </Route>
        </Switch>
      </div>
      </Router>
    );
  }
}