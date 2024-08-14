import React from 'react'
import './myskill.css';
import ProgressBar from "@ramonak/react-progress-bar";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import {faHtml5,faCss3Alt,faJs,faReact} from '@fortawesome/free-brands-svg-icons'
const Myskill = () => {
  return (
    <section id="myskills">
   
   
   <div className='container'>
    <h1 className='heading'>My Technical Skills</h1>
    <div className='Technical-bars'>
        <div className='bar'>
        <FontAwesomeIcon icon={faHtml5}  className='icon1'/>
        <span>Html</span>
        <ProgressBar completed={90}  bgColor='#ff004f'
        animateOnRender={true} />
        </div>
        <div className='bar'>
        <FontAwesomeIcon icon={faCss3Alt}  className='icon2'/>
        <span>CSS</span>
        <ProgressBar completed={70} bgColor='#ff004f'
        animateOnRender={true}  />
        </div>
        <div className='bar'>
        <FontAwesomeIcon icon={faJs}  className='icon3'/>
        <span>Javascript</span>
        <ProgressBar completed={80} bgColor='#ff004f'
        animateOnRender={true}  />
        </div>
        <div className='bar'>
        <FontAwesomeIcon icon={faReact}  className='icon4'/>
        <span>React</span>
        <ProgressBar completed={75} bgColor='#ff004f'
        animateOnRender={true} />
        </div>
    </div>
    </div>   </section>
  )
}

export default Myskill

