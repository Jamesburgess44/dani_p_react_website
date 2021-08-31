import React from "react";
import "./home.css";
import ReactPlayer from "react-player";
import backgroundVideo from "./backgroundVideo.mp4";
import Box from "@material-ui/core/Box";
import Button from "@material-ui/core/Button";
import Typography from "@material-ui/core/Typography";
import { makeStyles } from "@material-ui/core/styles";
import { Nav } from "react-bootstrap";
import { Link } from "react-router-dom";

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

const HomeVideo = () => {
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
          <div className="mt-2 mb-8">
        <p style={{
          fontSize: "8vw"
        }}>Dani Paskevitch</p>
        <p style={{
          fontSize: "2vw"
        }}>Product and Brand Photographer</p>
        </div>
        <br></br>
    <Nav.Link as={Link} to={"/product"}><Button color="primary" variant="contained">
            Explore Work
          </Button></Nav.Link>
          <br></br>
          <br></br>
          <p style={{
          fontSize: "1vw"
        }}>I work for brands to enhance their visual identity by creating converting content through creative strategy, styling, and design.</p>
        </Box>
      </div>
    </section>
  );
};

export default HomeVideo;