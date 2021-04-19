import React from "react";
import MyBtn from "../UI/MyBtn/MyBtn.ui.component.jsx";
import "./SectionBox.styles.scss";
import Services from "../Services/Services.component.jsx";

const SectionBox = ({ imgUrl, title, handleClick }) => {
  return (
    <div className="wrapper-section-box">
      <div
        className="img-zoom-container"
        role="link"
        tabIndex={0}
        onKeyPress={() => {}}
        onClick={handleClick}
      >
        <div
          style={{
            background: `url(${imgUrl})`,
            backgroundSize: "cover",
            backgroundPosition: "center center",
          }}
          className="section-box"
        ></div>
        <h2>{title}</h2>

        <MyBtn>I nostri lavori</MyBtn>
      </div>
      <Services />
    </div>
  );
};

export default SectionBox;
