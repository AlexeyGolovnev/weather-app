import { GET_ASTRONOMY_WEATHER } from "../actionsTypes";

const initialState = {
}
export function astronomyWeatherReducer(state = initialState, action) {
    switch (action.type) {
        case GET_ASTRONOMY_WEATHER: {
            return ({
                ...state,
                ...action.payload.data,
            })
        }
        default: return state;
    }
}