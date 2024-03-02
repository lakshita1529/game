// AboutSection.js
import React from 'react';
import './About.css';

const About = ({ scrollPosition }) => {
    const parallaxStyle = {
        transform: `translateY(${scrollPosition * 0.3}px)`
    };

    return (
        <div className="about-section" style={parallaxStyle}>
             <h2 className="title">About</h2>
            <div className="content">
                <p className="description">
                Gaming has become an integral part of modern entertainment,captivating millions of people worldwide with its immersive experiences and diverse genres.
                 From action-packed adventures to strategic simulations, gaming offers a wide range of experiences for players of all ages.
                 With advancements in technology, such as realistic graphics, virtual reality, and online multiplayer capabilities, gaming has evolved into a dynamic and social form of entertainment. Whether competing in esports tournaments, exploring vast open worlds, or connecting with friends in multiplayer games, gaming provides endless opportunities for creativity, exploration, and enjoyment.
                </p>
                <div className="image-container">
                    <img src="https://t3.ftcdn.net/jpg/05/99/53/58/360_F_599535831_pwQFVG0qtf6ksLXeVTnUwFMvoW5H0WiS.jpg" alt="Placeholder" className="image" />
                    </div>
            </div>
        </div>

    
    );
}

export default About;
