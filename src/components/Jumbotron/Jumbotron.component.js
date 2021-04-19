import React from "react";
import MyBtn from "../UI/MyBtn/MyBtn.ui.component.jsx";
import "./Jumbotron.styles.scss";

const Jumbotron = () => {
  return (
    <div className="jumbotron">
      <h2>We would love to build something amazing together!</h2>
      <MyBtn> Contattaci </MyBtn>
    </div>
  );
};

export default Jumbotron;
