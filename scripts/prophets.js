const url = 'https://brotherblazzard.github.io/canvas-content/latter-day-prophets.json';
const cards = document.querySelector('#cards');

// Function to fetch and process data
async function getProphetData() {
    const response = await fetch(url);
    const data = await response.json();
    
    // Uncomment the line below to see the data in the console
    // console.table(data.prophets);
    
    displayProphets(data.prophets);
}

// Function to create and display prophet cards
const displayProphets = (prophets) => {
    prophets.forEach((prophet) => {
        // Create elements
        let card = document.createElement('section');
        let fullName = document.createElement('h2');
        let portrait = document.createElement('img');

        // Set full name
        fullName.textContent = `${prophet.name} ${prophet.lastname}`;

        // Set image attributes
        portrait.setAttribute('src', prophet.imageurl);
        portrait.setAttribute('alt', `Portrait of ${prophet.name} ${prophet.lastname}`);
        portrait.setAttribute('loading', 'lazy');
        portrait.setAttribute('width', '340');
        portrait.setAttribute('height', '440');

        // Append elements to the card
        card.appendChild(fullName);
        card.appendChild(portrait);

        // Append card to the cards div
        cards.appendChild(card);
    });
};

// Call function to fetch and display data
getProphetData();
