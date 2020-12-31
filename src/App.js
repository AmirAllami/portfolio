import "./App.css";
import Navbar from "./Components/Navbar";
import About from "./Components/About";
import { Route, Switch } from "react-router-dom";
import Education from "./Components/Education";
import Projects from "./Components/Projects";
import Contact from "./Components/Contact";

function App() {
  return (
    <div className="App">
      <Navbar />
      <Switch>
        <Route exact path="/" component={About} />
        <Route exact path="/Contact" component={Contact} />
        <Route exact path="/Education" component={Education} />
        <Route exact path="/Projects" component={Projects} />
      </Switch>
    </div>
  );
}

export default App;
