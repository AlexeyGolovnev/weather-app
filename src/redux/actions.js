import { 
    getCurrentWeatherFromApi, 
    getAstronomyWeatherFromApi, 
    getForecastWeatherFromApi 
} from './../api/api';
import { 
    FETCH_CURRENT_WEATHER_REQUEST,
    FETCH_CURRENT_WEATHER_SUCCESS,
    FETCH_CURRENT_WEATHER_FAILURE,
    FETCH_ASTRONOMY_WEATHER_REQUEST,
    FETCH_ASTRONOMY_WEATHER_SUCCESS,
    FETCH_ASTRONOMY_WEATHER_FAILURE,
    FETCH_FORECAST_WEATHER_REQUEST,
    FETCH_FORECAST_WEATHER_SUCCESS,
    FETCH_FORECAST_WEATHER_FAILURE,
} from './actionsTypes';

export function getCurrentWeather(city) {
    return async function(dispatch) {
        dispatch({type: FETCH_CURRENT_WEATHER_REQUEST})
        await getCurrentWeatherFromApi(city)
        .then((response) => {
            if(response.status === 200) {
                dispatch({
                    type: FETCH_CURRENT_WEATHER_SUCCESS,
                    payload: response,
                })
            } 
            else {
                dispatch({
                    type: FETCH_CURRENT_WEATHER_FAILURE,
                    payload: response
                })
            }
        })
        .catch((error) => {
            dispatch({
                type: FETCH_CURRENT_WEATHER_FAILURE,
                payload: { err: error.message }
            })
         });
    }
}

export function getAstronomyWeather(city) {
    return async function (dispatch) {
        dispatch({type: FETCH_ASTRONOMY_WEATHER_REQUEST})
        await getAstronomyWeatherFromApi(city)
        .then((response) => {
            if(response.status === 200) {
                dispatch({
                    type: FETCH_ASTRONOMY_WEATHER_SUCCESS,
                    payload: response,
                })
            } 
            else {
                dispatch({
                    type: FETCH_ASTRONOMY_WEATHER_FAILURE,
                    payload: response
                })
            }
        })
        .catch((error) => {
            dispatch({
                type: FETCH_ASTRONOMY_WEATHER_FAILURE,
                payload: { err: error.message }
            })
            });
    }
}

export function getForecastWeather(city) {
    return async function(dispatch) {
        dispatch({type: FETCH_FORECAST_WEATHER_REQUEST})
        await getForecastWeatherFromApi(city)
        .then((response) => {
            if(response.status === 200) {
                dispatch({
                    type: FETCH_FORECAST_WEATHER_SUCCESS,
                    payload: response,
                })
            } 
            else {
                dispatch({
                    type: FETCH_FORECAST_WEATHER_FAILURE,
                    payload: response
                })
            }
        })
        .catch((error) => {
            dispatch({
                type: FETCH_FORECAST_WEATHER_FAILURE,
                payload: { err: error.message }
            })
         });
    }
}


export function getWeather(city) {
    return function(dispatch) {
        dispatch({type: FETCH_CURRENT_WEATHER_REQUEST});
        dispatch({type: FETCH_ASTRONOMY_WEATHER_REQUEST});
        dispatch({type: FETCH_FORECAST_WEATHER_REQUEST});
        Promise.all([getCurrentWeatherFromApi(city), getAstronomyWeatherFromApi(city), getForecastWeatherFromApi(city)])
        .then((response) => {
            console.log(response);
            dispatch({
                type: FETCH_CURRENT_WEATHER_SUCCESS,
                payload: response[0],
            });
            dispatch({
                type: FETCH_ASTRONOMY_WEATHER_SUCCESS,
                payload: response[1],
            });
            dispatch({
                type: FETCH_FORECAST_WEATHER_SUCCESS,
                payload: response[2],
            })
        })
        .catch((error) => {
            dispatch({
                type: FETCH_CURRENT_WEATHER_FAILURE,
                payload: { err: error.message }
            });
            dispatch({
                type: FETCH_ASTRONOMY_WEATHER_FAILURE,
                payload: { err: error.message }
            });
            dispatch({
                type: FETCH_FORECAST_WEATHER_FAILURE,
                payload: { err: error.message }
            });
        }) 
    }
}