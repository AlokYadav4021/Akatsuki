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


