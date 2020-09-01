import {Luggage_Type_Fetch, Luggage_Type_Success, Luggage_Type_Failure} from './luggageTypes';
import axios from 'axios';

const luggage_type_fetch = () => {
    return {
        type: Luggage_Type_Fetch
    }
}


const luggage_type_success = (luggage) => {
    return {
        type: Luggage_Type_Success,
        payload: luggage
    }
}

const luggage_type_failure = (error) => {
    return {
        type: Luggage_Type_Failure,
        payload: error
    }
}

const luggage_fetch = () => {
    return (dispatch) => {
        dispatch(luggage_type_fetch())
        axios.get('/prod/riding-luggage')
            .then(res => {
                const luggage = res.data;
                dispatch(luggage_type_success(luggage))
            })
            .catch(err => {
                const errMsg = err;
                dispatch(luggage_type_failure(errMsg))
            })
    }
}

export default luggage_fetch;

