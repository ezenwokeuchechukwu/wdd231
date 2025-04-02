// Fetch and display items
fetch('data/items.json')
  .then(response => {
    if (!response.ok) {
      throw new Error(`HTTP error! Status: ${response.status}`);
    }
    return response.json();
  })
  .then(data => {
    const container = document.querySelector('.grid-container');
    if (!container) {
      console.error("Error: .grid-container element not found.");
      return;
    }
    data.forEach((item, index) => {
      let card = document.createElement('div');
      card.classList.add('card', `card${index + 1}`);
      card.innerHTML = `
        <h2>${item.title}</h2>
        <figure>
          <img src="${item.image}" alt="${item.title}" loading="lazy">
        </figure>
        <address>${item.address}</address>
        <p>${item.description}</p>
        ${item.website ? `<a href="${item.website}" target="_blank"><button>Learn More</button></a>` : ''}
      `;
      container.appendChild(card);
    });
  })
  .catch(error => {
    console.error('Error fetching data:', error);
    document.querySelector('.grid-container').innerHTML = `<p>Failed to load data. Please try again later.</p>`;
  });

// Visitor Message
document.addEventListener("DOMContentLoaded", () => {
  const visitMessage = document.querySelector('#visit-message');
  if (!visitMessage) return;

  const lastVisit = localStorage.getItem('lastVisit');
  const now = Date.now();

  if (!lastVisit) {
    visitMessage.textContent = "Welcome! Let us know if you have any questions.";
  } else {
    const daysSinceLastVisit = Math.floor((now - Number(lastVisit)) / (1000 * 60 * 60 * 24));

    if (daysSinceLastVisit < 1) {
      visitMessage.textContent = "Back so soon! Awesome!";
    } else {
      visitMessage.textContent = `You last visited ${daysSinceLastVisit} day${daysSinceLastVisit > 1 ? 's' : ''} ago.`;
    }
  }

  localStorage.setItem('lastVisit', now);
});
