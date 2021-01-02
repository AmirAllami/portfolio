import React from "react";
import "../styles/About.css";
import pdff from "../Res/AllamiAmirResumé.pdf";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faGithub } from "@fortawesome/free-brands-svg-icons";
import { faLinkedin } from "@fortawesome/free-brands-svg-icons";
import { faPhone } from "@fortawesome/free-solid-svg-icons";
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
      <div className="Contact-Container">
        <div className="infos-container">
          <h3 className="infos">
            <FontAwesomeIcon icon={faPhone} /> +213 552 045606
          </h3>
          <h1 className="infos">
            Email : <span> AllamiAmir@gmail.com</span>
          </h1>
          <a className="infos" href="https://github.com/amirAllami/">
            <FontAwesomeIcon icon={faGithub} />
          </a>
          <a
            href="https://www.linkedin.com/in/allami-amir-b31820126/"
            className="infos"
          >
            <FontAwesomeIcon icon={faLinkedin} />
          </a>
        </div>
      </div>
    </div>
  );
}
