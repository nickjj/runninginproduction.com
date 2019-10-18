$(document).on("turbolinks:load", function() {
  var $player = $(".player");

  if ($player.length) {
    var episode = $player.data("episode");
    var key = "currentTimeForEpisode" + episode;

    $player[0].currentTime = localStorage.getItem(key);

    $player.bind("timeupdate", function() {
      localStorage.setItem(key, this.currentTime);
    });
  }
});
