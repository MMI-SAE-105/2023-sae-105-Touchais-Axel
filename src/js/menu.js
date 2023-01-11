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

function closeSiblingSubmenus(subMenu){
    let parent = subMenu.parentNode;
    let siblingSubmenus = parent.querySelectorAll(".sub-menu");
    for(let sibling of siblingSubmenus){
        if(sibling != subMenu){
            sibling.classList.remove("show");
        }
    }
}

for (let button of toggleButtons) {
    button.addEventListener("click", e => {
        e.stopPropagation();
        // Close all currently open submenus of the same level
        let li_parent = e.target.parentElement;
        let subMenu = li_parent.querySelector('.sub-menu');
        closeSiblingSubmenus(subMenu);
        // Open the clicked submenu
        subMenu.classList.toggle("show");
    });
}