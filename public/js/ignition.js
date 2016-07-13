function playExitAnimation() {
  $('.rocket img').addClass('animated zoomOutUp');
  $('.rocket').addClass('rocketUp');
  $('.clouds').addClass('animated fadeOutDownBig');
  $('.text').addClass('animated zoomOut');
  setTimeout(function() {
    window.location = '/liftoff';
  }, 700);
}

$(function(){
  $('.btn').click(playExitAnimation);
})
