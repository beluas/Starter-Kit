import React from "react";
import "./MyBtn.styles.scss";
import { applyClassOnHover } from "../../../util/fn.js";

const MyBtn = (props) => {
  return (
    <button
      onMouseEnter={(e) => {
        applyClassOnHover(`.${e.target.classList[0]}`, [
          "active",
          "active-follower",
        ]);
      }}
      className="myBtn"
      //data-content="Hi !"
      onClick={() => {
        //function normalizeCursor(){} to Create
        document.querySelector(".cursor").classList.remove("active");
        document
          .querySelector(".cursor-follower")
          .classList.remove("active-follower");
      }}
    >
      {props.children}
    </button>
  );
};

export default MyBtn;
