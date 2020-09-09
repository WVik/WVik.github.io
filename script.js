 
//var me = document.querySelector(".me >h1");
//var current = me.style.left;
//var pos = me.getBoundingClientRect().top;


//document.addEventListener("scroll", function(){
 // var curr_pos_top = me.getBoundingClientRect().top;
 // var curr_pos_left_string = /\d*/.exec(me.style.left)[0];
  
  //me.style.left=curr_pos_left_string+5+"px";
  
  
//});


document.addEventListener("scroll", function(){
  var cardme_pos = document.querySelector(".card-me").getBoundingClientRect();
  var height = document.querySelector(".card-me").clientHeight;

  if(cardme_pos.top < -0.5*height && cardme_pos.top > -0.75*height){
  	//$('body,html').animate({scrollBottom: -0.5*height}, 200);
    //document.querySelector(".card-skills").scrollIntoView({});
    //document.removeEventListener("scroll", this);

  }



});




document.addEventListener("scroll", function(){
 
 
var top_pos = document.querySelector(".middle-square").getBoundingClientRect().top;


$('.belt').css("transform", "translateX(-" + parseInt(top_pos/4.5 - 7) + "%)");
 var slide = document.querySelector(".belt").style.transform 
 
})


