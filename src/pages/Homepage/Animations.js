import { TimelineMax, Power2 } from "gsap";
import gsap from "gsap/gsap-core";
import { TextPlugin } from "gsap/TextPlugin";
gsap.registerPlugin(TextPlugin);

export const loaderAnimation = () => {
  let tl1 = new TimelineMax();
  document.querySelector("body").style.overflow = "hidden";
  tl1
    .to(
      ".homepage",
      0.9,

      { opacity: 1, delay: 0.5 }
    )
    .to("body", 0.8, { overflow: "visible", delay: 1.5 })
    .to(".loader-box", { display: "none" });
};

export const loaderTitle = () => {
  const services = [
    "le tue Campagne Ads",
    "il tuo Sito web",
    "il tuo E-commerce",
  ];

  let tl2 = new TimelineMax();
  let tl3 = new TimelineMax();
  let tl4 = new TimelineMax({ repeat: Infinity });

  tl2.to(".typewriter-cursor", {
    opacity: 0,
    ease: Power2.easeInOut,
    repeat: -1,
  });

  tl3.to("h1 .box", 1, {
    onComplete: () => tl4.play(),
  });

  services.forEach((word) => {
    let tl = new TimelineMax({ repeat: 1, yoyo: true, repeatDelay: 1 });
    tl.to("h1 .text", 1.5, { text: word });
    tl4.add(tl);
  });
};

export const loaderAnimationWorks = () => {
  document.querySelector("body").style.overflow = "hidden";
  let tl1 = new TimelineMax();
  tl1
    .to(
      ".works",
      0.9,

      { opacity: 1, delay: 1 }
    )
    .to("body", 0.8, { overflow: "visible", delay: 1.5 })
    .to(".loader-box", { display: "none" });
};

export const loaderAnimationServices = () => {
  document.querySelector("body").style.overflow = "visible";
  let tl1 = new TimelineMax();
  tl1
    .to(
      ".services",
      0.9,

      { opacity: 1, delay: 1 }
    )
    .to("body", 1.8, { overflow: "visible", delay: 1.5 })
    .to(".loader-box", { display: "none" });
};

export const loaderAnimationWork = () => {
  document.querySelector("body").style.overflow = "hidden";

  let tl1 = new TimelineMax();
  tl1
    .to(
      ".work",
      0.9,

      { opacity: 1, delay: 1 }
    )
    .to("body", 0.8, { overflow: "visible", delay: 1.5 })
    .to(".loader-box", { display: "none" });
};
