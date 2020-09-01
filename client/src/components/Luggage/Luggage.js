import React from 'react'

import Product from '../products/Product_HOC/Product';


import { useSelector } from 'react-redux';

function RidingLuggage() {

    const luggage = useSelector(state => state.bag.luggage)

    return (
        <div>
            <Product title='Riding Luggage' products={luggage} />
        </div>
    )

}

export default RidingLuggage
