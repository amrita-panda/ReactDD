import './App.css';
import Register from './component/register/register';
import Home from './component/home/home';
import Signin from './component/signin/signin';
import Adminview from './component/adminview/adminview';
import Productpage from './component/products/product';
import SingleProduct from './component/products/singleproduct';
import AlertDismissible from './component/products/bootstrap';
import Reduxcomponent from './component/products/redux';
import {Route } from 'react-router-dom';
import React from 'react';



function App() {
  return ( 
  <div>
  <Route exact path='/'component={Home}></Route>
  <Route exact path='/register'component={Register}></Route>
  <Route exact path='/signin'component={Signin}></Route>
  <Route exact path='/adminview123'component={Adminview}></Route>
  <Route exact path='/productpage'component={Productpage}></Route>
  <Route exact path='/productpage/:productId'component={SingleProduct}></Route>
  <Route exact path='/Bootstrap'component={AlertDismissible}></Route>
  <Route exact path='/redux'component={Reduxcomponent}></Route>
  </div>

    
      

   
    
  );
} 
// const mapDispatchToProps= dispatch=>({
//   setAddVal : user => dispatch(setAddVal(user))
// })
export default App;
 //export default connect(null,mapDispatchToProps)(App);
