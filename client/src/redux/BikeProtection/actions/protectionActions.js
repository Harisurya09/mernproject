import {BikeProtection_Type_Fetch, BikeProtection_Type_Success, BikeProtection_Type_Failure} from './protectionTypes';
import axios from 'axios';

const bikeprotection_type_fetch = () => {
    return {
        type: BikeProtection_Type_Fetch
    }
}


const bikeprotection_type_success = (boots) => {
    return {
        type: BikeProtection_Type_Success,
        payload: boots
    }
}

const bikeprotection_type_failure = (error) => {
    return {
        type: BikeProtection_Type_Failure,
        payload: error
    }
}

const bikeprotection_fetch = () => {
    return (dispatch) => {
        dispatch(bikeprotection_type_fetch())
        axios.get('/prod/bike-protection')
            .then(res => {
                const boots = res.data;
                dispatch(bikeprotection_type_success(boots))
            })
            .catch(err => {
                const errMsg = err;
                dispatch(bikeprotection_type_failure(errMsg))
            })
    }
}

export default bikeprotection_fetch;

