window.addEventListener("scroll", function () {
  const brows = document.querySelectorAll(".brow");
  const scrollPosition = window.scrollY || window.scrollYOffset;

  const scrollTrigger = 10;

  if (scrollPosition > scrollTrigger) {
    brows.forEach(function (brow) {
      brow.classList.add("show");
    });
  } else {
    brows.forEach(function (brow) {
      brow.classList.remove("show");
    });
  }
});
