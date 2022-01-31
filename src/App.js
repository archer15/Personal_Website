
import React from 'react'

const App = () => {
  const mystyle = {
    color: "white",
    position: "absolute",
    bottom: 0,
    right: 0,
    
    backgroundColor: "DodgerBlue",
    padding: "10px",
    fontFamily: "Arial"
  };
  return (
    <div className="App-main">
      <p style={{fontSize: "40px"}}>This website is currently under maintanence. Check back later for updates. Thank you. </p>
      <div className="App-footer" style={mystyle}>Thanks for visiting my personal website.</div>
    
 </div>
  );
}

export default App;
