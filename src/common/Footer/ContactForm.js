import React from 'react'
import cn from 'classnames'

class ContactForm extends React.Component{

	constructor(props){
		super(props);
		this.state = {
			fullname : "",
			email : "",
		}

		this.handleSubmit = this.handleSubmit.bind(this);
		this.handleNameChange = this.handleNameChange.bind(this);
		this.handleEmailChange = this.handleEmailChange.bind(this);
	}

	handleSubmit(e){
		e.preventDefault();
		
	}

	handleNameChange(event) {
		this.setState({fullname: event.target.value});
	}

	handleEmailChange(event) {
		this.setState({email: event.target.value});
	}

	render(){	
	 return (	
		<div className={cn(`footer__${this.props.class_name}`)}>
			<form className="footer__form" onSubmit={this.handleSubmit}> 
				<h2 className="footer__form--heading">Contact Form</h2>
				<input value={this.state.fullname} onChange = {this.handleNameChange} className="footer__form--input" type="text" name="fullname" placeholder="Name"/>
				<input value={this.state.email} onChange = {this.handleEmailChange} className="footer__form--input" type="email" name="email_address" placeholder="Email address"/>
				<button type="submit" className="footer_form--button">Send</button>
			</form>
		</div> );
		
	}

}

export default ContactForm
