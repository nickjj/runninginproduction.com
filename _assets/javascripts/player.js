$(document).on("turbolinks:load", function() {
  var $player = $(".js-audio");
  var $audioSeek = $(".audio-seek");
  var players = document.querySelectorAll(".js-audio-player");
  if (players.length) {
    players.forEach(initPlayer);
  }

  if ($player.length) {
    var episode = $player.data("episode");
    var key = "currentTimeForEpisode" + episode;

    $player[0].currentTime = localStorage.getItem(key);

    $player.bind("timeupdate", function() {
      localStorage.setItem(key, this.currentTime);
    });

    $audioSeek.click(function(e) {
      e.preventDefault();
      $player[0].currentTime = $(this).data("audio-seek");
    });
  }
});

function initPlayer(playerContainer) {
  const audio = playerContainer.querySelector(".js-audio");
  const playButton = playerContainer.querySelector(".js-play");
  const pauseButton = playerContainer.querySelector(".js-pause");
  const replayButton = playerContainer.querySelector(".js-replay");
  const forwardButton = playerContainer.querySelector(".js-forward");
  const playbackSpeedButton = playerContainer.querySelector(
    ".js-playback-speed"
  );
  const volumeButton = playerContainer.querySelector(".js-volume");
  const copyTimeButton = playerContainer.querySelector(".js-copy-time");

  const copyMsg = playerContainer.querySelector(".js-copy-msg");
  const playbackTime = playerContainer.querySelector(".js-playback-time");
  const progressSliderBg = playerContainer.querySelector(
    ".js-progress-slider-background"
  );
  const progressSlider = playerContainer.querySelector(".js-progress-slider");
  const volumeSliderBg = playerContainer.querySelector(
    ".js-volume-slider-background"
  );
  const volumeSlider = playerContainer.querySelector(".js-volume-slider");
  let isLoaded = false;
  let isProgressSliderDrag = false;
  let isVolumeSliderDrag = false;
  let previousVolume = 1.0;
  if (audio.readyState >= 2) {
    updatePlaybackTime(playbackTime, 0, audio.duration);
  } else {
    audio.addEventListener("loadedmetadata", () => {
      updatePlaybackTime(playbackTime, 0, audio.duration);
      isLoaded = true;
    });
  }
  audio.addEventListener("timeupdate", () => {
    if (!isProgressSliderDrag) {
      const fraction = audio.currentTime / audio.duration;
      updateSlider(progressSlider, fraction);
      updatePlaybackTime(playbackTime, audio.currentTime, audio.duration);
    }
  });
  audio.addEventListener("play", () => {
    playButton.style.display = "none";
    pauseButton.style.display = "";
  });
  audio.addEventListener("pause", () => {
    playButton.style.display = "";
    pauseButton.style.display = "none";
  });
  audio.addEventListener("ended", () => {
    audio.pause();
    playButton.style.display = "";
    pauseButton.style.display = "none";
  });

  function toggleMute(audio, volumeSlider, volumeButton) {
    if (audio.muted) {
      audio.muted = false;
      updateVolumeButton(volumeButton, previousVolume);
      updateSlider(volumeSlider, previousVolume);
      updateVolume(audio, previousVolume);
    } else {
      audio.muted = true;
      updateVolumeButton(volumeButton, 0);
      updateSlider(volumeSlider, 0);
      updateVolume(audio, 0);
    }
  }

  function dragStart(event) {
    const target = event.target;
    switch (target) {
      case progressSliderBg:
        if (isLoaded === true) {
          isProgressSliderDrag = true;
        }
        break;
      case volumeSliderBg:
        isVolumeSliderDrag = true;
        break;
    }
  }

  function dragMove(event) {
    if (isProgressSliderDrag === true && isLoaded === true) {
      const fraction = getSliderFraction(event, progressSliderBg);
      updateSlider(progressSlider, fraction);
      updatePlaybackTime(
        playbackTime,
        fraction * audio.duration,
        audio.duration
      );
      playbackTime.classList.add("playback-time-highlight");
    } else if (isVolumeSliderDrag === true) {
      var fraction = getSliderFraction(event, volumeSliderBg);
      updateVolumeButton(volumeButton, fraction);
      updateSlider(volumeSlider, fraction);
      updateVolume(audio, fraction);
    }
  }

  function dragEnd(event) {
    if (isProgressSliderDrag === true && isLoaded === true) {
      isProgressSliderDrag = false;
      var fraction = getSliderFraction(event, progressSliderBg);
      updateSlider(progressSlider, fraction);
      seekPosition(audio, fraction);
      playbackTime.classList.remove("playback-time-highlight");
    } else if (isVolumeSliderDrag === true) {
      const fraction = getSliderFraction(event, volumeSliderBg);
      if (fraction != 0.0) {
        previousVolume = fraction;
      }
      isVolumeSliderDrag = false;
    }
  }

  progressSliderBg.addEventListener("mousedown", dragStart);
  progressSliderBg.addEventListener("touchstart", dragStart);
  volumeSliderBg.addEventListener("mousedown", dragStart);
  volumeSliderBg.addEventListener("touchstart", dragStart);
  document.addEventListener("mousemove", dragMove);
  document.addEventListener("touchmove", dragMove);
  document.addEventListener("mouseup", dragEnd);
  document.addEventListener("touchend", dragEnd);

  playerContainer.addEventListener("click", function(event) {
    const target = event.target;
    const eventPath = event.composedPath();
    let fraction;
    if (isLoaded === true){
      switch (true) {
        case eventPath.includes(playButton):
          togglePlay(audio, playButton, pauseButton);
          break;
        case eventPath.includes(pauseButton):
          togglePlay(audio, playButton, pauseButton);
          break;
        case eventPath.includes(replayButton):
          replay(audio);
          break;
        case eventPath.includes(forwardButton):
          forward(audio);
          break;
        case eventPath.includes(playbackSpeedButton):
          speedPlay(audio, playbackSpeedButton);
          break;
        case eventPath.includes(volumeButton):
          toggleMute(audio, volumeSlider, volumeButton);
          break;
        case eventPath.includes(progressSliderBg):
          fraction = getSliderFraction(event, progressSliderBg);
          seekPosition(fraction, audio);
          updateSlider(progressSlider, fraction);
          break;
        case eventPath.includes(volumeSliderBg):
          fraction = getSliderFraction(event, volumeSliderBg);
          updateSlider(volumeSlider, fraction);
          updateVolume(audio, fraction);
          if (fraction != 0.0) {
            previousVolume = fraction;
          }
          break;
        case eventPath.includes(copyTimeButton):
          copyUrlTime(audio, copyMsg);
      }
    }
  });
}

