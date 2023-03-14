emailjs.init('03OqSVaC9xrZ19mh3');
window.onload = function() {
    document.getElementById('contact-form').addEventListener('submit', function(event) {
        event.preventDefault();
        var contactParams = {
            name: document.getElementById('name').value,
            email: document.getElementById("email").value,
            message: document.getElementById('message').value,
        }
        emailjs.send('service_cm9h7ra', 'template_vt3zs5i', contactParams).then(
            function() {
                var button = document.getElementsByClassName('button submit')[0];
                button.value = "Poslano 👍";
                button.style.background = 'linear-gradient(96.44deg, #0FB700 0%, #05E800 100%)'
            },
            function(error) {
                var button = document.getElementsByClassName('button submit')[0];
                button.value = "Napaka 😭";
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

var prevScrollpos = window.pageYOffset;
var nav = document.getElementById("nav");
window.addEventListener('scroll', function() {
    var currentScrollPos = window.pageYOffset;
    if (prevScrollpos > currentScrollPos || currentScrollPos <= 0) {
        nav.style.top = "0";
    } else {
        nav.style.top = "-100px";
    }
    prevScrollpos = currentScrollPos;
    scrollAnimations();
})

var hamburgerIcon = document.getElementById("hamburger-icon");
var closeIcon = document.getElementById("close-icon");
var mobileMenu = document.getElementById("mobile-menu");

function hideMobileMenu() {
    mobileMenu.style.transform = "translateX(-100%)";
    document.body.style.overflow = "visible";
}

hamburgerIcon.onclick = function() {
    mobileMenu.style.transform = "translateX(0)";
    document.body.style.overflow = "hidden";
}
closeIcon.onclick = function() {
    hideMobileMenu()
}

var mobileMenuLinks = document.getElementsByClassName("mobile nav-link");
var mobileMenuAction = document.getElementsByClassName("mobile button")[0];
mobileMenuAction.onclick = function() {
    hideMobileMenu()
}
for (var i = 0; i < mobileMenuLinks.length; i++) {
    mobileMenuLinks[i].onclick = function() {
        hideMobileMenu()
    }
}