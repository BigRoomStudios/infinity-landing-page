$(function(){
  var seconds;
  var temp;

  function redirectToSite(){
    window.location.href = 'http://bigroomstudios.com';
  }

  function countdown() {
    seconds = document.getElementById('countdown').innerHTML;
    seconds = parseInt(seconds, 10);
    if (seconds === 1) {
      $('.container').addClass('animated zoomOut');
      temp = document.getElementById('countdown');
      temp.innerHTML = 'Greetings';
      return redirectToSite();
    }
    seconds--;
    temp = document.getElementById('countdown');
    temp.innerHTML = seconds;
    addTimeout = setTimeout(countdown, 1000);
  }

  countdown();
});
