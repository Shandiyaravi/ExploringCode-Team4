gsap.registerPlugin(ScrollTrigger);

document.querySelectorAll('.quote').forEach((quote, index) => {
  ScrollTrigger.create({
    trigger: quote,
    start: 'top 80%', 
    end: 'top 30%', 
    onToggle: self => {
      quote.classList.toggle('revealed', self.isActive);
    }
  });
});