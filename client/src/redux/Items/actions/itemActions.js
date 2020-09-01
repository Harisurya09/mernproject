import {Items_Type_Fetch, Items_Type_Success, Items_Type_Error} from './itemTypes';
import axios from 'axios';

export const items_type_fetch = () => {
    return {
        type: Items_Type_Fetch
    }
}

const items_type_success = (item) => {
    return {
        type: Items_Type_Success,
        payload: item
    }
}

const items_type_error = (error) => {
    localStorage.removeItem('token');
    return {
        type: Items_Type_Error,
        payload: error
    }
}

export const item_fetch = (id) => {
    return (dispatch) => {
        axios.get(`/products/${id}`)
        .then(res=> {
            const item = res.data;
            dispatch(items_type_success(item))
        })
        .catch(err =>
            dispatch(items_type_error(err)));
    }
}
