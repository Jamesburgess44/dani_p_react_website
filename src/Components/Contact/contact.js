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
