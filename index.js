document.getElementById("signIn").onclick = function () {
  window.location.href = "./src/screens/signIn_and_signUp/signIn.html";
};

document.getElementById("register").onclick = function () {
  window.location.href = "./src/screens/signIn_and_signUp/signUp.html";
};
// get started button
document.getElementById("get-started").onclick = function () {
  window.location.href = "./src/screens/signIn_and_signUp/signUp.html";
};
// coontact us button
document.getElementById("support-contact").onclick = function () {
  window.location.href = "./src/screens/contact/contact.html";
};

// Review section slideshow
var slideIndex = 0;
showSlides();
function showSlides() {
  let i;
  let slides = document.getElementsByClassName("slide");
  let dots = document.getElementsByClassName("dot");
  for (i = 0; i < slides.length; i++) {
    slides[i].style.display = "none";
  }
  for (i = 0; i < dots.length; i++) {
    dots[i].className = dots[i].className.replace(" active", "");
  }
  slideIndex++;

  if (slideIndex > slides.length) { slideIndex = 1 }
  slides[slideIndex - 1].style.display = "block";
  dots[slideIndex - 1].className += " active";

  setTimeout(showSlides, 3500);
}

