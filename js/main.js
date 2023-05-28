import { startHeaderAnimationSequence } from "./home.js";
import { initSlideshow } from "./slideshow.js";

const gallery = document.querySelector(".gallery");
const services = document.querySelector(".services");
const testimonials = document.querySelector(".testimonials");
const sections = [gallery, services, testimonials];

window.addEventListener("load", () => {
    startHeaderAnimationSequence();
    initSlideshow();
});

sections.forEach((section) => {
    const button = document.querySelector("." + section.className + "_btn");
    button.addEventListener("click", (e) => {
        e.preventDefault();
        section.scrollIntoView({ behavior: "smooth" });
    });
});
