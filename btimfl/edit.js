document.body.style.overflow="hidden";
var browserHeight = document.documentElement.clientHeight;
console.log(browserHeight);

// document.getElementById("body").style.height = w;
a=browserHeight + "px";
document.getElementById("body").style.height = a;

var x=.20*browserHeight;
h= x + "px"
document.getElementById("header").style.height = h;

var elmnt = document.querySelector(".container-two");
var txt = "Height with padding and border: " + elmnt.offsetHeight + "px";
var ctwo = elmnt.offsetHeight;
console.log(ctwo);
var whatleft= (.8*browserHeight)-ctwo;
console.log(whatleft);
var p= .5*whatleft;
var q= p + "px";
document.querySelector(".container-two").style.marginTop= q;
document.querySelector(".container-two").style.marginBottom= q;

//txt += "Width with padding and border: " + elmnt.offsetWidth + "px";

//const styleElement = getComputedStyle(document.querySelector(".container-two"));
//console.log(styleElement.height);
//var ctwo = styleElement.height;
//var ctwo = document.querySelector(".container-two").height;
//console.log(ctwo);
//var whatleft= (.8*w)-ctwo;
//var p= .5*whatleft;
// q=p + "px";
// document.querySelector(".container-two").style.marginTop= q;
// document.querySelector(".container-two").style.marginBottom= q;
