const hamburgerButton = document.getElementById("hamburger");
const navList = document.getElementById("nav-list");

function toggleButton() {
  navList.classList.toggle("show");
}
hamburgerButton.addEventListener("click", toggleButton);

// let resume = document.querySelector("#resume");
// let image = document.createElement("img");
// image.src = "./icons/resume.png";
// function toggleResumeImg() {
//   resume.innerHTML = image;
// }
