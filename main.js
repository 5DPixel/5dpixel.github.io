const [btn] = document.querySelectorAll("#start");

btn.addEventListener("click", () => {
    const [btn] = document.querySelectorAll("#start");

btn.addEventListener("click", () => {
  // const polySynth = new Tone.PolySynth(Tone.Synth, {
  //     oscillator: {
  //         type: "sawtooth"  // Sawtooth wave for a fuller sound
  //     },
  //     envelope: {
  //         attack: 0.1,
  //         decay: 0.2,
  //         sustain: 0.7,
  //         release: 1
  //     }
  // }).toDestination();

  const sampler = new Tone.Sampler({
    urls: {
      C4: "C4.mp3",
      "D#4": "Ds4.mp3",
      "F#4": "Fs4.mp3",
      A4: "A4.mp3",
    },
    release: 1,
    baseUrl: "https://tonejs.github.io/audio/salamander/",
  }).toDestination();

  // Tone.loaded().then(() => {
  //     sampler.triggerAttackRelease(["Eb4", "G4", "Bb4"], 4);
  // });

  const reverb = new Tone.Reverb({
    decay: 10, // Time in seconds for the reverb tail
    preDelay: 0.01, // Delay before the reverb effect starts
    wet: 1
  }).toDestination();

  sampler.connect(reverb);


  const scale = ["F#5", "G#5", "A#5", "B5", "C#5", "D#5", "E#5"];

  const backScale = ["F#3", "G#3", "A#3", "B3", "C#3", "D#3", "E#3"];

  const lowScale = ["F#2", "G#2", "A#2", "B2", "C#2", "D#2", "E#2"];

  const loopA = new Tone.Loop((time) => {
    sampler.triggerAttackRelease(scale[Math.floor(Math.random() * scale.length)], 4, time);

    sampler.triggerAttackRelease(backScale[Math.floor(Math.random() * backScale.length)], 4, time);

    sampler.triggerAttackRelease(lowScale[Math.floor(Math.random() * lowScale.length)], 4, time);
    //     polySynth.triggerAttackRelease(scale[Math.floor(Math.random() * scale.length)], "4n", time);
  }, "4n").start(0);

  Tone.getTransport().start();
});
})