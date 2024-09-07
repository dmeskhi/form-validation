const form = document.getElementById('form');
const passwordEl1 = document.getElementById('password1');
const passwordEl2 = document.getElementById('password2');
const messageContainer = document.querySelector('.message-container');
const message = document.getElementById('message');

let isValid = false;

function validateForm() {
    // Using Constraint API
    isValid = form.checkValidity();
    // Style Message error
    message.textContent = 'Please, fill out all fields.';
    message.style.color = '#C7253E';
    messageContainer.style.borderColor = '#C7253E';
}

function processFormData(e) {
    e.preventDefault();
    // Validate Form
    validateForm();
}

form.addEventListener('submit', processFormData);