import React, { useRef } from 'react'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import {faGithub,faLinkedin} from '@fortawesome/free-brands-svg-icons'
import "./Contact.css";
import emailjs from '@emailjs/browser';

const Contact = () => {
  const form = useRef();
  const sendEmail = (e) => {
    e.preventDefault();

    emailjs
      .sendForm('service_swkzyxn', 'template_uxvoi7s', form.current, {
        publicKey: 'LMxbLc4bSxha8JB83GRn7',
      })
      .then(
        () => {
          console.log('SUCCESS!');
          e.target.reset();
          alert("Email Sent");
        },
        (error) => {
          console.log('FAILED...', error.text);
        },
      );
  };
  return (
    <section id="contactPage">
        <div id='contact'>
           <h1 className='contactPageTitle'>Contact Me</h1>
           <span className='contactDesc'>Please fill out the form below to discuss any work opportunities.</span>
           <form className='contactForm' ref={form} onSubmit={sendEmail}>
            <input type='text' className='Name' placeholder='Your Name' name="user_name"/>
            <input type='email' className='email' placeholder='Your Email'name="user_email"/>
            <textarea name="message" className='msg' rows="5" placeholder='Your Message'></textarea>
            <button type='submit' value="send" className='submitbtn'>Submit</button>
            <div className='links'>
              <div className='link'>
              <a href='https://github.com/HaripriyaTotala'>
            <FontAwesomeIcon icon={faGithub} size='2x' color='white' />
           </a>
            </div>
            <div className='link'>
              <a href='https://www.linkedin.com/in/haripriya-totala/'>
            <FontAwesomeIcon icon={faLinkedin} size="2x" color='white'/>
            </a>
            </div>
            </div>
           </form>
        </div>
    </section>
  )
}

export default Contact
