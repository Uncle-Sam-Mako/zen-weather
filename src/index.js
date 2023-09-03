import "./css/main.scss"; // Import the main SCSS file for styling
import "./js/locationModal"
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


class WeatherApp {
    constructor(apiKey) {
        this.apiKey = apiKey;
        this.forecastUrl = 'http://api.weatherapi.com/v1/forecast.json';
        this.currentWeather = document.getElementById('current_weather');
        this.hourlyWeatherContainer = document.querySelector('.weather_items_container');
        this.hourlyWeatherTemplate = document.querySelector('.weather_item_template');
    }

    fetchWeatherData(location) {
        const url = `${this.forecastUrl}?key=${this.apiKey}&q=${location}&days=1&aqi=no&alerts=no`;

        axios.get(url)
            .then(response => {
                const data = response.data;
                this.updateCurrentWeather(data.location, data.current);
                this.updateHourlyWeather(data.forecast.forecastday[0].hour);
            })
            .catch(error => {
                console.error(error);
            });
    }

    updateCurrentWeather(location, weatherData) {
        // Update DOM elements with current weather data

        const condition = weatherData.condition;

        this.currentWeather.querySelector('.location .value').textContent = `${location.name}, ${location.country}`;
        this.currentWeather.querySelector('.localdate').textContent = formatDateTime(location.localtime)[0];
        this.currentWeather.querySelector('.temp_hour .hour').textContent = formatDateTime(location.localtime)[1];
        this.currentWeather.querySelector('.temp_hour .temp').textContent = `${parseInt(weatherData.temp_c)}°`;
        this.currentWeather.querySelector('.condition').textContent = condition.text;
        this.currentWeather.querySelector('.cloud_icon img').src = condition.icon;
        this.currentWeather.querySelector('.humidity .value').textContent = `${weatherData.humidity}%`;
        this.currentWeather.querySelector('.wind .value').textContent = `${weatherData.wind_mph}mph`;
    }

    updateHourlyWeather(hourlyWeatherData) {
        this.hourlyWeatherContainer.innerHTML = '';

        for (const item of hourlyWeatherData) {
            const weatherItem = this.hourlyWeatherTemplate.content.cloneNode(true);

            // Update weather item DOM elements
            weatherItem.querySelector('.time').innerHTML = item.time.slice(-5);
            weatherItem.querySelector('.cloud_icon img').src = item.condition.icon;
            weatherItem.querySelector('.temperature').innerHTML = `${item.temp_c}°C`;

            this.hourlyWeatherContainer.appendChild(weatherItem);
        }
    }

    changeWeatherLocation(location) {
        if (!('locations' in localStorage)) {
          localStorage.locations = JSON.stringify([location]);
        } else {
          let locationsArray = JSON.parse(localStorage.locations);
          
          if (!locationsArray.includes(location)) {
            locationsArray.push(location);
            localStorage.locations = JSON.stringify(locationsArray);
          }
        }
      }
      
}

const apiKey = 'f9de0c04c1bc48c2a6485330230408';
const weatherApp = new WeatherApp(apiKey);

// Call the fetchWeatherData method to get weather information
//weatherApp.fetchWeatherData('Brazzaville');


const change_location_form = document.getElementById('change_location_form');

change_location_form.addEventListener('submit', (e) => {
    e.preventDefault();
    const location = change_location_form.querySelector('input').value;
    weatherApp.changeWeatherLocation(location)
})


document.addEventListener('click', function(event) {
    const menu = document.querySelector('.menu');
    const menuBtn = document.querySelector('.menu_btn_container');
    if (!menu.contains(event.target) && (!menuBtn.contains(event.target))){
        // Cacher le menu ici
        menuBtn.querySelector("#menu_check").checked = false;
    }
});






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
