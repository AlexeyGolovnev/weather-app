import axios from 'axios';

const API_KEY = process.env.REACT_APP_API_KEY;
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
export function getCitiesListFromApi(value) {
    return instance.get(`search.json?key=${API_KEY}&q=${value}`);
}