const apiKey = "6da13628244d1dcf547b59937d76a63d"; // Keep your API key secure
const city = "Lagos,NG";
const weatherUrl = `https://api.openweathermap.org/data/2.5/weather?q=${city}&units=metric&appid=${apiKey}`;

async function fetchWeather() {
    try {
        const response = await fetch(weatherUrl);
        if (!response.ok) throw new Error("Failed to fetch weather data");

        const data = await response.json();

        // Round the temperature and add the Celsius unit
        const temperature = Math.round(data.main.temp) + "°C";

        // Capitalize each word in the weather description
        const description = data.weather
            .map(w => w.description.split(" ")
                .map(word => word.charAt(0).toUpperCase() + word.slice(1)) // Capitalize each word
                .join(" "))
            .join(", ");

        document.getElementById("temp").textContent = temperature;
        document.getElementById("description").textContent = description;
    } catch (error) {
        console.error("Error fetching weather:", error);
        document.getElementById("weather").innerHTML = "<p>Weather data unavailable</p>";
    }
}

// Call weather function when the page loads
fetchWeather();

