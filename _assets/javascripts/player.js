$(document).on("turbolinks:load", function() {
  var players = document.querySelectorAll(".js-audio-player");
  if (players.length) {
    for (let i=0; i<players.length; i++) {
      initPlayer(players[i],i);
    }
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
    setCurrentTimeFromLocalStorage(audio);
    setCurrentTimeFromUrl(audio);
    isLoaded = true;
  } else {
    audio.addEventListener("loadedmetadata", function () {
      updatePlaybackTime(playbackTime, 0, audio.duration);
      setCurrentTimeFromLocalStorage(audio);
      setCurrentTimeFromUrl(audio);
      isLoaded = true;
    }); 
  }
  function setCurrentTimeFromLocalStorage(audio){
      const episode = audio.querySelector("source").dataset.episode;
      const key = "currentTimeForEpisode"+episode;
      audio.currentTime = localStorage.getItem(key);

      audio.addEventListener("timeupdate", function() {
        localStorage.setItem(key, this.currentTime);
      });
  }

  audio.addEventListener("timeupdate", function () {
    if (!isProgressSliderDrag) {
      const fraction = audio.currentTime / audio.duration;
      updateSlider(progressSlider, fraction);
      updatePlaybackTime(playbackTime, audio.currentTime, audio.duration);
    }
  });
  audio.addEventListener("play", function () {
    playButton.style.display = "none";
    pauseButton.style.display = "";
  });
  audio.addEventListener("pause", function () {
    playButton.style.display = "";
    pauseButton.style.display = "none";
  });
  audio.addEventListener("ended", function () {
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
      const fraction = getSliderFraction(event, volumeSliderBg);
      updateVolumeButton(volumeButton, fraction);
      updateSlider(volumeSlider, fraction);
      updateVolume(audio, fraction);
    }
  }

  function dragEnd(event) {
    if (isProgressSliderDrag === true && isLoaded === true) {
      isProgressSliderDrag = false;
      const fraction = getSliderFraction(event, progressSliderBg);
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

  playButton.addEventListener("click", function(event) {
    if (isLoaded === true){
      togglePlay(audio);
    }
  });
  pauseButton.addEventListener("click", function(event) {
    if (isLoaded === true){
      togglePlay(audio);
    }
  });
  playbackSpeedButton.addEventListener("click", function(event) {
    if (isLoaded === true){
      speedPlay(audio, playbackSpeedButton);
    }
  });
  volumeButton.addEventListener("click", function(event) {
    if (isLoaded === true){
      toggleMute(audio, volumeSlider, volumeButton);
    }
  });
  progressSliderBg.addEventListener("click", function(event) {
    if (isLoaded === true){
      const fraction = getSliderFraction(event, progressSliderBg);
      seekPosition(audio, fraction);
      updateSlider(progressSlider, fraction);
    }
  });
  volumeSliderBg.addEventListener("click", function(event) {
    if (isLoaded === true){
      fraction = getSliderFraction(event, volumeSliderBg);
      updateSlider(volumeSlider, fraction);
      updateVolume(audio, fraction);
      if (fraction != 0.0) {
        previousVolume = fraction;
      }
    }
  });
  copyTimeButton.addEventListener("click", function(event) {
    if (isLoaded === true){
      copyUrlTime(audio, copyMsg);
    }
  });

function setCurrentTimeFromUrl(audio) {
  function isInteger(num){
    if (typeof num==='number' && !isNaN(num) &&  num===parseInt(num, 10)){
      return true;
    }else{
      return false;
    }
  }
  let timestamp = window.location.href.split("#")[1];
  if (timestamp){
    timestamp = timestamp.split(":");
    timestamp = timestamp.map(Number);
    let onlyIntegers = true;
    timestamp.forEach(function(num){
      if(!isInteger(num)){
        onlyIntegers=false;
      }
    });
    if (onlyIntegers){
      if (timestamp.length==2){
        minutes = timestamp[0];
        seconds = timestamp[1];
        const setAudioSeconds = minutes*60 + seconds
        if (setAudioSeconds < audio.duration){
          audio.currentTime = setAudioSeconds;
        }
      } else if(timestamp.length==3){
        hours = timestamp[0];
        minutes = timestamp[1];
        seconds = timestamp[2];
        const setAudioSeconds = hours*3600 + minutes*60 + seconds;
        if (setAudioSeconds < audio.duration){
          audio.currentTime = setAudioSeconds;
        }
      }
    }
  }
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
  const url = window.location.href.split("#")[0];
  let time = 0
  if (audio.duration>=3600){
    time = secondsToHourMinuteSecond(audio.currentTime);
  } else{
    time = secondsToMinuteSecond(audio.currentTime);
  }
  const timestampedUrl = url +"#"+time;
  if (window.clipboardData) { // for IE
    window.clipboardData.setData("Text", timestampedUrl);        
  } else{
    const tempTextArea = document.createElement("textarea");
    tempTextArea.value = timestampedUrl;
    document.body.appendChild(tempTextArea);
    tempTextArea.select();
    document.execCommand("copy");
    document.body.removeChild(tempTextArea);
  }

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
    volumeButton.firstElementChild.classList.add("icon-volumeoff")
    volumeButton.firstElementChild.classList.remove("icon-volumeup")
    volumeButton.firstElementChild.classList.remove("icon-volumedown")
  } else if (fraction < 0.5) {
    volumeButton.firstElementChild.classList.add("icon-volumedown")
    volumeButton.firstElementChild.classList.remove("icon-volumeup")
    volumeButton.firstElementChild.classList.remove("icon-volumeoff")
  } else {
    volumeButton.firstElementChild.classList.add("icon-volumeup")
    volumeButton.firstElementChild.classList.remove("icon-volumedown")
    volumeButton.firstElementChild.classList.remove("icon-volumeoff")
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

function zeroPaddingString(number, size){
  let line = number.toString();
  while (line.length<size){
    line = "0"+line;
  }
  return line; 
}
 
function secondsToMinuteSecond(s) {
  const minutes = zeroPaddingString(Math.floor(s / 60),2);
  const seconds = zeroPaddingString(Math.floor(s % 60),2);
  return minutes + ":" + seconds;
}

function secondsToHourMinuteSecond(s) {
  const hours = zeroPaddingString(Math.floor(s / 3600),2);
  const minutes = zeroPaddingString(Math.floor((s % 3600) / 60),2);
  const seconds = zeroPaddingString(Math.floor((s % 3600) % 60),2);
  return hours + ":" + minutes + ":" + seconds;
}

function togglePlay(audio) {
  if (audio.paused) {
    audio.play();
  } else {
    audio.pause();
  }
}
}
