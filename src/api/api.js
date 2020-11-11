import axios from 'axios';

const API_KEY = '6a416e2949384bc0aba103814200911';
const instance = axios.create({
    baseURL: 'http://api.weatherapi.com/v1',
})
const date = new Date();

export function getCurrentWeatherFromApi(city) {
    return instance.get(`current.json?key=${API_KEY}&q=${city}`);
}

export function getForecastWeatherFromApi(city) {
    return instance.get(`forecast.json?key=${API_KEY}&q=${city}&days=7`);
}

export function getAstronomyWeatherFromApi(city) {
    return instance.get(`astronomy.json?key=${API_KEY}&q=${city}&dt=${date.getFullYear()}-${date.getMonth()}-${date.getDate()}`);
}