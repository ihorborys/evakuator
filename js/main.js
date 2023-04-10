const truck = document.querySelector(".truck");
const callButton = document.querySelector(".call__button");
const infoItemH1 = document.querySelector(".header__info h1");
const infoItemH2 = document.querySelector(".hq");
const infoItemH3 = document.querySelector(".h24");
const animationDutation = 0.8;
const halfAnimationDuration = animationDutation / 2;

function playTruckSlideIn() {
    truck.style.animation = `${animationDutation}s ease-out 0s 1 truckSlideInFromLeft`;
}

function playInfoSlideIn() {
    infoItemH1.style.visibility = "visible";
    infoItemH1.style.animation = `${halfAnimationDuration}s ease-out 0s 1 infoSlideInFromTop`;
    infoItemH2.style.animation = `${halfAnimationDuration}s ease-out ${halfAnimationDuration}s 1 infoSlideInFromTop`;
    infoItemH3.style.animation = `${halfAnimationDuration}s ease-out ${halfAnimationDuration}s 1 infoSlideInFromTop`;
}

function playCallButtonSlideIn() {
    callButton.style.visibility = "visible";
    callButton.style.animation = `${halfAnimationDuration}s ease-out 0s 1 callButtonSlideInFromBottom`;
}

truck.onanimationend = () => {
    playInfoSlideIn();
};

infoItemH1.onanimationend = () => {
    infoItemH2.style.visibility = "visible";
    infoItemH3.style.visibility = "visible";
};

infoItemH3.onanimationend = () => {
    playCallButtonSlideIn();
};

window.onload = () => {
    playTruckSlideIn();
};