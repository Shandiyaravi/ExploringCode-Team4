const rotateBox = document.querySelector('.rotate');

    window.addEventListener('scroll', () => {
      const scrollY = window.scrollY;
      rotateBox.style.transform = `rotate(${scrollY}deg)`;
    });