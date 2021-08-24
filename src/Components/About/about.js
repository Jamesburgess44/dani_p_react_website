import React from "react";
import Box from "@material-ui/core/Box";
import Typography from "@material-ui/core/Typography";
import { makeStyles } from "@material-ui/core/styles";

const useStyles = makeStyles((theme) => ({
  root: {
    width: "100%",
    height: "85%",
    position: "relative", "& video": {
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
        <img src="/images/background.webp" 
        height= "100%"
        width= "100%"
        />
      <div className={classes.overlay}>
        <Box
          height="100%"
          display="flex"
          flexDirection="column"
          justifyContent="top"
          alignItems="center"
          color="#fff"
          marginLeft="10%"
          marginRight="10%"
        >
          <Typography variant="h3" component="h1" className={classes.title}>
              <br></br>
              <br></br>
              <br></br>
              <br></br>
              <div>
              <h2>
          I live, love, and breathe business and creativity. I am constantly
          thinking of new and innovative ideas or looking at things in an
          inspired light. I am always up to date on the latest marketing
          techniques and scroll-stopping trends.
        </h2>
            </div>
          </Typography>
        </Box>
      </div>
    </section>
  );
};

export default Contact;