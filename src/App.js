import React from "react";
import { Route, Switch } from "react-router-dom";
import "./css/style.css";
import Navigation from "./Components/Navigation";
import Home from "./Components/Home";
import About from "./Components/About/About";
import Skills from "./Components/Skills";
import Contact from "./Components/Contact";
import Projects from "./Components/Projects";
import MainProjects from "./Components/MainProjects";

function App() {
  return (
    <div className="App">
      <Navigation />
      <Switch>
        <Route exact path="/" component={Home}>
          <Home />
        </Route>
        <Route path="/about" component={About}>
          <About />
        </Route>
        <Route path="/skills" component={Skills}>
          <Skills />
        </Route>
        <Route path="/mainprojects" component={MainProjects}>
          <MainProjects />
        </Route>
        <Route path="/projects" component={Projects}>
          <Projects />
        </Route>
        <Route exact path="/contact" component={Contact}>
          <Contact />
        </Route>
      </Switch>
    </div>
  );
}

export default App;
