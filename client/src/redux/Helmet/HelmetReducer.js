import {Helmet_Type_Fetch, Helmet_Type_Success, Helmet_Type_Failure} from './Actions/HelmetTypes'

const initialState = {
    loading: false,
    helmets: [],
    error: ''
}

const helmetsReducer = (state = initialState, action) => {
    switch(action.type){
            case Helmet_Type_Fetch: return {
                ...state,
                loading: true
            }
            case Helmet_Type_Success: return {
                loading: false,
                helmets : action.payload,
                error: ''
            }
            case Helmet_Type_Failure: return {
                loading: false,
                helmets : [],
                error: action.payload
            }
            default: return state

    }
}

export default helmetsReducer