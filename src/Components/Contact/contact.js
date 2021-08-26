import React, { useState } from "react";
import Box from "@material-ui/core/Box";
import Typography from "@material-ui/core/Typography";
import { makeStyles } from "@material-ui/core/styles";
import axios from "axios";
import { toast, ToastContainer } from "react-toastify";
import { Container, Row, Col, Button, Form } from "react-bootstrap";
import EmailForm from "../EmailForm/emailForm";

const useStyles = makeStyles((theme) => ({
  root: {
    width: "100%",
    height: "85%",
    position: "relative",
    "& video": {
      objectFit: "cover",
    },
  },
  overlay: {
    position: "absolute",
    top: 0,
    left: 0,
    width: "100%",
    height: "100%",
    backgroundColor: "rgba(0, 0, 0, 0.5)",
  },
  title: {
    paddingBottom: theme.spacing(4),
  },
}));

const Contact = () => {
  const classes = useStyles();

  const initialInput = {
    Name: "",
    Email: "",
    Subject: "",
    Message: "",
  };
  const [eachEntry, setEachEntry] = useState(initialInput);
  const [nameError, setNameError] = useState({});
  const [emailError, setEmailError] = useState({});

  const FormValidation = () => {
    const nameError = {};
    const emailError = {};
    let isValid = true;
    if (eachEntry.Name.trim().length === 0) {
      nameError.productNameEmpty = "Name is required";
      isValid = false;
    }
    if (eachEntry.Email.trim().length === 0) {
      emailError.descriptionEmpty = "Email is required";
      isValid = false;
    }
    setNameError(nameError);
    setEmailError(emailError);
    return isValid;
  };
  const handleChange = (event) => {
    setEachEntry({ ...eachEntry, [event.target.name]: event.target.value });
  };
  const handleSubmit = (event) => {
    event.preventDefault();
    submitMessage();
  };

  const submitMessage = async () => {
    let messageData = eachEntry;
    const isValid = FormValidation();
    if (isValid) {
      await axios
        .post("https://localhost:44394/api/pictures", messageData)
        .then((res) => {
          if (res.data.length !== 0) {
            setEachEntry(initialInput);
            console.log(messageData);
            toast.success("Message was sent successfully");
          }
        })
        .catch((error) => {
          if (error) {
            toast.error("Message was unable to be sent succesfully");
          }
        });
    }
  };

  return (
    <section className={classes.root}>
      <img src="/images/background.webp" height="100%" width="100%" />
      <div className={classes.overlay}>
        <Box
          height="100%"
          display="flex"
          flexDirection="column"
          justifyContent="top"
          alignItems="center"
          color="#fff"
        >
          <EmailForm />
          {/* <React.Fragment>
            <Container>
              <Row>
                <Col lg={8}>
                  <h1 className="title mb-3">Ask Dani a Question</h1>
                  <ToastContainer />
                </Col>
                <Col lg={4}></Col>
              </Row>
            </Container>
            <Container>
              <Row>
                <Col lg={4}></Col>
                <Col lg={4}>
                  <Form onSubmit={handleSubmit}>
                    <div>
                      <h5 className="title">Name</h5>
                      <input
                        className=" form-control"
                        value={eachEntry.Name}
                        onChange={handleChange}
                        name="Name"
                        placeholder="Name..."
                      ></input>
                      {Object.keys(nameError).map((key) => {
                        return (
                          <div style={{ color: "yellow" }}>
                            {nameError[key]}{" "}
                          </div>
                        );
                      })}
                    </div>
                    <div>
                      <h5 className="title">Email</h5>
                      <input
                        className=" form-control"
                        value={eachEntry.Email}
                        onChange={handleChange}
                        name="Email"
                        placeholder="Email..."
                      ></input>
                      {Object.keys(emailError).map((key) => {
                        return (
                          <div style={{ color: "yellow" }}>
                            {emailError[key]}{" "}
                          </div>
                        );
                      })}
                    </div>
                    <div>
                      <h5 className="title">Subject</h5>
                      <input
                        className=" form-control"
                        value={eachEntry.Subject}
                        onChange={handleChange}
                        name="Subject"
                        placeholder="Subject..."
                      ></input>
                      {Object.keys(emailError).map((key) => {
                        return (
                          <div style={{ color: "yellow" }}>
                            {emailError[key]}{" "}
                          </div>
                        );
                      })}
                    </div>
                    <div>
                      <Form.Group
                        className="mb-3"
                      >
                        <h5 className="title"> Message</h5>
                        <Form.Control as="textarea" rows={4}
                        value={eachEntry.Message}
                        onChange={handleChange}
                        name="Message"
                        placeholder="Message..."
                         />
                      </Form.Group>
                    </div>
                    <Button
                      style={{
                        backgroundColor: "black",
                        borderColor: "crimson",
                      }}
                      className="mt-2 mb-2"
                      type="submit"
                    >
                      Send Message
                    </Button>
                  </Form>
                </Col>
                <Col sm={4}></Col>
              </Row>
            </Container>
          </React.Fragment> */}
            <div className="container"
    style={{
        marginTop:"50px",
        width: '75%',
    }}>
      <div style={{
        margin: "25px 85px 75px 100px"
    }}>
              <h1>Contact Details</h1>
              <br></br>
              <h2>Email Address</h2>
              <h2>danipaskevitch@gmail.com</h2>
              <br></br>
              <h2>Phone Number</h2>
              <h2>(801)201-6799</h2>
              </div>
            </div>
        </Box>
      </div>
    </section>
  );
};

export default Contact;
