const form = document.getElementById('form');
const passwordEl1 = document.getElementById('password1');
const passwordEl2 = document.getElementById('password2');
const messageContainer = document.querySelector('.message-container');
const message = document.getElementById('message');

let isValid = false;
let passwordsMatch = false;

function validateForm() {
    // Using Constraint API
    isValid = form.checkValidity();
    // Style Message For an Error
    if (!isValid) {
        message.textContent = 'Please, fill out all fields.';
        message.style.color = '#C7253E';
        messageContainer.style.borderColor = '#C7253E';
        return;
    }
    // Check if passwords match
    if (passwordEl1.value === passwordEl2.value) {
        passwordsMatch = true;
        passwordEl1.style.borderColor = '#399918';
        passwordEl2.style.borderColor = '#399918';
    } else {
        passwordsMatch = false;
        message.textContent = 'Make sure passwords match.';
        message.style.color = '#C7253E';
        messageContainer.style.borderColor = '#C7253E';
        passwordEl1.style.borderColor = '#C7253E';
        passwordEl2.style.borderColor = '#C7253E';
        return;
    }
    // If form is valid and passwords match
    if (isValid && passwordsMatch) {
        message.textContent = 'You Have Successfully Registered!';
        message.style.color = '#399918';
        messageContainer.style.borderColor = '#399918';
    }
}

// Store user data
function storeFormData() {
    const user = {
        name: form.name.value,
        phone: form.phone.value,
        email: form.email.value,
        website: form.website.value,
        password: form.password.value
    };
    // Store user data somewhere
    console.log(user);
}

function processFormData(e) {
    e.preventDefault();
    // Validate Form
    validateForm();
    // Submit valid data
    if (isValid && passwordsMatch) {
        storeFormData();
    }
}

form.addEventListener('submit', processFormData);