import React, {useEffect}  from 'react'
import pants_fetch from '../../redux/Pants/actions/pantAction';
import {useSelector, useDispatch } from 'react-redux';
import Product from '../products/Product_HOC/Product';

function Pants() {

    const pants = useSelector(state => state.pant.pants)
    const dispatch = useDispatch()

    useEffect(()=>{
        dispatch(pants_fetch())
    }, [])

    return (
        <div>
            <Product title='Riding Pants' products={pants} />
        </div>
    )
}

export default Pants
