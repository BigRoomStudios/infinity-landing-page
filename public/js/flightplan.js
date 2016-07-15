function playExitAnimation() {
  $('.rocket').removeClass('shake');
  $('.rocket').addClass('flip');
  $('.container').addClass('animated zoomOut')
  setTimeout(function() {
    $('.blastoff').removeClass('hidden');
    $('.blastoff').addClass('animated bounceInDown')
    $('.rocket').removeClass('rocketWobble');
    $('.rocket').addClass('pulse');
        setTimeout(function(){
          $('.rocket').removeClass('flip');
          $('.rocket').addClass('bounceOutUp');
          $('.blastoff').removeClass('bounceInDown');
          $('.blastoff').addClass('animated zoomOut')
            setTimeout(function(){
              $('.planet-container').removeClass('slideInRight')
              $('.planet-container').addClass('animated zoomOut')
            }, 300);
              setTimeout(function() {
                window.location = '/thankyou';
              }, 700);
        }, 700);
      }, 700);
}

function addWobbleToRocket(){
  setTimeout(function() {
    $('.rocket').removeClass('bounceInUp');
    $('.rocket').addClass('rocketWobble');
  },1000);
}

$(function(){
  $('.btn').click(playExitAnimation);
  addWobbleToRocket();
})
