import React from "react";

import "./Services.styles.scss";

const Services = ({ tags }) => {
  return (
    <>
      <div className="service-box-container">
        <div className="service-box">
          <div className="tags">
            {tags.map((tag) => (
              <p key={tag} className="tag">
                {tag}
              </p>
            ))}
          </div>
        </div>
      </div>
    </>
  );
};

export default Services;
