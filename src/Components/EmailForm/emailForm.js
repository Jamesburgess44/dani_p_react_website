import React from 'react';
import emailjs from 'emailjs-com';


export default function EmailForm() {

  function sendEmail(e) {
    e.preventDefault();

    emailjs.sendForm('service_y3qhbw9', 'template_rg77w7u', e.target, 'user_kfNlnbqByB7DlHcb0UF26')
      .then((result) => {
          console.log(result.text);
      }, (error) => {
          console.log(error.text);
      });
  }

  return (
    <div className="container"
    style={{
        marginTop:"50px",
        width: '75%',
    }}
    >
    <form className="row" onSubmit={sendEmail}
    style={{
        margin: "25px 85px 75px 100px"
    }}
    >
    <h1 className="title mb-3">Ask Dani a Question</h1>
    <h5 className="title">Name</h5>
      <input type="text" name="name" className="form-control" />
      <h5 className="title">Email</h5>
      <input type="email" name="email" className="form-control"/>
      <h5 className="title">Subject</h5>
      <input type="text" name="subject" className="form-control"/>
      <h5 className="title">Message</h5>
      <textarea name="message" rows="4" className="form-control"/>
      <input type="submit" value="Send"
      className="form-control btn btn-dark" />
      <div>
        <br></br>
        <br></br>
              <h1>Contact Details</h1>
              <br></br>
              <h2>Email Address</h2>
              <h2>danipaskevitch@gmail.com</h2>
              <br></br>
              <h2>Phone Number</h2>
              <h2>(801)201-6799</h2>
              </div>
    </form>
    </div>
  );
}