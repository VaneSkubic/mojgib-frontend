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