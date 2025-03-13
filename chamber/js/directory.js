const url = 'data/members.json';
const membersContainer = document.querySelector('#members');
const toggleButton = document.querySelector('#toggleView');

async function fetchMembers() {
    const response = await fetch(url);
    const data = await response.json();
    
    displayMembers(data.members);
}

const displayMembers = (members) => {
    membersContainer.innerHTML = ""; // Clear previous entries

    members.forEach(member => {
        let card = document.createElement('div');
        card.classList.add('member-card');

        let img = document.createElement('img');
        img.setAttribute('src', member.image);
        img.setAttribute('alt', `Logo of ${member.name}`);
        img.setAttribute('loading', 'lazy');

        let name = document.createElement('h2');
        name.textContent = member.name;

        let address = document.createElement('p');
        address.textContent = `📍 ${member.address}`;

        let phone = document.createElement('p');
        phone.textContent = `📞 ${member.phone}`;

        let website = document.createElement('a');
        website.href = member.website;
        website.target = "_blank";
        website.textContent = "Visit Website";

        // Append elements to the card
        card.appendChild(img);
        card.appendChild(name);
        card.appendChild(address);
        card.appendChild(phone);
        card.appendChild(website);

        membersContainer.appendChild(card);
    });
};

// Toggle between Grid and List View
toggleButton.addEventListener('click', () => {
    membersContainer.classList.toggle('list-view');
});

// Set the current year in the footer
document.getElementById("year").textContent = new Date().getFullYear();
document.getElementById("lastModified").textContent = document.lastModified;

fetchMembers();
