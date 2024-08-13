import React from 'react'
import './intro.css';
import Profile from '../components/Images/Profile.jpeg'
const Intro = () => {
  return (
   <section id='intro'>
    <div className='introContent'>
      <span className='hello'>Hello,</span>
      <span className='introText'>I'm <span className='introName'>Haripriya</span><br/> Frontend Developer</span>
      <p className='introPara'>A frontend-focused web Developer is building the Frontend of Websites and Web Applications for intuitive products.</p>

    </div>
    <img src={Profile} alt='profile'className='bg'/>
   </section>
  )
}

export default Intro
