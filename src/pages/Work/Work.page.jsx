import React, { Suspense } from "react";
import "./Work.styles.scss";
//import { useParams } from "react-router-dom";
import img1 from "../../assets/images/work2_hero.jpg";

import { TimelineMax } from "gsap";
import video from "../../assets/images/gif1.mp4";
import LoaderBox from "../Homepage/LoaderBox.component.jsx";
import { minimalPortfolio } from "./work.data.js";
import { Link } from "react-router-dom";
class Work extends React.Component {
  state = {
    isMobile: false,
    work: [],
    summary: [],
    icons: [],
    services: [],
  };

  componentDidMount() {
    if (screen.width < 768) {
      this.setState({ isMobile: true }, () => {
        document.querySelector("body").style.overflow = "auto";
      });
    } else {
      this.setState({ isMobile: false }, () => {
        import("../Homepage/Animations.js").then((animations) =>
          animations.loaderAnimationWork()
        );
      });
    }

    if (this.props.match.params.workId === "minimal-portfolio-im") {
      this.setState({ work: minimalPortfolio });
      this.setState({ summary: minimalPortfolio.summary });
      this.setState({ services: minimalPortfolio.services });
      this.setState({ icons: minimalPortfolio.icons });
    }
  }

  render() {
    let { title, text, showCaseImgUrl } = this.state.work;
    let { client, completed, website } = this.state.summary;

    return (
      <Suspense fallback={<h1>Loading</h1>}>
        {!this.state.isMobile ? null : null}

        <div className="work">
          <div
            style={{
              backgroundImage: `url(${img1})`,
            }}
            className="hero"
          >
            <h1>{title}</h1>
          </div>
          <div className="project-details">
            <div className="detail">
              <p className="title">Client</p>
              <p className="text">{client}</p>
            </div>
            <div className="detail">
              <p className="title">Completato</p>
              <p className="text">{completed}</p>
            </div>

            <div className="detail">
              <p className="title">Website</p>
              <p className="text">
                <Link to={website}>{website}</Link>
              </p>
            </div>
          </div>

          <div className="presentation">
            <div className="desc">
              <p>{text}</p>
              <div className="skills">
                {this.state.icons.map((skill) => (
                  <img key={skill} width="64" src={skill} alt="skill-icon" />
                ))}
              </div>
            </div>
            <div className="services-used">
              <h4>Services</h4>
              {this.state.services.map((service) => (
                <p key={service}>{service}</p>
              ))}
            </div>
          </div>
          <div className="gallery">
            {<img src={showCaseImgUrl} alt={title} />}
          </div>
        </div>
      </Suspense>
    );
  }
}

export default Work;
