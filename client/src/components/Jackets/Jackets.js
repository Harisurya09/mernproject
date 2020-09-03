import React , {useEffect} from 'react';
import jackets_fetch from '../../redux/Jackets/actions/jacketActions';
import {useSelector, useDispatch } from 'react-redux';
import Product from '../products/Product_HOC/Product';


function Jackets() {
    
    const jackets = useSelector(state => state.jacket.jackets)
    const dispatch = useDispatch()

    useEffect(()=>{
        dispatch(jackets_fetch())
    }, [])

    return (
        <div>
            <Product title='Riding Jacket' products={jackets} />
        </div>
    )
}

export default Jackets
