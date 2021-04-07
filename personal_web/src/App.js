import './App.css';
import profile_pic from './Profile_pic.jpg'
function App() {
  return (
    <div className="App">
      <header className="App-header">
        <img src={profile_pic} alt="Joshua Archer 2020"  height="500" width="500"></img>
        <div className="App-title ">
        <h1>Hi. My name is Joshua Archer.</h1>
        <h2>I am a Software Engineering student at Macquarie University.</h2>
        
       </div>
       <p>Thank you for visiting my personal website. </p>
      </header>
    </div>
  );
}

export default App;
