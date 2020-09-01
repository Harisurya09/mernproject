import React from 'react'

import './Footer.css';

import { Link } from 'react-router-dom';

function Footer() {
    return (
        <React.Fragment>
        <div className='app_footer_grid'>
            <div className="footer_grid_item">
                <p>Contact Us</p>
                <p><strong>Customer Care:</strong><br/>‭+91 88XXX XXXX<br/><strong>Office Hours:</strong>‬<br/>11.00 AM to 6.30 PM<br/>(Monday to Friday) Also 1st and<br/>3rd Saturday.</p>
                <p><strong>Email us: </strong><br/>contact@letsridesafe.com<br/><strong>Online Order: </strong>online@letsridesafe.com</p>
                </div>
            <div className="footer_grid_item"><p>Store</p>
                <ul>
                <Link to={{ pathname:"/riding-jacket"}} className="mylink"><li>Jackets</li></Link>
                <Link to={{ pathname:"/riding-gloves"}} className="mylink"><li>Gloves</li></Link>
                <li>Helmets</li>
                <Link to={{ pathname:"/riding-pants"}} className="mylink"><li>Pants</li></Link>
                <Link to={{ pathname:"/riding-boots"}} className="mylink"><li>Boots</li></Link>
                <Link to={{ pathname:"/riding-luggage"}} className="mylink"><li>Luggage</li></Link>
                <Link to={{ pathname:"/safety-guards"}} className="mylink"><li>Safety Guards</li></Link>
                <li>Bike Protection</li>
                <Link to={{ pathname:"/accessories"}} className="mylink"><li>Accessories</li></Link>
                </ul>
            </div>
            <div className="footer_grid_item"><p>Support</p>
            <ul><Link to="/shipping-policy" className="mylink"><li>Shipping Policy</li></Link>
            <Link to="/product-warranty" className="mylink"><li>Warranty</li></Link>
                <Link to="/return-and-exchange" className="mylink"><li>Return/ Exchange Policy</li></Link>
                <Link to="/product-repair" className="mylink"><li>Repair</li></Link>
                <Link to="/product-care" className="mylink"><li>Care Instructions</li></Link>
                </ul>
            </div>
            <div className="footer_grid_item"><p>Location</p>
            <p><strong>Back Office (No product sales/service):</strong><br/>Jishnaa Heavans <br/>Hno: 16-32, Flatno- AG, First Floor<br/>New Mirjalaguda<br/>Malkajgiri, Secunderabad<br/>Telangana - 500047<br/>+91 88XXX XXXX</p></div>
        </div>
        <div className="footer_copyright"><p>&copy; 2020 LET'S RIDE SAFE. ALL RIGHTS RESERVED.</p></div>
        </React.Fragment>
    )
}

export default Footer;
