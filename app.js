"use strict"
//console.log("Test");
var slideIndex = 0;
var linkIndex = 0;
var linkIndexPrev = 0;
const slides = document.getElementsByClassName("mapsImg");
const links = document.getElementsByClassName("leftButtons");
setTimeout(showSlides,0);
// showSlides();//doesn't work the first iteration for some reason
function showSlides() {
  var i;
  slideIndex++;
  linkIndexPrev = linkIndex;
  if(slideIndex > slides.length){linkIndex = 0;}
  else{linkIndex = Math.floor((slideIndex-1)/3);}
  for (i = 0; i < slides.length; i++) {
    slides[i].style.display = "none";
    slides[i].style = "z-index : 1";
  }
  if(linkIndex !== linkIndexPrev){
    links[linkIndex].style.display = "block";
    for (i = 0; i < links.length; i++) {
      if(i != linkIndex){links[i].style.display = "none";}
    }
  }
  if (slideIndex > slides.length) {slideIndex = 1}
  if(slideIndex == slides.length){slides[0].style = "z-index : 4";slides[0].style.animation = "popin 2s";}
  else{slides[slideIndex].style = "z-index : 4";slides[slideIndex].style.animation = "popin 2s";}
  try{
    slides[slideIndex-1].style.display = "block";
    slides[slideIndex-1].style = "-webkit-filter : blur(0px)";
    slides[slideIndex-1].style = "z-index : 5";
    slides[slideIndex-1].style.animation = "popout 2s";
     }
  catch{}
  setTimeout(showSlides, 2000);
console.log(slideIndex-1);console.log(slides[slideIndex-1]);console.log(linkIndex);
}
