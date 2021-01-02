import React from "react";
import weather from "../img/weather-app.png";
import colorApp from "../img/color-app.png";
import recipe from "../img/recipe.png";
import calculator from "../img/calculator.png";
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
            <a
              target="_blank"
              rel="noreferrer"
              href="https://amirallami.github.io/color-project/"
            >
              View Project
            </a>
            <a
              target="_blank"
              rel="noreferrer"
              href="https://github.com/AmirAllami/color-project"
            >
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
            <a
              target="_blank"
              rel="noreferrer"
              href="https://amirallami.github.io/weather-app-/"
            >
              View Project
            </a>
            <a
              target="_blank"
              rel="noreferrer"
              href="https://github.com/AmirAllami/weather-app-"
            >
              View Source
            </a>
          </div>
        </div>
      </div>

      <div className="containerP">
        <div className="img-container">
          <img src={recipe} alt="weather app" />
        </div>
        <div className="project-info">
          <h3>Recipie App</h3>
          <p>
            using a edamam recipie api i creeated an app which allows you to
            search for recipes using keywords like: "choclate" or "chicken"
          </p>
          <p>used : reactjs , react-router-dom </p>
          <div className="linkP">
            <a
              target="_blank"
              rel="noreferrer"
              href="https://amirallami.github.io/React-recipe-app/"
            >
              View Project
            </a>
            <a
              target="_blank"
              rel="noreferrer"
              href="https://github.com/AmirAllami/React-recipe-app"
            >
              View Source
            </a>
          </div>
        </div>
      </div>

      <div className="containerP">
        <div className="img-container">
          <img src={calculator} alt="calculator app" />
        </div>
        <div className="project-info">
          <h3>Calcutor</h3>
          <p>a simple Calcutor app which i made while learning reactjs</p>
          <p>used : reactjs </p>
          <div className="linkP">
            <a
              target="_blank"
              rel="noreferrer"
              href="https://amirallami.github.io/Calculator-/"
            >
              View Project
            </a>
            <a
              target="_blank"
              rel="noreferrer"
              href="https://github.com/AmirAllami/Calculator-"
            >
              View Source
            </a>
          </div>
        </div>
      </div>
    </div>
  );
}
