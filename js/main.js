console.log("Hello World");

/*
document.getElementById("slides").innerHTML =
  "<ol><li>html data</li><li>Slide 1</li></ol>";
  */

var slides = document.querySelectorAll("#slides .slide");
var currentSlide = 0;
var slideInterval = setInterval(nextSlide, 2000);

function nextSlide() {
  slides[currentSlide].className = "slide";
  currentSlide = (currentSlide + 1) % slides.length;
  slides[currentSlide].className = "slide showing";
}
