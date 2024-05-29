const filterTypes = [
  "highpass",
  "lowpass",
  "bandpass",
  "lowshelf",
  "highshelf",
  "peaking",
  "notch",
];

const paragraphEl = document.querySelector("#quote");
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
