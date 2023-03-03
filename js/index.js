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
                console.log('success')
            },
            function(error) {
                console.log('Error: ' + error)
            }
        )
    });
}

var prevScrollpos = window.pageYOffset;
var nav = document.getElementById("nav");
window.onscroll = function() {
    var currentScrollPos = window.pageYOffset;
    if (prevScrollpos > currentScrollPos || currentScrollPos === 0) {
        nav.style.top = "0";
    } else {
        nav.style.top = "-100px";
    }
    prevScrollpos = currentScrollPos;
}


var hamburgerIcon = document.getElementById("hamburger-icon");
var closeIcon = document.getElementById("close-icon");
var mobileMenu = document.getElementById("mobile-menu");
hamburgerIcon.onclick = function() {
    mobileMenu.style.transform = "translateX(0)";
    document.body.style.overflow = "hidden";
}
closeIcon.onclick = function() {
    mobileMenu.style.transform = "translateX(-100%)";
    document.body.style.overflow = "visible";
}