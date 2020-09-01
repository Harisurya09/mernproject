import React from 'react'

import Product from '../products/Product_HOC/Product';


import { useSelector } from 'react-redux';

function RidingBoots() {

    const boots = useSelector(state => state.boot.boots)

    return (
        <div>
            <Product title='Riding Boots' products={boots} />
        </div>
    )

}

export default RidingBoots
