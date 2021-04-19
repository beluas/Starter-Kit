import React from "react";
import "./News.styles.scss";

const News = ({ date, title, imgUrl, delay }) => {
  return (
    <div data-aos-delay={delay} data-aos="zoom-out-up" className="news-box">
      <div className="img-box">
        <img src={imgUrl} alt="article-img" />
      </div>
      <h3>{date}</h3>
      <h2 className="news-title">{title}</h2>
      <p>Lorem ipsum, dolor sit amet consectetur adipisicing elit. </p>
    </div>
  );
};

export default News;
