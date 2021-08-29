import React from "react";
import Box from "@material-ui/core/Box";
import { makeStyles } from "@material-ui/core/styles";
import Gallery from "react-photo-gallery";
import { HospitalityPhotos } from "./hospitalityPhotos";

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

const Hospitality = () => {
  const classes = useStyles();
  return (
    <section className={classes.root}>
        <img src="/images/background.webp" 
        height= "100%"
        width= "100%"
        />
      <div className={classes.overlay}>
      <Gallery photos={HospitalityPhotos} direction={"column"} />
        <Box
          height="100%"
          display="flex"
          flexDirection="column"
          justifyContent="top"
          alignItems="center"
          color="#fff"
        >
        </Box>
      </div>
    </section>
  );
};

export default Hospitality;