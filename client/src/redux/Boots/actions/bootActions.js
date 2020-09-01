import {Boots_Type_Fetch, Boots_Type_Success, Boots_Type_Failure} from './bootTypes';
import axios from 'axios';

const boots_type_fetch = () => {
    return {
        type: Boots_Type_Fetch
    }
}


const boots_type_success = (boots) => {
    return {
        type: Boots_Type_Success,
        payload: boots
    }
}

const boots_type_failure = (error) => {
    return {
        type: Boots_Type_Failure,
        payload: error
    }
}

const boots_fetch = () => {
    return (dispatch) => {
        dispatch(boots_type_fetch())
        axios.get('/prod/boots')
            .then(res => {
                const boots = res.data;
                dispatch(boots_type_success(boots))
            })
            .catch(err => {
                const errMsg = err;
                dispatch(boots_type_failure(errMsg))
            })
    }
}

export default boots_fetch;

