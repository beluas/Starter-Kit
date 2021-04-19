import React from "react";

import "./Services.styles.scss";

const Services = () => {
  return (
    <>
      <div className="service-box-container">
        <div className="service-box">
          <div className="tags">
            <p className="tag">Siti web</p>
            <p className="tag">E-Commerce</p>
            <p className="tag">Progettazione Web App </p>
            <p className="tag">Blog & Magazine</p>
            <p className="tag">Responsive design</p>
            <p className="tag">Restyling </p>
            <p className="tag">Ottimizzazione performance </p>
          </div>
        </div>
        {/* <div className="service-box">
          

          <div className="tags">
            <p className="tag">Campagne Ads</p>
            <p className="tag">Campagne Facebook </p>
            <p className="tag">Instagram </p>
            <p className="tag">HTML SEO </p>
            <p className="tag">Google Analytics </p>
            <p className="tag">Google Tag Manager </p>
          </div>
        </div> */}
      </div>
    </>
  );
};

export default Services;
