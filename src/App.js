import React from "react";
import {
  BrowserRouter as Router,
  Switch,
  Route
} from "react-router-dom";
import NavBar from './components/NavBar/NavBar';
import Home from './components/LandingPage/Home';
import Projects from './components/ProjectPage/Projects'
import Experience from './components/ExperiencePage/Experience'

function App() {
  return (
    <Router>
      <div
      style={{
        backgroundColor: 'red'
      }}>
      
    
      <NavBar />

      <Switch>
        <Route path="/projects">
          <Projects />
        </Route>

        <Route path="/experience">
          <Experience />
        </Route>

        <Route path="/resume">

        </Route>
        
        <Route path="/">
          <Home />
        </Route>
      </Switch>
      </div>
    </Router>
  );
}

export default App;
