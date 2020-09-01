import React, {useState, useEffect} from 'react'
import './header.css';

import {Link} from 'react-router-dom';

import Navigationbar from '../navigation/Navbar';
// import Register from '../LoginRegister/Register';



import {useSelector} from 'react-redux';


function Header() {


    const status = useSelector(state => state.access.authorized);
    const cart = useSelector(state => state.cartItems.cartItems);
    const [loggedIn, setLoggedIn] = useState(status)

    const [logIn,setLogIn] = useState(false);

    const token = !localStorage.getItem('token')

    useEffect(() => {
        setLoggedIn(status)
    }, [status])

    useEffect(() => {
        if(!token){
            setLogIn(true)
        }        
    }, [token])
    
    return (
        <React.Fragment>
            <div className="app_warning">This website is not for customers. Please do not place orders.... Thank you!!!!!!!</div>
            <div className="app_header">
                <div id='logo'>
                    <img src={require('../../images/bike_logo.jpg')} alt='logo'/>
                </div>
                <div className='title'>
                    <h2>Let's Ride Safe</h2>
                </div>
                <div id='user_account'>
                    <ul>
                        {!loggedIn || !logIn ? <li><Link to="/user/login" className='mylink'>Login</Link>/<Link to="/user/register" className='mylink'>Register</Link></li> : (<li><Link to="/my-account" className='mylink'>Account</Link></li>) }
                        <li><Link to="/cart" className='mylink'>Cart</Link><sup>{cart.length}</sup></li>
                    </ul>
                </div>
            </div>
            <Navigationbar />
        </React.Fragment>
    )
}


export default Header;