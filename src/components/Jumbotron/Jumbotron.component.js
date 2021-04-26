import React, { useEffect } from "react";
import MyBtn from "../UI/MyBtn/MyBtn.ui.component.jsx";
import "./Jumbotron.styles.scss";
import { applyClassOnHover } from "../../util/fn.js";

const Jumbotron = () => {
  useEffect(() => {
    applyClassOnHover(".jumbotron", ["inverted", "inverted-follower"]);

    // return () => {
    //   cleanup
    // }
  }, []);

  return (
    <div
      style={
        window.location.href.includes("works") && screen.width < 867
          ? { marginTop: "10em" }
          : null
      }
      className="jumbotron"
    >
      <h2>Richiedi informazioni senza impegno</h2>
      <a href="https://wa.me/+4915251492559">
        <MyBtn>Contattaci</MyBtn>
      </a>
    </div>
  );
};

export default Jumbotron;
