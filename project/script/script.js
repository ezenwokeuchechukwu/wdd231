document.addEventListener("DOMContentLoaded", function () {
    const form = document.querySelector('form');
    const nameInput = document.getElementById('name');
    const emailInput = document.getElementById('email');
    const messageInput = document.getElementById('message');

    // Add event listener for form submission
    if (form) {
        form.addEventListener('submit', function (event) {
            event.preventDefault(); // Prevent form from submitting immediately

            if (validateForm()) {
                alert('Form submitted successfully!');
                form.reset();
            } else {
                alert('Please fill in all the required fields correctly.');
            }
        });
    }

    // Validate form fields
    function validateForm() {
        let isValid = true;

        // Name validation (required)
        if (nameInput.value.trim() === '') {
            nameInput.style.border = '2px solid red';
            isValid = false;
        } else {
            nameInput.style.border = '1px solid #ccc';
        }

        // Email validation (required and proper format)
        const emailPattern = /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/;
        if (emailInput.value.trim() === '' || !emailPattern.test(emailInput.value)) {
            emailInput.style.border = '2px solid red';
            isValid = false;
        } else {
            emailInput.style.border = '1px solid #ccc';
        }

        // Message validation (required)
        if (messageInput.value.trim() === '') {
            messageInput.style.border = '2px solid red';
            isValid = false;
        } else {
            messageInput.style.border = '1px solid #ccc';
        }

        return isValid;
    }

    // Display the last modified date in the footer
    const lastModifiedElement = document.querySelector('.last-modified-date');
    if (lastModifiedElement) {
        const lastModifiedDate = new Date(document.lastModified);
        const options = { year: 'numeric', month: 'long', day: 'numeric' };
        lastModifiedElement.textContent = `Last modified: ${lastModifiedDate.toLocaleDateString('en-US', options)}`;
    }
});
