
  function playExitAnimation() {
    $('.text ').addClass('animated zoomOut');
    $('.clouds').addClass('animated slideOutDown');
    $('.chemtrail').addClass('takeOff');
    setTimeout(function() {
      window.location = '/flightplan';
    },700);
  }

  $(function(){
    $('.btn').click(playExitAnimation);
  })
