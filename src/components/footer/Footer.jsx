import React from 'react'
import './Footer.css'

export default function Header() {
  return (
    <div id="contact">
      <h1 className="contactTitle">Contact</h1>
        <div className="cContainer">
          <div className="cEmail">
            <div className="cEContainer"><a href="tel:0747942342">Call me!</a></div>
            <div className="cEContainer"><a href="mailto:sebastian.v.pavel@gmail.com">Email me!</a></div>
          </div>
          <div className="contactForm">
            <form>
              <div className="formLeft">
              <div className="formContainer">
                <label>Name</label>
                <input type="text" placeholder='Please enter name'/>
              </div>
              <div className="formContainer">
                <label>Email</label>
                <input type="text" placeholder='Please enter email'/>
              </div>
              <div className="formContainer">
                <label>Phone number</label>
                <input type="text" placeholder='Please enter phone'/>
              </div>
              </div>
              <div className="formRight">
              <div className="formContainer">
                <label>Message</label>
                <textarea placeholder='Please enter yor message'></textarea>
              </div>
              <button className="sendMessage">Send</button>
              </div>
            </form>
          </div>
        </div>
    </div>
  )
}
