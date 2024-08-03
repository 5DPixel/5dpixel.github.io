const [btn] = document.querySelectorAll("#start");

btn.addEventListener("click", () => {
  if("AudioContext" in window || "webkitAudioContext" in window){
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


  const scale = ["F#", "G#", "A#", "B", "C#", "D#", "E#"];

  const loopA = new Tone.Loop((time) => {
    sampler.triggerAttackRelease(scale[Math.floor(Math.random() * scale.length)].concat("4"), 4, time);

    sampler.triggerAttackRelease(scale[Math.floor(Math.random() * scale.length)].concat("3"), 4, time);

    sampler.triggerAttackRelease(scale[Math.floor(Math.random() * scale.length)].concat("2"), 4, time);
    //     polySynth.triggerAttackRelease(scale[Math.floor(Math.random() * scale.length)], "4n", time);
  }, "4n").start(0);

  Tone.getTransport().start();
  }
});