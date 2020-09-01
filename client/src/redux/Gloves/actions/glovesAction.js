import {Gloves_Type_Fetch, Gloves_Type_Success, Gloves_Type_Failure} from './glovesTypes';
import axios from 'axios';

const gloves_type_fetch = () => {
    return {
        type: Gloves_Type_Fetch
    }
}


const gloves_type_success = (gloves) => {
    return {
        type: Gloves_Type_Success,
        payload: gloves
    }
}

const gloves_type_failure = (error) => {
    return {
        type: Gloves_Type_Failure,
        payload: error
    }
}

const gloves_fetch = () => {
    return (dispatch) => {
        dispatch(gloves_type_fetch())
        axios.get('/prod/riding-gloves')
            .then(res => {
                const gloves = res.data;
                dispatch(gloves_type_success(gloves))
                // console.log(res)
            })
            .catch(err => {
                const errMsg = err;
                dispatch(gloves_type_failure(errMsg))
            })
    }
}

export default gloves_fetch;

