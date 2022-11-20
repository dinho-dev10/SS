const divMenu = document.querySelector(".menu.mobile.bg");
const buttonCloseMenu = document.querySelector(".closeMenu");

function openCloseMenu() {
    divMenu.classList.add("menu-active");
}
function closeMenu() {
    divMenu.classList.remove("menu-active");
}


var str = String(window.screen.height) + "px";




document.querySelector(
    ".menu.mobile.bg"
).style.height = str;