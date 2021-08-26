import React, { Component } from "react";
import { Navbar, Nav, Container} from "react-bootstrap";
import { 
  BrowserRouter as Router,
    Switch,
    Route,
    Link 
} from 'react-router-dom';
import About from "../About/about";
import Contact from "../Contact/contact";
import Home from "../Home/home";
import Galleries from "../Galleries/galleries";
import Services from "../Services/services";
import Upload from "../Upload/upload";


export default class NavMenu extends Component {
  render() {
    return (
      <Router >
        <Navbar bg="dark" variant={"dark"} expand="lg">
          <Container>
          <Navbar.Brand href="/">Dani Paskevitch</Navbar.Brand>
            <Navbar.Toggle aria-controls="basic-navbar-nav" />
            <Navbar.Collapse id="basic-navbar-nav">
              <Nav className="me-auto">
                <Nav.Link as={Link} to={"/about"}>About</Nav.Link>
                <Nav.Link as={Link} to={"/galleries"}>Galleries</Nav.Link>
                <Nav.Link as={Link} to={"/services"}>Services</Nav.Link>
                <Nav.Link as={Link} to={"/contact"}>Contact</Nav.Link>
              </Nav>
            </Navbar.Collapse>
          </Container>
        </Navbar>
      <div>
        <Switch>
        <Route path="/services">
            <Services />
          </Route>
          <Route path="/about">
            <About />
          </Route>
          <Route path="/galleries">
            <Galleries />
          </Route>
          <Route path="/contact">
            <Contact />
          </Route>
          <Route path="/" exact>
            <Home />
          </Route>
          <Route path="/upload">
            <Upload />
          </Route>
        </Switch>
      </div>
      </Router>
    );
  }
}
