$(document).on("turbolinks:load", function() {
  var $podcast_or_interview = $("#podcast_or_interview");
  var $podcasts_or_interviews = $("#podcasts_or_interviews");
  var podcasts_selector = "#podcasts";
  var interviews_selector = "#interviews";
  var $podcasts = $(podcasts_selector);
  var $interviews = $(interviews_selector);
  var min_overflow_height = 1000;
  var overflow_adjust = 41;

  // Viewing a specific podcast episode or interview.
  if ($podcast_or_interview.length) {
    var overflow_height = min_overflow_height;
    var podcast_or_interview_height = $podcast_or_interview.height() + overflow_adjust;

    if (podcast_or_interview_height >= min_overflow_height) {
      overflow_height = podcast_or_interview_height;
    }

    $podcasts_or_interviews.css("max-height", overflow_height + "px");
  }

  // Viewing the home page or tags.
  //
  // Only set the overflow if:
  //   - There's both podcasts and interviews
  //   - There's a different amount of podcasts and interviews
  if (
    ($(podcasts_selector + " li").length > 0 && $(interviews_selector + " li").length > 0) &&
    ($(podcasts_selector + " li").length != $(interviews_selector + " li").length)
  ) {
    var podcasts_height = $podcasts.height();
    var interviews_height = $interviews.height();
    var podcasts_overflow_height = min_overflow_height;
    var interviews_overflow_height = min_overflow_height;

    if (podcasts_height >= min_overflow_height) {
      podcasts_overflow_height = podcasts_height;
    }

    if (interviews_height >= min_overflow_height) {
      interviews_overflow_height = interviews_height;
    }

    if (podcasts_height >= interviews_height) {
      $podcasts.css("max-height", interviews_overflow_height + "px");
    } else {
      $interviews.css("max-height", podcasts_overflow_height + "px");
    }
  }
});
