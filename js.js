//Chessburger button
function toggleMenu(){
    const menu = document.querySelector(".menu-links");
    const icon = document.querySelector(".chessburger-icon");
    menu.classList.toggle("open");
    icon.classList.toggle("open");
}

//code line for suggestions
document.getElementById('contact-form').addEventListener('submit', function (event) {
    event.preventDefault(); // Prevent form submission

    // Get form values
    const name = document.getElementById('name').value.trim();
    const email = document.getElementById('email').value.trim();
    const message = document.getElementById('message').value.trim();

    // Simple validation
    if (!name || !email || !message) {
        alert('Please fill out all fields.');
        return;
    }

    if (!validateEmail(email)) {
        alert('Please enter a valid email address.');
        return;
    }

    // Submit form
    alert('Form submitted successfully!');
    console.log('Name:', name);
    console.log('Email:', email);
    console.log('Message:', message);

    // Reset form
    document.getElementById('contact-form').reset();
});

function validateEmail(email) {
    const regex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    return regex.test(email);
}