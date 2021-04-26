import React, { Suspense } from "react";
import "./Services.styles.scss";
import servicesFb from "../../assets/images/services-fb.jpg";
import servicesWebsite from "../../assets/images/services-website.jpg";

import react from "../../assets/images/react.png";
import s_fb from "../../assets/icons/s-fb.svg";
import s_ig from "../../assets/icons/s-ig.svg";
import s_gtm from "../../assets/icons/s-gtm.svg";
import s_gads from "../../assets/icons/s-gads.svg";
import s_ga from "../../assets/icons/s-ga.svg";
import s_ec from "../../assets/icons/s-ec.svg";
import s_shop from "../../assets/icons/s-shop.svg";

import s_woo from "../../assets/icons/s-woo.svg";
import s_resp from "../../assets/icons/s-resp.svg";
import s_shop_cm from "../../assets/icons/s-shop-cm.svg";
import s_wp from "../../assets/icons/s-wp.svg";
import s_seo from "../../assets/icons/s-seo.svg";
import s_sett from "../../assets/icons/s-sett.svg";

import sass from "../../assets/images/sass.png";

import Project from "../../components/Project/Project.component.jsx";
import LoaderBox from "../Homepage/LoaderBox.component.jsx";
import { applyClassOnHover } from "../../util/fn";

class Works extends React.Component {
  state = {
    isMobile: false,
  };
  componentDidMount() {
    if (screen.width < 768) {
      this.setState({ isMobile: true }, () => {
        document.querySelector("body").style.overflow = "visible";
      });
    } else {
      this.setState({ isMobile: false }, () => {
        import("../Homepage/Animations.js").then((animations) =>
          animations.loaderAnimationServices()
        );
      });
    }

    applyClassOnHover(".services header", ["inverted", "inverted-follower"]);
  }

  render() {
    return (
      <Suspense fallback={<h1>Loading</h1>}>
        {!this.state.isMobile ? (
          <LoaderBox words={["s", "e", "r", "v", "i", "z", "i"]} />
        ) : null}
        <div className="services">
          <header>
            <h1>I Nostri Servizi.</h1>
          </header>
          <Project
            imgUrl={servicesFb}
            isService
            skills={[
              { name: "Campagne Facebook ", icons: [s_fb] },
              {
                name: "Campagne Instagram",
                icons: [s_ig],
              },
              {
                name: "Installazione Pixel + integrazione GTM)",
                icons: [s_sett, s_gtm],
              },
            ]}
            services={[
              { name: "Eventi standard", icons: [] },
              { name: "Eventi di acquisto", icons: [] },
              { name: "Eventi personalizzati", icons: [] },
            ]}
            skillsIcons={[]}
            title="Digital Marketing Facebook"
            text="I servizi offerti coprono nella sua interezza la gestione e la promozione di inserzioni a per la piattaforma Facebook & Instagram. Inoltre curiamo tutta la parte tecnica. Dall'installazione iniziale alla creazione di eventi personalizzati utilizzando script creati per ogni necessita' "
            history={this.props.history}
          />

          <Project
            imgUrl={s_gads}
            isService
            skills={[
              { name: "Google Analytics", icons: [s_ga] },
              { name: "Google Tag Manager", icons: [s_gtm] },
              {
                name: "Eventi personalizzati",
                icons: [],
              },
              {
                name: "Creazione Feed Google Shopping",
                icons: [],
              },
              { name: "Eventi E-Commerce + Enhanced", icons: [s_ec] },
            ]}
            services={[
              { name: "Campagne Google ADS", icons: [s_gads] },
              { name: "Merchant Center", icons: [s_shop] },
              { name: "Campagne Google Shopping", icons: [s_shop_cm] },
              { name: "Remarketing statico & dinamico ", icons: [] },
            ]}
            skillsIcons={[]}
            title="Google ADS + Analytics v4 + GTM + Shopping"
            text="Curiamo l'intera parte del traffico a pagamento (cpc). Gestiamo l'installazione degli strumenti menzionati dall'inizio alla fine inclusi creazione del feed"
            inverted
            history={this.props.history}
          />

          <Project
            imgUrl={servicesWebsite}
            isService
            skills={[
              {
                name: "Siti Custom",
                icons: [react, sass],
              },
              { name: "E-Commerce", icons: [react, sass] },
              { name: "Siti Web Wordpress", icons: [s_wp] },
              {
                name: "E-commerce Wordpress + Woocommerce",
                icons: [s_wp, s_woo],
              },
            ]}
            services={[
              {
                name: "Performance in ottica SEO",
                icons: [s_seo],
              },

              {
                name: "Design ottimizzati per ogni dispositivo.",
                icons: [s_resp],
              },
            ]}
            skillsIcons={[]}
            title="Creazione siti web & E-Commerce"
            text="Hai bisogno di uno store online ? Offriamo servizi per ogni livello di personalizzazione"
            history={this.props.history}
          />
        </div>
      </Suspense>
    );
  }
}

export default Works;
