const filterTypes = [
  'highpass',
  'lowpass',
  'bandpass',
  'lowshelf',
  'highshelf',
  'peaking',
  'notch',
];

const paragraphEl = document.getElementById('quote3');
const audioEl = document.getElementById('birds');

const ctx = new AudioContext();

const sourceNode = ctx.createMediaElementSource(audioEl);
const gainNode = ctx.createGain();
const filterNode = ctx.createBiquadFilter();

// Connect the nodes
sourceNode.connect(filterNode);
filterNode.connect(gainNode);
gainNode.connect(ctx.destination);

let lastFilterType = null;

paragraphEl.addEventListener('mouseenter', async () => {
  if (ctx.state === 'suspended') {
    await ctx.resume();
  }

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

paragraphEl.addEventListener('mouseleave', () => {
  audioEl.pause();
});
