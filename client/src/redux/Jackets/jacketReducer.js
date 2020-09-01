import {Jackets_Type_Fetch, Jackets_Type_Success, Jackets_Type_Failure}  from './actions/jacketType';

const initialState = {
    loading: false,
    jackets: [],
    error: ''
};

const jacketReducer = (state = initialState, action) => {
        switch (action.type){
                case Jackets_Type_Fetch : return {
                        ...state,
                        loading : true
                    }
                case Jackets_Type_Success: 
                    return {
                        loading: false,
                        jackets: action.payload,
                        error: ''
                    }
                case Jackets_Type_Failure: 
                    return {
                        loading: false,
                        jackets: [],
                        error: action.payload
                    }
                default: return state                
        }
}


export default jacketReducer;