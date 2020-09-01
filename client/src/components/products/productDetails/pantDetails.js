import React, { useEffect , lazy, Suspense } from 'react'

import {useSelector} from 'react-redux';
import {cartItems_type_fetch, cartItems_fetch} from '../../../redux/Cart/actions/cartActions';
import {useDispatch} from 'react-redux';
const SubImage = lazy(() =>import('./SubImage'));

function PantDetails() {
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
                                        <p><strong>Impact Protection</strong></p>
                                        <ul>
                                            <li><b>Knee + Leg</b>: KNOX® Microlock CE Level 1 certified (best-in-class coverage)</li>
                                            <li><strong>Hip</strong>: KNOX® Microlock CE Level 1 certified</li>
                                            <li><strong>KneeSlap<sup>TM</sup></strong>: Rynox Exclusive knee armour positioning mechanism. KneeSlap gives you the freedom to adjust the height and position of the knee protectors, while wearing the pants.</li>
                                        </ul>
										<p><strong>Abrasion Protection</strong></p>
										<ul>
											<li><strong>Heavy Duty Outer Shell:</strong> Heavy duty 600D PU coated polyester</li>
											<li><strong>Reinforced Abrasion Zones:</strong> Invista Cordura® panels</li>
										</ul>
										<p><strong>More Protection Features</strong></p>
										<ul>
											<li><strong>Increased Daytime Visibility:</strong> Hi-viz orange 3D mesh in air vents</li>
                                            <li><strong>Increased Low Light Visibility:</strong> Retro reflective detailing on thighs and calves</li>
										</ul>
										<p><strong>3 Layer Construction</strong></p>
										<p>Outer Shell &gt; Rain Liner &gt; Winter Liner</p>
										<ul>
											<li><strong>External Rain Pants:</strong> With sealed seams. Retro reflective panels. Can be worn as stand-alone rain pants. (Can withstand medium to heavy showers when worn with the primary shell).</li>
											<li><strong>Internal Winter Liner:</strong> Attaches to the inside of the outer shell.</li>
										</ul>
										<p><strong>Comfort</strong></p>
										<ul>
											<li><strong>Fit:</strong> Touring fit</li>
											<li><strong>Fit Modulation:</strong> Girth adjusters on waist and bottom hem</li>
											<li><strong>Maximum Ventilation:</strong> 4 strategically placed active vents (2 intake + 2 exhaust).</li>
                                            <li><strong>AeroFlipTM:</strong> Exclusive active ventilation system.</li>
                                            <li><strong>StretchSeat:</strong> Stretch fabric in the seat for easy flexing with your movements.</li>
                                            <li><strong>Ergonomic Trims:</strong> Accordion stretch panels on waist and knees that flex with body movements.</li>
										</ul>
										<p><strong>More Features</strong></p>
										<ul>
											<li><strong>Cargo Capacity:</strong> 2 pockets</li>
											<li>Jacket connection zipper.</li>
										</ul>
									</div>
							</div>	
</div>
		// <div>Single Jacket Component</div>
)
}

export default PantDetails
