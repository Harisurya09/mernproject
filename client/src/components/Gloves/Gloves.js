import React, {useEffect} from 'react'
import gloves_fetch from '../../redux/Gloves/actions/glovesAction';
import {useSelector, useDispatch } from 'react-redux';
import Product from '../products/Product_HOC/Product';

function Gloves() {

    const gloves = useSelector(state => state.glove.gloves)
    const dispatch = useDispatch()

    useEffect(()=>{
        dispatch(gloves_fetch())
    }, [])

    return (
        <div>
            <Product title='Riding Gloves' products={gloves} />
        </div>
    )
}

export default Gloves
