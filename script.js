const apiKey = "7e8c21a47bee36f30fe0c059b823db71";
const apiUrl = "https://api.openweathermap.org/data/2.5/weather";

const locationInput = document.getElementById("locationInput");
const searchButton = document.getElementById("searchButton");
const locationElement = document.getElementById("location");
const temperatureElement = document.getElementById("temperature");
const descriptionElement = document.getElementById("description");

searchButton.addEventListener("click", () => {
  const location = locationInput.value;
  if (location) {
    fetchWeather(location);
  } else {
    alert("Please enter a location");
  }
});

function fetchWeather(location) {
  const url = `${apiUrl}?q=${location}&appid=${apiKey}&units=metric`;

  fetch(url)
    .then((response) => response.json())
    .then((data) => {
      locationElement.textContent = data.name;
      temperatureElement.textContent = `${Math.round(data.main.temp)}C`;
      descriptionElement.textContent = data.weather[0].description;
    })
    .catch((error) => {
      console.error("Error in fetching weather data:  ", error);
    });
}
