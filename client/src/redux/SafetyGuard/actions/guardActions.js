import {Guards_Type_Fetch, Guards_Type_Success, Guards_Type_Failure} from './guardTypes';
import axios from 'axios';

const guards_type_fetch = () => {
    return {
        type: Guards_Type_Fetch
    }
}


const guards_type_success = (guards) => {
    return {
        type: Guards_Type_Success,
        payload: guards
    }
}

const guards_type_failure = (error) => {
    return {
        type: Guards_Type_Failure,
        payload: error
    }
}

const guards_fetch = () => {
    return (dispatch) => {
        dispatch(guards_type_fetch())
        axios.get('/prod/safety-guards')
            .then(res => {
                const guards = res.data;
                dispatch(guards_type_success(guards))
            })
            .catch(err => {
                const errMsg = err;
                dispatch(guards_type_failure(errMsg))
            })
    }
}

export default guards_fetch;

