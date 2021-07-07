import React from "react";
import {
  BrowserRouter as Router,
  Switch,
  Route
} from "react-router-dom";
import NavBar from './components/NavBar/NavBar';

function App() {
  return (
    <Router>
      <NavBar />

      <Switch>
        <Route path="/projects">

        </Route>

        <Route path="/experience">

        </Route>

        <Route path="/resume">

        </Route>
        
        <Route path="/">

        </Route>
      </Switch>
    </Router>
  );
}

export default App;
