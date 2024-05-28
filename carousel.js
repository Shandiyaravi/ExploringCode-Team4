// script.js

const audio = document.getElementById('audio');
const circleItems = document.querySelectorAll('.circle-item');

// Function to play audio
circleItems.addEventListener('click', () => {
  const playAudio = () => {
    audio.play();
  };
});
