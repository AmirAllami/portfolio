import "./App.css";
import Navbar from "./Components/Navbar";
import About from "./Components/About";
import { HashRouter, Route, Switch } from "react-router-dom";
import Education from "./Components/Education";
import Projects from "./Components/Projects";

function App() {
  return (
    <HashRouter basename="/">
      <div className="App">
        <Navbar />
        <Switch>
          <Route exact path="/" component={About} />
          <Route exact path="/Education" component={Education} />
          <Route exact path="/Projects" component={Projects} />
        </Switch>
      </div>
    </HashRouter>
  );
}

export default App;
