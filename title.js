import AOS from "aos";

window.addEventListener("DOMContentLoaded", () => {
  const hero = document.getElementById("title-name");
  hero.setAttribute("data-aos", "fade-up");
  hero.setAttribute("data-aos-duration", "200");

  AOS.init({
    initClassName: "aos-init",
    startEvent: "DOMContentLoaded",
  });
});
