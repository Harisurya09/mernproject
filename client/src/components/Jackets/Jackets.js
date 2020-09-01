import React from 'react';

import Product from '../products/Product_HOC/Product';


import { useSelector } from 'react-redux';

function Jackets() {
    
    const jackets = useSelector(state => state.jacket.jackets)
    // console.log(jackets)
    return (
        <div>
            <Product title='Riding Jacket' products={jackets} />
        </div>
    )
}

export default Jackets
