import React from "react";
import { Link } from "react-router-dom";
import "./Footer.styles.scss";
// import icon from "../../assets/icons/arrow-top-right.png";
import Jumbotron from "../../components/Jumbotron/Jumbotron.component";
import Logo from "../../assets/icons/logo.svg";

const Footer = () => {
  return (
    <>
      <Jumbotron />
      <footer>
        <section className="first-section">
          <ul className="footer-menu social">
            <li>
              <Link to="/works">I nostri Lavori</Link>
            </li>
            <li>
              <Link to="/services">I nostri Servizi </Link>
            </li>
            <li>
              <Link to="https://wa.me/+4915251492559">Contattaci</Link>
            </li>
            {/* <li>
              <Link to="/">Blog</Link>
            </li> */}
          </ul>
          {/* <ul className="social">
            <li>
              <Link to="/">
                Facebook{" "}
                <img
                  src={icon}
                  width="16px"
                  height="16px"
                  alt="arrow top right"
                />
              </Link>
            </li>
            <li>
              <Link to="/">
                Email{" "}
                <img
                  src={icon}
                  width="16px"
                  height="16px"
                  alt="arrow top right"
                />
              </Link>
            </li>
            <li>
              <Link to="/">
                Linkedin{" "}
                <img
                  src={icon}
                  width="16px"
                  height="16px"
                  alt="arrow top right"
                />
              </Link>
            </li>
          </ul> */}
        </section>
        <section className="second-section">
          <div className="logo">
            <a
              target="blank"
              href="https://www.instagram.com/boris_the_frenchie_bull/"
            >
              <img width="148px" height="50px" src={Logo} alt="logo" />
              <span>BeluaCode</span>
            </a>
          </div>
        </section>
        <section className="third-section">
          <div className="locations">
            <div className="location">
              <p className="location-title">Beluacode </p>
              <p>Berlin 10711 DE</p>
              <p>Seesener Str.</p>
            </div>
          </div>
        </section>
      </footer>
    </>
  );
};

export default Footer;
