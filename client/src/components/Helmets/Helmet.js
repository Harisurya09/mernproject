import React, {useEffect} from 'react'
import helmet_fetch from '../../redux/Helmet/Actions/HelmetActions';
import {useSelector, useDispatch } from 'react-redux';
import Product from '../products/Product_HOC/Product';

function Helmet() {

    const helmets = useSelector(state => state.helmet.helmets)
    const dispatch = useDispatch()

    useEffect(()=>{
        dispatch(helmet_fetch())
    }, [])

    return (
        <div>
            <Product title='Riding Helmets' products={helmets} />
        </div>
    )
}

export default Helmet
