import React from "react";
import "./Nav.styles.scss";
import { Link } from "react-router-dom";
import Logo from "../../assets/images/logo.png";
import email from "../../assets/icons/social-email.png";
import facebook from "../../assets/icons/social-facebook.png";
import linkedin from "../../assets/icons/social-linkedin.png";
import { TimelineMax } from "gsap";

class Nav extends React.Component {
  componentDidMount() {
    const button = document.querySelector(".toggleMenu");
    const menu = document.querySelector(".extended-menu");
    const body = document.querySelector("body");
    //const nav = document.querySelector("nav");
    //const tl1 = new TimelineMax();
    const tl2 = new TimelineMax();
    let counter = 1;
    button.addEventListener("click", () => {
      button.classList.toggle("-menu-open");
      menu.classList.toggle("open");
      console.log(counter);

      body.classList.toggle("overflow-hid");
    });

    // tl2.fromTo("nav", 0.5, { opacity: 0 }, { opacity: 1, delay: 0.5 });
  }

  render() {
    return (
      <>
        <nav>
          <ul>
            <li className="logo">
              <Link to="/">
                <img width="124px" height="124px" src={Logo} alt="logo" />
              </Link>
            </li>

            <li>
              {/* <div className="menu-icon">
              <span className="line line1"></span>
              <span className="line line2"></span>
            </div> */}
              <div className="toggleMenu">
                <svg
                  width="26px"
                  height="26px"
                  viewBox="0 0 48 48"
                  version="1.1"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <g>
                    <line
                      x1="0"
                      y1="17"
                      x2="48"
                      y2="17"
                      style={{ strokeWidth: "2" }}
                    />
                    <line
                      x1="0"
                      y1="31"
                      x2="48"
                      y2="31"
                      style={{ strokeWidth: "2" }}
                    />
                  </g>

                  <g>
                    <line
                      x1="0"
                      y1="24"
                      x2="48"
                      y2="24"
                      style={{ strokeWidth: "2" }}
                    />
                    <line
                      x1="0"
                      y1="24"
                      x2="48"
                      y2="24"
                      style={{ strokeWidth: "2" }}
                    />
                  </g>
                </svg>
              </div>
            </li>
            <li className="social">
              <ul>
                <li>
                  <Link to="/">
                    <img
                      width="20px"
                      height="20px"
                      src={email}
                      alt="email-icon"
                    />
                  </Link>
                </li>
                <li>
                  <Link to="/">
                    <img
                      width="20px"
                      height="20px"
                      src={facebook}
                      alt="facebook-logo"
                    />
                  </Link>
                </li>
                <li>
                  <Link to="/">
                    <img
                      width="20px"
                      height="20px"
                      src={linkedin}
                      alt="linkedin-logo"
                    />
                  </Link>
                </li>
              </ul>
            </li>
          </ul>
        </nav>
        <div className="extended-menu">
          <ul>
            <li>
              <span>01</span>
              <Link to="/projects">Progetti</Link>
            </li>
            <li>
              <span>02</span>

              <Link to="/testimonials">Testimonials</Link>
            </li>
            <li>
              <span>03</span>

              <Link to="/about-us">Servizi</Link>
            </li>
            <li>
              <span>04</span>

              <Link to="projects">Blog</Link>
            </li>
            <li>
              <span>05</span>

              <Link to="/contact-us">Contattaci</Link>
            </li>
          </ul>

          <ul className="extended-menu-social">
            <li>
              <Link to="/">Email</Link>
            </li>
            <li>
              <Link to="/">Linkedin</Link>
            </li>
            <li>
              <Link to="/">Facebook</Link>
            </li>
          </ul>
        </div>
      </>
    );
  }
}

export default Nav;
