import React from "react";
import { Button, Nav } from "react-bootstrap";
import { Link } from "react-router-dom";

const Contact = () => {
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
          <h1>Do you have photo needs? Well I have photo solutions.</h1>
          <br></br>
          <br></br>
          <br></br>
          <h3>
            Hi, I’m Dani! Anyone can take pictures of your product - I take and
            produce photos that make people stop scrolling and start clicking.
            The demand for digital content can be really overwhelming, but I’m
            here to make things easy the busy business owner by offering custom
            and curated content for brands who want to take their image to the
            next level.
          </h3>
          <br></br>
          <br></br>
          <br></br>
          <h3>
            Photography is a very important part of my life. I’ve always had a
            strong interest in different types of business and enjoy helping
            small and local businesses whenever possible. With my passion being
            in business growth, I apply my formal education and experience in
            business, marketing, and advertising into each and every photo I
            select to meet the eyes of your customer. I pride myself in my
            ability to communicate and understand the needs of the business I am
            working with and capture images that not only highlights the
            strengths of the company I’m working with, but takes it to the next
            level by elevating the brand tone.
          </h3>
          <br></br>
          <br></br>
          <br></br>
          <h3>
            I live, love, and breathe business and creative. I am constantly
            thinking of new and innovative ideas or looking at things in an
            inspired light. I am always up to date on the latest marketing
            techniques and scroll-stopping trends. Quality is the most important
            part of an image that catches the attention of your valuable
            customers, so I spend my time and energy to build photos that
            matter.
          </h3>
          <br></br>
          <br></br>
          <br></br>
          <h3>Want to chat about your brand? Contact me here: <Button as={Link} to={"/contact"} class="btn btn-dark" >Contact Me</Button>
          </h3>
          <br></br>
          <br></br>
        </div>
      </div>
    </div>
  );
};

export default Contact;
