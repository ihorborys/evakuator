const burgerContainer = document.querySelector("header .wrapper");
const burgerBtn = document.querySelector(".burger");
const navMenu = document.querySelector('nav');
const menu = document.querySelector(".menu-toggle");
const classOpen = "nav-open";
let isMenuVisible = false;

menu.addEventListener("pointerup", () => {
    burgerContainer.classList.toggle(classOpen);
});

burgerBtn.addEventListener("pointerup", () => {
    isMenuVisible = burgerContainer.classList.contains(classOpen);
    navMenu.style.transform = `translateX(${isMenuVisible ? 0 : -100}%)`;
});
