import { GET_CURRENT_WEATHER, GET_CURRENT_WEATHER_FAILED, GET_CURRENT_WEATHER_SUCCEEDED, GET_CURRENT_WEATHER_PENDING } from "../actionsTypes";

const initialState = {
    pending: false,
    succeeded: false,
    failed:false,
}
export function currentWeatherReducer(state = initialState, action) {
    switch (action.type) {
        case GET_CURRENT_WEATHER: {
            return ({
                ...state,
                ...action.payload.data,
            })
        }

        case GET_CURRENT_WEATHER_FAILED: {
            return ({
                ...state,
                failed: true,
                pending:false,
                succeeded:false,
            })
        }
        case GET_CURRENT_WEATHER_SUCCEEDED: {
            return ({
                ...state,
                succeeded: true,
                pending:false,
                failed:false,

            })
        }
        case GET_CURRENT_WEATHER_PENDING: {
            return ({
                ...state,
                pending: true,
                succeeded: false,
                failed:false,
            })
        }

        default: return state;
    }
}