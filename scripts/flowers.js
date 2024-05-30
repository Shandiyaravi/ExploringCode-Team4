window.addEventListener("scroll", function () {
  const flowers = document.querySelectorAll(
    ".flower:nth-of-type(2), .flower:nth-of-type(4), .flower:nth-of-type(6)"
  );
  const scrollPosition = window.scrollY || window.scrollYOffset;

  const scrollTrigger = 20;

  if (scrollPosition > scrollTrigger) {
    flowers.forEach(function (flower) {
      flower.classList.add("flower-rotate");
    });
  } else {
    flowers.forEach(function (flower) {
      flower.classList.remove("flower-rotate");
    });
  }
});

window.addEventListener("scroll", function () {
  const brows = document.querySelectorAll(
    ".flower:nth-of-type(1), .flower:nth-of-type(3), .flower:nth-of-type(5)"
  );
  const scrollPosition = window.scrollY || window.scrollYOffset;

  const scrollTrigger = 20;

  if (scrollPosition > scrollTrigger) {
    brows.forEach(function (brow) {
      brow.classList.add("flower-side");
    });
  } else {
    brows.forEach(function (brow) {
      brow.classList.remove("flower-side");
    });
  }
});
