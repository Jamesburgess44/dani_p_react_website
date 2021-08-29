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
import Product from "../Galleries/product";
import Services from "../Services/services";
import Upload from "../Upload/upload";
import Branding from "../Galleries/branding";
import Hospitality from "../Galleries/hospitality";


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
                <Nav.Link as={Link} to={"/product"}>Product</Nav.Link>
                <Nav.Link as={Link} to={"/branding"}>Branding</Nav.Link>
                <Nav.Link as={Link} to={"/hospitality"}>Hospitality</Nav.Link>
                <Nav.Link as={Link} to={"/services"}>Services</Nav.Link>
                <Nav.Link as={Link} to={"/contact"}>Contact</Nav.Link>
              </Nav>
            </Navbar.Collapse>
          </Container>
        </Navbar>
        <div > 
        <Switch>
        <Route path="/services">
            <Services />
          </Route>
          <Route path="/about">
            <About />
          </Route>
          <Route path="/product">
            <Product />
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
          <Route path="/branding">
            <Branding />
          </Route>
          <Route path="/hospitality">
            <Hospitality />
          </Route>
        </Switch>
      </div>
      </Router>
    );
  }
}
