import React from "react";
import "./myCursor.styles.scss";
import { gsap, TweenMax } from "gsap";

class MyCursor extends React.Component {
  //   constructor(props)
  //   {
  //       super(props)

  //   }

  componentDidMount() {
    let cursor = document.querySelector(".cursor");
    let cursorFollower = document.querySelector(".cursor-follower");
    gsap.config({
      nullTargetWarn: false,
    });
    var posX = 0;
    var posY = 0;
    var mouseY = 0;
    var mouseX = 0;

    TweenMax.to({}, 0.016, {
      repeat: -1,
      onRepeat: function () {
        posX += (mouseX - posX) / 9;
        posY += (mouseY - posY) / 9;

        TweenMax.set(cursorFollower, {
          css: {
            left: posX - 20,
            top: posY - 20,
          },
        });

        TweenMax.set(cursor, {
          css: {
            left: mouseX,
            top: mouseY,
          },
        });
      },
    });

    document.addEventListener("mousemove", function (e) {
      mouseX = e.pageX;
      mouseY = e.pageY;
    });
    if (
      window.location.href.includes("work") &&
      !window.location.href.includes("works")
    ) {
      cursor.style.backgroundColor = "#303030";
      cursorFollower.style.backgroundColor = "rgba(0,0,0,.2)";
      console.log("work");
    } else {
      cursor.style.backgroundColor = "";
      cursorFollower.style.backgroundColor = ")";
    }

    [...document.querySelectorAll("button")].forEach((button) => {
      button.addEventListener("mouseover", () => {
        cursor.classList.add("active-btn");

        cursorFollower.classList.add("active");
      });

      button.addEventListener("mouseleave", () => {
        cursor.classList.remove("active-btn");

        cursorFollower.classList.remove("active");
      });
    });

    // document.querySelector(".toggleMenu").addEventListener("click", () => {
    //   document.querySelector(".cursor").style.transform = "rotate(180deg)";
    // });

    document.querySelector(".toggleMenu").addEventListener("mouseleave", () => {
      cursor.classList.remove("active-nav");

      cursorFollower.classList.remove("active");
    });

    document.querySelector(".toggleMenu").addEventListener("mouseover", () => {
      cursor.classList.add("active-nav");

      cursorFollower.classList.add("active");
    });

    if (window.location.href.includes("works")) {
      document.querySelectorAll(".work-project button").forEach((el) =>
        el.addEventListener("mouseover", () => {
          cursor.classList.add("active-nav");

          cursorFollower.classList.add("active");
        })
      );

      document.querySelectorAll(".work-project button").forEach((el) =>
        el.addEventListener("mouseleave", () => {
          cursor.classList.remove("active-nav");

          cursorFollower.classList.remove("active");
        })
      );
    }
  }

  componentDidUpdate() {}

  render() {
    return (
      <div>
        <div className="cursor"></div>
        <div className="cursor-follower">
          {/* <div className="icon-scroll" /> */}
        </div>
      </div>
    );
  }
}

export default MyCursor;
