import { 
    FETCH_ASTRONOMY_WEATHER_REQUEST,
    FETCH_ASTRONOMY_WEATHER_SUCCESS,
    FETCH_ASTRONOMY_WEATHER_FAILURE,
} from './../actionsTypes';

const initialState = {
   loading:false,
   data:{},
   error:'',
}
export function astronomyWeatherReducer(state = initialState, action) {
    switch (action.type) {
        case FETCH_ASTRONOMY_WEATHER_REQUEST: {
            return ({
                ...state,
                loading: true,
            })
        }
        case FETCH_ASTRONOMY_WEATHER_SUCCESS: {
            return ({
                loading: false,
                data: {...action.payload.data},
                error: '',
            })
        }
        case FETCH_ASTRONOMY_WEATHER_FAILURE: {
            return ({
                loading: false,
                data: {},
                error: action.payload.error.message,
            })
        }
        default: return state;
    }
}