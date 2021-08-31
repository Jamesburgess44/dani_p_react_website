import React from 'react';
import emailjs from 'emailjs-com';


export default function MailerForm() {

  function sendEmail(e) {
    e.preventDefault();

    emailjs.sendForm('service_y3qhbw9', 'template_nighy6c', e.target, 'user_kfNlnbqByB7DlHcb0UF26')
      .then((result) => {
          console.log(result.text);
      }, (error) => {
          console.log(error.text);
      });
  }

  return (
    <div className="center"
    style={{
        marginTop:"50px",
        width: '100%',
    }}
    >
    <form className="row" onSubmit={sendEmail}
    style={{
        margin: "5% 15% 0% 1%"
    }}
    >
    <h1 className="title mb-3">Join Monthly Mailer To Stay Up To Date!</h1>
    <br></br>
    <br></br>
    <h5 className="title">Name</h5>
      <input type="text" name="name" className="form-control" />
      <br></br>
      <h5 className="title">Email</h5>
      <input type="email" name="email" className="form-control"/>
      <br></br>
      <input type="submit" value="Send"
      className="form-control btn btn-dark" />
    </form>
    <br></br>
    <br></br>
    <br></br>
    </div>
  );
}