import { getCurrentWeatherFromApi, getAstronomyWeatherFromApi, getForecastWeatherFromApi } from './../api/api'
import { 
    GET_CURRENT_WEATHER,
    // GET_CURRENT_WEATHER_FAILED,
    // GET_CURRENT_WEATHER_PENDING, 
    // GET_CURRENT_WEATHER_SUCCEEDED,
    GET_ASTRONOMY_WEATHER,
    GET_FORECAST_WEATHER,
    // GET_ASTRONOMY_WEATHER_PENDING,
    // GET_ASTRONOMY_WEATHER_SUCCEEDED,
    // GET_ASTRONOMY_WEATHER_FAILED
} from './actionsTypes';

export function getCurrentWeather(city) {
    return async function (dispatch) {
      // dispatch({type:GET_CURRENT_WEATHER_PENDING});
       await getCurrentWeatherFromApi(city)
        .then(response => {
            if(response.status === 200) {
               // dispatch({type:GET_CURRENT_WEATHER_SUCCEEDED})
                dispatch({
                    type:GET_CURRENT_WEATHER,
                    payload:response
                })
            }
            else {
               // dispatch({type:GET_CURRENT_WEATHER_FAILED});
            }
        })
        .catch((err) => {
            //dispatch({type:GET_CURRENT_WEATHER_FAILED});
            alert(err);
        })

    } 
 
}

export function getAstronomyWeather(city) {
    return async function (dispatch) {
       // dispatch({type:GET_ASTRONOMY_WEATHER_PENDING});
        await getAstronomyWeatherFromApi(city)
         .then(response => {
             if(response.status === 200) {
               //  dispatch({type:GET_ASTRONOMY_WEATHER_SUCCEEDED})
                 dispatch({
                     type:GET_ASTRONOMY_WEATHER,
                     payload:response
                 })
             }
             else {
                 //dispatch({type:GET_ASTRONOMY_WEATHER_FAILED});
             }
         })
         .catch((err) => {
            // dispatch({type:GET_ASTRONOMY_WEATHER_FAILED});
            alert(err);
         })
 
     } 
}

export function getForecastWeather(city) {
    return async function(dispatch) {
        await getForecastWeatherFromApi(city)
        .then((response) => {
            if(response.status === 200) {
                  dispatch({
                      type:GET_FORECAST_WEATHER,
                      payload:response
                  })
              }
        })
        .catch((err) => {
            alert(err);
         });
        
    }
}