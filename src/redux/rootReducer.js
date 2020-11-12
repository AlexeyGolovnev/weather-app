import { combineReducers } from 'redux';
import { currentWeatherReducer } from './reducers/currentWeatherReducer';
import { astronomyWeatherReducer } from './reducers/astronomyWeatherReducer';
import { forecastWeatherReducer } from './reducers/forecastWeatherReducer';

export const rootReducer  = combineReducers({
    currentWeather: currentWeatherReducer,
    astronomyWeather: astronomyWeatherReducer,
    forecastWeather: forecastWeatherReducer,
});