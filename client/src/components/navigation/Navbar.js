import React from 'react';
import * as ReactBS from 'react-bootstrap';
// import Navbar from 'react-bootstrap/Navbar';
import {Link} from 'react-router-dom';
import {useSelector} from 'react-redux';
import './Navbar.css';

function Navigationbar() {
    const status = useSelector(state => state.access.authorized);
    const cart = useSelector(state => state.cartItems.cartItems);

    return (
        <React.Fragment>
            <div className='app_navbar'>
                <ul>
                    <Link to="/" className='mylink'><li>Home</li></Link>
                    <li><Link to="/letsridesafe/dealership" className='mylink'>Dealership</Link></li>
                    <Link to="/contact-us" className='mylink'><li>Contact US</li></Link>
                    <Link to="/about-us" className='mylink'><li>About US</li></Link>
                </ul>
                <div className='app_navbar_Nav'>
                <ReactBS.Navbar bg="transparent" color='white'>
                    <ReactBS.Navbar.Toggle aria-controls="basic-navbar-nav" variant='light'/>
                    <ReactBS.Navbar.Collapse id="basic-navbar-nav" variant='light'>
                        <ReactBS.Nav className="mr-auto">
                        <ReactBS.NavDropdown title="Menu" id="basic-nav-dropdown" variant='light' >
                            <ReactBS.NavDropdown.Item><Link to="/" className='mylink'>Home</Link></ReactBS.NavDropdown.Item>
                            <ReactBS.NavDropdown.Item><Link to="/letsridesafe/dealership" className='mylink'>DealerShip</Link></ReactBS.NavDropdown.Item>
                            <ReactBS.NavDropdown.Item><Link to="/contact-us" className='mylink'>Contact US</Link></ReactBS.NavDropdown.Item>
                            <ReactBS.NavDropdown.Item><Link to="/about-us" className='mylink'>About US</Link></ReactBS.NavDropdown.Item>
                        </ReactBS.NavDropdown>
                        <ReactBS.NavDropdown title="Products" id="basic-nav-dropdown" variant='light' >
                                <ReactBS.NavDropdown.Item><Link to="/riding-gloves" className='mylink'>Gloves</Link></ReactBS.NavDropdown.Item>
                                <ReactBS.NavDropdown.Item><Link to="/riding-helmets" className='mylink'>Helmet</Link></ReactBS.NavDropdown.Item>
                                <ReactBS.NavDropdown.Item><Link to="/riding-jacket" className='mylink'>Jackets</Link></ReactBS.NavDropdown.Item>
                                <ReactBS.NavDropdown.Item><Link to="/riding-pants" className='mylink'>Pants</Link></ReactBS.NavDropdown.Item>
                                <ReactBS.NavDropdown.Item><Link to="/safety-guards" className='mylink'>Safety Guards</Link></ReactBS.NavDropdown.Item>
                                <ReactBS.NavDropdown.Item><Link to="/riding-boots" className='mylink'>Boots</Link></ReactBS.NavDropdown.Item>
                                <ReactBS.NavDropdown.Item><Link to="/riding-luggage" className='mylink'>Luggage</Link></ReactBS.NavDropdown.Item>
                                <ReactBS.NavDropdown.Item><Link to="/bike-protection" className='mylink'>Bike Protection</Link></ReactBS.NavDropdown.Item>
                                <ReactBS.NavDropdown.Item><Link to="/accessories" className='mylink'>Accessories</Link></ReactBS.NavDropdown.Item>
                            </ReactBS.NavDropdown>
                        </ReactBS.Nav>
                    </ReactBS.Navbar.Collapse>
                    {!status ? (<ReactBS.Nav.Link><Link to="/user/login" className='mylink'>SignIn/</Link><Link to="/user/register" className='mylink'>SignUp</Link></ReactBS.Nav.Link>) 
                            : (<ReactBS.Nav.Link><Link to="/my-account" className='mylink'>Account</Link></ReactBS.Nav.Link>)
                             }
                    <ReactBS.Nav.Link><Link to="/cart" className='mylink'>Cart<sup>{cart.length}</sup></Link></ReactBS.Nav.Link>
                </ReactBS.Navbar>
                </div>
            </div>
        </React.Fragment>
    )
}


export default Navigationbar;