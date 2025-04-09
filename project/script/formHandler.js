// scripts/formHandler.js

export function initContactForm() {
    const form = document.querySelector('#contact-form');
    const nameInput = document.getElementById('name');
    const emailInput = document.getElementById('email');
    const messageInput = document.getElementById('message');
    const modal = document.getElementById('confirmation-modal');
    const closeModalBtn = document.getElementById('close-modal');

    if (!form) return;

    form.addEventListener('submit', function (event) {
        event.preventDefault();

        if (validateForm()) {
            // Save to localStorage
            const formData = {
                name: nameInput.value.trim(),
                email: emailInput.value.trim(),
                message: messageInput.value.trim(),
                timestamp: new Date().toISOString()
            };
            localStorage.setItem('contactFormData', JSON.stringify(formData));

            // Show modal
            modal.showModal();

            form.reset();
        } else {
            alert('Please fill in all the required fields correctly.');
        }
    });

    if (closeModalBtn) {
        closeModalBtn.addEventListener('click', () => modal.close());
    }

    function validateForm() {
        let isValid = true;

        if (nameInput.value.trim() === '') {
            nameInput.style.border = '2px solid red';
            isValid = false;
        } else {
            nameInput.style.border = '1px solid #ccc';
        }

        const emailPattern = /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/;
        if (!emailPattern.test(emailInput.value.trim())) {
            emailInput.style.border = '2px solid red';
            isValid = false;
        } else {
            emailInput.style.border = '1px solid #ccc';
        }

        if (messageInput.value.trim() === '') {
            messageInput.style.border = '2px solid red';
            isValid = false;
        } else {
            messageInput.style.border = '1px solid #ccc';
        }

        return isValid;
    }
}
