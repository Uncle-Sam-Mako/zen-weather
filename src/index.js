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


const hourly_weather_container = document.querySelector('.weather_items_container');
    const hourly_weather_template = hourly_weather_container.querySelector('.weather_item_template');
    
    for (let i = 0; i < 6; i++) {
        hourly_weather_container.append(hourly_weather_template.content.cloneNode(true));
    }


const currentWeather = document.getElementById('current_weather') ;
const forecast_url = 'http://api.weatherapi.com/v1/forecast.json?key=f9de0c04c1bc48c2a6485330230408&q=London&days=1&aqi=no&alerts=no'
const current_url = 'http://api.weatherapi.com/v1/current.json?key=f9de0c04c1bc48c2a6485330230408&q=London&aqi=no'

function getCurrentInfos() {
    axios.get(forecast_url)
    .then(response => {
        
        const location = response.data.location;
        const weather = response.data.current;
        const condition = weather.condition;
        const hourly_weather = response.data.forecast.forecastday[0].hour;

        currentWeather.querySelector('.location').textContent = `${location.name}, ${location.country}`;
        currentWeather.querySelector('.localdate').textContent = formatDateTime(location.localtime)[0];
        currentWeather.querySelector('.temp_hour .hour').textContent = formatDateTime(location.localtime)[1];

        currentWeather.querySelector('.temp_hour .temp').textContent = `${parseInt(weather.temp_c)}°`;

        currentWeather.querySelector('.condition').textContent = condition.text
        currentWeather.querySelector('.cloud_icon img').src = condition.icon

        currentWeather.querySelector('.humidity .value').textContent = `${weather.humidity}%`;
        currentWeather.querySelector('.wind .value').textContent = `${weather.wind_mph}mph`;

        hourly_weather_container.innerHTML = "";

        for(const item of hourly_weather) {
            const weather_item = hourly_weather_template.content.cloneNode(true);
            
            weather_item.querySelector('.time').innerHTML = item.time.slice(-5);
            weather_item.querySelector('.cloud_icon img').src = item.condition.icon;
            weather_item.querySelector('.temperature').innerHTML = `${item.temp_c}°C`;

            hourly_weather_container.appendChild(weather_item);
        }

        console.log(hourly_weather)
    })
    .catch(error => {
        console.error(error)
    })
}





getCurrentInfos()