import {Items_Type_Fetch, Items_Type_Success, Items_Type_Error} from './actions/itemTypes';

const initialState = {
    loading: false,
    item: [],
    error: ''
}

const itemReducer = (state= initialState, action) => {
    switch (action.type) {
        case Items_Type_Fetch: return {
            ...state,
            loading: true
        }
        case Items_Type_Success: return {
            loading: false,
            item : action.payload,
            error: ''
        }
        case Items_Type_Error: return{
            loading: false,
            item : [],
            error: action.payload
        }    
        default: return state
    }
}

export default itemReducer;