import { CountUp } from './countUp.min.js';
const countUpStranke = new CountUp('stranke', 63, { enableScrollSpy: true, scrollSpyOnce: true });
const countUpYears = new CountUp('leta', calculateYearsElapsed('2007-07-1'), { enableScrollSpy: true, scrollSpyOnce: true });
countUpStranke.start();
countUpYears.start();

const scrollElements = document.querySelectorAll(".js-scroll");

function calculateYearsElapsed(startDate) {
    const currentDate = new Date();
    const start = new Date(startDate);

    let yearsElapsed = currentDate.getFullYear() - start.getFullYear();

    if (
        currentDate.getMonth() < start.getMonth() ||
        (currentDate.getMonth() === start.getMonth() && currentDate.getDate() < start.getDate())
    ) {
        yearsElapsed--;
    }

    return yearsElapsed;
}

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

window.addEventListener("scroll", () => {
    handleScrollAnimation();
});