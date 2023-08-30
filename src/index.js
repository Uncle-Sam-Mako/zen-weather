import "./css/main.scss"; // Import the main SCSS file for styling
import axios from 'axios'; // Import the Axios library for making HTTP requests

// Function to format a given datetime
function formatDateTime(datetime) {
    const inputDate = datetime;
    const dateObject = new Date(inputDate); // Convert input date string to a Date object

    // Define options for formatting date and time
    const options = { weekday: 'short', month: 'short', day: 'numeric' };

    // Format the date using Intl.DateTimeFormat
    const formattedDate = new Intl.DateTimeFormat('en-US', options).format(dateObject);

    // Get hours and minutes from the date object
    const hours = dateObject.getHours();
    const minutes = dateObject.getMinutes();

    // Format the time as HH:MM
    const formattedTime = `${hours.toString().padStart(2, '0')}:${minutes.toString().padStart(2, '0')}`;

    return [formattedDate, formattedTime]; // Return formatted date and time
}

// Select the container for hourly weather and the template for a weather item
const hourly_weather_container = document.querySelector('.weather_items_container');
const hourly_weather_template = hourly_weather_container.querySelector('.weather_item_template');

// Create six weather items using the template and append them to the container
for (let i = 0; i < 6; i++) {
    hourly_weather_container.append(hourly_weather_template.content.cloneNode(true));
}

// Select the element for displaying current weather
const currentWeather = document.getElementById('current_weather');


// Function to fetch and display current weather information
function getCurrentInfos(location) {

    // URLs for weather data
    const forecast_url = `http://api.weatherapi.com/v1/forecast.json?key=f9de0c04c1bc48c2a6485330230408&q=${location}&days=1&aqi=no&alerts=no`;

    axios.get(forecast_url)
    .then(response => {
        // Extract relevant data from the API response
        const location = response.data.location;
        const weather = response.data.current;
        const condition = weather.condition;
        const hourly_weather = response.data.forecast.forecastday[0].hour;

        // Update DOM elements with weather data
        currentWeather.querySelector('.location .value').textContent = `${location.name}, ${location.country}`;
        currentWeather.querySelector('.localdate').textContent = formatDateTime(location.localtime)[0];
        currentWeather.querySelector('.temp_hour .hour').textContent = formatDateTime(location.localtime)[1];
        currentWeather.querySelector('.temp_hour .temp').textContent = `${parseInt(weather.temp_c)}°`;
        currentWeather.querySelector('.condition').textContent = condition.text;
        currentWeather.querySelector('.cloud_icon img').src = condition.icon;
        currentWeather.querySelector('.humidity .value').textContent = `${weather.humidity}%`;
        currentWeather.querySelector('.wind .value').textContent = `${weather.wind_mph}mph`;

        // Clear previous hourly weather container
        hourly_weather_container.innerHTML = "";

        // Iterate through hourly weather data and populate the container
        for (const item of hourly_weather) {
            const weather_item = hourly_weather_template.content.cloneNode(true);
            weather_item.querySelector('.time').innerHTML = item.time.slice(-5);
            weather_item.querySelector('.cloud_icon img').src = item.condition.icon;
            weather_item.querySelector('.temperature').innerHTML = `${item.temp_c}°C`;
            hourly_weather_container.appendChild(weather_item);
        }

    })
    .catch(error => {
        console.error(error); // Log any errors that occur during the API request
    });
}

//getCurrentInfos();  Call the function to fetch and display weather information


const change_location_form = document.getElementById('change_location_form');

change_location_form.addEventListener('submit', (e) => {
    e.preventDefault();
    const location = change_location_form.querySelector('input').value;
    getCurrentInfos(location)
})

const close_change_location_modal = document.querySelector('.close_location_modal'),
change_location_modal = document.querySelector('.change_location_modal');

close_change_location_modal.addEventListener('click', () => {
    change_location_modal.style.display = "none";
})









// Check if 'theme' data exists in localStorage
if (!('theme' in localStorage)) {
    const prefersDarkMode = window.matchMedia('(prefers-color-scheme: dark)').matches;
    localStorage.theme = prefersDarkMode ? 'dark' : 'light';
}

// Apply the stored theme to the root HTML element
document.documentElement.setAttribute('data-theme', localStorage.theme);

// Get the reference to the light/dark mode toggle button
const lightDarkBtn = document.getElementById('dark_toggle');

// Set the initial checked state of the toggle based on the stored theme
lightDarkBtn.checked = localStorage.theme === 'dark';

// Listen for changes in the light/dark mode toggle button
lightDarkBtn.addEventListener('change', () => {
    // Toggle between light and dark themes
    const newTheme = lightDarkBtn.checked ? 'dark' : 'light';
    
    // Update the theme attribute and store the new theme setting in local storage
    document.documentElement.setAttribute('data-theme', newTheme);
    localStorage.theme = newTheme;
});
