<<<<<<< HEAD
 // Get references to the play button and audio player
 const playButton = document.getElementById('playButton');
 const audioPlayer = document.getElementById('audioPlayer');

 // Toggle play/pause on button click
 playButton.addEventListener('click', function() {
     if (audioPlayer.paused) {
         audioPlayer.play();
         playButton.textContent = '❚❚'; // Change button text to pause icon
     } else {
         audioPlayer.pause();
         playButton.textContent = '►'; // Change button text to play icon
     }
 });

 // Change button back to play icon when audio ends
 audioPlayer.addEventListener('ended', function() {
     playButton.textContent = '►';
 });
=======
const filterTypes = [
  "highpass",
  "lowpass",
  "bandpass",
  "lowshelf",
  "highshelf",
  "peaking",
  "notch",
];

const paragraphEl = document.querySelector("#text-sound");
const audioEl = document.querySelector("#song");

const ctx = new AudioContext();

const sourceNode = ctx.createMediaElementSource(audioEl);
const gainNode = ctx.createGain();
const filterNode = ctx.createBiquadFilter();

// Connect the nodes
sourceNode.connect(filterNode);
filterNode.connect(gainNode);
gainNode.connect(ctx.destination);

let lastFilterType = null;

paragraphEl.addEventListener("mouseenter", () => {
  let randomFilterType;

  do {
    randomFilterType =
      filterTypes[Math.floor(Math.random() * filterTypes.length)];
  } while (randomFilterType === lastFilterType);

  filterNode.type = randomFilterType;
  filterNode.frequency.value = 1000;

  lastFilterType = randomFilterType;

  audioEl.play();
});

paragraphEl.addEventListener("mouseleave", () => {
  audioEl.pause();
});
>>>>>>> 02eed4c (Update index.html with new styles and scripts)
