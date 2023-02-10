'use strict';

const sliders = document.querySelectorAll("[data-slider]");

const sliderInit = function(currentSlider) {
    const sliderCont = currentSlider.querySelector("[data-slider-container]")
    const sliderPrevBtn = currentSlider.querySelector("[data-slider-prev]")
    const sliderNextBtn = currentSlider.querySelector("[data-slider-next]")

    const totalSliderVisibleItems = Number(getComputedStyle(currentSlider).getPropertyValue("--slider-items"));
    const totalSliderItems = sliderCont.childElementCount;

    let currentSlidePos = 0;

    // next slide
    const slideNext = function () {
        currentSlidePos++;

        sliderCont.style.transform = `translateX(-${sliderCont.children[currentSlidePos].offsetLeft}px)`;
    }

    // prev slide
    const slideBack = function () {
        currentSlidePos--;

        sliderCont.style.transform = `translateX(-${sliderCont.children[currentSlidePos].offsetLeft}px)`;
    }

    sliderNextBtn.addEventListener('click', slideNext);
    sliderPrevBtn.addEventListener('click', slideBack);
}

for (let i = 0, len = sliders.length; i < len; i++) {sliderInit(sliders[i]);}