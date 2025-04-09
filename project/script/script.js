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

  // Modal functionality: Show modal on button click
  const openModalBtn = document.querySelector('#openModalBtn');
  openModalBtn?.addEventListener('click', () => {
    openModal('#myModal');
  });

  // Close modal
  const closeModalBtn = document.querySelector('#closeModalBtn');
  closeModalBtn?.addEventListener('click', () => {
    closeModal('#myModal');
  });

  // Modal open
  const openModal = (modalSelector) => {
    const modal = document.querySelector(modalSelector);
    modal.style.display = 'block';
  };

  // Modal close
  const closeModal = (modalSelector) => {
    const modal = document.querySelector(modalSelector);
    modal.style.display = 'none';
  };

  // Fetching Data Functions --- Fetch data from a URL and return it
  const fetchData = async (url) => {
    try {
      const response = await fetch(url);
      const data = await response.json();
      return data;
    } catch (error) {
      console.error('Error fetching data:', error);
    }
  };

  // Displaying the Services
  const services = [
    {
      "name": "Consulting Service",
      "description": "Expert business consulting to help you achieve your goals.",
      "price": "199.99",
      "url": "https://www.linkedin.com/in/uchechukwu-ezenwoke?utm_source=share&utm_campaign=share_via&utm_content=profile&utm_medium=ios_app",
      "Image": "images/consulting.jpeg"
    },
    {
      "name": "Project Management Service",
      "description": "End-to-end project management for successful outcomes.",
      "price": "249.99",
      "url": "https://www.linkedin.com/in/uchechukwu-ezenwoke?utm_source=share&utm_campaign=share_via&utm_content=profile&utm_medium=ios_app",
      "Image": "images/project.jpeg"
    },
    // Add other services here...
  ];

  const serviceList = document.getElementById("service-list");

  services.forEach(service => {
    const serviceItem = document.createElement("li");
    serviceItem.innerHTML = `
      <h3>${service.name}</h3>
      <img src="${service.Image}" alt="${service.name}" loading="lazy" width="300">
      <p>${service.description}</p>
      <p>Price: $${service.price}</p>
      <a href="${service.url}" target="_blank">Learn more</a>
    `;
    serviceList.appendChild(serviceItem);
  });

});
