import React from "react";
import "./Projects.styles.scss";
import ProjectTab from "../../components/ProjectTab/ProjectTab.component.jsx";
import img from "../../assets/images/section1.jpg";
import img2 from "../../assets/images/section2.jpg";

const Projects = () => {
  return (
    <>
      <div className="titles">
        <h1>Websites - Le nostre creazioni</h1>
        <p>
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Incidunt
          nostrum quos.
        </p>
      </div>
      <div className="project-page">
        <ProjectTab
          imgUrl={img}
          title="Rowds"
          company="Three inc"
          desc="Lorem, ipsum dolor sit amet consectetur adipisicing elit."
          category="Website"
        />

        <ProjectTab
          imgUrl={img2}
          title="E-commerce for U"
          company="Three inc"
          desc="Lorem, ipsum dolor sit amet consectetur adipisicing elit."
          reverse
          category="E-commerce"
        />

        <ProjectTab
          imgUrl={img}
          title="Digital Marketing"
          company="Three inc"
          desc="Lorem, ipsum dolor sit amet consectetur adipisicing elit."
          category="Web Analytics"
        />
      </div>
    </>
  );
};

export default Projects;
