import React from 'react';
import Navbar from "../components/Navbar";
import Heroimg2 from "../components/Heroimg2";
import Intro from '../components/Intro';
import Education from '../components/Education';
import Footer from "../components/Footer";

const About = () => {
  return (
    <div>
      <Navbar />
      <Heroimg2 heading ="ABOUT." text="I am sameeksha"/>
      <Intro />
      <Education />
      <Footer />
    </div>
  )
}

export default About
