import logo from './logo.svg';
import './App.css';
import Register from './component/register/register';
import Home from './component/home/home';
import Signin from './component/signin/signin';
import Adminview from './component/adminview/adminview';
import UserData from './component/adminview/userlist';
import {Route } from 'react-router-dom';
import React from 'react';


function App() {
  return ( 
  <div>
  <Route exact path='/'component={Home}></Route>
  <Route exact path='/register'component={Register}></Route>
  <Route exact path='/signin'component={Signin}></Route>
  <Route exact path='/adminview123'component={Adminview}></Route>
  </div>

    
      

   
    
  );
}

export default App;
