const hamburger = document.getElementById("hamburger");
const menuContent = document.getElementById("menu-content");

hamburger.addEventListener("click", () => {
  menuContent.classList.toggle("open");
});