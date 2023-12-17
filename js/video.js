var video;

window.addEventListener("load", function() {
	console.log("Good job opening the window")

});

document.addEventListener("DOMContentLoaded", function () {
	const video = document.getElementById("player1");
	const playButton = document.getElementById("play");
	const pauseButton = document.getElementById("pause");
	const slowerButton = document.getElementById("slower");
	const fasterButton = document.getElementById("faster");
	const skipButton = document.getElementById("skip");
	const muteButton = document.getElementById("mute");
	const slider = document.getElementById("slider");
	const volumeText = document.getElementById("volume");
	const vintageButton = document.getElementById("vintage");
	const originalButton = document.getElementById("orig");

	// Initialize the video element and turn off autoplay and looping
	video.autoplay = false;
	video.loop = false;

	// Function to update the volume information
	function updateVolumeInfo() {
		volumeText.textContent = Math.round(video.volume * 100) + "%";
	}

	// Play Button
	playButton.addEventListener("click", function () {
		video.play();
		updateVolumeInfo();
	});

	// Pause Button
	pauseButton.addEventListener("click", function () {
		video.pause();
	});

	// Slow Down
	slowerButton.addEventListener("click", function () {
		video.playbackRate -= 0.1;
		console.log("New playback rate: " + video.playbackRate.toFixed(2));
	});

	// Speed Up
	fasterButton.addEventListener("click", function () {
		video.playbackRate += 0.1;
		console.log("New playback rate: " + video.playbackRate.toFixed(2));
	});

	// Skip Ahead
	skipButton.addEventListener("click", function () {
		video.currentTime += 10;
		if (video.currentTime > video.duration) {
		video.currentTime = 0;
		}
		console.log("Current location: " + video.currentTime.toFixed(2));
	});

	// Mute Button
	muteButton.addEventListener("click", function () {
		video.muted = !video.muted;
		muteButton.textContent = video.muted ? "Unmute" : "Mute";
	});

	// Volume Slider
	slider.addEventListener("input", function () {
		video.volume = slider.value / 100;
		updateVolumeInfo();
	});

	// Styled (Add the 'oldSchool' class)
	vintageButton.addEventListener("click", function () {
		video.classList.add("oldSchool");
	});

	// Original (Remove the 'oldSchool' class)
	originalButton.addEventListener("click", function () {
		video.classList.remove("oldSchool");
	});
});

/*
video = document.querySelector("#player1");

window.addEventListener("load", function(){
	console.log("Good job opening the window")
	// Initialize video element
	video.autoplay = false;
	video.pause();
	video.loop = false;
	video.volume = document.querySelector("#slider").value / 100;
});

document.querySelector("#play").addEventListener("click", function(){
	console.log("Play Video");
	console.log("Play Video");
	video.play();
	document.querySelector("#volume").textContent = Math.round(video.volume * 100) = "%";
});
*/