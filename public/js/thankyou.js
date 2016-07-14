$(function(){
  'use-scrict';
  var seconds;
  var temp;

 function countdown() {
   seconds = document.getElementById('countdown').innerHTML;
   seconds = parseInt(seconds, 10);
   if (seconds == 1) {
    $('.container').addClass('animated zoomOut');
     temp = document.getElementById('countdown');
     temp.innerHTML = "0";
     return;
   }
   seconds--;
   temp = document.getElementById('countdown');
   temp.innerHTML = seconds;
   addTimeout= setTimeout(countdown, 1000);
 }

 countdown();

  setTimeout(function() {

    window.location.href = 'http://bigroomstudios.com';
  }, 10000);
});
