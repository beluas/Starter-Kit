import React from "react";
import "./MyBtn.styles.scss";
import arrow from "../../../assets/icons/arrow-top-right.png";

const MyBtn = (props) => {
  return (
    <button className="myBtn">
      {props.children}
      <img src={arrow} alt="arrow-top-right" />
    </button>
  );
};

export default MyBtn;
