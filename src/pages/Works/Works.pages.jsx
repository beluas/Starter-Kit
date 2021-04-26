import React, { Suspense } from "react";
import "./Works.styles.scss";
import showCase_1 from "../../assets/images/showCase_1.png";

import react from "../../assets/images/react.png";
import sass from "../../assets/images/sass.png";
import analytics from "../../assets/images/analytics.png";

import Project from "../../components/Project/Project.component.jsx";
import LoaderBox from "../Homepage/LoaderBox.component.jsx";
import { applyClassOnHover } from "../../util/fn";
import { loaderAnimationWorks } from "../Homepage/Animations";

class Works extends React.Component {
  state = {
    isMobile: false,
  };
  componentDidMount() {
    if (screen.width < 768) {
      this.setState({ isMobile: true }, () => {
        document.querySelector("body").style.overflow = "visible ";
      });
    } else {
      this.setState({ isMobile: false }, () => {
        import("../Homepage/Animations.js").then((animations) =>
          animations.loaderAnimationWorks()
        );
      });
    }

    applyClassOnHover(".works header", ["inverted", "inverted-follower"]);
  }

  render() {
    return (
      <Suspense fallback={<h1>Loading</h1>}>
        {!this.state.isMobile ? (
          <LoaderBox words={["l", "a", "v", "o", "r", "i"]} />
        ) : null}
        <div className="works">
          <header>
            <h1>I Nostri Lavori.</h1>
          </header>
          <Project
            imgUrl={showCase_1}
            skills={[
              {
                name: "React",
                icons: [],
              },
              {
                name: "SASS",
                icons: [],
              },
              {
                name: "Google Analytics",
                icons: [],
              },
            ]}
            services={[
              {
                name: "Custom Website",
                icons: [],
              },
              {
                name: "Digital Marketing",
                icons: [],
              },
            ]}
            skillsIcons={[react, sass, analytics]}
            title="Minimal Portfolio"
            text="Un portfolio dal design minimale per non distrarre le aziende dai contenuti e l'accesso ai contatti"
            url="minimal-portfolio-im"
          />

          {/* <Project
            imgUrl={showCase_1}
            skills={[
              {
                name: "React",
                icons: [],
              },
              {
                name: "SASS",
                icons: [],
              },
              {
                name: "Google Analytics",
                icons: [],
              },
            ]}
            services={[
              {
                name: "Custom Website",
                icons: [],
              },
              {
                name: "Digital Marketing",
                icons: [],
              },
            ]}
            skillsIcons={[react, sass, analytics]}
            inverted
            title="Minimal Portfolio"
            text="lorem ipsum assai"
            url="minimal-portfolio-im"
          /> */}
        </div>
      </Suspense>
    );
  }
}

export default Works;
