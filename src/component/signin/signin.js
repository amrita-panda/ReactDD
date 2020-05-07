import React from 'react';
import ReactDom from 'react-dom';
import {Link} from 'react-router-dom';
import '../signin/sign.css';


class Signin extends React.Component{
  
    render (){
        return (
        <div>
    <div className="container">
  <form>
    <div className="row">
      <h2 style={{textAlign:'center'}}>Login with Social Media or Manually</h2>
      <div className="vl">
        <span className="vl-innertext">or</span>
      </div>

      <div className="col">
        <a href="www.facebook.com" className="fb btn">
          <i className="fa fa-facebook fa-fw"></i> Login with Facebook
         </a>
        <a href="www.twitter.com" className="twitter btn">
          <i className="fa fa-twitter fa-fw"></i> Login with Twitter
        </a>
        <a href="www.google.com" className="google btn"><i className="fa fa-google fa-fw">
          </i> Login with Google+
        </a>
      </div>

      <div className="col">
        <div className="hide-md-lg">
          <p>Or sign in manually:</p>
        </div>

        <input type="text" name="username" placeholder="Username" required/>
        <input type="password" name="password" placeholder="Password" required/>
        <input type="submit" value="Login"/>
      </div>
      
    </div>
  </form>
</div>

<div className="bottom-container">
  <div className="row">
    <div className="col">
      <Link to='' style={{color:'white'}} className="btn">Sign up</Link>
    </div>
    <div className="col">
      <Link to='' style={{color:'white'}} className="btn">Forgot password?</Link>
    </div>
  </div>
</div>

        </div> 
       
  )
    }

}
export default Signin;