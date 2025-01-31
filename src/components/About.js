import React from 'react';
import './styles/About.css'; // Style for About component

const About = () => {
  return (
    <section className="about" id="about">
      <h2 className="section-title">About Me</h2>
      <div className="about-content">
        <div className="about-text">
          <p>Hello! I'm Aadhil, a passionate developer with a strong foundation in front-end technologies.
             I am dedicated to building clean, responsive, and user-friendly websites that are both visually
             appealing and functionally efficient. I thrive on challenges and continuously strive to enhance my skills.
          </p>
          <p>
            I specialize in JavaScript, React, HTML, CSS, and other web development tools. I am always learning
            and looking for ways to improve both my coding and creative skills.
          </p>
        </div>
        <div className="about-image">
          <img src="https://avatars.githubusercontent.com/u/85219718?s=400&u=0477ac9cd21eb8264f4536d5ea987d2e2b5f3d27&v=4" alt="Aadhil" />
        </div>
      </div>
      <div className="skills">
        <h3>Technologies I Work With:</h3>
        <ul className="skills-list">
          <li>HTML</li>
          <li>CSS</li>
          <li>JavaScript</li>
          <li>React</li>
          <li>Node.js</li>
          <li>MongoDB</li>
          <li>Express JS</li>
          <li>Visual Studio</li>
          <li>Sublime Text</li>
          <li>MS office</li>
          <li>Git/GitHub</li>

        </ul>
      </div>
    </section>
  );
};

export default About;
