import React from 'react'


import Product from '../products/Product_HOC/Product';


import { useSelector } from 'react-redux';


function Pants() {

    const pants = useSelector(state => state.pant.pants)
    
    return (
        <div>
            <Product title='Riding Pants' products={pants} />
        </div>
    )
}

export default Pants
