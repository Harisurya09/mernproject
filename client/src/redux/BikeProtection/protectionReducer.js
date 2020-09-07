import {BikeProtection_Type_Fetch, BikeProtection_Type_Success, BikeProtection_Type_Failure}  from './actions/protectionTypes'

const initialState = {
    loading: false,
    protections: [],
    error: ''
}

const protectionReducer = (state = initialState, action) => {
    switch(action.type){
            case BikeProtection_Type_Fetch: return {
                ...state,
                loading: true
            }
            case BikeProtection_Type_Success: return {
                loading: false,
                protections : action.payload,
                error: ''
            }
            case BikeProtection_Type_Failure: return {
                loading: false,
                protections : [],
                error: action.payload
            }
            default: return state

    }
}

export default protectionReducer