const form = document.getElementById("weather-form");
const cityInput = document.getElementById("city-input");
const result = document.getElementById("result");

form.addEventListener("submit", async (event) => {
  event.preventDefault();
  const city = cityInput.value.trim();

  if (!city) {
    showMessage("Please enter a city name.");
    return;
  }

  showMessage("Loading weather data...");

  try {
    const location = await getLocation(city);
    const weather = await getWeather(location.latitude, location.longitude);
    renderWeather(location, weather);
  } catch (error) {
    showMessage(error.message || "Unable to fetch weather right now.");
  }
});

async function getLocation(city) {
  const response = await fetch(
    `https://geocoding-api.open-meteo.com/v1/search?name=${encodeURIComponent(
      city
    )}&count=1&language=en&format=json`
  );

  if (!response.ok) {
    throw new Error("Could not find location. Try again.");
  }

  const data = await response.json();

  if (!data.results || data.results.length === 0) {
    throw new Error("City not found. Please try another city.");
  }

  return data.results[0];
}

async function getWeather(latitude, longitude) {
  const response = await fetch(
    `https://api.open-meteo.com/v1/forecast?latitude=${latitude}&longitude=${longitude}&current=temperature_2m,apparent_temperature,relative_humidity_2m,weather_code,wind_speed_10m&timezone=auto`
  );

  if (!response.ok) {
    throw new Error("Failed to fetch weather. Please try again.");
  }

  const data = await response.json();
  return data.current;
}

function renderWeather(location, weather) {
  result.innerHTML = `
    <h2>${location.name}, ${location.country}</h2>
    <div class="weather-grid">
      <p><strong>Temperature:</strong> ${weather.temperature_2m}°C</p>
      <p><strong>Feels like:</strong> ${weather.apparent_temperature}°C</p>
      <p><strong>Humidity:</strong> ${weather.relative_humidity_2m}%</p>
      <p><strong>Wind speed:</strong> ${weather.wind_speed_10m} km/h</p>
      <p><strong>Condition:</strong> ${weatherCodeToText(weather.weather_code)}</p>
      <p><strong>Local time:</strong> ${new Date().toLocaleString()}</p>
    </div>
  `;
}

function showMessage(message) {
  result.innerHTML = `<p class="message">${message}</p>`;
}

function weatherCodeToText(code) {
  const map = {
    0: "Clear sky",
    1: "Mainly clear",
    2: "Partly cloudy",
    3: "Overcast",
    45: "Fog",
    48: "Depositing rime fog",
    51: "Light drizzle",
    53: "Moderate drizzle",
    55: "Dense drizzle",
    61: "Slight rain",
    63: "Moderate rain",
    65: "Heavy rain",
    71: "Slight snow",
    73: "Moderate snow",
    75: "Heavy snow",
    80: "Slight rain showers",
    81: "Moderate rain showers",
    82: "Violent rain showers",
    95: "Thunderstorm",
  };

  return map[code] || `Unknown (${code})`;
}
