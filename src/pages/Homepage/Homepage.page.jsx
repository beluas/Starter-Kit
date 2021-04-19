import React, { lazy, Suspense } from "react";
import "./Homepage.styles.scss";
import MyBtn from "../../components/UI/MyBtn/MyBtn.ui.component.jsx";
import section2 from "../../assets/images/section2.jpg";
import section3 from "../../assets/images/section3.jpg";
import SectionBox from "../../components/SectionBox/SectionBox.component.jsx";
//import LatestNews from "../../components/LatestNews/LatestNews.component.jsx";
import LoaderBox from "./LoaderBox.component.jsx";

class Homepage extends React.Component {
  state = {
    isMobile: false,
    loader: null,
  };

  componentDidMount() {
    if (screen.width < 768) {
      this.setState({ isMobile: true }, () => {});
    } else {
      this.setState({ isMobile: false }, () => {
        import("./Animations.js").then((animations) =>
          animations.loaderAnimation()
        );
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
              {/* <h2>_BeluaCode_</h2> */}

              <h1>La soluzione giusta per ll tuo sito web.</h1>

              <MyBtn>Esplora</MyBtn>
            </header>

            <div className="sections">
              <SectionBox
                handleClick={() => {
                  this.props.history.push("/works");
                }}
                title="Siti web & Elementi di design"
                imgUrl={section2}
              />
              <SectionBox
                handleClick={() => {
                  this.props.history.push("/works");
                }}
                title="Ottimizzazione Web Analytics "
                imgUrl={section3}
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
