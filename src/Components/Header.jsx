import React from 'react'
import video from '../assets/video.mp4'
import './Header.css'


const Header= ({scrollPosition}) => {
  const parallaxStyle = {
    transform: `translateY(${scrollPosition * 0.5}px)`
  };
  return (
  
    <div className="video-section" >
  <div className="video" >
  <div className="video-overlay" >
                <h1 className="animated-text"style = {parallaxStyle}>
                Built by developers<br/>
                For developers.With fair terms for all<br/>
                Let's build incredible things together</h1>

                <button className="custom">Learn More</button>
            </div>
    <video autoPlay loop muted className="bg-video" >
      <source src={video} type="video/mp4"/>
    </video>
  </div></div>
  
  );
}
export default Header;