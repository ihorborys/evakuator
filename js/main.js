import { startHeaderAnimationSequence } from "./home.js";
import { initSlideshow } from "./slideshow.js";

window.addEventListener("load", () => {
    startHeaderAnimationSequence();
    initSlideshow();
});
