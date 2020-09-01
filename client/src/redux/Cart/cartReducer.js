import {CartItems_Type_Fetch, CartItems_Type_Success, CartItems_Type_Failure, CartItems_Type_Less, CartItems_Type_Reset} from './actions/cartTypes';

const initialState = {
    loading: false,
    cartItems: [],
    error: ''
}

const CartItemsReducer = (state = initialState, action) => {
    switch(action.type){
            case CartItems_Type_Fetch: return {
                ...state,
                loading: true
            }
            case CartItems_Type_Success: return {
                loading: false,
                cartItems : [...state.cartItems, action.payload],
                error: ''
            }
            case CartItems_Type_Failure: return {
                loading: false,
                cartItems : [],
                error: action.payload
            }
            case CartItems_Type_Less: {
                let index = state.cartItems.findIndex(item => item._id === action.payload)
                let items = state.cartItems.filter((_, i) => i !== index);
                return {
                ...state, cartItems : items
               }
            }
            case CartItems_Type_Reset: return {
                ...state,
                loading: false,
                cartItems: [],
                error: ''
            }
            default: return state

    }
}

export default CartItemsReducer