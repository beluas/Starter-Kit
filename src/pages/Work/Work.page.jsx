import React from "react";
import "./Work.styles.scss";
//import { useParams } from "react-router-dom";
import img1 from "../../assets/images/work2_hero.jpg";
import react from "../../assets/images/react.png";
import sass from "../../assets/images/sass.png";
import analytics from "../../assets/images/analytics.png";

import showCase_1 from "../../assets/images/showCase_1.png";
import { TimelineMax } from "gsap";
import video from "../../assets/images/gif1.mp4";

class Work extends React.Component {
  constructor(props) {
    super(props);
    this.state = {};
  }

  //let { workId } = useParams();
  componentDidMount() {
    let tl1 = new TimelineMax();
    tl1
      .fromTo(
        ".work",
        1,
        { visibility: "hidden" },
        { x: 0, visibility: "visible", delay: 0.1 }
      )
      .to(".loader-box", 1, { zIndex: -1, delay: 0.1 })
      .to("body", 1, { overflow: "visible" });
  }

  render() {
    let { company, text, param } = this.props;
    return (
      <>
        <div className="loader-box">
          <div className="temp">
            {" "}
            <video muted loop autoPlay src={video}></video>{" "}
          </div>
          <div className="first-block"></div>
          <div className="second-block"></div>
          <div className="loader">
            <ul>
              <li>P</li>
              <li>R</li>
              <li>O</li>
              <li>J</li>
              <li>E</li>
              <li>C</li>
              <li>T</li>
            </ul>
          </div>
        </div>

        <div className="work">
          <div
            style={{
              backgroundImage: `url(${img1})`,
            }}
            className="hero"
          >
            <h5>Ivan Maddaluno{company}</h5>
            <h1>
              Lorem ipsum dolor sit, amet consectetur adipisicing elit. Deserunt
              assumenda, excepturi est doloremque ipsum incidunt.{text}
            </h1>
          </div>{" "}
          <div className="project-details">
            <div className="detail">
              <p className="title">Client</p>
              <p className="text">AM digital marketing</p>
            </div>
            <div className="detail">
              <p className="title">Completed</p>
              <p className="text">April 2021</p>
            </div>
            <div className="detail">
              <p className="title">Timeframe</p>
              <p className="text">1 Month</p>
            </div>
            <div className="detail">
              <p className="title">Website</p>
              <p className="text">AMinternetmarketing.com</p>
            </div>
          </div>
          {/* <div className="skills">
            <SkillBox skillText="Core Tech" imgUrl={react} />
            <SkillBox skillText="Styling" imgUrl={sass} />
            <SkillBox skillText="Marketing Tools" imgUrl={analytics} />
          </div> */}
          <div className="presentation">
            <div className="desc">
              <p>
                {
                  "L'idea alla base del progetto era quella di creare un portfolio lavoro con una grafica minimal che non distraesse i visitatori dalle informazioni importanti quali i contatti ed i progetti principali"
                }
              </p>
              <div className="skills">
                <img width="64" src={react} alt="react-logo" />
                <img width="64" src={sass} alt="sass-logo" />
                <img width="64" src={analytics} alt="analytics-logo" />
              </div>
            </div>
            <div className="services-used">
              <h4>Services</h4>
              <p>Custom Website</p>
              <p>Web Analytics</p>
              <p>Responsive</p>
            </div>
          </div>
          <div className="gallery">{<img src={showCase_1} alt="" />}</div>
        </div>
      </>
    );
  }
}

export default Work;
