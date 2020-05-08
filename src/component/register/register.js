import React from 'react';
import ReactDom from 'react-dom';
import '../../component/register/register.css'
import { Link } from 'react-router-dom';
import $ from 'jquery';


class Register extends React.Component {
    constructor() {
        super()
        this.state =
        {
            "email": '',
            "psw": '',
            "psw_repeat": '',
            "adduser": false
        }
    }
    Registeruser = (event) => {
        event.preventDefault()
        console.log(event);
        this.componentDidMount();
    }


    setdata = (e) => {
        this.setState({
            [e.target.name]: e.target.value

        })
        this.setState({ 'adduser': true })

    }

    componentDidMount() {
        if (this.state.adduser) {
            var form = {
                "email": this.state.email,
                "psw": this.state.psw,
                "psw_repeat": this.state.psw_repeat
            }
            console.log("inside")

            var url = 'http://localhost:8084/registeruser'
            $.ajax({
                url: url,
                dataType: 'json',
                type: 'POST',
                data: form,
                success: function (response) {
                    console.log(response)
                    alert(response.data)
                },
                error: function (xhr, status, err) {
                    alert("errr",err);
                }

            })


        } else {
            console.log("something else happen")
        }
    }





    render() {
        return (
            <div>
                <form>
                    <div className="container">
                        <h1>Register</h1>
                        <p>Please fill in this form to create an account.</p>
                        <hr></hr>

                        <label ><b>Email</b></label>
                        <input type="text" placeholder="Enter Email" name="email" required onChange={e => this.setdata(e)} />

                        <label ><b>Password</b></label>
                        <input type="password" placeholder="Enter Password" name="psw" required onChange={e => this.setdata(e)} />

                        <label ><b>Repeat Password</b></label>
                        <input type="password" placeholder="Repeat Password" name="psw_repeat" required onChange={e => this.setdata(e)} />
                        <hr></hr>
                        <p>By creating an account you agree to our <a href="#">Terms & Privacy</a>.</p>

                        <button type="submit" className="registerbtn" onClick={this.Registeruser}>Register</button>
                    </div>

                    <div className="container signin">
                        <p>Already have an account? <Link to='signin'>Sign in</Link>.</p>
                    </div>
                </form>
            </div>
        )
    }
}
//ReactDom.render(<Register></Register>,document.getElementById('model'))

export default Register;