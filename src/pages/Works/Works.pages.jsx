import React from "react";
import "./Works.styles.scss";
import work1 from "../../assets/images/work1.jpg";
import comingSoon1 from "../../assets/images/comingSoon1.jpg";
import comingSoon2 from "../../assets/images/comingSoon2.jpg";
import MyBtn from "../../components/UI/MyBtn//MyBtn.ui.component.jsx";

import { TimelineMax, Expo } from "gsap";

import Work from "../../components/Work/Work.component.jsx";

class Works extends React.Component {
  componentDidMount() {
    document.querySelector("body").style.overflow = "visible";

    const tl1 = new TimelineMax();
    const tl2 = new TimelineMax();

    tl1.staggerTo("button", 0.8, { x: 0, opacity: 1 }, 0.1);
    tl2.to(
      ".row",
      0.8,
      {
        opacity: 1,
        ease: Expo.out,
      },
      0.8
    );
  }

  render() {
    return (
      <div className="works">
        <div name="top" className="categories">
          <MyBtn> Tutti </MyBtn>
          <MyBtn className="category">Analytics</MyBtn>
          <MyBtn className="category">Portfolio</MyBtn>
          <MyBtn className="category">E-Commerce</MyBtn>
          <MyBtn className="category">Real Estate</MyBtn>
        </div>
        <div className="row">
          {" "}
          <Work
            imgUrl={work1}
            big
            url="minimal-portfolio-im"
            title="Minimal portfolio"
            company="Ivan Maddaluno"
          />
          <Work
            imgUrl={comingSoon1}
            big
            title="Elegant Website"
            company="Proposal"
          />
        </div>
        <div className="row">
          {" "}
          <Work
            imgUrl={comingSoon1}
            big
            title="Elegant Website"
            company="Proposal"
          />
          <Work
            imgUrl={comingSoon2}
            big
            title="Elegant Website"
            company="Proposal"
          />
        </div>

        <div className="row">
          {" "}
          <Work
            imgUrl={comingSoon1}
            title="Elegant Website"
            company="Proposal"
          />
          <Work
            imgUrl={comingSoon2}
            title="Elegant Website"
            company="Proposal"
          />
          <Work
            imgUrl={comingSoon1}
            title="Elegant Website"
            company="Proposal"
          />
        </div>
      </div>
    );
  }
}

export default Works;
