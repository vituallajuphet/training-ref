import React from 'react'
import cn from 'classnames'


function ContactForm(props) {
  const {
    class_name
  } = props

  return (
    <div className={cn(`footer__${class_name}`)}>
        <form className="footer__form">
          <h1 className="footer__form--heading">Contact Form</h1>
          <input className="footer__form--input" type="text" name="fullname" placeholder="Name"/>
          <input className="footer__form--input" type="email" name="email_address" placeholder="Email address"/>
          <button className="footer_form--button">Send</button>
        </form>
    </div>
  )
}

export default ContactForm
