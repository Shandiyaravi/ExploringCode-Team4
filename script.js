gsap.registerPlugin(ScrollTrigger);
gsap.to(".brow", {
  trigger: ".brow",
  y: 500,
  pin: true,
  start: "top top",
  end: "+=500",
  scrib: 1,
  duration: { min: 0.2, max: 0.3 },
  delay: 0.2,
  ease: "power1.inOut",
});
