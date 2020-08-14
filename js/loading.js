var w = 5;
function changeColor(){
  var p = document.getElementById("rightBox");
  var colors = ["#1E2D7C", "#7A82AD", "#072BF0", "#D0D8CF", "#1F618D", "#F4D03F", "#F7F9F9", "#633974", "#76D7C4", "#979A9A", "#00FFFF", "#FF00FF", "#800080", "#000080", "#800000", "#7B241C", "#641E16"]

    p.style.backgroundColor = colors[Math.floor(Math.random() * colors.length)];

  var d = document.getElementById("loading");
  d.style.color = "white";
  //p.style.backgroundColor = "red";
}


function changeWidth(){
  w = w+Math.floor(Math.random() * 2)+1;
  var p = document.getElementById("rightBox");
  p.style.width = w+"%";
  var p2 = document.getElementById("leftBox");
  if(w>=75){
    var d = document.getElementById("loading");
    d.innerHTML = "CLICK HERE!";
    p2.style.backgroundColor = "black";
  }
}

function changeLoadingPage(){
  location.href = "homepage.html";
}

changeWidth();
var b = setInterval(changeColor, 1000);
var z = setInterval(changeWidth, 150);
