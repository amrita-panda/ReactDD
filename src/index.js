  
import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import {BrowserRouter as Router,Switch,Route,Link, BrowserRouter} from 'react-router-dom';
import App from './App';
import {Provider} from 'react-redux';
import store from './redux/store'; 

ReactDOM.render(
<Provider store={store}>
	<BrowserRouter>
		<App></App>
	</BrowserRouter>
</Provider>
,document.getElementById('root'))


