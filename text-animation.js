gsap.registerPlugin(ScrollTrigger);

document.querySelectorAll('.quote').forEach((quote, index) => {
  ScrollTrigger.create({
    trigger: quote,
    start: 'top 80%', // Adjust as needed
    end: 'top 30%', // Adjust as needed
    onToggle: self => {
      quote.classList.toggle('revealed', self.isActive);
    }
  });
});