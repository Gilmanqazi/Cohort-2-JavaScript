
let sounds = {
  A: "./31.mp3",
  S: "./cinematic-piano-note-362716.mp3",
  D: "./31.mp3",
  F: "./cinematic-piano-note-362716.mp3",
  G: "./31.mp3",
  H: "./cinematic-piano-note-362716.mp3",
  J: "./31.mp3",
  K: "./piano-g-6200.mp3",
  L: "./piano-g-6200.mp3",
};


document.addEventListener("keydown", function (dets) {
  let key = dets.code.replace("Key", "");   
  let btn = document.getElementById(key);

  if (btn) {
  
    btn.style.transform = "scale(0.9)";

  
    let aud = new Audio(sounds[key]);
    console.log(sounds[key])
    aud.currentTime = 0;
    aud.play();
  }
});


document.addEventListener("keyup", function (dets) {
  let key = dets.code.replace("Key", "");
  let btn = document.getElementById(key);

  if (btn) {
    btn.style.transform = "scale(1)";
  }
});
