import React from 'react';

import './ShippingPolicy.css';

function ShippingPolicy() {
    return (
        <div className="shipping_policy">
            <h2>Shipping Policy</h2>
            <img src="https://cdn.shopify.com/s/files/1/1947/9551/files/Fipper-Store_Policy-Icons-10_large.png" alt='Shipping Policy' />
            <p>We understand that when you place an order, you want your gear as quickly as possible. We will do our best to make that happen! Most of the items we sell will ship quickly and be at your door fast.</p>
            <p>Let's Ride Safe provides free shipping on all online orders anywhere in India. The standard shipping time is 4-9* business days for domestic orders and 10-20* days for international orders, depending on your location.You can track your order either by logging into your account on our website or using the AWB number on our logistics partners’ websites.</p>
            <ul>
                <li>DHL - <a href="http://www.dhl.com/en.html" target="_blank"  style={{color: '#999999'}} rel="noopener noreferrer">click here</a></li>
                <li>DTDC - <a href="http://www.dtdc.in/tracking/shipment-tracking.asp" target="_blank" rel="noopener noreferrer" style={{color: '#999999'}}>click here</a></li>
                <li>Shree Maruti Courier - <a href="http://www.shreemaruticourier.com/" target="_blank" style={{color: '#999999'}} rel="noopener noreferrer">click here</a></li>
                <li>The Professional Courier - <a href="http://www.tpcindia.com/" target="_blank" style={{color: '#999999'}} rel="noopener noreferrer">click here</a></li>
                <li>India Post - <a href="https://www.indiapost.gov.in/vas/Pages/IndiaPostHome.aspx" target="_blank" style={{color: '#999999'}} rel="noopener noreferrer">click here</a></li>
            </ul>
            <p>Due to our precautionary measures during the COVID-19 lockdown, the orders for in-stock items will be shipped within 2 working days of receiving the order, not counting Sundays and holidays. We request you to confirm the status of delivery services in your location before placing the order, by entering your pincode in the "Check Lockdown Serviceability" section, which is present on every product page.</p>
            <p>As a general practice always check your courier package for any tampering or damage before you sign the POD receipt. In case there is a problem please don't sign POD and let us at online@letsridesafe.com along with the Name/Phone# of the person delivering the package. POD once signed courier company doesn't entertain any complaints/claims.For orders placed before 12 noon, they will be shipped the same working day. Orders placed post 12 noon will be shipped the next working day. You will be notified by email once the order has been received, processed and dispatched.</p>
            <p>While we will do our best to ship from the distribution center closest to you, naturally not all items will always be in stock at every location at all times! In some cases, we will split the order and ship each package out to you individually and in other cases, we may need to consolidate the items in one location to ship out as one package. We utilise our best judgment in an attempt to get the products to you as quickly as possible.</p>
            <p>Call us on ‭+91 88XXX XXXXX‬ or email us at online@letsridesafe.com if you need us to expedite your delivery in case you are in a hurry. We will try our best to get the order delivered to you before your scheduled trip!</p>
            <p>Based on the terms of our shipping partner, any changes required to be done in the recipient's destination details can be done before the shipment has left our facility. Once the shipment is on its way, if any changes are needed in the recipient's destination details, such changes can be done only once the shipment has been returned to our facility by our shipping partner. In this case, there will be a major change in the estimated time of delivery of the shipment.</p>
            <p><em>*Please note that the operations of courier companies are not in our control and we cannot be held responsible for delays and thus the delays in your trip. However, we assure you that we try to get the order delivered to you at the earliest.</em></p>
        </div>
    )
}


export default ShippingPolicy;