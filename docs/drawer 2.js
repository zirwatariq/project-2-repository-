const button = document.getElementById('my-button');
let countdown;

button.addEventListener('click', function() {
  let seconds = 180; // 3 minutes * 60 seconds per minute
  countdown = setInterval(function() {
    seconds--;
    if (seconds <= 0) {
      clearInterval(countdown);
      button.innerHTML = "Timer done";
      button.disabled = true;
    } else {
      const minutes = Math.floor(seconds / 60);
      const remainingSeconds = seconds % 60;
      const display = `${minutes}:${remainingSeconds < 10 ? '0' : ''}${remainingSeconds}`;
      button.innerHTML = "Timer: " + display;
    }
  }, 1000);
});