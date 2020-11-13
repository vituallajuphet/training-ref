import React, { Component } from 'react';
import cn from 'classnames'
import {Link} from 'react-router-dom'

class LoginForm extends Component {

    constructor(props){
        super(props);
        this.state = {
            form_field :{
                emailaddress: "",
                password: "",
            }
        }

        this.handleEmailChange = this.handleEmailChange.bind(this)
        this.handlePasswordChange = this.handlePasswordChange.bind(this)
        this.handleSubmit = this.handleSubmit.bind(this)
    }

    handleSubmit (evt){
        evt.preventDefault();

        console.log(this.state.form_field)
    }

    handleEmailChange (evt) {
        const val = evt.target.value    
        this.setState(prevState => ({
            form_field: {                  
                ...prevState.form_field,    
                emailaddress: val
            }
        }))
    }

    handlePasswordChange (evt) {
        const val = evt.target.value       
        this.setState(prevState => ({
            form_field: {                  
                ...prevState.form_field,    
                password: val
            }
        }))
    }

    render() {
        const {emailaddress, password} = this.state.form_field
        return (
            <div className="login__formcont">
                <h2>Login Account</h2>
                <form className="login_form" action="" method="post" onSubmit={this.handleSubmit}>
                    <input type="text" value={this.state.form_field.emailaddress} onChange={this.handleEmailChange} required placeholder="Username"/>
                    <input type="password" value={this.state.form_field.password} onChange={this.handlePasswordChange} required placeholder="Password"/>
                    <button type="submit">Login Account</button>
                    <div className="login__formcont--footer">
                        Already have an account <Link to="/register"> Click Here </ Link>
                    </div>
                </form>
            </div>
        )
    }
}

export default LoginForm;