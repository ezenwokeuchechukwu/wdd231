// Import the form handling logic
import { initContactForm } from './formHandler.js';

document.addEventListener('DOMContentLoaded', () => {
  // Initialize the form handler logic
  initContactForm();

  // Optional: Add last modified date to footer
  const lastModified = document.querySelector('.last-modified-date');
  if (lastModified) {
    const date = new Date(document.lastModified);
    lastModified.textContent = `Last modified: ${date.toLocaleDateString('en-US', {
      year: 'numeric',
      month: 'long',
      day: 'numeric',
    })}`;
  }
});
