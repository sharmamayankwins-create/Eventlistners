
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


echo "# Eventlistners" >> README.md
git init
git add README.md
git commit -m "first commit"
git branch -M main
git remote add origin https://github.com/sharmamayankwins-create/Eventlistners.git
git push -u origin main