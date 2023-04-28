// audio sound play/stop
var audio = document.getElementById("timer-sound");
function enableSound() { 
  audio.autoplay = true;
  audio.load();
}
function disableSound() { 
  audio.autoplay = false;
  audio.load();
}

// timer
const timer = document.getElementById('timer');
const resetBtn = document.getElementById('reset-btn');

let timeLeft = 1800; // 30 minutes in seconds
let timerId;

// Start the timer
function startTimer() {
	timerId = setInterval(() => {
		timeLeft--;
		updateTimer();
		if (timeLeft === 0) {
			clearInterval(timerId);
			timer.classList.add('time-over');
			audio.pause();
			resetBtn.disabled = false;
		}
	}, 1000);
}

// Update the timer display
function updateTimer() {
	const minutes = Math.floor(timeLeft / 60);
	const seconds = timeLeft % 60;
	timer.innerHTML = `${minutes}:${seconds.toString().padStart(2, '0')}`;
}

// Reset the timer
function resetTimer() {
	clearInterval(timerId);
	timeLeft = 1800;
	updateTimer();
	timer.classList.remove('time-over');
	audio.currentTime = 0;
	audio.play();
	resetBtn.disabled = true;
  startTimer()
}

// Event listeners
window.addEventListener('load', () => {
	updateTimer();
	startTimer();
});
resetBtn.addEventListener('click', resetTimer);

// add additional classes to the buttons on click
// Get references to the buttons
var enableButton = document.getElementById("ES");
var disableButton = document.getElementById("DS");

// Add event listeners to the buttons
enableButton.addEventListener("click", function() {
  // Add the "enabled" class to the body element
  enableButton.classList.add("enabled");
	disableButton.classList.remove("disabled");
});

disableButton.addEventListener("click", function() {
  // Add the "disabled" class to the body element
  disableButton.classList.add("disabled");
	enableButton.classList.remove("enabled");
});

resetBtn.addEventListener("click", function() {
  enableButton.classList.add("enabled")
	disableButton.classList.remove("disabled")
});