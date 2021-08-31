import React from "react";
import { Link } from 'react-router-dom';
import { Nav, Button } from "react-bootstrap";

const Services = () => {
  return (
    <div
      style={{
        backgroundImage: "url(/daniPBackground.jpg)",
        minWidth: "100%",
        minHeight: "100%",
        backgroundSize: "cover",
        backgroundPosition: "center",
      }}
    >
      <div
        className="container"
        style={{
          width: "100%",
        }}
      >
        <br></br>
        <br></br>
        <div
          style={{
            margin: "5% 15% 0% 1%",
          }}
        >
          <img src="./daniPLogo.jpg" height="25%" width="25%"></img>
          <br></br>
          <br></br>
          <br></br>
          <h1>PHOTO SERVICES</h1>
          <br></br>
          <br></br>
          <br></br>
          <h1>Product Photography</h1>
          <br></br>
          <br></br>
          <h3>
            Communicate your product's story through creative and engaging
            photography! All photos are produced in my home studio using
            provided custom sets to capture the perfect vibe for your product.
            Photos are designed to be scroll-stopping and engaging content.
          </h3>
          <br></br>
          <br></br>
          <br></br>
          <h1>Branding Photography</h1>
          <br></br>
          <br></br>
          <h3>
            Your brand is your signature and communicating this can be tricky. I
            work with business to precisely capture brand personality
            photographically and create professional and marketable photos to
            emphasize what makes your brand special.
          </h3>
          <br></br>
          <br></br>
          <br></br>
          <br></br>
          <h3>
            Want a custom quote? Contact me here:{" "}
            <Nav.Link as={Link} to={"/contact"} ><button class="btn btn-dark" variant="contained">
            Contact Me
          </button></Nav.Link>
          </h3>
          <br></br>
          <br></br>
          <br></br>
          <br></br>
          <br></br>
          <br></br>
          <br></br>
          <br></br>
          <br></br>
        </div>
      </div>
    </div>
  );
};

export default Services;
