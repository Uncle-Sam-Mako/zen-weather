import "./css/main.scss"; // Import the main SCSS file for styling
import "./js/locationModal";
import config from "./js/config";
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


    showLoader() {
        const loader = document.getElementById('loader');
        loader.style.display = 'flex';
    }

    hideLoader() {
        const loader = document.getElementById('loader');
        loader.style.display = 'none';
    }


    fetchWeatherData(location) {

        this.showLoader();

        


        const url = `${this.forecastUrl}?key=${this.apiKey}&q=${location}&days=1&aqi=no&alerts=no`;

        axios.get(url)
            .then(response => {
                const data = response.data;
                this.updateCurrentWeather(data.location, data.current);
                this.updateHourlyWeather(data.forecast.forecastday[0].hour);
                this.changeWeatherLocation(data.location);
                this.fillSavedLocationInDOM()
            })
            .catch(error => {
                console.error(error);
            })
            .finally(() => {
                this.hideLoader();  // Masque le loader, que la requête soit réussie ou non
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
        let location_data = { "id": ("" + location.lat + "_" + location.lon), "city": location.name, "country": location.country, "isActive": localStorage.locations ? false : true };

        if (!('locations' in localStorage)) {
            localStorage.locations = JSON.stringify([location_data]);
        } else {
            let locationsArray = JSON.parse(localStorage.locations);

            if (!locationsArray.some(location => location.id === location_data.id)) {
                if (locationsArray.length < 5) {
                    locationsArray.push(location_data);
                    localStorage.locations = JSON.stringify(locationsArray);
                } else {
                    alert("You can save only 5 locations")
                }
            }
        }
    }

    fillSavedLocationInDOM() {
        const saved_location_list = document.querySelector('.saved_location_list');
        if (!('locations' in localStorage)) {
            saved_location_list.innerHTML = `<p class="no_location_saved_text">Saved locations will be displayed here</p>`;
        } else {

            saved_location_list.innerHTML = "";

            const saved_locations_array = JSON.parse(localStorage.locations);;

            saved_locations_array.forEach((location) => {
                const location_elt =
                    `<li class="location_item">
                    <label class="location_infos" for=${location.id}>
                        <span class="location_town">${location.city}</span>
                        <span class="location_country">${location.country}</span>
                        <input type="radio" checked=${location.isActive} name="location" id=${location.id}>
                    </label>
                    <button class="delete_location" data-location_id=${location.id}>
                        <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 352 512"><path d="M242.72 256l100.07-100.07c12.28-12.28 12.28-32.19 0-44.48l-22.24-22.24c-12.28-12.28-32.19-12.28-44.48 0L176 189.28 75.93 89.21c-12.28-12.28-32.19-12.28-44.48 0L9.21 111.45c-12.28 12.28-12.28 32.19 0 44.48L109.28 256 9.21 356.07c-12.28 12.28-12.28 32.19 0 44.48l22.24 22.24c12.28 12.28 32.2 12.28 44.48 0L176 322.72l100.07 100.07c12.28 12.28 32.2 12.28 44.48 0l22.24-22.24c12.28-12.28 12.28-32.19 0-44.48L242.72 256z"/></svg>
                    </button>
                </li>`;
                saved_location_list.innerHTML += location_elt;
            })
        }

        this.bindLocationChangeEvent();
    }

    bindLocationChangeEvent() {
        const locationRadios = document.querySelectorAll('input[name="location"]');
        const savedLocations = JSON.parse(localStorage.locations);
        locationRadios.forEach(radio => {
            radio.addEventListener('change', (event) => {
                const selectedLocationId = event.target.id;

                savedLocations.forEach(location => {
                    location.isActive = location.id === selectedLocationId;
                });
                const selectedLocation = savedLocations.find(location => location.id === selectedLocationId);   

                localStorage.locations = JSON.stringify(savedLocations);

                this.fetchWeatherData(selectedLocation.city);
            });
        });
    }

    startWeatherApp() {
        
        let activeLocation = {"city" : "Kinshasa"};

        if ('locations' in localStorage) {
            const locationsArray = JSON.parse(localStorage.locations);
            activeLocation = locationsArray.find(location => location.isActive);
        }

        this.fetchWeatherData(activeLocation.city)
    }
      
}



const apiKey = config.API_KEY;
const weatherApp = new WeatherApp(apiKey);

// Call the fetchWeatherData method to get weather information
//weatherApp.fetchWeatherData('Brazzaville');


window.addEventListener('load', () => {
    weatherApp.startWeatherApp();
    weatherApp.fillSavedLocationInDOM();
});







const change_location_form = document.getElementById('change_location_form');

change_location_form.addEventListener('submit', (e) => {
    e.preventDefault();
    const location = change_location_form.querySelector('input').value;
    weatherApp.fetchWeatherData(location)
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