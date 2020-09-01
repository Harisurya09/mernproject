import {Pants_Type_Fetch, Pants_Type_Success, Pants_Type_Failure} from './pantTypes';
import axios from 'axios';

const pants_type_fetch = () => {
    return {
        type: Pants_Type_Fetch
    }
}


const pants_type_success = (Pants) => {
    return {
        type: Pants_Type_Success,
        payload: Pants
    }
}

const pants_type_failure = (error) => {
    return {
        type: Pants_Type_Failure,
        payload: error
    }
}

const pants_fetch = () => {
    return (dispatch) => {
        dispatch(pants_type_fetch())
        axios.get('/prod/riding-pant')
            .then(res => {
                const pants = res.data;
                dispatch(pants_type_success(pants))
            })
            .catch(err => {
                const errMsg = err;
                dispatch(pants_type_failure(errMsg))
            })
    }
}

export default pants_fetch;

