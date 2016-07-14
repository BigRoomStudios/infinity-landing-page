function playExitAnimation() {
  $('.clouds, .clouds-alt').addClass('cloud-take-off');
    setTimeout(function() {
      $('.rocket img').addClass('animated zoomOutUp');
      $('.rocket').addClass('rocketUp');
      $('.text').addClass('animated zoomOut');
      setTimeout(function() {
        window.location = '/liftoff';
      }, 700);
  }, 300);
}

$(function(){
  $('.btn').click(playExitAnimation);
})
