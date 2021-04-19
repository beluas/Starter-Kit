import React from "react";
import "./SkillBox.styles.scss";

const SkillBox = ({ imgUrl, skillText }) => {
  return (
    <div className="skill-box">
      <h2>{skillText}</h2>
      <div className="img">
        <img src={imgUrl} alt="skill" />
      </div>
    </div>
  );
};

export default SkillBox;
