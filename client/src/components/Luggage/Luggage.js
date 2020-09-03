import React, {useEffect} from 'react'
import lugguage_fetch from '../../redux/Luggage/actions/luggageActions';
import {useSelector, useDispatch } from 'react-redux';
import Product from '../products/Product_HOC/Product';


function RidingLuggage() {

    const luggage = useSelector(state => state.bag.luggage)
    const dispatch = useDispatch()

    useEffect(()=>{
        dispatch(lugguage_fetch())
    }, [])

    return (
        <div>
            <Product title='Riding Luggage' products={luggage} />
        </div>
    )

}

export default RidingLuggage
