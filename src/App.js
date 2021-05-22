import './App.css';
//import React, { useState, useEffect } from "react";
import {
  BrowserRouter as Router, Switch, Route, Link
} from "react-router-dom"
import About from './pages/about.js'
import Home from './pages/home.js'
import Documents from './pages/documents.js'
import Projects from './pages/projects.js'
import my_cv from './pages/JoshuaArcher_CV_2021.pdf'
import linkedin_image from './pages/linkedin.png'
const padding = {
  padding: 30
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
            <Link style={padding} to ="/projects"> Projects  </Link>
            <a href= {my_cv} target="_blank"> Resume <i class="fas fa-file"></i></a>
          </div>
          <div className="App-links">
         
            <a href="https://www.linkedin.com/in/joshua-archer/" target="_blank"><img src={linkedin_image} width="40" height="40" className="img_link" ></img></a>
            
          </div>
          
          <Switch>
            <Route path="/about">
            <About></About>
            </Route>
            <Route path="/projects">
              <Projects></Projects>
            </Route>
            <Route path="/">
                <Home></Home>
            </Route>
          </Switch>
          </Router>
        </div>
      <div className="App-footer">Thanks for visiting my personal website.</div>
    
 </div>
  );
}

export default App;
