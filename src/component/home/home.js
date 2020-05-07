import React from 'react';
import ReactDOM from 'react-dom';
import {Router,Switch,Route} from 'react-router-dom';
import {Link } from 'react-router-dom';
import '../home/home.css';
import HomePageBody from './homebody.component';

class Home extends React.Component{

    render(){
        return(

            <div>
	
<div className="super_container">
	

	<header className="header trans_300">

		{/* <!--  Navigation --> */}

		 <div className="top_nav">
			<div className="container"style={{backgroundColor:'#2827277a'}}>
				<div className="row">
					<div className="col-md-6">
						<div className="top_nav_left">free shipping on all u.s orders over $50</div>
					</div>
					<div className="col-md-6 text-right">
						<div className="top_nav_right">
							<ul className="top_nav_menu"> 

								{/* <!-- Currency / Language / My Account --> */}

								<li className="currency">
									<Link to=''>
										usd
										<i className="fa fa-angle-down"></i>
									</Link>
									<ul className="currency_selection">
										<li><Link to=''>cad</Link></li>
										<li><Link to=''>aud</Link></li>
										<li><Link to=''>eur</Link></li>
										<li><Link to=''>gbp</Link></li>
									</ul>
								</li>
								<li className="language">
									<Link to=''>
										English
										<i className="fa fa-angle-down"></i>
									</Link>
									<ul className="language_selection">
										<li><Link to=''>French</Link></li>
										<li><Link to=''>Italian</Link></li>
										<li><Link to=''>German</Link></li>
										<li><Link to=''>Spanish</Link></li>
									</ul>
								</li>
  
								<li className="account">
								<Link to=''>
										My Account
										<i className="fa fa-angle-down"></i>
									</Link>
									<ul className="account_selection">
										<li><i className="fa fa-sign-in" aria-hidden="true"></i><Link to="/signin">Sign In</Link></li>
										{/* <Link to="/signin"><button className="fa fa-sign-in"><span>Sign In</span></button></Link> */}
										<li><i className="fa fa-user-plus" aria-hidden="true"></i><Link to="/register" >Register</Link></li>
									</ul>
								</li>
                            </ul>
						</div>
					</div>
				</div>
			</div>
		</div>
	 
    <div className="main_nav_container">
			<div className="container-fluid">
				<div className="row">
					<div className="col-lg-12 text-right ">
						<div className="logo_container">
							<Link to=''>Digital<span>shop</span></Link>
						</div>
					
            <nav className='navbar'>
            <ul className="navbar_menu">
								<li><Link to='/' className="active">home</Link></li>
								<li><Link to=''>shop</Link></li>
								<li><Link to=''>promotion</Link></li>
								<li><Link to=''>pages</Link></li>
								<li><Link to=''>blog</Link></li>
								<li><Link to=''>contact</Link></li>

    
								<li><Link to=''><i className="fa fa-search" aria-hidden="true"></i></Link></li>
								<li><Link to=''><i className="fa fa-user" aria-hidden="true"></i></Link></li>
								<li className="checkout">
								<Link to=''>
										<i className="fa fa-shopping-cart" aria-hidden="true"></i>
										<span id="checkout_items" className="checkout_items">2</span>
									</Link>
								</li>
							</ul>
              <div className="hamburger_container">
								<i className="fa fa-bars" aria-hidden="true"></i>
							</div>
            </nav>
			
			</div>
			</div>
			</div>
			</div>
			</header>

    <div className="fs_menu_overlay"></div>

	<div className="hamburger_menu">
		<div className="hamburger_close"><i className="fa fa-times" aria-hidden="true"></i></div>
		<div className="hamburger_menu_content text-right">
			<ul className="menu_top_nav">
				<li className="menu_item has-children">
				<Link to=''>
						usd
						<i className="fa fa-angle-down"></i>
					</Link>
					<ul className="menu_selection">
						<li><Link to=''>cad</Link></li>
						<li><Link to=''>aud</Link></li>
						<li><Link to=''>eur</Link></li>
						<li><Link to=''>gbp</Link></li>
					</ul>
				</li>
				<li className="menu_item has-children">
				<Link to=''>
						English
						<i className="fa fa-angle-down"></i>
					</Link>
					<ul className="menu_selection">
						<li><Link to=''>French</Link></li>
						<li><Link to=''>Italian</Link></li>
						<li><Link to=''>German</Link></li>
						<li><Link to=''>Spanish</Link></li>
					</ul>
				</li>
				<li className="menu_item has-children">
				<Link to=''>
						My Account
						<i className="fa fa-angle-down"></i>
					</Link>
					<ul className="menu_selection">
						<li><Link to=''><i className="fa fa-sign-in" aria-hidden="true"></i>Sign In</Link></li>
						<li><Link to=''><i className="fa fa-user-plus" aria-hidden="true"></i>Register</Link></li>
					</ul>
				</li>
				<li className="menu_item"><Link to=''>home</Link></li>
				<li className="menu_item"><Link to=''>shop</Link></li>
				<li className="menu_item"><Link to=''>promotion</Link></li>
				<li className="menu_item"><Link to=''>pages</Link></li>
				<li className="menu_item"><Link to=''>blog</Link></li>
				<li className="menu_item"><Link to=''>contact</Link></li>
			</ul>
		</div>
	</div>
	</div>
	
	
	<div style={{marginTop:'200px'}}><HomePageBody></HomePageBody></div>
</div>
 
  

        )
    }

}
export default Home