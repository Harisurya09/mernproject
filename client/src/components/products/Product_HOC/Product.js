import React, { lazy, Suspense } from 'react';
import ErrorBoundry from '../../ErrorBoundry/ErrorBoundry';

import {useHistory} from 'react-router-dom';
import './Product.css';
const Image = lazy(()=>import('../Image'));
// import Image from '../Image'

function Product(props) {
    const {title, products} = props;
    const history = useHistory();

    const itemDetails = (id, category)=>{
        history.push(`/products/${category}/${id}`)
    }

    return (
        <div className="product_container">
                <h2>{title}</h2>
                    <div className='productGrid'>
                        {
                            products.map((item)=>{
                            return ( 
                                <ErrorBoundry key={item._id}>     
                                    {/* <Link to={{pathname:`/products/${nameProp.urlName}/${item._id}`, state:{ productID: `${item._id}`}}} >    */}
                                        <div key={item._id} className='productGridItem'>
                                            <div>
                                                <Suspense fallback='Image Loading....'>
                                                    <Image image={item.productImage} name={item.productName} />
                                                </Suspense>
                                                {/* <br/> */}
                                                <p><strong>{item.productName}</strong><br/>{item.brand}<br/>{item.price} INR</p>
                                                <button type="button" onClick={()=> itemDetails(item._id, item.category)}>View More</button>
                                            </div>  
                                        </div>    
                                    {/* </Link> */}
                                </ErrorBoundry>                
                                )
                            })
                        }
                    </div>
                </div>
    )
}

export default Product;
