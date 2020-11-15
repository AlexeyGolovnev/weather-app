import { 
    FETCH_FORECAST_WEATHER_REQUEST,
    FETCH_FORECAST_WEATHER_SUCCESS,
    FETCH_FORECAST_WEATHER_FAILURE,
} from './../actionsTypes';

const initialState = {
   loading:false,
   data:{},
   error:'',
}
export function forecastWeatherReducer(state = initialState, action) {
    switch (action.type) {
        case FETCH_FORECAST_WEATHER_REQUEST: {
            return ({
                ...state,
                loading: true,
            })
        }
        case FETCH_FORECAST_WEATHER_SUCCESS: {
            return ({
                loading: false,
                data: {...action.payload.data},
                error: '',
            })
        }
        case FETCH_FORECAST_WEATHER_FAILURE: {
            return ({
                loading: false,
                data: {},
                error: action.payload.err.message,
            })
        }
        default: return state;
    }
}