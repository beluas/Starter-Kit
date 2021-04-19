import Aos from "aos";
import React from "react";
import "./Projectbox.styles.scss";
import "aos/dist/aos.css";
class ProjectBox extends React.Component {
  componentDidMount() {
    Aos.init({
      //duration: 1000,
    });
    Aos.refresh();
  }

  componentDidUpdate() {}
  render() {
    return (
      <article
        data-aos-duration={this.props.animation ? "2000" : ""}
        data-aos={this.props.animation ? "face-up" : ""}
        className={`project-box ${
          this.props.animation ? "aos-init aos-animate" : ""
        }`}
      >
        <div
          className="img-container"
          style={{ maxHeight: this.props.maxHeight }}
        >
          <img src={this.props.imgUrl} alt="img" />
        </div>
        <div className="project-text">
          <h2>{this.props.title}</h2>

          <h3>{this.props.company}</h3>
        </div>
      </article>
    );
  }
}

export default ProjectBox;
