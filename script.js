const apiKey = '196a17a65cd547fc952171432252611';
const apiUrl = 'https://api.weatherapi.com/v1'
;

const locationInput = document.getElementById('locationInput');
const searchButton = document.getElementById('searchButton');
const locationElement = document.getElementById('location');
const temperatureElement = document.getElementById('temperature');
const descriptionElement = document.getElementById('description');
const windspeed = document.getElementById('wind_mph');
//const windspeed = document

searchButton.addEventListener('click', () => {
    const location = locationInput.value;
    if (location) {
        fetchWeather(location);
    }
});

function fetchWeather(location) {
    const url = `${apiUrl}/current.json?key=${apiKey}&q=${location}`;

    fetch(url)
        .then(response => response.json())
        .then(data => {
            locationElement.textContent = data.location.name;
            temperatureElement.textContent = `${data.current.temp_c}°C`;
            descriptionElement.textContent = data.current.condition.text;
            windspeed.textContent = `Wind: ${data.current.wind_mph} mph`;

        })
        .catch(error => {
            console.error('Error fetching weather data:', error);
        });
}