function getSliderFraction(event, Slider) {
  let x;
  const leftOffset = Slider.getBoundingClientRect().left;
  if (event.type == "touchmove") {
    x = event.touches[0].clientX - leftOffset;
  } else if (event.type == "touchend") {
    x = event.changedTouches[0].clientX - leftOffset;
  } else {
    x = event.clientX - leftOffset;
  }
  let fraction = x / Slider.clientWidth;
  fraction = Math.min(fraction, 1);
  fraction = Math.max(fraction, 0);
  return fraction;
}

function updateSlider(Slider, fraction) {
  Slider.style.width = (fraction * 100).toString() + "%";
}

function seekPosition(audio, fraction) {
  audio.currentTime = fraction * audio.duration;
}

function copyUrlTime(audio, copyMsg) {
  copyMsg.style.display = "inline";
  copyMsg.style.opacity = 1;
  setTimeout(function() {
    copyMsg.style.opacity = 0;
    copyMsg.style.display = "hide";
  }, 1000);
  const url = window.location.href;
  const time = secondsToMinuteSecond(audio.currentTime);
  const tempTextArea = document.createElement("textarea");
  tempTextArea.value = url + time;
  document.body.appendChild(tempTextArea);
  tempTextArea.select();
  tempTextArea.setSelectionRange(0, 1000);
  document.execCommand("copy");
  document.body.removeChild(tempTextArea);
}

function updatePlaybackTime(playbackTime, currentTime, duration) {
  if (duration > 3600) {
    var currentTimeString = secondsToHourMinuteSecond(currentTime);
    var durationString = secondsToHourMinuteSecond(duration);
  } else {
    var currentTimeString = secondsToMinuteSecond(currentTime);
    var durationString = secondsToMinuteSecond(duration);
  }
  playbackTime.innerHTML = currentTimeString + " / " + durationString;
}

function updateVolume(audio, fraction) {
  audio.volume = fraction;
  if (fraction === 0.0) {
    audio.muted = true;
  } else {
    audio.muted = false;
  }
}
function updateVolumeButton(volumeButton, fraction) {
  if (fraction === 0.0) {
    volumeButton.firstElementChild.innerHTML = "volume_off";
  } else if (fraction < 0.5) {
    volumeButton.firstElementChild.innerHTML = "volume_down";
  } else {
    volumeButton.firstElementChild.innerHTML = "volume_up";
  }
}

function speedPlay(audio, playbackSpeedButton) {
  const span = playbackSpeedButton.querySelector("span");
  switch (audio.playbackRate) {
    case 1:
      audio.playbackRate = 1.1;
      span.innerHTML = "&times;1.10";
      break;
    case 1.1:
      audio.playbackRate = 1.25;
      span.innerHTML = "&times;1.15";
      break;
    case 1.25:
      audio.playbackRate = 1.5;
      span.innerHTML = "&times;1.50";
      break;
    case 1.5:
      audio.playbackRate = 0.75;
      span.innerHTML = "&times;0.75";
      break;
    case 0.75:
      audio.playbackRate = 1;
      span.innerHTML = "&times;1.00";
      break;
    default:
      audio.playbackRate = 1;
      span.innerHTML = "&times;1.00";
  }
}

function replay(audio) {
  audio.currentTime = audio.currentTime - 10;
}

function forward(audio) {
  audio.currentTime = audio.currentTime + 30;
}

function secondsToMinuteSecond(s) {
  const minutes = Math.floor(s / 60).toString();
  const seconds = Math.floor(s % 60).toString();
  return minutes.padStart(2, "0") + ":" + seconds.padStart(2, "0");
}

function secondsToHourMinuteSecond(s) {
  const hours = Math.floor(s / 3600)
    .toString()
    .padStart(2, "0");
  const minutes = Math.floor((s % 3600) / 60)
    .toString()
    .padStart(2, "0");
  const seconds = Math.floor((s % 3600) % 60)
    .toString()
    .padStart(2, "0");
  return hours + ":" + minutes + ":" + seconds;
}

function togglePlay(audio, playButton, pauseButton) {
  if (audio.paused) {
    audio.play();
  } else {
    audio.pause();
  }
}
