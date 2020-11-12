import { GET_FORECAST_WEATHER } from './../actionsTypes';

const initialState = {
}
export function forecastWeatherReducer(state = initialState, action) {
    switch (action.type) {
        case GET_FORECAST_WEATHER: {
            return {
                ...state,
                ...action.payload.data,
            }
        }
        default: return state;
    }
}