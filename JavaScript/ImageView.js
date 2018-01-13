var slideIndex = 0;
var slides = document.getElementsByClassName("slideImage");

showSlides();

function showSlides() {    
    var i;    
    for (i = 0; i < slides.length; i++) {
        slides[i].style.display = "none"; 
        slides[i].style.opacity = 0;
    }
    slideIndex++;
    if (slideIndex> slides.length) {
        slideIndex = 1;
    }
    slides[slideIndex-1].style.display = "block";
    fadeIn(slides[slideIndex-1]);
    //fadeOut(slides[slideIndex-1]);
    setTimeout(fadeIn, 4000);
    setTimeout(showSlides, 5000); // Change image every 5 seconds
}

function currentSlide(no) {
    var i;    
    for (i = 0; i < slides.length; i++) {
        slides[i].style.display = "none"; 
    }
    slideIndex = no;
    slides[no-1].style.display = "block";
}

function plusSlides(n) {
    var newslideIndex = slideIndex + n;
    
  if(newslideIndex < 4 && newslideIndex > 0){
     currentSlide(newslideIndex);
  }
}

function fadeOut(element) {
    var op = 1;  // initial opacity
    var timer = setInterval(function () {
        if (op <= 0.1){
            clearInterval(timer);
        }
        element.style.opacity = op;
        op -= 0.1;
    }, 10);
}

function fadeIn(element) {
    var op = 0.1;  // initial opacity
    var timer = setInterval(function () {
        if (op >= 1){
            clearInterval(timer);
        }
        element.style.opacity = op;
        op += 0.1;
    }, 40);
}