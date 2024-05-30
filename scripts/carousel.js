// script.js

const audio = document.getElementById("audioPlayer");
const circleItems = document.querySelectorAll(".circle-item");

// Function to play audio
circleItems.addEventListener("click", () => {
  const playAudio = () => {
    audio.play();
  };
});
