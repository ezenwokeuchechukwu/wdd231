fetch('data/items.json')
  .then(response => response.json())
  .then(data => {
    const container = document.querySelector('.grid-container');
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
        <button>Learn More</button>
      `;
      container.appendChild(card);
    });
  });
  const visitMessage = document.querySelector('#visit-message');
  const lastVisit = localStorage.getItem('lastVisit');
  const now = Date.now();
  
  if (!lastVisit) {
    visitMessage.textContent = "Welcome! Let us know if you have any questions.";
  } else {
    const daysSinceLastVisit = Math.floor((now - lastVisit) / (1000 * 60 * 60 * 24));
    
    if (daysSinceLastVisit < 1) {
      visitMessage.textContent = "Back so soon! Awesome!";
    } else {
      visitMessage.textContent = `You last visited ${daysSinceLastVisit} day${daysSinceLastVisit > 1 ? 's' : ''} ago.`;
    }
  }
  
  localStorage.setItem('lastVisit', now);
  