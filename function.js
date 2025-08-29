
window.onload = function() {
  alert("Page has finished loading!");
};

const imageButton = document.getElementById("imageButton");
const changeImage = document.getElementById("changeImage");

imageButton.onmousedown = function() {
  changeImage.src = "/home/ditsdev/Eventlistner/generated-image.png";
};

imageButton.onmouseup = function() {
  changeImage.src = "/home/ditsdev/Eventlistner/generated-image.png";
};


const focusInput = document.getElementById("focusInput");
focusInput.onfocus = function() {
  focusInput.style.backgroundColor = "yellow";
};
focusInput.onblur = function() {
  focusInput.style.backgroundColor = "";
};


const hoverBox = document.getElementById("hoverBox");
hoverBox.onmouseover = function() {
  hoverBox.style.backgroundColor = "blue";
};
hoverBox.onmouseout = function() {
  hoverBox.style.backgroundColor = "gray";
};


