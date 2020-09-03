import React, { useEffect, lazy, Suspense } from 'react'
import {item_fetch} from '../../../redux/Items/actions/itemActions';
import {useSelector, useDispatch} from 'react-redux';
import {cartItems_fetch} from '../../../redux/Cart/actions/cartActions';

const SubImage = lazy(() =>import('./SubImage'));

function JacketDetails(props) {
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
										<p><strong>Nothing but the essentials</strong></p>
										<p><strong>Impact Protection</strong></p>
										<ul>
											<li><strong>Shoulder and Elbow:</strong> Safe-Tech (Italian) CE Level 2 protectors certified to standard EN1621-2:2012.</li>
											<li><strong>Back:</strong> Safe-Tech (Italian) CE Level 2 protector, with superior coverage, certified to standard EN1621-2:2014.</li>
										</ul>
										<p><strong>Abrasion Protection</strong></p>
										<ul>
											<li><strong>Super Ventilated Outer Shell:</strong> Lightweight and sturdy 3D mesh with dual-fold knit.</li>
											<li><strong>Heavy Duty Textile:</strong> 600D PU coated polyester. Tear resistant interlocking Dobby weave.</li>
										</ul>
										<p><strong>More Safety Features</strong></p>
										<ul>
											<li><strong>Increased Low Light Visibility:</strong> Retro reflective panels on chest, arms and back.</li>
										</ul>
										<p><strong>3 Layer Construction</strong></p>
										<p>Outer Shell - Rain Liner - Winter Liner</p>
										<ul>
											<li><strong>Internal Rain Liner:</strong> Breathable fabric. With sealed seams. (Can withstand light showers when worn with the primary shell).</li>
											<li><strong>Internal Winter Liner:</strong> Attaches to the inside of the outer shell.</li>
										</ul>
										<p><strong>Comfort</strong></p>
										<ul>
											<li><strong>Fit:</strong> Street fit</li>
											<li><strong>Fit Modulation:</strong> Girth adjusters on waist, arms and cuffs.</li>
											<li><strong>Cushioned Comfort:</strong> Soft Neoprene trims on collar and cuffs, prevent chafing of skin.</li>
										</ul>
										<p><strong>More Features</strong></p>
										<ul>
											<li><strong>Safety Stitch System:</strong> Dual stitching on slide zones.</li>
											<li><strong>Cargo Capacity:</strong> 3 pockets</li>
											<li>Pants connection zipper.</li>
										</ul>
									</div>
							</div>	
</div>
		// <div>Single Jacket Component</div>
)
}

export default JacketDetails
