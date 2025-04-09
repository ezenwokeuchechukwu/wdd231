document.addEventListener("DOMContentLoaded", () => {
  // Handle last modified date display
  const lastModifiedElement = document.querySelector('.last-modified-date');
  if (lastModifiedElement) {
    const lastModified = new Date(document.lastModified);
    if (document.lastModified) {
      const options = {
        weekday: 'long',
        year: 'numeric',
        month: 'long',
        day: 'numeric',
        hour: '2-digit',
        minute: '2-digit',
      };
      lastModifiedElement.textContent = `Last modified: ${lastModified.toLocaleDateString('en-US', options)} at ${lastModified.toLocaleTimeString('en-US', { hour: '2-digit', minute: '2-digit' })}`;
    } else {
      lastModifiedElement.textContent = "Last modified date is unavailable.";
    }
  }

  // Handle form functionality and localStorage
  const form = document.querySelector('form');
  const nameInput = document.getElementById('name');
  const emailInput = document.getElementById('email');
  const messageInput = document.getElementById('message');

  // Prefill form with saved values if available
  const savedData = JSON.parse(localStorage.getItem("contactFormData"));
  if (savedData) {
    nameInput.value = savedData.name || '';
    emailInput.value = savedData.email || '';
    messageInput.value = savedData.message || '';
  }

  // Save input values to localStorage on input
  [nameInput, emailInput, messageInput].forEach(input => {
    input.addEventListener('input', () => {
      localStorage.setItem("contactFormData", JSON.stringify({
        name: nameInput.value.trim(),
        email: emailInput.value.trim(),
        message: messageInput.value.trim()
      }));
      validateField(input);
    });
  });

  // Form submission event
  form?.addEventListener('submit', (event) => {
    event.preventDefault();

    if (validateForm()) {
      alert('Form submitted successfully!');
      localStorage.removeItem("contactFormData");
      form.reset();
      resetBorders();
    } else {
      alert('Please fill in all the required fields correctly.');
    }
  });

  // Validate all form fields
  const validateForm = () => {
    const isNameValid = validateField(nameInput);
    const isEmailValid = validateEmail(emailInput);
    const isMessageValid = validateField(messageInput);
    return isNameValid && isEmailValid && isMessageValid;
  };

  // Reset input borders
  const resetBorders = () => {
    [nameInput, emailInput, messageInput].forEach(input => {
      input.style.border = '1px solid #ccc';
    });
  };

  // Generic validation for empty input
  const validateField = (input) => {
    if (input.value.trim() === '') {
      input.style.border = '2px solid red';
      return false;
    } else {
      input.style.border = '1px solid #ccc';
      return true;
    }
  };

  // Email-specific validation
  const validateEmail = (input) => {
    const pattern = /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/;
    if (input.value.trim() === '' || !pattern.test(input.value)) {
      input.style.border = '2px solid red';
      return false;
    } else {
      input.style.border = '1px solid #ccc';
      return true;
    }
  };
});
