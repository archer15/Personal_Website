import './App.css';
//import React, { useState, useEffect } from "react";
import {
  BrowserRouter as Router, Switch, Route, Link
} from "react-router-dom"
import About from './pages/about.js'
import Home from './pages/home.js'
import Documents from './pages/documents.js'
import Projects from './pages/projects.js'


const padding = {
  padding: 10
}

const App = () => {
  return (
    <div className="App-main">
      <div className="App-title">Portfolio.</div>
      <div className="App-router">
          <Router>
          
          <div className="App-nav">
            <Link style={padding} to ="/"> Home </Link>
            <Link style={padding} to ="/about"> About </Link>
            <Link style={padding} to ="/projects"> Projects </Link>
            <Link style={padding} to ="/documents"> Resume </Link>
          </div>
          
          <Switch>
            <Route path="/about">
            <About></About>
            </Route>
            <Route path="/projects">
              <Projects></Projects>
            </Route>
            <Route path="/documents">
            <Documents></Documents>
            </Route>
            <Route path="/">
                <Home></Home>
            </Route>
          </Switch>
          </Router>
        </div>
    
    
 </div>
  );
}

export default App;
