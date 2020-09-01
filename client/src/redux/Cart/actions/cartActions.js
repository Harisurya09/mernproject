import {CartItems_Type_Fetch, CartItems_Type_Success, CartItems_Type_Failure, CartItems_Type_Less, CartItems_Type_Reset} from './cartTypes';
import axios from 'axios';

export const cartItems_type_fetch = () => {
    return {
        type: CartItems_Type_Fetch
    }
}


const cartItems_type_success = (cartItems) => {
    return {
        type: CartItems_Type_Success,
        payload: cartItems
    }
}

const cartItems_type_failure = (error) => {
    return {
        type: CartItems_Type_Failure,
        payload: error
    }
}

export const cartItems_type_less = (id) => {
    return {
        type: CartItems_Type_Less,
        payload: id
    }
}

export const cartItems_type_reset = () => {
    return {
        type: CartItems_Type_Reset
    }
}


export const cartItems_fetch = (id) => {
    return (dispatch) => {
        axios.get(`/products/${id}`)
            .then(res => {
                const cartItems = res.data;
                dispatch(cartItems_type_success(cartItems))
            })
            .catch(err => {
                const errMsg = err;
                dispatch(cartItems_type_failure(errMsg))
            })
    }
}

