import React from "react";
import EmailForm from "../EmailForm/emailForm";

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
       <EmailForm />
       </div>
  );
  }
export default Contact;
