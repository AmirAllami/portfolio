import React from "react";
import weather from "../img/weather-app.png";
import colorApp from "../img/color-app.png";
import "../styles/Projects.css";
export default function Projects() {
  return (
    <div className="projects-container">
      <h1 className="sec-title"> Projects</h1>
      <div className="containerP">
        <div className="img-container">
          <img src={colorApp} alt="weather app" />
        </div>
        <div className="project-info">
          <h3>Color App</h3>
          <p>
            A clone of websites like e Flat UI Colors and Material UI Colors,
            this app always a user to create a pelette by using a color picker
            or use existing ones, also it allows to select diffrent shades of
            the same color and easy to copie all colors you want
          </p>
          <p>used: reactjs, JSS, react-router-dom, chromaJs, material-ui</p>
          <div className="linkP">
            <a href="https://amirallami.github.io/color-project/">
              View Project
            </a>
            <a href="https://github.com/AmirAllami/color-project">
              View Source
            </a>
          </div>
        </div>
      </div>
      <div className="containerP">
        <div className="img-container">
          <img src={weather} alt="weather app" />
        </div>
        <div className="project-info">
          <h3>Weather App</h3>
          <p>
            A weather App made with reactjs using openweather Api, a user can
            search for his city and get the current weather and forcast for the
            next 6days
          </p>
          <p>used : react country flags and fontawsome </p>
          <div className="linkP">
            <a href="https://amirallami.github.io/weather-app-/">
              View Project
            </a>
            <a href="https://github.com/AmirAllami/weather-app-">View Source</a>
          </div>
        </div>
      </div>

      <div className="containerP">
        <div className="img-container">
          <img src={weather} alt="weather app" />
        </div>
        <div className="project-info">
          <h3>Recepie App</h3>
          <p>
            A weather App made with reactjs using openweather Api, a user can
            search for his city and get the current weather and forcast for the
            next 6days
          </p>
          <p>used : react country flags and fontawsome </p>
          <div className="linkP">
            <a href="https://amirallami.github.io/weather-app-/">
              View Project
            </a>
            <a href="https://github.com/AmirAllami/weather-app-">View Source</a>
          </div>
        </div>
      </div>

      <div className="containerP">
        <div className="img-container">
          <img src={weather} alt="weather app" />
        </div>
        <div className="project-info">
          <h3>Calcutor</h3>
          <p>
            A weather App made with reactjs using openweather Api, a user can
            search for his city and get the current weather and forcast for the
            next 6days
          </p>
          <p>used : react country flags and fontawsome </p>
          <div className="linkP">
            <a href="https://amirallami.github.io/weather-app-/">
              View Project
            </a>
            <a href="https://github.com/AmirAllami/weather-app-">View Source</a>
          </div>
        </div>
      </div>
    </div>
  );
}
