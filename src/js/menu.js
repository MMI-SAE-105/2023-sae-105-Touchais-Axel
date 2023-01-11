const hamburgerButton = document.getElementById("hamburger");
const menuContent = document.getElementById("menu-content");
const closeButton = document.getElementById("close-button");

hamburgerButton.addEventListener("click", () => {
  menuContent.classList.toggle("open");
});

closeButton.addEventListener("click", () => {
  menuContent.classList.remove("open");
});

const toggleButtons = document.querySelectorAll(".toggle-button");

for (let button of toggleButtons) {
    button.addEventListener("click", e => {
        let subMenu = e.target.nextElementSibling;
        subMenu.classList.toggle("show");
    });
}

const toggleButtons2 = document.querySelectorAll(".toggle-button2");

for (let button of toggleButtons) {
    button.addEventListener("click", e => {
        let subMenu2 = e.target.nextElementSibling;
        subMenu2.classList.toggle("show");
    });
}

const toggleButtons3 = document.querySelectorAll(".toggle-button3");

for (let button of toggleButtons) {
    button.addEventListener("click", e => {
        let subMenu3 = e.target.nextElementSibling;
        subMenu3.classList.toggle("show");
    });
}