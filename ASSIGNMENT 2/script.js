// =====================================
// SELECT HTML ELEMENTS
// =====================================

const video = document.getElementById("video");

const player = document.getElementById("player");

const playBtn = document.getElementById("playBtn");

const centerPlay = document.getElementById("centerPlay");

const backwardBtn = document.getElementById("backwardBtn");

const forwardBtn = document.getElementById("forwardBtn");

const seekBar = document.getElementById("seekBar");

const currentTime = document.getElementById("currentTime");

const duration = document.getElementById("duration");

const volume = document.getElementById("volume");

const muteBtn = document.getElementById("muteBtn");

const speed = document.getElementById("speed");

const fullscreenBtn = document.getElementById("fullscreenBtn");

const loader = document.getElementById("loader");


// =====================================
// FORMAT VIDEO TIME
// =====================================

function formatTime(time) {

    if (!Number.isFinite(time)) {
        return "00:00";
    }

    const minutes = Math.floor(time / 60);

    const seconds = Math.floor(time % 60);

    return (
        String(minutes).padStart(2, "0") +
        ":" +
        String(seconds).padStart(2, "0")
    );

}


// =====================================
// PLAY AND PAUSE VIDEO
// =====================================

function togglePlay() {

    if (video.paused) {

        video.play().catch(error => {
            console.error("Video playback failed:", error);
        });

    } else {

        video.pause();

    }

}


// Play button

playBtn.addEventListener("click", togglePlay);


// Center play button

centerPlay.addEventListener("click", togglePlay);


// Update controls when video plays

video.addEventListener("play", function () {

    playBtn.textContent = "⏸";

    playBtn.setAttribute("aria-label", "Pause");

    centerPlay.textContent = "▶";

    player.classList.add("playing");

});


// Update controls when video pauses

video.addEventListener("pause", function () {

    playBtn.textContent = "▶";

    playBtn.setAttribute("aria-label", "Play");

    player.classList.remove("playing");

});


// =====================================
// VIDEO DURATION
// =====================================

video.addEventListener("loadedmetadata", function () {

    duration.textContent = formatTime(video.duration);

});


// =====================================
// UPDATE VIDEO PROGRESS
// =====================================

video.addEventListener("timeupdate", function () {
    if (video.currentTime >= 50) {
        video.currentTime = 50;
        video.pause();
    }
});


// =====================================
// SEEK BAR
// =====================================

seekBar.addEventListener("input", function () {

    if (Number.isFinite(video.duration) && video.duration > 0) {

        video.currentTime = (seekBar.value / 100) * video.duration;

    }

});


// =====================================
// SKIP BACKWARD
// =====================================

backwardBtn.addEventListener("click", function () {

    video.currentTime = Math.max(0, video.currentTime - 10);

});


// =====================================
// SKIP FORWARD
// =====================================

forwardBtn.addEventListener("click", function () {

    if (Number.isFinite(video.duration)) {

        video.currentTime = Math.min(
            video.duration,
            video.currentTime + 10
        );

    }

});


// =====================================
// VOLUME CONTROL
// =====================================

volume.addEventListener("input", function () {

    video.volume = Number(volume.value);

    video.muted = video.volume === 0;

    updateMuteButton();

});


// =====================================
// MUTE AND UNMUTE
// =====================================

function updateMuteButton() {

    if (video.muted || video.volume === 0) {

        muteBtn.textContent = "🔇";

        muteBtn.setAttribute("aria-label", "Unmute");

    } else {

        muteBtn.textContent = "🔊";

        muteBtn.setAttribute("aria-label", "Mute");

    }

}


muteBtn.addEventListener("click", function () {

    video.muted = !video.muted;

    updateMuteButton();

});


// =====================================
// PLAYBACK SPEED
// =====================================

speed.addEventListener("change", function () {

    video.playbackRate = Number(speed.value);

});


// =====================================
// FULLSCREEN MODE
// =====================================

fullscreenBtn.addEventListener("click", async function () {

    try {

        if (!document.fullscreenElement) {

            await player.requestFullscreen();

        } else {

            await document.exitFullscreen();

        }

    } catch (error) {

        console.error("Fullscreen mode failed:", error);

    }

});


// =====================================
// FULLSCREEN BUTTON UPDATE
// =====================================

document.addEventListener("fullscreenchange", function () {

    if (document.fullscreenElement) {

        fullscreenBtn.textContent = "⛶";

        fullscreenBtn.setAttribute("aria-label", "Exit fullscreen");

    } else {

        fullscreenBtn.textContent = "⛶";

        fullscreenBtn.setAttribute("aria-label", "Fullscreen");

    }

});


// =====================================
// LOADING SPINNER
// =====================================

video.addEventListener("waiting", function () {

    loader.classList.add("show");

});


video.addEventListener("playing", function () {

    loader.classList.remove("show");

});


video.addEventListener("canplay", function () {

    loader.classList.remove("show");

});


// =====================================
// KEYBOARD SHORTCUTS
// =====================================

document.addEventListener("keydown", function (event) {

    // Avoid interfering with input fields

    if (
        event.target.tagName === "INPUT" ||
        event.target.tagName === "SELECT"
    ) {
        return;
    }

    // Space = Play/Pause

    if (event.code === "Space") {

        event.preventDefault();

        togglePlay();

    }

    // Arrow Right = Forward 5 seconds

    if (event.code === "ArrowRight") {

        video.currentTime = Math.min(
            video.duration || Infinity,
            video.currentTime + 5
        );

    }

    // Arrow Left = Backward 5 seconds

    if (event.code === "ArrowLeft") {

        video.currentTime = Math.max(
            0,
            video.currentTime - 5
        );

    }

    // M = Mute/Unmute

    if (event.key.toLowerCase() === "m") {

        video.muted = !video.muted;

        updateMuteButton();

    }

});


// =====================================
// VIDEO ENDED
// =====================================

video.addEventListener("ended", function () {

    player.classList.remove("playing");

    playBtn.textContent = "▶";

});