import React, { Component } from "react";
import "./home.css";
import ReactPlayer from "react-player";
import backgroundVideo from './backgroundVideo.mp4'

export default class Home extends Component {
  render() {
    return (
      <div>
        <ReactPlayer
          url={backgroundVideo}
          playing
          loop
          muted
          width="100%"
          height="100%"
        />
        <h1>Home</h1>
      </div>
    );
  }
}
