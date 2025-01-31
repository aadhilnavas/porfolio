import React from 'react';
import './styles/Skills.css';

const Skills = () => {
  return (
    <section id="skills" className="skills">
      <h2>My Skills</h2>
      <div className="skills-container">
        <div className="skill-card">
          <h3>JavaScript</h3>
          <p>Experience with ES6+ features and frameworks like React, Node.js, etc.</p>
        </div>
        <div className="skill-card">
          <h3>React</h3>
          <p>Building interactive user interfaces with React and managing state with hooks.</p>
        </div>
        <div className="skill-card">
          <h3>HTML & CSS</h3>
          <p>Designing responsive web pages and styling using modern CSS techniques.</p>
        </div>
        <div className="skill-card">
          <h3>Node.js</h3>
          <p>Creating backend APIs and server-side applications with Node.js and Express.</p>
        </div>
      </div>
    </section>
  );
};

export default Skills;
