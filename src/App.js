import logo from './logo.svg';
import './App.css';
import Register from './component/register/register';
import Home from './component/home/home';
import Signin from './component/signin/signin';
import {Route } from 'react-router-dom';
import React from 'react';


function App() {
  return ( 
  <div>
  <Route exact path='/'component={Home}></Route>
  <Route exact path='/register'component={Register}></Route>
  <Route exact path='/signin'component={Signin}></Route>
  </div>

    
      

   
    
  );
}

export default App;
