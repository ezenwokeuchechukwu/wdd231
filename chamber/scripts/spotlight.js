async function fetchSpotlights() {
    try {
        const response = await fetch("data/members.json");
        if (!response.ok) throw new Error("Failed to fetch members");

        const data = await response.json();

        // Define membership levels mapping
        const membershipLevels = {
            3: "Gold",
            2: "Silver",
            1: "Bronze"
        };

        // Filter Gold and Silver members
        let spotlights = data.members.filter(member => 
            membershipLevels[member.membership] === "Gold" || membershipLevels[member.membership] === "Silver"
        );

        // Randomly select up to 3 members
        let selected = spotlights.sort(() => 0.5 - Math.random()).slice(0, 3);
        let container = document.querySelector(".spotlight-container");

        container.innerHTML = ""; // Clear existing content before adding new spotlights

        selected.forEach(member => {
            let card = document.createElement("div");
            card.classList.add("spotlight-card");
            card.innerHTML = `
                <img src="${member.image}" alt="${member.name} Logo">
                <h3>${member.name}</h3>
                <p>${member.address}</p>
                <p>📞 ${member.phone}</p>
                <a href="${member.website}" target="_blank">Visit Website</a>
                <p class="membership-level">${membershipLevels[member.membership]} Member</p>
            `;
            container.appendChild(card);
        });
    } catch (error) {
        console.error("Error loading members:", error);
    }
}

// Call spotlight function when the page loads
fetchSpotlights();
