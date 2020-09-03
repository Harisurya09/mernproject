import React, {useEffect} from 'react'
import boots_fetch from '../../redux/Boots/actions/bootActions';
import {useSelector, useDispatch } from 'react-redux';
import Product from '../products/Product_HOC/Product';

function RidingBoots() {

    const boots = useSelector(state => state.boot.boots)
    const dispatch = useDispatch()

    useEffect(()=>{
        dispatch(boots_fetch())
    }, [])
    
    return (
        <div>
            <Product title='Riding Boots' products={boots} />
        </div>
    )

}

export default RidingBoots
