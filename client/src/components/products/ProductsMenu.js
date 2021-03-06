import React, {useEffect} from 'react';

import ReactPlayer from 'react-player'
import SliderImage from '../slider/SliderImage'

import './ProductsMenu.css';
import { Link } from 'react-router-dom';

import { loggedIn_user } from '../../redux/Access/actions/accessActions';
import { useDispatch } from 'react-redux';

function ProductsMenu() {

    const dispatch = useDispatch()

    useEffect(()=>{
        dispatch(loggedIn_user())
    }, [])

    return (
        <React.Fragment>
        <div className="sliderImage">
        <SliderImage />
        </div>
        <div className="product_title"><h2>Our Products</h2></div>
        <div className='app_gridContainer'>
        <Link to={{ pathname:"/riding-gloves"}} className="mylink-title" ><div className='app_gridItem'><img src={ require('../../images/riding_gloves.jpg')} alt="Riding Gloves"/><br /><p>Riding Gloves </p></div></Link>
        <Link to={{ pathname:"/riding-helmets"}} className="mylink-title" ><div className='app_gridItem'><img src={ require('../../images/helmet.jpg')} alt="Riding Helmet"/><br /><p>Riding Helmet</p></div></Link>
            <Link to={{ pathname:"/riding-jacket"}} className="mylink-title"><div className='app_gridItem'><img src={ require('../../images/riding_jacket.jpg')} alt="Riding Jacket"/><br /><p>Riding Jacket</p></div></Link>
            <Link to={{ pathname:"/riding-pants"}} className="mylink-title" ><div className='app_gridItem'><img src={ require('../../images/riding_pant.jpg')} alt="Riding Pant"/><br /><p>Riding Pant</p></div></Link>
            <Link to={{ pathname:"/safety-guards"}} className="mylink-title" ><div className='app_gridItem'><img src={ require('../../images/knee_guard.jpg')} alt="Riding Safety Guard"/><br /><p>Riding Safety Guard</p></div></Link>
            <Link to={{ pathname:"/riding-boots"}} className="mylink-title"><div className='app_gridItem'><img src={ require('../../images/riding_boots.jpg')} alt="Riding Boots"/><br /><p>Riding Boots</p></div></Link>
            <Link to={{ pathname:"/riding-luggage"}} className="mylink-title"><div className='app_gridItem'><img src={ require('../../images/riding_luggage.jpg')} alt="Mounting Luggage"/><br /><p>Mounting Luggage</p></div></Link>
            <Link to={{ pathname:"/bike-protection"}} className="mylink-title" ><div className='app_gridItem'><img src={ require('../../images/crash_guard.jpg')} alt="Bike Protections"/><br /><p>Bike Protections</p></div></Link>
            <Link to={{ pathname:"/accessories"}} className="mylink-title"><div className='app_gridItem'><img src={ require('../../images/bike_mount.jpg')} alt="Accessories"/><br /><p>Accessories</p></div></Link>
        </div>
        <ReactPlayer url='https://www.youtube.com/watch?v=i9DSLkLXjMs'  id='app_video_player'/>

        </React.Fragment>
    )
}


export default ProductsMenu;