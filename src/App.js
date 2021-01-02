import "./App.css";
import Navbar from "./Components/Navbar";
import About from "./Components/About";
import { HashRouter, Route, Switch } from "react-router-dom";
import Education from "./Components/Education";
import Projects from "./Components/Projects";

function App() {
  return (
    <div className="App">
      <Navbar />
      <Switch>
        <Route exact path="/" render={() => <About />} />
        <Route exact path="/Education" render={() => <Education />} />
        <Route exact path="/Projects" render={() => <Projects />} />
      </Switch>
    </div>
  );
}

export default App;
