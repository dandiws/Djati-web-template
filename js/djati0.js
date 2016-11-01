//SMOOTH SCROLL

  $(document).ready(function() {
    $("a").on('click',function(event){
      if(this.hash !==""){
        event.preventDefault();

        var hash=this.hash;

        $('html,body').animate({
          scrollTop:$(hash).offset().top
        },800,function(){
            window.location.hash=hash;
          });
        }
      });
    });
    
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
$(window).scroll(function(){
  if($(window).scrollTop()>=banyakscroll){
    document.getElementById("head-trigger").checked=true;
  }
  else if($(window).scrollTop()==0){
    document.getElementById("head-trigger").checked=false;
  }
});
