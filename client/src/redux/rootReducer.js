import {combineReducers} from 'redux'
import jacketReducer from './Jackets/jacketReducer';
import glovesReducer from './Gloves/glovesReducer'
import pantsReducer from './Pants/pantsReducer';
import guardsReducer from './SafetyGuard/guardReducer';
import bootsReducer from './Boots/bootReducer';
import luggageReducer from './Luggage/luggageReducer';
import accessoriesReducer from './Accessories/accessoriesReducer';
import accessReducer from './Access/accessReducer';
import itemReducer from './Items/itemsReducer';
import CartItemsReducer from './Cart/cartReducer'

const rootReducer = combineReducers({
    jacket :jacketReducer,
    glove: glovesReducer,
    pant: pantsReducer,
    guard: guardsReducer,
    boot: bootsReducer,
    bag: luggageReducer,
    extra: accessoriesReducer,
    access: accessReducer,
    item : itemReducer,
    cartItems: CartItemsReducer
})


export default  rootReducer;