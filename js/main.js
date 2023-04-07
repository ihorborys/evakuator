const newGameButton = document.querySelector(".call_now");

function onMouseEntered() {
    playSound("../assets/sounds/hover-button-sound.mp3");
    }

function initListeners() {
    newGameButton.addEventListener("mouseenter", onMouseEntered);
    }