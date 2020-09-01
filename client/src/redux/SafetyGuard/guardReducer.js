import {Guards_Type_Fetch, Guards_Type_Success, Guards_Type_Failure}  from './actions/guardTypes'

const initialState = {
    loading: false,
    guards: [],
    error: ''
}

const guardsReducer = (state = initialState, action) => {
    switch(action.type){
            case Guards_Type_Fetch: return {
                ...state,
                loading: true
            }
            case Guards_Type_Success: return {
                loading: false,
                guards : action.payload,
                error: ''
            }
            case Guards_Type_Failure: return {
                loading: false,
                guards : [],
                error: action.payload
            }
            default: return state

    }
}

export default guardsReducer