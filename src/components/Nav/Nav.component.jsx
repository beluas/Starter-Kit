import React from "react";
import "./Nav.styles.scss";
import { Link } from "react-router-dom";
import Logo from "../../assets/icons/logo.svg";
import email from "../../assets/icons/email.svg";
import linkedin from "../../assets/icons/linkedin.svg";
import whatsapp from "../../assets/icons/whatsapp.svg";
//import logo from 'react'

import { TimelineMax } from "gsap";
import { applyClassOnHover } from "../../util/fn.js";

class Nav extends React.Component {
  componentDidMount() {
    const button = document.querySelector(".toggleMenu");
    const menu = document.querySelector(".extended-menu");
    const body = document.querySelector("body");

    // mouseover
    // mouseleave

    applyClassOnHover(".extended-menu", [
      // "active",
      // "active-follower",
      "inverted",
      "inverted-follower",
    ]);

    //const nav = document.querySelector("nav");
    //const tl1 = new TimelineMax();
    const tl2 = new TimelineMax();

    button.addEventListener("click", () => {
      button.classList.toggle("-menu-open");
      menu.classList.toggle("open");

      body.classList.toggle("overflow-hid");
    });

    tl2
      .fromTo("nav", 0.5, { opacity: 0 }, { opacity: 1, delay: 0.5 })
      .fromTo("nav", { zIndex: -1 }, { zIndex: 9, delay: 1 });
    applyClassOnHover(
      ".toggleMenu",
      ["active", "active-follower", "active-nav"],
      "Menu"
    );

    applyClassOnHover("nav a:not(.logo-link)", ["active", "active-follower"]);
    applyClassOnHover("nav .logo-link", ["inverted", "inverted-follower"]);
    applyClassOnHover(".extended-menu a:not(.logo-link)", [
      "active",
      "active-follower",
    ]);

    // setTimeout(() => {
    //   document.querySelector("#mobile-nav .title").style.display = "none";
    // }, 1000);
  }

  render() {
    return (
      <>
        <nav>
          <ul>
            <li className="logo">
              <Link className="logo-link" to="/">
                <img width="48px" height="48px" src={Logo} alt="logo" />
                BeluaCode.
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
                      width="24px"
                      height="24px"
                      src={email}
                      alt="email-icon"
                    />
                  </Link>
                </li>

                <li>
                  <Link to="/">
                    <img
                      width="28px"
                      height="28px"
                      src={linkedin}
                      alt="linkedin-logo"
                    />
                  </Link>
                </li>
              </ul>
            </li>
          </ul>
        </nav>
        <div id="mobile-nav">
          <ul>
            <li className="logo">
              <Link to="/">
                <img width="48px" height="48px" src={Logo} alt="logo" />
                <span className="title">BeluaCode.</span>
              </Link>
            </li>

            <li className="social">
              <ul>
                {/* <li>
                  <Link to="/">
                    <img
                      width="24px"
                      height="24px"
                      src={email}
                      alt="email-icon"
                    />
                  </Link>
                </li> */}

                <li>
                  <Link to="/">
                    <img
                      width="28px"
                      height="28px"
                      src={linkedin}
                      alt="linkedin-logo"
                    />
                  </Link>
                </li>

                <li>
                  <a href="https://wa.me/+4915251492559">
                    <img
                      width="28px"
                      height="28px"
                      src={whatsapp}
                      alt="linkedin-logo"
                    />
                  </a>
                </li>
              </ul>
            </li>
          </ul>
        </div>
        <div className="extended-menu">
          <ul>
            <li>
              <span>01</span>
              <Link to="/works">Progetti</Link>
            </li>
            <li>
              <span>02</span>

              <Link to="/services">Servizi</Link>
            </li>
            {/* <li>
              <span>03</span>

              <Link to="/about-us">Chi Siamo</Link>
            </li> */}
            {/* <li>
              <span>04</span>

              <Link to="projects">Blog</Link>
            </li> */}
            <li>
              <span>03</span>

              <Link to="https://wa.me/+4915251492559">Contattaci</Link>
            </li>
          </ul>

          <ul className="extended-menu-social">
            {/* <li>
              <Link to="mailto:ivanmaddaluno1993@gmail.com">Email</Link>
            </li> */}
            <li>
              <Link to="/">Linkedin</Link>
            </li>
            <li>
              <Link to="/">Instagram</Link>
            </li>
          </ul>
        </div>
      </>
    );
  }
}

export default Nav;
