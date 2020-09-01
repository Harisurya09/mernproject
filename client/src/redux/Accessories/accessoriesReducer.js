import {Accessories_Type_Fetch, Accessories_Type_Success, Accessories_Type_Failure} from './actions/accessoriesTypes';

const initialState = {
    loading: false,
    accessories: [],
    error: ''
}

const accessoriesReducer = (state = initialState, action) => {
    switch(action.type){
            case Accessories_Type_Fetch: return {
                ...state,
                loading: true
            }
            case Accessories_Type_Success: return {
                loading: false,
                accessories : action.payload,
                error: ''
            }
            case Accessories_Type_Failure: return {
                loading: false,
                accessories : [],
                error: action.payload
            }
            default: return state

    }
}

export default accessoriesReducer