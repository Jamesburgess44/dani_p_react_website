import React from "react";
import Typography from "@material-ui/core/Typography";
import HomeVideo from './../HomeVideo/homeVideo';

const Home = () => {

  return (
    <div style={{
      backgroundImage: "url(/daniPBackground.jpg)",
      position: "fixed",
      minWidth: "100%",
      minHeight: "100%",
      backgroundSize: "cover",
      backgroundPosition: "center",
       }}>
          <Typography variant="h3" component="h1">
              <HomeVideo />
          </Typography>
      </div>
  );
};

export default Home;