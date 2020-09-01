import React from 'react'

import Product from '../products/Product_HOC/Product';


import { useSelector } from 'react-redux';

function Gloves() {

    const gloves = useSelector(state => state.glove.gloves)

    return (
        <div>
            <Product title='Riding Gloves' products={gloves} />
        </div>
    )
}

export default Gloves
