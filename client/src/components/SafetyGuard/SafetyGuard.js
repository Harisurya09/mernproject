import React, {useEffect} from 'react'
import guards_fetch from '../../redux/SafetyGuard/actions/guardActions';
import {useSelector, useDispatch } from 'react-redux';
import Product from '../products/Product_HOC/Product';

function SafetyGuard() {

    const guards = useSelector(state => state.guard.guards)
    const dispatch = useDispatch()

    useEffect(()=>{
        dispatch(guards_fetch())
    }, [])

    return (
        <div>
            <Product title='Riding Safety Guards' products={guards} />
        </div>
    )
}

export default SafetyGuard
