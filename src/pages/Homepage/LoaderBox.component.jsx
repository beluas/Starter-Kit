import React from "react";
import video from "../../assets/images/videoloader.mp4";
import "./LoaderBox.styles.scss";

export default function LoaderBox({ words }) {
  return (
    <div className="loader-box">
      <div className="temp">
        <video muted loop autoPlay src={video}></video>
      </div>
      <div className="first-block"></div>
      <div className="second-block"></div>
      <div className="loader">
        <ul>
          <li>{words[0]}</li>
          <li>{words[1]}</li>
          <li>{words[2]}</li>
          <li>{words[3]}</li>
          <li>{words[4]}</li>
          <li>{words[5]}</li>
          <li>{words[6]}</li>
          <li>{words[7]}</li>
        </ul>
      </div>
    </div>
  );
}
