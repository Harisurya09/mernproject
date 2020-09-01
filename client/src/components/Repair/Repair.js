import React from 'react';

import {Link} from 'react-router-dom';

import './Repair.css'

function Repair() {
    return (
        <div className='repair'>
            <h2>Repair Policy</h2>
            <p>The repair policy exclusively covers only those products which are no longer under warranty. In the case of a product that is still under warranty, please refer to the warranty section (<Link to="/product-warranty">click here</Link>).</p>
            <h3>The Process:</h3>
            <p>Repairs of wear and tear can be done by us for a fee, subject to verification of the feasibility of repair; solely at our discretion. To send in your case for a feasibility check, email us at support@letsridesafe.com with detailed and clear pictures of the area of concern on the product, and give a detailed description of how the wear and tear has taken place. If you receive a positive reply from us, you can send the product to us for a physical inspection and get a quote for the repair. The shipping costs have to be borne by you. We suggest you use insured shipping when you are sending your product to us for repair. Lets Ride Safe Gears or its partners will not be responsible for any loss or damage to the items during transit.</p>
            <h3>Turnaround Time</h3>
            <p>If the fees quoted by us are acceptable to you, we will then proceed with the repair and will try to get the product back to you as soon as possible. The whole process typically takes about 15 working days once we receive the product. However, it could take longer during peak season.</p>
        </div>
    )
}


export default Repair;