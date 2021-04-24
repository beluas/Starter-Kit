import React, { Suspense } from "react";
import "./Works.styles.scss";
import work1 from "../../assets/images/work1.jpg";
import showCase_1 from "../../assets/images/showCase_1.png";
import comingSoon2 from "../../assets/images/comingSoon2.jpg";
import MyBtn from "../../components/UI/MyBtn/MyBtn.ui.component.jsx";
import react from "../../assets/images/react.png";
import sass from "../../assets/images/sass.png";
import analytics from "../../assets/images/analytics.png";
import { TimelineMax, Expo } from "gsap";

import Work from "../../components/Project/Project.component.jsx";
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
        document.querySelector("body").style.overflow = "auto";
      });
    } else {
      this.setState({ isMobile: false }, () => {
        import("../Homepage/Animations.js").then((animations) =>
          animations.loaderAnimationWorks()
        );
      });
    }

    loaderAnimationWorks;
    applyClassOnHover(".works header", [
      // "active",
      // "active-follower",
      "inverted",
      "inverted-follower",
    ]);
  }

  render() {
    return (
      <Suspense fallback={<h1>Loading</h1>}>
        {!this.state.isMobile ? <LoaderBox /> : null}
        <div className="works">
          <header>
            <h1>Idee che diventano realta'.</h1>
          </header>
          <Project
            imgUrl={showCase_1}
            skills={["React", "SASS", "Google Analytics"]}
            services={["Custom Website", "Digital Marketing"]}
            skillsIcons={[react, sass, analytics]}
          />

          <Project
            imgUrl={showCase_1}
            skills={["React", "SASS", "Google Analytics"]}
            services={["Custom Website", "Digital Marketing"]}
            skillsIcons={[react, sass, analytics]}
            inverted
          />
        </div>
      </Suspense>
    );
  }
}

export default Works;
