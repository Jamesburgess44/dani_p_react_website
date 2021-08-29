import React from "react";

const Contact = () => {
  return (
    <div style={{
      backgroundImage: "url(/daniPBackground.jpg)",
      position: "fixed",
      minWidth: "100%",
      minHeight: "100%",
      backgroundSize: "cover",
      backgroundPosition: "center",
       }}>
      <div className="container"
    style={{
        marginTop:"50px",
        width: '75%',
    }}>
        <br></br>
        <br></br>
        <br></br>
        <br></br>
        <div style={{
        margin: "25px 85px 75px 100px"
    }}>
          <h2>
            I live, love, and breathe business and creativity. I am constantly
            thinking of new and innovative ideas or looking at things in an
            inspired light. I am always up to date on the latest marketing
            techniques and scroll-stopping trends.
          </h2>
        </div>
      </div>
    </div>
  );
};

export default Contact;
