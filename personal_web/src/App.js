import './App.css';
import React, { useState, useEffect } from "react";
import {
  BrowserRouter as Router, Switch, Route, Link
} from "react-router-dom"
import profile_pic from './Profile_pic.jpg'
import About from './pages/about.js'
import Home from './pages/home.js'
const padding = {
  padding: 10
}
const App = () => {
  return (
    <div className="App-main">
      <div className="App-router">
          <Router>
          
          <div className="App-nav">
            <Link style={padding} to ="/"> Home </Link>
            <Link style={padding} to ="/about"> About </Link>
            <Link style={padding} to ="/projects"> Projects </Link>
            <Link style={padding} to ="/documents"> Documents </Link>
          </div>
          
          <Switch>
            <Route path="/about">
            <About></About>
            </Route>
            <Route path="/projects">
   
            </Route>
            <Route path="/documents">
            <p>this is the documents</p>
            </Route>
            <Route path="/">
                <Home></Home>
            </Route>
          </Switch>
          </Router>
        </div>
    
    <div className="App-footer">Thank you for visiting my personal website. </div>
    </div>
  );
}

export default App;
