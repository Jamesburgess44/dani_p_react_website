import React from "react";
import Typography from "@material-ui/core/Typography";
import HomeVideo from './../HomeVideo/homeVideo';

const Home = () => {

  return (
    <div>
          <Typography variant="h3" component="h1">
              <HomeVideo />
          </Typography>
      </div>
  );
};

export default Home;