import {Authorized_User, Unauthorized_User, LoggedOut_User, LoggedIn_User, Update_User_Profile, Remove_User_Profile} from './actions/accessTypes';

const initialState = {
    loading: false,
    authorized : false,
    user: [],
    token: '',
    error: ''
}

const accessReducer = (state = initialState, action) => {
    switch (action.type) {
        case LoggedIn_User: {
            const update = state.user
            return {
            ...state,
            loading: true,
            user : update
            }
        }
        case Authorized_User: return {
            ...state,
            loading: false,
            authorized : true,
            user: action.payload.user,
            token: action.payload.token,
            error: ''
        }   
        case Unauthorized_User: return {
            ...state,
            loading: false,
            authorized : false,
            user: [],
            token: '',
            error: action.payload
        } 
        case LoggedOut_User: return {
            ...state,
            loading: false,
            authorized : false,
            user: [],
            token: '',
            error: '',
        }
        case Update_User_Profile: {
            return {
            ...state,
            loading: false,
            authorized : true,
            user: action.payload,
            token: '',
            error: ''
            } 
        }
        case Remove_User_Profile: return {
            ...state,
            loading: false,
            authorized : false,
            user: [],
            token: '',
            error: '',
        }
        default:
            return state;
    }

}

export default accessReducer