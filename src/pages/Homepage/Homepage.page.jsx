import React, { lazy, Suspense } from "react";
import "./Homepage.styles.scss";
import MyBtn from "../../components/UI/MyBtn/MyBtn.ui.component.jsx";
import section2 from "../../assets/images/section2.jpg";
import section3 from "../../assets/images/section3.jpg";
import SectionBox from "../../components/SectionBox/SectionBox.component.jsx";
import LoaderBox from "./LoaderBox.component.jsx";
import { Link } from "react-router-dom";

class Homepage extends React.Component {
  state = {
    isMobile: false,
    loader: null,
  };

  componentDidMount() {
    if (screen.width < 768) {
      this.setState({ isMobile: true }, () => {
        document.querySelector("body").style.overflow = "auto";
      });
    } else {
      this.setState({ isMobile: false }, () => {
        import("./Animations.js").then((animations) => {
          animations.loaderAnimation();
          animations.loaderTitle();
        });
      });
    }
  }

  render() {
    return (
      <Suspense fallback={<h1>Loading</h1>}>
        {!this.state.isMobile ? <LoaderBox /> : null}

        <div className="flex">
          <section className="homepage">
            <header>
              {/* <h2>
                BeluaCode. <span className="small"></span>{" "}
              </h2> */}
              <h1>
                La soluzione giusta per
                <br />
                <span className="text"></span>
                <span className="typewriter-cursor">_</span>
              </h1>

              <Link to="/services">
                <MyBtn>Servizi</MyBtn>
              </Link>
            </header>

            <div className="sections">
              <SectionBox
                handleClick={() => {
                  this.props.history.push("/works");
                }}
                title="Siti Web & E-Commerce"
                imgUrl={section2}
                tags={[
                  "Siti Web",
                  "E-Commerce",
                  "Web-App",
                  "Responsive",
                  "Ottimizzazione Performance",
                ]}
              />
              <SectionBox
                handleClick={() => {
                  this.props.history.push("/servicesgit a");
                }}
                title="Digital Marketing Services"
                imgUrl={section3}
                tags={[
                  "Campagne Google Ads",
                  "Campagne Facebook & Instagram",
                  "SEO HTML",
                  "Google Analytics",
                  "Google Tag Manager",
                  "Ottimizzazione Performance",
                ]}
              />
            </div>

            {/* <div className="ml-6">
              <LatestNews />
            </div> */}
          </section>
        </div>
      </Suspense>
    );
  }
}

export default Homepage;
