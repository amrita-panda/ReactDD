import React from 'react';
import ReactDom from 'react-dom';
import {Link} from 'react-router-dom';
import '../signin/sign.css';
import {signin} from '../../services/userservices';
import {connect } from 'react-redux';
import {Auth_signin} from '../../redux/user/user.actions';




class Signin extends React.Component{
  constructor(){
    super()
    this.state={
      'emailid':'',
      'password':'',
      'data':''
    }
  }
  setData=(e)=>
  {
    this.setState({
      [e.target.name]:e.target.value,
    });
    this.setState({
      'dosignin':true,
      

    })
    
  }
  Signin=(e)=>{
    e.preventDefault();
    this.componentDidMount();
  }
  componentDidMount(){
    if(this.state.dosignin){
      var form={
        'emailid':this.state.emailid,
        'password':this.state.password,
      }
      console.log(form)
      var url='http://localhost:8084/signinuser'
      signin(url,form).then(response=> {
        console.log(response);
        alert(response.data.data);
        if(response.data.data){
          const {currentUser}=this.props;
        //   setCurrentUser({
        //     signin:this.props.signin,
            
        // })
        }
      }).catch((err)=>{
        console.log(err);
      })
    }
  

  }
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

        <input type="text" name="emailid" placeholder="Username/Email" required onChange={e => this.setData(e)}/>
        <input type="password" name="password" placeholder="Password" required onChange={e =>this.setData(e)}/>
        <input type="submit" value="Login" onClick={this.Signin}/>
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
// const mapStateToProps=state=>({
//   signin:state.user.sign,

// })
// const mapDispatchToProps= dispatch=>({
//   setCurrentUser : user => dispatch(Auth_signin(user)),

// })
export default Signin;
// export default connect(mapStateToProps,mapDispatchToProps) (Signin);
