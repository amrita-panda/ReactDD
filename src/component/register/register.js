import React from 'react';
import ReactDom from 'react-dom';
import '../../component/register/register.css'


class Register extends React.Component{
    constructor(){
        super()
    }
    
    
render(){
    return(
<div>
        <form>
            <div className="container">
                <h1>Register</h1>
                <p>Please fill in this form to create an account.</p>
                <hr></hr>

                <label ><b>Email</b></label>
                <input type="text" placeholder="Enter Email" name="email" required />

                <label ><b>Password</b></label>
                <input type="password" placeholder="Enter Password" name="psw" required />

                <label ><b>Repeat Password</b></label>
                <input type="password" placeholder="Repeat Password" name="psw-repeat" required />
                <hr></hr>
                <p>By creating an account you agree to our <a href="#">Terms & Privacy</a>.</p>

                <button type="submit" className="registerbtn">Register</button>
            </div>
            
            <div className="container signin">
                <p>Already have an account? <a href="#">Sign in</a>.</p>
            </div>
        </form>
</div>
    )
}
}
//ReactDom.render(<Register></Register>,document.getElementById('model'))

export default Register;