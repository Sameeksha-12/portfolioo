import "./EducationStyles.css";
import sr from "../assets/sr.jpeg";
import th from "../assets/th.jpeg";
import iitbh from "../assets/iitbh.jpeg";
import React from 'react'

const Education = () => {
  return (
    <div class="timeline-container">
      <h1 class="main-title">Education</h1>
      <ul class="timeline">

        <li class="timeline-block">
            <img class="timeline-icon" src={iitbh}/>       
            <div class="info dir-l">
                <h3>Indian Institute of Technology,Bhilai</h3>
                <p>Bachelor of Technology(B.Tech) Honours, Electrical Engineering</p>
                <p>2021-present</p>
                <p>Grade: 9.01</p>            
            </div>
        </li>

        <li class="timeline-block" > 
            <img class="timeline-icon" src={sr}/>      
            <div class="info dir-r">
                <h3>SR Prime School</h3>
                <p>class 12 (PCM)</p>
                <p>2019-2021</p>
                <p>Grade: 94.8%</p>            
            </div>
        </li>

        <li class="timeline-block">
            <img class="timeline-icon" src={th}/>       
            <div class="info dir-l">
                <h3>St. Peter's Edu School</h3>
                <p>Class 10</p>
                <p>2007-2019</p>
                <p>Grade: 95.6%</p>            
            </div>
        </li>

      </ul>
    </div>
  )
}

export default Education
