const videoPlayer = document.querySelector('.player__video.viewer');

const playButton = document.querySelector('.player__button.toggle');
const volumeRange = document.querySelector('input[name="volume"]');
const playbackRateRange = document.querySelector('input[name="playbackRate"]');
const skipButtons = document.querySelectorAll('button[data-skip]');
const progress = document.querySelector('.progress');
const progressFilled = document.querySelector('.progress__filled');

function togglePlayVideo() {
    const method = videoPlayer.paused ? 'play' : 'pause';
    videoPlayer[method]();
}

function updatePlayButtonText() {
    playButton.innerHTML = this.paused ? '►' : '❚ ❚';
}

function setVolume() {
    videoPlayer.volume = volumeRange.value;
}

function setPlaybackRate() {
    videoPlayer.playbackRate = playbackRateRange.value;
}

function updateCurrentTime() {
    const offset = Number(this.dataset.skip);
    videoPlayer.currentTime += offset;
}

function updateProgressBar() {
    const percentDone = videoPlayer.currentTime / videoPlayer.duration * 100;
    progressFilled.style.width = `${percentDone}%`;
    progressFilled.style.flexBasis = `${percentDone}%`;
}

function handleProgressClick(event) {
    const progressPercentage = event.offsetX / progress.offsetWidth;
    videoPlayer.currentTime = videoPlayer.duration * progressPercentage;
}

videoPlayer.addEventListener('click', togglePlayVideo);
videoPlayer.addEventListener('timeupdate', updateProgressBar);
videoPlayer.addEventListener('pause', updatePlayButtonText);
videoPlayer.addEventListener('play', updatePlayButtonText);

let mouseDown = false;
progress.addEventListener('click', handleProgressClick);
progress.addEventListener('mousemove', (e) => mouseDown && handleProgressClick(e));
progress.addEventListener('mousedown', () => mouseDown = true);
progress.addEventListener('mouseup', () => mouseDown = false);


playButton.addEventListener('click', togglePlayVideo);

volumeRange.addEventListener('change', setVolume);
volumeRange.addEventListener('mousemove', setVolume);

playbackRateRange.addEventListener('change', setPlaybackRate);
playbackRateRange.addEventListener('mousemove', setPlaybackRate);

skipButtons.forEach(button => button.addEventListener('click', updateCurrentTime));
