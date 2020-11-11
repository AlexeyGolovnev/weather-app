import { combineReducers } from 'redux';
import { currentWeatherReducer } from './reducers/currentWeatherReducer';
import { astronomyWeatherReducer } from './reducers/astronomyWeatherReducer';

export const rootReducer  = combineReducers({
    currentWeather: currentWeatherReducer,
    astronomyWeather: astronomyWeatherReducer
});