// script.js
var typed = new Typed("#typed-text", {
  strings: [
    "Web Developer",
    "Machine Learning Engineer",
    "Tech Enthusiast"
  ],
  typeSpeed: 50,
  backSpeed: 30,
  loop: true
});
// Enhance contact form appearance
document.addEventListener("DOMContentLoaded", function () {
  const contactForm = document.querySelector("form");
  if (contactForm) {
    contactForm.style.maxWidth = "400px";
    contactForm.style.margin = "auto";
    contactForm.style.backgroundColor = "#111";
    contactForm.style.padding = "30px";
    contactForm.style.borderRadius = "10px";
    contactForm.style.boxShadow = "0 0 20px rgba(0, 255, 255, 0.3)";
  }
});

