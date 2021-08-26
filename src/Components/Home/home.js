import React from "react";
import Box from "@material-ui/core/Box";
import Typography from "@material-ui/core/Typography";
import { makeStyles } from "@material-ui/core/styles";
import HomeVideo from './../HomeVideo/homeVideo';

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
        <img src="/images/background.webp" 
        height= "flex"
        width= "100%"
        />
      <div className={classes.overlay}>
        <Box
          width="auto"
          flexDirection="row"
          justifyContent="top"
          alignItems="center"
          color="#fff"
        >
          <Typography variant="h3" component="h1" className={classes.title}>
              <HomeVideo />
          </Typography>
        </Box>
      </div>
    </section>
  );
};

export default Home;