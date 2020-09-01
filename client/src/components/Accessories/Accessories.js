import React from 'react'

import Product from '../products/Product_HOC/Product';


import { useSelector } from 'react-redux';

function RidingAccessories() {

    const accessories = useSelector(state => state.extra.accessories)

    return (
        <div>
            <Product title='Riding Accessories' products={accessories} />
        </div>
    )

}

export default RidingAccessories
