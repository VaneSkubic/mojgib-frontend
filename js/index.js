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