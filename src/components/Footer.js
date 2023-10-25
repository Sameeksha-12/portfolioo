import "./FooterStyles.css";

import React from 'react';
import {FaHome , FaPhone , FaMailBulk, FaGithub, FaTwitter, FaLinkedin} from "react-icons/fa"

const Footer = () => {
  return (
    <div className="footer">
      <div className="footer-container">
        <div className="left">
            <div className="location">
                <FaHome size={20} style={{color:"#fff", marginRight: "2rem" }}/>
                <div>
                    <p>Warangal,India.</p>
                </div>
            </div>
            <div className="phone">
                <h4>
                    <FaPhone size={20} style={{color:"#fff", marginRight: "2rem" }}/>
                    9989973027
                </h4>
            </div>
            <div className="email">
                <h4>
                    <FaMailBulk size={20} style={{color:"#fff", marginRight: "2rem" }}/>
                    sameekshareddy04@gmail.com
                </h4>
            </div>
        </div>
        <div className="right">
            <h4>lorem ipsum dolor</h4>
            <p>lorem ipsum dolor lorem ipsum dolor lorem ipsum dolor lorem ipsum dolor
            lorem ipsum dolor lorem ipsum dolor lorem ipsum dolor
            lorem ipsum dolor lorem ipsum dolor lorem ipsum dolor
            </p>
            <div className="social">
                <a href="https://github.com/Sameeksha-12">
                    <FaGithub size={30} style={{color:"#fff", marginRight: "1rem" }}/>
                </a>
                <a href="https://twitter.com/sameekshar5875">
                    <FaTwitter size={30} style={{color:"#fff", marginRight: "1rem" }}/>
                </a>
                <a href="https://www.linkedin.com/in/sameeksha-reddy-7b5a79273/">
                    <FaLinkedin size={30} style={{color:"#fff", marginRight: "1rem" }}/>
                </a>
            </div>
        </div>
      </div>
    </div>
  )
}

export default Footer
