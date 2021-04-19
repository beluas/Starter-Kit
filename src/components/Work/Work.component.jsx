import React from "react";
import "./Work.styles.scss";
import { Link } from "react-router-dom";

const Work = ({ imgUrl, big, title, company, url }) => {
  return (
    <Link
      style={big ? { flexBasis: "45%" } : { flexBasis: "33%" }}
      className="work-project"
      to={`works/${url}`}
    >
      <div>
        <div className="wrapper-img">
          <div
            style={{ backgroundImage: `url(${imgUrl})` }}
            className="image"
          ></div>
        </div>

        <div className="desc">
          <h3>{title}</h3>
          <h4>{company}</h4>
        </div>
      </div>
    </Link>
  );
};

export default Work;
