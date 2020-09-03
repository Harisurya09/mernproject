import React , {useEffect} from 'react'
import accessories_fetch from '../../redux/Accessories/actions/accessoriesActions';
import {useSelector, useDispatch } from 'react-redux';
import Product from '../products/Product_HOC/Product';

function RidingAccessories() {

    const accessories = useSelector(state => state.extra.accessories)
    const dispatch = useDispatch()

    useEffect(()=>{
        dispatch(accessories_fetch())
    }, [])

    return (
        <div>
            <Product title='Riding Accessories' products={accessories} />
        </div>
    )

}

export default RidingAccessories
