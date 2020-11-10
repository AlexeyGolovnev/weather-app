import axios from 'axios';

const API_KEY = '6a416e2949384bc0aba103814200911';
const instance = axios.create({
    baseURL: 'http://api.weatherapi.com/v1',
})
const date = new Date();

export function getCurrentWeather(city) {
    instance.get(`current.json?${API_KEY}&q=${city}`);
}

export function getForecastWeather(city) {
    instance.get(`forecast.json?${API_KEY}&q=${city}&days=7`);
}

export function getAstronomyWeather(city) {
    instance.get(`astronomy.json?${API_KEY}&q=${city}&dt=${date.getFullYear()}-${date.getMonth()}-${date.getDate}`);
}