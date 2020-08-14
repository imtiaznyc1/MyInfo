function slide1(){
  var t = window.pageYOffset;
  if(t>-10){
    document.getElementById("bio").style.marginLeft = "33%";
    document.getElementById("face").style.marginLeft = "0.5%";
    document.getElementById("bio").style.opacity = "1";
    document.getElementById("face").style.opacity = "1";
    document.getElementById("icons").style.opacity = "1";
  }

}


function slide2(){
  var t = window.pageYOffset;
  if(t>145){
    document.getElementById("bd").style.marginLeft = "35%";
    document.getElementById("usFlag").style.marginLeft = "64%";
    document.getElementById("bd").style.opacity = "1";
    document.getElementById("usFlag").style.opacity = "1";
    document.getElementById("bio2").style.marginLeft = "0.5%";
    document.getElementById("bio2").style.opacity = "1";
    document.getElementById("divider1").style.opacity = "1";
  }

  if(t>1100){
    document.getElementById("tunes").style.opacity = "1";
    document.getElementById("divider2").style.opacity = "1";
  }

  if(t>2700){
    document.getElementById("k").style.opacity = "1";
    document.getElementById("projects").style.opacity = "1";
    document.getElementById("clunk").style.marginLeft = "-0.4%";
    document.getElementById("clunkD").style.marginLeft = "49.7%";

    document.getElementById("divider3").style.opacity = "1";
  }

  if(t>3000){
    document.getElementById("passcode").style.marginLeft = "49.7%";
    document.getElementById("passcodeD").style.marginLeft = "-0.4%";
  }
}

var playing1 = false;
var playing2 = false;
var playing3 = false;
function p(){
  playing1 = !playing1;
  if(playing1){
    document.getElementById("first").play();
  }else{
    document.getElementById("first").pause();
  }
}

function p2(){
  playing2 = !playing2;
  if(playing2){
    document.getElementById("second").play();
  }else{
    document.getElementById("second").pause();
  }
}

function p3(){
  playing3 = !playing3;
  if(playing3){
    document.getElementById("third").play();
  }else{
    document.getElementById("third").pause();
  }
}

slide1();
document.addEventListener("scroll", slide2);
document.getElementById("first").addEventListener("mouseover", p);
document.getElementById("first").addEventListener("mouseout", p);

document.getElementById("second").addEventListener("mouseover", p2);
document.getElementById("second").addEventListener("mouseout", p2);

document.getElementById("third").addEventListener("mouseover", p3);
document.getElementById("third").addEventListener("mouseout", p3);
