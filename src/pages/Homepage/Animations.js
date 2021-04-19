import { TimelineMax } from "gsap";

export const loaderAnimation = () => {
  let tl1 = new TimelineMax();
  tl1
    .to(
      ".homepage",
      0.9,

      { opacity: 1, delay: 1 }
    )
    .to(".loader-box", 2, { zIndex: -1, delay: 2 })
    .to("body", 0.5, { overflow: "visible" });
};
