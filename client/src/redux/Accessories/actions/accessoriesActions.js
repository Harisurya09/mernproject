import {Accessories_Type_Fetch, Accessories_Type_Success, Accessories_Type_Failure} from './accessoriesTypes';
import axios from 'axios';

const accessories_type_fetch = () => {
    return {
        type: Accessories_Type_Fetch
    }
}


const accessories_type_success = (accessories) => {
    return {
        type: Accessories_Type_Success,
        payload: accessories
    }
}

const accessories_type_failure = (error) => {
    return {
        type: Accessories_Type_Failure,
        payload: error
    }
}

const accessories_fetch = () => {
    return (dispatch) => {
        dispatch(accessories_type_fetch())
        axios.get('/prod/accessories')
            .then(res => {
                const accessories = res.data;
                dispatch(accessories_type_success(accessories))
            })
            .catch(err => {
                const errMsg = err;
                dispatch(accessories_type_failure(errMsg))
            })
    }
}

export default accessories_fetch;

