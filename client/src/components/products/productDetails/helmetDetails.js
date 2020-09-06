import React, { useEffect , lazy, Suspense} from 'react'
import {item_fetch} from '../../../redux/Items/actions/itemActions';
import {useSelector, useDispatch} from 'react-redux';
import {cartItems_fetch} from '../../../redux/Cart/actions/cartActions';
const Image = lazy(() => import('../Image'))

function HelmetDetails(props) {
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
					<Image image={item.productImage} name={item.productName} />
				</Suspense>
				</div>
				<div className="item_detals">
								<h2>{item.productName}</h2>
								<p>Brand: <strong>{item.brand}</strong></p>
									<p>Price: <strong>{item.price} INR</strong></p>
									<p>Delivery time: one week</p>
									<button type="button" onClick={() => addToCart(item._id)}>Add to Cart</button>
									<div className="items_details_desc">
                                    <p><strong>Description :</strong></p>
									<p>Due to the COVID-19 lockdown restrictions, before you go ahead and place your order, we request you to make sure that delivery services have resumed in your area. Enter your pin code in the "Check Lockdown Serviceability" section to check the status of courier services in your pin code.</p>
                                    <p>This one’s an outcome of sheer transformation. An all-purpose helmet that is not just out of the ordinary, but is destined to change from good to great. The Blaster makes you feel like a superhero on the inside. After all, confidence is in the head.</p>
                                    <p><strong>Features: </strong></p>
                                    <p><strong>Shell: </strong></p>
                                    <ul>
                                        <li>High Impact Injected polycarbonate shell for improved protection.</li>
                                        <li>Multiple Shell Sizes - to provide the right fit for maximum safety.</li>
                                        <li>Multi-density inner EPS, designed for better impact absorption.</li>
                                        <li>Unique Aerodynamic Shell, with an integrated split wing spoiler ( First in the Industry)</li>
                                        <li>Multi-ventilation system with optimized airflow to help the rider feel comfy during extreme heat.</li>
                                    </ul>
                                    <p><strong>Visor: </strong></p>
                                    <ul>
                                        <li>Pin-lock ready Max Vision Visor - equipped to attach/detach Anti-fog inserts. For a clear edge-to-edge vision even in foggy weather conditions.</li>
                                        <li>Adjustable Internal Sun Visor for cozy long-distance riding in the blistering sun.</li>
                                        <li>Turbulators along the sides of the visor to reduce buffeting.</li>
                                        <li>Push-to-release locking mechanism for easy opening and closing of the visor.</li>
                                        <li>Quick Release System (QRS) helps in removing and replacing the visor effortlessly.</li>
                                    </ul>
                                    <p><strong>Interior: </strong></p>
                                    <ul>
                                        <li>Luxury Dual-tone anti-allergic and wicking internal fabrics - absorbs and dissipates perspiration from the skin.</li>
                                        <li>Laser cut foam padding for an ultimate contoured fit.</li>
                                        <li>Easily removable and washable interiors to keep helmet clean.</li>
                                        <li>Removable chin curtain.</li>
                                        <li>Embedded speaker pockets for Bluetooth communication systems.</li>
                                    </ul>
                                    <p><strong>Safety: </strong></p>
                                    <ul>
                                        <li>Dual Certification - ECE R-22.05 (EU) &amp; DOT (US).</li>
                                        <li>Robust Chin Strap with D-Ring fasteners - Safest way to fasten a helmet.</li>
                                    </ul>
                                    <p><strong>Other: </strong></p>
                                    <ul>
                                        <li>At a weight of 1550 (+/-50) grams, it is light on the head.</li>
                                    </ul>
                                    <p>The color of the image may vary slightly from the actual product.</p>
                                    <p>*High – viz colors are prone to faster UV degradation because of their nature</p>
                                </div>
							</div>	
</div>
)
}

export default HelmetDetails
