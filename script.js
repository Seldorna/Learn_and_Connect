document.getElementById('contactForm').addEventListener('submit', function(event) {
    event.preventDefault(); // Prevent form from submitting

    // Validate form fields
    var name = document.getElementById('name').value;
    var email = document.getElementById('email').value;
    var message = document.getElementById('message').value;

    if (name && email && message) {
        alert('Form submitted successfully!');
        // Perform form submission (e.g., send data to the server)
    } else {
        alert('Please fill in all fields.');
    }
});
