import "./css/main.scss"
import axios from 'axios';


function formatDateTime(datetime) {
    const inputDate = datetime;

    // Convertir la chaîne de date en objet Date
    const dateObject = new Date(inputDate);

    // Obtenir le jour de la semaine et le mois sous forme abrégée
    const options = { weekday: 'short', month: 'short', day: 'numeric' };
    const formattedDate = new Intl.DateTimeFormat('en-US', options).format(dateObject);

    // Obtenir l'heure et les minutes
    const hours = dateObject.getHours();
    const minutes = dateObject.getMinutes();

    // Formater l'heure
    const formattedTime = `${hours.toString().padStart(2, '0')}:${minutes.toString().padStart(2, '0')}`;

    return [formattedDate, formattedTime]
}

const currentWeather = document.getElementById('current_weather') ;
const forecast_url = 'http://api.weatherapi.com/v1/forecast.json?key=f9de0c04c1bc48c2a6485330230408&q=London&days=1&aqi=no&alerts=no'
const current_url = 'http://api.weatherapi.com/v1/current.json?key=f9de0c04c1bc48c2a6485330230408&q=London&aqi=no'

function getCurrentInfos() {
    axios.get(current_url)
    .then(response => {
        
        const location = response.data.location;
        const weather = response.data.current;
        const condition = weather.condition;

        currentWeather.querySelector('.location').textContent = `${location.name}, ${location.country}`;
        currentWeather.querySelector('.localdate').textContent = formatDateTime(location.localtime)[0];
        currentWeather.querySelector('.temp_hour .hour').textContent = formatDateTime(location.localtime)[1];

        currentWeather.querySelector('.temp_hour .temp').textContent = `${parseInt(weather.temp_c)}°`;

        currentWeather.querySelector('.condition').textContent = condition.text
        currentWeather.querySelector('.cloud_icon img').src = condition.icon

        currentWeather.querySelector('.humidity .value').textContent = `${weather.humidity}%`;
        currentWeather.querySelector('.wind .value').textContent = `${weather.wind_mph}mph`;

        console.log(response.data)
    })
    .catch(error => {
        console.error(error)
    })
}

getCurrentInfos()

