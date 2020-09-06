import React, {lazy, Suspense}  from 'react';
import './App.css';

import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import 'bootstrap/dist/css/bootstrap.min.css';

import {BrowserRouter as Router, Switch, Route} from 'react-router-dom'
import axios from 'axios';


import Header from './components/header/Header';
import Footer from './components/footer/Footer';

const Jackets = lazy(() => import('./components/Jackets/Jackets'))
const ProductsMenu = lazy(() => import('./components/products/ProductsMenu'))
const Gloves = lazy(() => import('./components/Gloves/Gloves'));
const Pants = lazy(() => import('./components/Pants/Pants'));
const SafetyGuard = lazy(() => import('./components/SafetyGuard/SafetyGuard'));
const RidingBoots = lazy(() => import('./components/Boots/Boots'));
const RidingLuggage = lazy(() =>import('./components/Luggage/Luggage'));
const RidingAccessories = lazy(() => import( './components/Accessories/Accessories'));
const AboutUS = lazy(() => import('./components/AboutUS/AboutUS'));
const ShippingPolicy = lazy(()=> import('./components/ShippingPolicy/ShippingPolicy'));
const ReturnAndExchange = lazy(()=> import('./components/ReturnAndExchange/ReturnAndExchange'));
const Repair = lazy(()=> import('./components/Repair/Repair'));
const CareInstructions = lazy(()=> import('./components/CareInstructions/CareInstructions'));
const LoginRegister = lazy(()=> import('./components/LoginRegister/LoginRegister'));
const Register = lazy(()=> import('./components/LoginRegister/Register'));
const Warranty = lazy(()=> import('./components/Warranty/Warranty'));
const DealerShip = lazy(()=> import('./components/DealerShip/DealerShip'));
const ContactUS = lazy(()=> import('./components/ContactUS/ContactUS'));
const NotFound = lazy(()=> import('./components/NotFound/NotFound'));
const Account = lazy(()=> import('./components/Account/Account'));
const ProtectedRoute = lazy(()=>import('./components/protectedRoute'));
const JacketDetails = lazy(()=>import('./components/products/productDetails/jacketDetails'));
const GlovesDetails = lazy(()=>import('./components/products/productDetails/glovesDetails'));
const PantDetails = lazy(()=>import('./components/products/productDetails/pantDetails'));
const BootsDetails = lazy(()=>import('./components/products/productDetails/bootsDetails'));
const LuggageDetails = lazy(()=>import('./components/products/productDetails/luggageDetails'));
const AccessoriesDetails = lazy(()=>import('./components/products/productDetails/accessoriesDetails'));
const GuardDetails = lazy(()=> import('./components/products/productDetails/guardDetails'));
const Cart = lazy(()=> import('./components/Cart/Cart'));
const Thankyou = lazy(()=> import('./components/thankyou'));
const UpdateUser = lazy(()=> import('./components/Account/updateUser'))
const UnderConstruction = lazy(()=> import('./components/products/UnderConstruction'))
const Helmet = lazy(()=> import('./components/Helmets/Helmet'));
const HelmetDetails = lazy(()=> import('./components/products/productDetails/helmetDetails'))


// axios.defaults.baseURL = 'http://localhost:3999';
axios.defaults.headers.common['Authorization'] = `Bearer ${localStorage.getItem('token')}` ;
// axios.defaults.headers.post['Content-type'] = 'application/JSON';

// axios.interceptors.request.use( req => {
//   req.header.Authorization = `Bearer ${localStorage.getItem('token')}` ;
//   return req
// }, error => {
//   return error
// })


// axios.interceptors.response.use( response => {
//   return response
// }, error => {
//   return error
// })



function App() {

  return (
    <Router>
          <div className="App">
          <Suspense fallback={<div className="app_lazy">Loading...</div>}>
            <Header />             
              <Switch>   
                <Route path="/" exact component={ProductsMenu} />  
                <Route path="/riding-jacket" component={Jackets} />
                <Route path="/riding-gloves" component={Gloves} /> 
                <Route path="/riding-pants" component={Pants} />
                <Route path="/safety-guards" component={SafetyGuard}/>
                <Route path="/riding-boots" component={RidingBoots} />
                <Route path="/riding-luggage" component={RidingLuggage} />
                <Route path="/accessories" component={RidingAccessories} />
                <Route path="/about-us" component={AboutUS}  />
                <Route path="/shipping-policy" component={ShippingPolicy}  />
                <Route path="/return-and-exchange" component={ReturnAndExchange}  />
                <Route path="/product-repair" component={Repair}  />
                <Route path="/product-care" component={CareInstructions}  />
                <Route path="/user/login" component={LoginRegister}  />
                <Route path="/user/register" component={Register}  />
                <Route path="/product-warranty" component={Warranty}  />
                <Route path="/letsridesafe/dealership" component={DealerShip}  />
                <Route path="/contact-us" component={ContactUS}  />
                <Route path="/products/jacket/:id" component={JacketDetails}  />
                <Route path="/products/gloves/:id" component={GlovesDetails}  />
                <Route path="/products/pant/:id" component={PantDetails}  />
                <Route path="/products/boots/:id" component={BootsDetails}  />
                <Route path="/products/luggage/:id" component={LuggageDetails}  />
                <Route path="/products/accessories/:id" component={AccessoriesDetails}  />
                <Route path="/products/guards/:id" component={GuardDetails}  />
                <Route path="/products/helmet/:id" component={HelmetDetails}  />
                <Route path='/cart' exact component={Cart} />
                <Route path='/cart/order' component={Thankyou} />
                <Route path='/riding-helmets' component={Helmet} />
                <Route path='/bike-protection' component={UnderConstruction} />
                <ProtectedRoute exact path="/my-account" Component={Account} />
                <ProtectedRoute path='/userprofile/update' component={UpdateUser} />
                <Route path="**" component={NotFound}  />                
              </Switch>              
              <Footer />
              </Suspense> 
        </div>
   </Router>
  );
}

export default App;
