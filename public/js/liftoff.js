
  function playExitAnimation() {
    $('.text, .clouds').addClass('animated zoomOut');
    $('.chemtrail').css({'background-color': 'transparent'})
    $('.rocket').addClass('animated fadeOutUp');
    setTimeout(function() {
      window.location = '/flightplan';
    },700);
  }

  $(function(){
    $('.btn').click(playExitAnimation);
  })
