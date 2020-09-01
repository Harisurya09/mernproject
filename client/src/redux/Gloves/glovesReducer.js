import {Gloves_Type_Fetch, Gloves_Type_Success, Gloves_Type_Failure} from './actions/glovesTypes'

const initialState = {
    loading: false,
    gloves: [],
    error: ''
}

const glovesReducer = (state = initialState, action) => {
    switch(action.type){
            case Gloves_Type_Fetch: return {
                ...state,
                loading: true
            }
            case Gloves_Type_Success: return {
                loading: false,
                gloves : action.payload,
                error: ''
            }
            case Gloves_Type_Failure: return {
                loading: false,
                gloves : [],
                error: action.payload
            }
            default: return state

    }
}

export default glovesReducer