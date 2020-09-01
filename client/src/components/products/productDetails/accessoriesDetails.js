import React, { useEffect , lazy, Suspense} from 'react'

import {useSelector} from 'react-redux';
import {cartItems_type_fetch, cartItems_fetch} from '../../../redux/Cart/actions/cartActions';
import {useDispatch} from 'react-redux'
const SubImage = lazy(() =>import('./SubImage'));

function AccessoriesDetails() {
	const item = useSelector(state => state.item.item)

	const dispatch = useDispatch()

	const addToCart = (id) => {
		dispatch(cartItems_fetch(id));
		alert('Item added to cart')
	}

	useEffect(()=>{
		dispatch(cartItems_type_fetch())
	})
    return (
        <div className="item_detail_screen">
				<div className="item_img">
				<h2>{item.productName}</h2>
				<Suspense fallback='Image Loading....'>
					<SubImage image={item.productImage} name={item.productName} />
				</Suspense>
				</div>
				<div className="item_detals">
								<h2>{item.productName}</h2>
								<p>Brand: <strong>{item.brand}</strong></p>
									<p>Price: <strong>{item.price}</strong></p>
									<p>Delivery time: one week</p>
									<button type="button" onClick={() => addToCart(item._id)}>Add to Cart</button>
									<div className="items_details_desc">
                                    <p><strong>Description :</strong></p>
									<p>Due to the COVID-19 lockdown restrictions, before you go ahead and place your order, we request you to make sure that delivery services have resumed in your area. Enter your pin code in the "Check Lockdown Serviceability" section to check the status of courier services in your pin code.</p>
                                    <p>{item.description}</p>
                                </div>
							</div>	
</div>
)
}

export default AccessoriesDetails
