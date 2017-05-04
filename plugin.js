$(function(){

  $.fn.EmbedYoutube = function(options) {

    var self = $(this);
    options = options || {};
    options.YoutubeVideoID = options.YoutubeVideoID ||  $(this).attr("data-youtube-id");

    if(!options.YoutubeVideoID) {
      throw new Error("No Youtube video ID provided");
    }
    else {

      var youtubeThumbnailObj = '<img class="youtube-thumb" src="https://i.ytimg.com/vi/' + options.YoutubeVideoID +  '/hqdefault.jpg"><div class="play-button"></div>';
      self.append(youtubeThumbnailObj);

      self.find(".play-button").on('click', function() {
        var youtubeVideoIFrame = $("<iframe></iframe>");
        youtubeVideoIFrame.attr("src", "https://www.youtube.com/embed/" + options.YoutubeVideoID + "?autoplay=1&cc_load_policy=1");
        youtubeVideoIFrame.attr("frameborder", "0");
        youtubeVideoIFrame.attr("allowfullscreen", "1");
        youtubeVideoIFrame.attr("class", "youtube-iframe");
        //self.replaceWith($("<div class='youtube-container'></div>").append(youtubeVideoIFrame));
        self.replaceWith(youtubeVideoIFrame);
      });

    }
  }
});

$(function() {
  $("#playVideo").EmbedYoutube();
})
