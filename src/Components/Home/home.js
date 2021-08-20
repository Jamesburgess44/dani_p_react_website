import React, { Component } from "react";
import "./home.css";
import ReactPlayer from "react-player";
import backgroundVideo from "./backgroundVideo.mp4";
import Box from "@material-ui/core/Box";
import Button from "@material-ui/core/Button";
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

const Home = () => {
  const classes = useStyles();

  return (
    <section className={classes.root}>
      <ReactPlayer
        url={backgroundVideo}
        playing
        loop
        muted
        width="100%"
        height="100%"
      />
      <div className={classes.overlay}>
        <Box
          height="100%"
          display="flex"
          flexDirection="column"
          justifyContent="center"
          alignItems="center"
          color="#fff"
        >
          <Typography variant="h3" component="h1" className={classes.title}>
            <div >Product Photographer Dani Paskevitch</div>
          </Typography>
          <Button color="primary" variant="contained">
            Explore Work
          </Button>
        </Box>
      </div>
    </section>
  );
};

export default Home;
