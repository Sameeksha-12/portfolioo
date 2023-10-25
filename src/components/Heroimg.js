import "./HeroimgStyles.css";
import React from 'react';
import HeroImg from "../assets/hero-img.png";
import { Link } from "react-router-dom";

const Heroimg = () => {
  return (
    <div className="hero">
        <div className="mask">
            <img className="hero-img" src={HeroImg} alt="HeroImg"/>
        </div>
        <div className="content">
            <p>HI, I'M SAMEEKSHA.</p>
            <h1>React Developer.</h1>
            <div>
                <Link to="/projects" className="btn">PROJECTS</Link>
                <Link to="/contact" className="btn btn-light">CONTACT</Link>
            </div>
        </div>
    </div>
  )
};

export default Heroimg;

