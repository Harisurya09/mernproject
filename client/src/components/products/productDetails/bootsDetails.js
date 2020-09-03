import React, { useEffect ,  lazy, Suspense} from 'react'
import {item_fetch} from '../../../redux/Items/actions/itemActions';
import {useSelector, useDispatch} from 'react-redux';
import {cartItems_fetch} from '../../../redux/Cart/actions/cartActions';
const SubImage = lazy(() =>import('./SubImage'));

function BootsDetails(props) {
	const item = useSelector(state => state.item.item)

	const dispatch = useDispatch()

	const addToCart = (id) => {
		dispatch(cartItems_fetch(id));
		alert('Item added to cart')
	}

	useEffect(()=>{
		// dispatch(items_type_fetch())
		dispatch(item_fetch(props.match.params.id))
	},[props.match.params.id])

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
                                        <ul>
											<li>Made of High quality Premium Microfiber leather boot upper construction with durable soles designed for improved riding feel.</li>
											<li>Contoured shin plate protectors are injected with high modulus TPU Protectors on Shin, Ankle and Heel for superior impact and abrasion resistance.</li>
											<li>letsRideSafe's unique multi-linkcontrol system provides advanced external protection and support for ankle articulation, limiting hyper-torsion, hyper-extension and hyper-flexion as well as providing Achilles and ankle impact protection</li>
											<li>Advanced Air tech inner inning for higher level of breathing.</li>
											<li>TVS back counter ankle protection</li>
											<li>Mcs toe protection system.</li>
											<li>Inner Lacing system</li>
											<li>Stainless Steel Toe sliders for Maximum protection while cornering.</li>
											<li>Gear Shift Panel for protection &amp; rigidity while shifting gears.</li>
											<li>Reflective piping for night visibility</li>
											<li>Heavy duty YKK Zipper.</li>
											<li>Front and rear asymmetrical accordion stretch zones for maximum comfort and improved safety.</li>
										</ul>
									</div>
							</div>	
</div>
)
}

export default BootsDetails
