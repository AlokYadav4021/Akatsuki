let sho = document.getElementById("show");
let hid = document.getElementById("hide");
let ist = document.querySelector("li");
let list = document.getElementById("ual");

function show() {
  if ((list.style.visibility = "hidden")) {
    list.style.visibility = "visible";
    hid.style.visibility = "visible";
    sho.style.visibility = "hidden";
  }
}

function shed() {
  if ((list.style.visibility = "visible")) {
    list.style.visibility = "hidden";
    hid.style.visibility = "hidden";
    sho.style.visibility = "visible";
  }
}

let slideIndex = 1;

showSlides(slideIndex);

function plusSlides(n) {
  showSlides((slideIndex += n));
}

function currenSlide(n) {
  showSlides((slideIndex = n));
}

function showSlides(n) {
  let i;
  let slides = document.getElementsByClassName("slideImage");

  if (n > slides.length) {
    slideIndex = 1;
  }

  if (n < 1) {
    slideIndex = slides.length;
  }

  for (i = 0; i < slides.length; i++) {
    slides[i].style.display = "none";
  }

  slides[slideIndex - 1].style.display = "block";
}

//Automatic slider
setInterval(function () {
  plusSlides(1);
}, 4000);

