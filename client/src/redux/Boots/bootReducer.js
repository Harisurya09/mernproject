import {Boots_Type_Fetch, Boots_Type_Success, Boots_Type_Failure}  from './actions/bootTypes'

const initialState = {
    loading: false,
    boots: [],
    error: ''
}

const bootsReducer = (state = initialState, action) => {
    switch(action.type){
            case Boots_Type_Fetch: return {
                ...state,
                loading: true
            }
            case Boots_Type_Success: return {
                loading: false,
                boots : action.payload,
                error: ''
            }
            case Boots_Type_Failure: return {
                loading: false,
                boots : [],
                error: action.payload
            }
            default: return state

    }
}

export default bootsReducer