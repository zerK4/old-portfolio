import React, { useRef } from 'react'
import './Footer.css'
import emailjs from '@emailjs/browser';
import { toast } from 'react-toastify';
import { useNavigate } from 'react-router-dom';
export default function Header() {

const form = useRef()

let navigate = useNavigate()

const sendEmail = (e) => {
  e.preventDefault();

  emailjs.sendForm('service_ges0jdw', 'template_b7eegmg', form.current, '0FyAllc4zlo16DmN-')
    .then((result) => {
        console.log(result.text);
        toast.dark(' 🚀 Success! Your email was sent!', {type: "dark"})
    }, (error) => {
        console.log(error.text);
        toast.dark(" 😱 Something wrong happened, please try again in few minutes!")
    });
};

  return (
    <div id="contact">
      <h1 className="contactTitle">Contact</h1>
        <div className="cContainer">
          <div className="cEmail">
            <div className="cEContainer"><a href="tel:0747942342">Call me!</a></div>
            <div className="cEContainer"><a href="mailto:sebastian.v.pavel@gmail.com">Email me!</a></div>
          </div>
          <div className="contactForm">
            <form ref={form} onSubmit={sendEmail}>
              <div className="formLeft">
              <div className="formContainer">
              <label className="custom-field">
                <input type="text" autoComplete="off" required name='name'/>
                <span className="placeholder">Enter Name</span>
              </label>
              </div>
              <div className="formContainer">
              <label className="custom-field">
                <input type="text" autoComplete="off" required name='email'/>
                <span className="placeholder">Enter Email</span>
              </label>
              </div>
              <div className="formContainer">
              <label className="custom-field">
                <input type="text" autoComplete="off" required name='phone'/>
                <span className="placeholder">Enter Phone</span>
              </label>
              </div>
              </div>
              <div className="formRight">
              <div className="formContainer">
              <div className="formContainer">
              <label className="custom-field">
                <textarea required name='message'/>
                <span className="placeholder">Type your messasge</span>
              </label>
              </div>
              </div>
              <button className="sendMessage">Send</button>
              </div>
            </form>
          </div>
        </div>
    </div>
  )
}
