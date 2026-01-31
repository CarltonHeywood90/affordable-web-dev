// js/main.js

// Simple sanitize function
function sanitizeInput(input) {
    const div = document.createElement('div');
    div.textContent = input;
    return div.innerHTML; // escape HTML characters
}

// Example usage for contact form
const contactForm = document.querySelector('form[action*="formspree"]');
if(contactForm) {
    contactForm.addEventListener('submit', (e) => {
        const name = sanitizeInput(contactForm.name.value);
        const email = sanitizeInput(contactForm._replyto.value);
        const message = sanitizeInput(contactForm.message.value);

        // Put sanitized values back
        contactForm.name.value = name;
        contactForm._replyto.value = email;
        contactForm.message.value = message;
    });
}
