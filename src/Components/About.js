import React from "react";
import "../styles/About.css";
import pdff from "../Res/AllamiAmirResumer.pdf";
export default function About() {
  return (
    <div className="about">
      <div className="landing">
        <div className="landing-content">
          <h1>ALLAMI AMIR</h1>
          <h2>Front end developer </h2>
          <a download="AllamiAmirResume.pdf" href={pdff} className="btn">
            Download Resumé
          </a>
        </div>
        <div className="landing-overlay"></div>
      </div>

      <div className="boutme-section">
        <h1 className="about-me">About Me </h1>
        <div className="bout-meP">
          <p className="boutme-text">
            HI Iam Amir and im a frontend devoloper from Algeria
          </p>
          <p className="boutme-text">
            Graduated with a masters degree in Computer Science, i've been
            focused on becomming a front end developper specielized in reactJs
            and its ecosystems
          </p>
          <p className="boutme-text">
            i love writing code and solving problemes,always learning and trying
            to implement the newest technologies.
          </p>
        </div>
      </div>
    </div>
  );
}
