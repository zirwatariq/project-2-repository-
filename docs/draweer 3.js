const iconn = document.getElementById("iconn");
const mySong = document.getElementById("mySong");

let isPlaying = false;

iconn.addEventListener("click", function() {
  if (isPlaying) {
    mySong.pause();
    isPlaying = false;
   iconn.innerHTML = "Play";
  } else {
    mySong.play();
    isPlaying = true;
    iconn.innerHTML = "Pause";
  }
});