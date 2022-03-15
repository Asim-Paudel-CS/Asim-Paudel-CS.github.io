"use strict"
console.log("Girl Hello!");
var slideIndex = 0;
const slides = document.getElementsByClassName("mapsImg");
setTimeout(showSlides,0);
// showSlides();
function showSlides() {
  var i;
  slideIndex++;
  for (i = 0; i < slides.length; i++) {
    slides[i].style.display = "none";
  }
  if (slideIndex > slides.length) {slideIndex = 1}
  try{slides[slideIndex-1].style.display = "block";}  catch{}
  setTimeout(showSlides, 2000);
console.log(slideIndex-1);console.log(slides[slideIndex-1]);
}
