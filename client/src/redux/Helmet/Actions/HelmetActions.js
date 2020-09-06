import {Helmet_Type_Fetch, Helmet_Type_Success, Helmet_Type_Failure} from './HelmetTypes';
import axios from 'axios';

const helmet_type_fetch = () => {
    return {
        type: Helmet_Type_Fetch
    }
}


const helmet_type_success = (helmets) => {
    return {
        type: Helmet_Type_Success,
        payload: helmets
    }
}

const helmet_type_failure = (error) => {
    return {
        type: Helmet_Type_Failure,
        payload: error
    }
}

const helmet_fetch = () => {
    return (dispatch) => {
        dispatch(helmet_type_fetch())
        axios.get('/prod/riding-helmet')
            .then(res => {
                const helmets = res.data;
                dispatch(helmet_type_success(helmets))
                // console.log(res)
            })
            .catch(err => {
                const errMsg = err;
                dispatch(helmet_type_failure(errMsg))
            })
    }
}

export default helmet_fetch;

