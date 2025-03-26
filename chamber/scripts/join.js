document.addEventListener("DOMContentLoaded", function() {
    // Apply animation to membership cards on page load
    document.body.classList.add("loaded");

    // Auto-fill timestamp field
    document.getElementById("timestamp").value = new Date().toISOString();

    // Mobile Menu Toggle (if applicable)
    const menuToggle = document.querySelector('.menu-toggle');
    const navLinks = document.querySelector('.nav-links');

    if (menuToggle) {
        menuToggle.addEventListener('click', () => {
            navLinks.classList.toggle('active');
        });
    }

    // Membership Level Modals
    const modals = document.querySelectorAll("dialog");
    const closeButtons = document.querySelectorAll("dialog button");

    closeButtons.forEach(button => {
        button.addEventListener("click", function() {
            this.parentElement.close();
        });
    });

    document.querySelectorAll(".card button").forEach((button, index) => {
        button.addEventListener("click", function() {
            modals[index].showModal();
        });
    });

    // Form Submission Handling for Thank You Page
    const params = new URLSearchParams(window.location.search);
    if (document.getElementById("firstName")) {
        document.getElementById("firstName").innerText = params.get("first_name");
        document.getElementById("lastName").innerText = params.get("last_name");
        document.getElementById("email").innerText = params.get("email");
        document.getElementById("phone").innerText = params.get("phone");
        document.getElementById("organization").innerText = params.get("organization");
        document.getElementById("timestamp").innerText = params.get("timestamp");
    }
});
