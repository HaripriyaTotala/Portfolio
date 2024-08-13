import React from "react";
import "./projects.css";
import image1 from "../components/Images/image1.png";
import image2 from "../components/Images/image2.png";
import image3 from "../components/Images/image3.png";
import {FontAwesomeIcon} from '@fortawesome/react-fontawesome';
import {faUpRightFromSquare} from '@fortawesome/free-solid-svg-icons'
const Project = () => {
  
  return (
    <section id="works">
      <h2 className="worksTitle">Projects</h2>
      <span className="worksDesc">Here ar some of my projects  </span>
      <div className="worksImgs">
        <div className="worksImg">
        <img src={image1} alt=""></img>
        <div className="layer">
          <h3>Expenses Tracker</h3>
          <p>The app helps you to manage your spending and set your budget limits</p>
          <a href=" https://haripriyatotala.github.io/Expenses-tracking-app/"><FontAwesomeIcon icon={faUpRightFromSquare} /></a>
        </div>
        </div>
        <div className="worksImg">
        <img src={image2} alt=""></img>
        <div className="layer">
          <h3>Cricket League Landing Page</h3>
          <p>I’ve created a visually appealing and interactive webpage for the New York Recreational Cricket League.</p>
          <a href="https://haripriyatotala.github.io/Cricket-league-Landing-Page/"><FontAwesomeIcon icon={faUpRightFromSquare} /></a>
        </div>
        </div>
        <div className="worksImg">
        <img src={image3} alt=""></img>
        <div className="layer">
          <h3>Drawing App</h3>
          <p>App offers a versatile canvas for unleashing your creativity, featuring an intuitive interface that allows you to sketch, paint, and doodle with ease.
</p>
          <a href="https://haripriyatotala.github.io/Drawing-app/"><FontAwesomeIcon icon={faUpRightFromSquare} /></a>
        </div>
      </div>
      
      </div>
      <a href="https://github.com/HaripriyaTotala?tab=repositories" className="btn-seeMore">See More</a>
    </section>
  )}

export default Project
