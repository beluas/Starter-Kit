import React from "react";
import { Link } from "react-router-dom";
import MyBtn from "../UI/MyBtn/MyBtn.ui.component.jsx";
import "./ProjectTab.styles.scss";
import { Parallax, Background } from "react-parallax";

const ProjectTab = ({ imgUrl, title, company, desc, reverse, category }) => {
  return (
    <div
      style={reverse ? { flexDirection: "row-reverse" } : {}}
      className="project-tab"
    >
      <Parallax strength={-200}>
        <Background className="img-bg-size">
          <img src={imgUrl} alt="" />
        </Background>
      </Parallax>

      <div
        style={reverse ? { marginLeft: 0, marginRight: "10em" } : {}}
        className="text"
      >
        <h4>{category}</h4>
        <h1>{title}</h1>
        <h3>{company}</h3>
        <p>{desc} </p>
        <Link className="bottom-link" to="/">
          <MyBtn>Esplora</MyBtn>
        </Link>
      </div>

      {/* <div
        style={{
          backgroundImage: `url(${imgUrl})`,
          backgroundPosition: "center",
          backgroundSize: "cover",
        }}
        className="img"
      ></div>
      <div className="text">
        <h4>{category}</h4>
        <h1>{title}</h1>
        <h3>{company}</h3>
        <p>{desc} </p>
        <Link className="bottom-link" to="/">
          <MyBtn>Esplora</MyBtn>
        </Link>
      </div> */}
    </div>
  );
};

export default ProjectTab;
