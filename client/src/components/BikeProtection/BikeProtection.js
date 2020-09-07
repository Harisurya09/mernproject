import React, {useEffect} from 'react'
import bikeprotection_fetch from '../../redux/BikeProtection/actions/protectionActions';
import {useSelector, useDispatch } from 'react-redux';
import Product from '../products/Product_HOC/Product';

function BikeProtection() {

    const protections = useSelector(state => state.bike.protections)
    const dispatch = useDispatch()

    useEffect(()=>{
        dispatch(bikeprotection_fetch())
    }, [])

    return (
        <div>
            <Product title='Bike Protections' products={protections} />
        </div>
    )
}

export default BikeProtection
