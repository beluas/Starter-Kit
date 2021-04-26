import { useEffect } from "react";
import { withRouter } from "react-router-dom";

function ScrollToTop({ history }) {
  useEffect(() => {
    const unlisten = history.listen(() => {
      window.scrollTo(0, 0);
      document.querySelector(".toggleMenu").classList.remove("-menu-open");

      document.querySelector(".extended-menu").classList.remove("open");

      document.querySelector(".cursor").classList.remove("active");
      document
        .querySelector(".cursor-follower")
        .classList.remove("active-follower");
    });
    return () => {
      unlisten();
    };
  }, []);

  return null;
}

export default withRouter(ScrollToTop);
