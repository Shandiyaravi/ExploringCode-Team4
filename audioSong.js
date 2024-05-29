const playButton = document.getElementById("playButton");
const audioPlayer = document.getElementById("audioPlayer");
// Toggle play/pause on button click
playButton.addEventListener("click", function () {
  if (audioPlayer.paused) {
    audioPlayer.play();
    playButton.textContent = "❚❚"; // Change button text to pause icon
  } else {
    audioPlayer.pause();
    playButton.textContent = "►"; // Change button text to play icon
  }
});
// Change button back to play icon when audio ends
audioPlayer.addEventListener("ended", function () {
  playButton.textContent = "►";
});
