import {Pants_Type_Fetch, Pants_Type_Success, Pants_Type_Failure} from './actions/pantTypes'

const initialState = {
    loading: false,
    pants: [],
    error: ''
}

const pantsReducer = (state = initialState, action) => {
    switch(action.type){
            case Pants_Type_Fetch: return {
                ...state,
                loading: true
            }
            case Pants_Type_Success: return {
                loading: false,
                pants : action.payload,
                error: ''
            }
            case Pants_Type_Failure: return {
                loading: false,
                pants : [],
                error: action.payload
            }
            default: return state

    }
}

export default pantsReducer