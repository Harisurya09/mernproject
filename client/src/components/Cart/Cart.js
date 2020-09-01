import React , {useState, useEffect}from 'react';
import { useSelector } from 'react-redux';

import {cartItems_type_less, cartItems_type_reset} from '../../redux/Cart/actions/cartActions';
import {useDispatch} from 'react-redux';
import {useHistory} from 'react-router-dom';
import './Cart.css'


function Cart() {
    const List = useSelector(state => state.cartItems.cartItems);
    const status = useSelector(state => state.access.authorized)
    const dispatch = useDispatch();
    const history = useHistory()

    const [cartList, setCartList] = useState(List)

    const removeItem = (id) => {
        dispatch(cartItems_type_less(id))
        // console.log(id)
    }

    const redirect = () => {
        dispatch(cartItems_type_reset())
        history.push('/cart/order');
    }

    const loginIN = () => {
        history.push('/user/login')
    }

    useEffect(()=>{
        setCartList(List)
    }, [List])


    return (
        <React.Fragment>
        {
            cartList.length > 0 ? ( <div className="cart_container">
            <h2>Cart</h2>
            <table>
                <thead>
                    <tr>
                    <th>Product</th>
                    <th>Qty</th>
                    <th>Price</th>
                    <th>Remove</th> 
                    </tr>
                </thead>
                <tbody>
                {
                        cartList.map(item => {
                            return(
                                <tr key={item._id}><td>{item.productName}</td><td>1</td><td>{item.price} INR</td><td><button type="button" className='removeBtn' onClick={()=>(removeItem(item._id))}>x</button></td> </tr>
                            )
                        })
                }
                </tbody>
            </table>
            <div className="items_cost"><p>Total Price - {cartList.reduce((a, c) => a + Number(c.price) , 0)} INR</p> 
            {
                !status ? (<button type="button" onClick={loginIN} className='button'>Please login to proceed</button>): (<button type="button" onClick={redirect} className='button'>Check Out</button>)
            }
            </div>
        </div>) : (<div className="cart_container"><h2>Cart</h2><p>Your cart is emply</p></div>)
        }
        </React.Fragment>
    )
}

export default  Cart;