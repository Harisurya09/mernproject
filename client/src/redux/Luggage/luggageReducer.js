import {Luggage_Type_Fetch, Luggage_Type_Success, Luggage_Type_Failure} from './actions/luggageTypes';

const initialState = {
    loading: false,
    luggage: [],
    error: ''
}

const luggageReducer = (state = initialState, action) => {
    switch(action.type){
            case Luggage_Type_Fetch: return {
                ...state,
                loading: true
            }
            case Luggage_Type_Success: return {
                loading: false,
                luggage : action.payload,
                error: ''
            }
            case Luggage_Type_Failure: return {
                loading: false,
                luggage : [],
                error: action.payload
            }
            default: return state

    }
}

export default luggageReducer