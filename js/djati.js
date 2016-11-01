//KEMUNCULAN BUTTON BACK TO TOP
$(window).scroll(function(){
if($(window).scrollTop()>=200){
  $('.gotop').fadeIn('slow');
}
else {
  $('.gotop').fadeOut('slow');
}
});

//HEADER HOME ANIMATION
  var banyakscroll=1;
  var s=$("#marginscroll");
  var pos=s.position();
$(window).scroll(function(){
  var windowpos=$(window).scrollTop();
  if($(window).scrollTop()>=banyakscroll){
    $(".menu").addClass("bg-menu");
    $(".header").addClass("height-header");
    var a=$(".header").position();
    if (windowpos>a.top) {
      $(".header").addClass("fixed");
    }
  }
  else if (windowpos>80) {
    $(".margin-scroll").css('height','80px');
  }
  else if($(window).scrollTop()==0){
    $(".header").removeClass("fixed");
    $(".header").removeClass("height-header");
  }
  else {
    $(".menu").removeClass("bg-menu");
  }
});

//SCROLL DOWN FOR ANIMATION
function scrollGan() {
  window.scrollBy(0,1);
}
