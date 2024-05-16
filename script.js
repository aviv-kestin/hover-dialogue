document.addEventListener("DOMContentLoaded", function() {
    const leftTexts = document.querySelectorAll(".left-text p");
    const rightTexts = document.querySelectorAll(".right-text p");
  
    leftTexts.forEach(text => {
      text.addEventListener("mouseenter", function() {
        document.querySelector(".image-left").style.opacity = 1;
      });
      text.addEventListener("mouseleave", function() {
        document.querySelector(".image-left").style.opacity = 0;
      });
    });
  
    rightTexts.forEach(text => {
      text.addEventListener("mouseenter", function() {
        document.querySelector(".image-right").style.opacity = 1;
      });
      text.addEventListener("mouseleave", function() {
        document.querySelector(".image-right").style.opacity = 0;
      });
    });
  });
  