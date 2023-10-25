import "./IntroStyles.css"
import profile from "../assets/profile.png"
import React from 'react'

const Intro = () => {
  return (
    <div>
      <h1 class="main-heading">Know a little about me.</h1>
      <div class="main-intro">
        <div class="left">
          <img class="profile-img" src={profile}/>
        </div>
        <div class="right">
          <p> Greetings! I am Sameeksha,a third year undergrad student at iit bhilai, 
          pursuing my BTECH in the discipline of Electrical Engineering 
          with honours focused in computer science engineering.In the past one year,
          I've been exploring a few web technologies like HTML5, CSS3, Bootstrap, Javascrpit, 
          React, Type script and also developed a strong foundation in programming languages like
          C++, python and problem solving.And if you think that tech dev is the only thing I do, darling, you 
          got me all wrong. I ❤️to dance, listen to music and more importantly have fun!
          Thanks for stopping by. Hope you have a wonderful day ahead!
          </p>
        </div>
      </div>
    </div>
    
  )
}

export default Intro
