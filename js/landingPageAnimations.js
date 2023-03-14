import { CountUp } from './countUp.min.js';
const countUpStranke = new CountUp('stranke', 54, { enableScrollSpy: true, scrollSpyOnce: true });
const countUpYears = new CountUp('leta', 7, { enableScrollSpy: true, scrollSpyOnce: true });
countUpStranke.start();
countUpYears.start();

const scrollElements = document.querySelectorAll(".js-scroll");

const elementInView = (el, dividend = 1) => {
    const elementTop = el.getBoundingClientRect().top;

    return (
        elementTop <=
        (window.innerHeight || document.documentElement.clientHeight) / dividend
    );
};

const elementOutofView = (el) => {
    const elementBottom = el.getBoundingClientRect().bottom;

    return (
        elementBottom > (window.innerHeight || document.documentElement.clientHeight)
    );
};

const displayScrollElement = (element) => {
    element.classList.add("scrolled");
};

const hideScrollElement = (element) => {
    element.classList.remove("scrolled");
};

const handleScrollAnimation = () => {
    scrollElements.forEach((el) => {
        if (elementInView(el, 1.25)) {
            displayScrollElement(el);
        } else if (elementOutofView(el)) {
            hideScrollElement(el)
        }
    })
}

function scrollAnimations() {
    var downElements = document.getElementsByClassName('scroll-down');
    var upElements = document.getElementsByClassName('scroll-up');
    var speed = 0.05


    for (let i = 0; i < downElements.length; i++) {
        var elementTop = downElements[i].getBoundingClientRect().top;

        if (elementTop > 0 && elementTop < window.innerHeight) {
            console.log(elementTop * speed - (window.innerHeight / 2) * speed)
            downElements[i].style.bottom = elementTop * speed - (window.innerHeight / 2) * speed + "px";
        }

    }
    for (let i = 0; i < upElements.length; i++) {
        var elementTop = upElements[i].getBoundingClientRect().top;

        if (elementTop > 0 && elementTop < window.innerHeight) {
            upElements[i].style.top = elementTop * speed - (window.innerHeight / 2) * speed + "px";
        }

    }

    var currentScrollPos = window.pageYOffset;
    if (currentScrollPos == 0) {
        for (let i = 0; i < downElements.length; i++) {
            downElements[i].style.bottom = "0px";
        }
        for (let i = 0; i < upElements.length; i++) {
            upElements[i].style.top = "0px";
        }
    }
}

window.addEventListener("scroll", () => {
    handleScrollAnimation();
    scrollAnimations();
});