import React, { useState } from 'react'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import {faBars} from '@fortawesome/free-solid-svg-icons'
import './Navbar.css';
import {Link} from 'react-scroll';


const Navbar = () => {
  const [showMenu,setshowMenu]= useState(false);
  return (
    <nav className='navbar'>
        <div className='desktopMenu'>
          <Link activeClass='active' to='intro' spy={true} smooth={true} offset={-100} duration={500} className='desktopMenulistItem'>Home</Link>
          <Link  activeClass='active' to='about' spy={true} smooth={true} offset={-100} duration={500}className='desktopMenulistItem'>About</Link>
          <Link  activeClass='active' to='myskill' spy={true} smooth={true} offset={-100} duration={500} className='desktopMenulistItem'>My Skills</Link>
          <Link  activeClass='active' to='project' spy={true} smooth={true} offset={-100} duration={500} className='desktopMenulistItem'>Projects</Link>
          <Link   activeClass='active' to='contact' spy={true} smooth={true} offset={-100} duration={500}className='desktopMenulistItem'>Contact me</Link>
        </div>
        

        <FontAwesomeIcon icon={faBars}  className='nobMenu' onClick={()=>setshowMenu(!showMenu)}/>
        <div className='navMenu' style={{display: showMenu? 'flex':'none'}}>
          <Link activeClass='active' to='intro' spy={true} smooth={true} offset={-100} duration={500} className='listItem' onClick={()=>setshowMenu(false)}>Home</Link>
          <Link  activeClass='active' to='about' spy={true} smooth={true} offset={-100} duration={500}className='listItem' onClick={()=>setshowMenu(false)}>About</Link>
          <Link  activeClass='active' to='myskill' spy={true} smooth={true} offset={-100} duration={500} className='listItem' onClick={()=>setshowMenu(false)}>My Skills</Link>
          <Link  activeClass='active' to='projects' spy={true} smooth={true} offset={-100} duration={500} className='listItem' onClick={()=>setshowMenu(false)}>Projects</Link>
          <Link   activeClass='active' to='contact' spy={true} smooth={true} offset={-100} duration={500}className='listItem' onClick={()=>setshowMenu(false)}>Contact me</Link>
        </div>
    </nav>
  )
}

export default Navbar
