export const applyClassOnHover = (elDOM, classes) => {
  const el = document.querySelectorAll(`${elDOM}`);
  let cursor = document.querySelector(".cursor");
  let cursorFollower = document.querySelector(".cursor-follower");

  cursor.dataset.content = "Go !";

  el.forEach((el) => {
    el.addEventListener("mouseover", () => {
      classes.forEach((myClass) => {
        if (myClass.includes("follower")) {
          cursorFollower.classList.add(myClass);
        } else {
          cursor.classList.add(myClass);
        }
      });
    });

    el.addEventListener("mouseleave", () => {
      classes.forEach((myClass) => {
        if (myClass.includes("follower")) {
          cursorFollower.classList.remove(myClass);
        } else {
          cursor.classList.remove(myClass);
        }
      });
    });
  });
};
