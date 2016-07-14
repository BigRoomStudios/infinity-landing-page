
  function playExitAnimation() {
    $('.text, .clouds').addClass('animated zoomOut');
    $('.rocket').addClass('animated zoomOutUp');
    setTimeout(function() {
      window.location = '/flightplan';
    },700);
  }

  $(function(){
    $('.btn').click(playExitAnimation);
  })
