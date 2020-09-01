import React from 'react'

import Product from '../products/Product_HOC/Product';


import { useSelector } from 'react-redux';

function SafetyGuard() {

    const guards = useSelector(state => state.guard.guards)

    return (
        <div>
            <Product title='Riding Safety Guards' products={guards} />
        </div>
    )
}

export default SafetyGuard
