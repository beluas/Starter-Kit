import React from "react";
import "./Project.styles.scss";
import { Link } from "react-router-dom";
import MyBtn from "../../components/UI/MyBtn/MyBtn.ui.component.jsx";

const Project = ({
  imgUrl,
  services,
  skills,
  inverted,
  skillsIcons,
  title,
  text,
  isService,
  history,
  url,
}) => {
  return (
    <div
      style={inverted ? { flexDirection: "row-reverse" } : null}
      className="project"
    >
      <div className="text">
        <h2>{title}</h2>
        <p>{text}</p>
        <div className="services-list">
          <ul className="services-ul">
            {services.map((service) => (
              <li className="skill" key={service.name}>
                {service.name}
                {service.icons.map((icon) => (
                  <img key={icon} width="24px" src={icon} alt={icon} />
                ))}
              </li>
            ))}
          </ul>

          <ul className="skills-ul">
            {skills.map((skill) => (
              <li className="skill" key={skill.name}>
                {skill.name}
                {skill.icons.map((icon) => (
                  <img key={icon} width="24px" src={icon} alt={icon} />
                ))}
              </li>
            ))}
          </ul>
        </div>
        <div className="skills">
          {skillsIcons.map((skillsIcon) => (
            <img key={skillsIcon} alt={skillsIcon} src={skillsIcon} />
          ))}
        </div>
        <div className="cta-btns">
          <Link
            to={isService ? "https://wa.me/+491525149255" : `/works/${url}`}
          >
            <MyBtn>
              {isService ? "Contattaci" : "Guarda in dettaglio il Progetto"}
            </MyBtn>
          </Link>
          {isService ? (
            <Link to="/works">
              <MyBtn>I nostri lavori</MyBtn>
            </Link>
          ) : null}
        </div>
      </div>
      <div
        onClick={() => history.push(`/${title.replace(" ", "")}`)}
        onKeyPress={() => {}}
        tabIndex="0"
        role="link"
        style={
          imgUrl.includes("ads")
            ? {
                backgroundImage: `url(${imgUrl}`,
                transform: "scale(.7)",
                backgroundColor: "white",
                marginBottom: "5rem",
              }
            : { backgroundImage: `url(${imgUrl}` }
        }
        className="image-wrapper"
      ></div>
    </div>
  );
};

export default Project;
