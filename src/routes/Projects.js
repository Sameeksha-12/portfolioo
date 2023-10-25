import React from 'react';
import Navbar from "../components/Navbar";
import Heroimg2 from "../components/Heroimg2";
import Work from '../components/Work';
import Footer from "../components/Footer";

const Projects = () => {
  return (
    <div>
    <Navbar />
    <Heroimg2 heading="PROJECTS." text="Some of my recent work."/>
    <Work />
    <Footer />
    </div>
  )
}

export default Projects;
