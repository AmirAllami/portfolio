import React from "react";
import "../styles/Education.css";
export default function Education() {
  return (
    <div>
      <div className="education-container">
        <h1 className="sec-title">Education</h1>
        <div className="education-block">
          <h3>University of 8mai 45 Guelma Algeria</h3>
          <h4>Masters in Computer Science</h4>
          <p>
            <span>specialization in Computer systemes</span>
            <br /> for my master thesis i developed a software for integrating
            IOT in BPMN
          </p>
        </div>
        <div className="education-block">
          <h3>University of 8mai 45 Guelma Algeria</h3>
          <h4>Bachlors in Computer Science and Mathematics</h4>
          <p>
            With a specialization in:
            <span> Software Engineering and information systems</span>
          </p>
        </div>
      </div>
      <div className="skills">
        <h1 className="sec-title">SKILLS</h1>
        <ul>
          <li>JavaScript</li>
          <li>HTML</li>
          <li>CSS</li>
          <li>ReactJS</li>
          <li>jQuery</li>
          <li>PHP</li>
          <li>MYSQL</li>
          <li>Java</li>
          <li>Bootstrap</li>
          <li>Next.js</li>
          <li>Git</li>
          <li>NPM</li>
        </ul>
      </div>
    </div>
  );
}
