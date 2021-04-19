import React from "react";
import video from "../../assets/images/gif1.mp4";
import "./LoaderBox.styles.scss";

export default function LoaderBox() {
  return (
    <div className="loader-box">
      <div className="temp">
        <video muted loop autoPlay src={video}></video>
      </div>
      <div className="first-block"></div>
      <div className="second-block"></div>
      <div className="loader">
        <ul>
          <li>L</li>
          <li>O</li>
          <li>A</li>
          <li>D</li>
          <li>I</li>
          <li>N</li>
          <li>G</li>
        </ul>
      </div>
    </div>
  );
}
