import React from "react";
import {
  BrowserRouter as Router,
  Switch,
  Route
} from "react-router-dom";
import NavBar from './components/NavBar/NavBar';
import Home from './components/LandingPage/Home';
import Projects from './components/ProjectPage/Projects'

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
