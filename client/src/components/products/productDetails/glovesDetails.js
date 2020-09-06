import React, { useEffect, lazy, Suspense } from 'react'
import {item_fetch} from '../../../redux/Items/actions/itemActions';
import {useSelector,useDispatch} from 'react-redux';
import {cartItems_fetch} from '../../../redux/Cart/actions/cartActions';
const Image = lazy(() => import('../Image'))

function GlovesDetails(props) {
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
                                        <p><em>The go-to gloves for the go-anywhere explorer, now with CE certification!</em></p>
                                        <p>BEFORE YOUR SELECT YOUR GLOVE SIZE: Based on design, fit and form factor, every pair of gloves in our range has a unique sizing chart. Make sure you specifically follow the sizing instructions and the size chart mentioned on this page, before you select your glove size.</p>
										<p><strong>Complete CE Certified Protection</strong></p>
                                        <p>Not just the protectors, the entire {item.productName} glove is CE certified to standard EN13594:2015. This CE certification includes 15 different tests and the gloves are verified to have:</p>
										<ul>
											<li><strong>Impact resistance: </strong> Residual force &lt; 9KN (Kilonewtons)</li>
											<li><strong>Abrasion resistance:</strong> Slide time &lt; 4s (Seconds)</li>
                                            <li><strong>Cut resistance:</strong> On palm &gt; 1.2N (Newtons)</li>
                                            <li><strong>Tear strength:</strong> On palm &gt; 25N and back hand &gt; 18N (Newtons)</li>
                                            <li><strong>Seam strength:</strong> Main seams &gte; 6N/mm (Newtons per Millimeters)</li>
										</ul>
										<p><strong>Impact Protection</strong></p>
										<ul>
                                            <li><strong>Scaphoid Bone</strong>: KNOX® patented Sport SPS (Scaphoid Protection System) includes two specially developed sliders attached to the palm to enable the gloves to slide smoothly on contact with the ground, instead of gripping the impact surface and subsequently reducing hyper-extension of the wrist and potential scaphoid injuries.</li>
                                            <li><strong>Knuckle</strong>: Impact-On (South Korea) HERATROM polyurethane knuckle protectors with HD foam backing.</li>
                                            <li><strong>Fingertips</strong>: HD foam inserts</li>
                                            <li><strong>Finger Joints</strong>: TPU tabs</li>
                                            </ul>
										<p><strong>Abrasion Protection</strong></p>
										<ul>
                                            <li><strong>Heavy Duty Durable Chassis</strong>: made from premium soft full-grain leather</li>
                                            <li><strong>Reinforced Protection</strong>: leather panels at abrasion zones</li>
                                            <li><strong>SureGrip Palm</strong>: High-grip contoured Amara panel with silicon detailing, for complete ride control.</li>
                                        </ul>
										<p><strong>Comfort</strong></p>
										<ul>
											<li><strong>Fit</strong>: Cuff length, comfort fit</li>
                                            <li><strong>Zero Wear In Required</strong>: Pre-curved fingers</li>
											<li><strong>Fit Modulation:</strong> Girth adjusters on wrist</li>
											<li><strong>Ventilation:</strong> Lightweight and sturdy 3D mesh panels on fingers and wrist.</li>
										</ul>
										<p><strong>More Features</strong></p>
										<ul>
											<li><strong>Ease of Access:</strong> Touch screen friendly <strong>TapFingertips<sup>TM</sup></strong> on the index fingers</li>
										</ul>
									</div>
							</div>	
        </div>
    )
}

export default GlovesDetails
