import React from "react";

import Navbar from "./components/Navbar";
import Intro from "./components/intro";
import About from "./components/about";
import Myskill from "./components/myskill";
import Project from "./components/project";
import Contact from "./components/Contact";
import Footer from "./components/footer.js";
function App() {
  return (
    <div className="App">
        <Navbar/>
        <Intro/>
        <About/>
        <Myskill/>
        <Project/>
        <Contact/>
        <Footer/>
    </div>
  );
}

export default App;
