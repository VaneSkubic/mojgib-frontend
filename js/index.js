emailjs.init('03OqSVaC9xrZ19mh3');
window.onload = function () {
    document.getElementById('contact-form').addEventListener('submit', function (event) {
        event.preventDefault();
        var contactParams = {
            name: document.getElementById('name').value,
            email: document.getElementById("email").value,
            message: document.getElementById('message').value,
        }
        var button = document.getElementsByClassName('button submit')[0];
        button.value = "Pošiljam 📨";
        button.disabled = true;
        emailjs.send('service_cm9h7ra', 'template_vt3zs5i', contactParams).then(
            function () {
                hideForm()
            },
            function (error) {
                var button = document.getElementsByClassName('button submit')[0];
                button.value = "Napaka 😭";
                console.log(error)
            }
        )
    });
}

function scrollAnimations() {
    var downElements = document.getElementsByClassName('scroll-down');
    var upElements = document.getElementsByClassName('scroll-up');
    var speed = 0.05


    for (let i = 0; i < downElements.length; i++) {
        var elementTop = downElements[i].getBoundingClientRect().top;
        if (elementTop > 0 && elementTop < window.innerHeight) {
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

// var prevScrollpos = window.pageYOffset;
// var nav = document.getElementById("nav");
// window.addEventListener('scroll', function () {
//     var currentScrollPos = window.pageYOffset;
//     if (prevScrollpos > currentScrollPos || currentScrollPos <= 0) {
//         nav.style.top = "0";
//     } else {
//         nav.style.top = "-100px";
//     }
//     prevScrollpos = currentScrollPos;
//     scrollAnimations();
// })

var nav = document.getElementById("nav");
window.addEventListener('scroll', function () {
    var currentScrollPos = window.pageYOffset;
    if (currentScrollPos <= 0) {
        nav.style.padding = "1.5rem 2rem";
        nav.style.borderBottom = "none";
        nav.style.backdropFilter = "blur(0px)";
        nav.style['-webkit-backdrop-filter'] = 'none';
        nav.style.backgroundColor = "rgba(0, 0, 0, 0)";
    } else {
        nav.style.padding = "0.8rem 2rem";
        nav.style.borderBottom = "1px solid rgba(0, 0, 0, 0.05)";
        nav.style.backdropFilter = "blur(20px) saturate(180%)";
        nav.style['-webkit-backdrop-filter'] = 'blur(20px) saturate(180%)';
        nav.style.backgroundColor = "rgba(255, 255, 255, 0.72)";
    }
    scrollAnimations();
})

var hamburgerIcon = document.getElementById("hamburger-icon");
var closeIcon = document.getElementById("close-icon");
var mobileMenu = document.getElementById("mobile-menu");

function hideMobileMenu() {
    mobileMenu.style.transform = "translateX(-100%)";
    document.body.style.overflow = "visible";
    var nav = document.getElementById("nav");
    nav.style.transition = "none";
    nav.style.backdropFilter = "blur(20px) saturate(180%)";
    nav.style['-webkit-backdrop-filter'] = 'blur(20px) saturate(180%)';
    nav.style.backgroundColor = "rgba(255, 255, 255, 0.72)";
}

hamburgerIcon.onclick = function () {
    mobileMenu.style.transform = "translateX(0)";
    document.body.style.overflow = "hidden";
    var nav = document.getElementById("nav");
    nav.style.backdropFilter = "none";
    nav.style['-webkit-backdrop-filter'] = 'none';
    nav.style.backgroundColor = "white";
}
closeIcon.onclick = function () {
    hideMobileMenu()
}

var mobileMenuLinks = document.getElementsByClassName("mobile nav-link");
var mobileMenuAction = document.getElementsByClassName("mobile button")[0];
mobileMenuAction.onclick = function () {
    hideMobileMenu()
}
for (var i = 0; i < mobileMenuLinks.length; i++) {
    mobileMenuLinks[i].onclick = function () {
        hideMobileMenu()
    }
}

window.hideForm = function hideForm() {
    var form = document.getElementById('contact-form');
    var confirmation = document.getElementById('form-success');
    form.style.opacity = "0";
    form.style.visibility = "hidden";
    form.style.transform = "translateY(50px)";
    confirmation.style.transform = "translateY(0)";
    confirmation.style.visibility = "visible";
    confirmation.style.opacity = "1";
}

var zemljevidButton = document.getElementById("zemljevid-button");
var slikaButton = document.getElementById("slika-button");
var map = document.getElementById("buum-google-maps");

if (zemljevidButton != null) {
    zemljevidButton.onclick = function () {
        map.style.visibility = "visible";
        map.style.opacity = "1";
        slikaButton.classList.remove("active");
        zemljevidButton.classList.add("active");
    }
}

slikaButton.onclick = function () {
    map.style.opacity = "0";
    map.style.visibility = "hidden";
    zemljevidButton.classList.remove("active");
    slikaButton.classList.add("active");
}