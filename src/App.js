
import { useState } from 'react'
import profile_pic from './img/Profile_pic.jpg'

import './App.css'
import port_img from './Port_img/portfolio_1.PNG'
import swapstreet_1 from './Port_img/swapstreet_1.PNG'
import swapstreet_2 from './Port_img/swapstreet_2.PNG'
import swapstreet_3 from './Port_img/swapstreet_3.PNG'
import swapstreet_4 from './Port_img/swapstreet_4.PNG'
import swapstreet_5 from './Port_img/swapstreet_5.PNG'
import startpage_1 from './Port_img/StartPage_1.PNG'
import startpage_2 from './Port_img/StartPage_2.PNG'
import my_cv from './img/JoshuaArcher_CV_2021.pdf'
const App = () => {
  const openForm = () => {
    document.getElementById("myForm").style.display = "block";
  }
  const closeForm = () => {
    document.getElementById("myForm").style.display = "none";
  }
  return (
    <div>
      <div className="App-main" id="main">
        <link
          rel="stylesheet"
          href="https://use.fontawesome.com/releases/v5.8.2/css/all.css"
          integrity="sha384-oS3vJWv+0UjzBfQzYUhtDYW+Pj2yciDJxpsK1OYPAYjqT085Qq/1cq5FLXAZQ7Ay"
          crossorigin="anonymous"
        />
        <link
          href="https://fonts.googleapis.com/css?family=Poppins:200i,300,400&display=swap"
          rel="stylesheet"
        />
        <link
          href="https://fonts.googleapis.com/css?family=Raleway:700&display=swap"
          rel="stylesheet"
        />
        <nav id="navbar" className="nav">
          <ul className='nav-list'>
            <li>
              <a href="#welcome" className="nav-item">Welcome</a>
            </li>
            <li>
              <a href="#about" className="nav-item">About</a>
            </li>
            <li>
              <a href="#projects" className="nav-item">Projects</a>
            </li>
            <li>
              <a href="#contact" className="nav-item">Contact</a>
            </li>
          </ul>
        </nav>

        <section id="welcome" className="welcome-section">
          <h1>Hi I am Joshua  </h1>
          <p>a software engineer</p>
          <img src={profile_pic} alt="" height="200px" width="200px" ></img>
        </section>
        <section id="about" className="about-section">
          <div id="about-header"> I am not just a software engineer. I am a human too.</div>
          <div id="about-card"> I love cooking/baking. Experimenting with new and fun recipes + my own ideas.</div>
          <div id="about-card">I enjoy any type of physical activity
            <ul>
              <li>Sports</li>
              <li>Weight lifting</li>
              <li>Hiking</li>
            </ul>
          </div>
          <div id="about-card">All types of music</div>
          <div id="about-card"></div>
          <div id="about-footer">Scroll to see my professional hobbies.</div>
        </section>
        <hr></hr>
        <section id="projects" className="about-section">
          <div class="project-section-header">
            <h2>Check out some of my work</h2>
          </div>
          <div className="projects-grid">
            <a rel="noreferrer" className="project project-title" href="https://swapstreet.herokuapp.com/" target="_blank"> <img className='project-image' src={swapstreet_1} alt="Project" />

              <p className="project-title"><span className="code">&lt;</span>SwapStreet Application
                <span class="code">&#47;&gt;</span></p></a>
            <a rel="noreferrer" className="project project-title" href="https://github.com/archer15/Personal_Website" target="_blank" ><img className='project-image' src={port_img} alt="Project" />
              <p className="project-title"><span className="code">&lt;</span>My Portfolio Website (This)
                <span class="code">&#47;&gt;</span></p></a>
            <a rel="noreferrer" className="project project-title" href="https://github.com/archer15/Group-project-2020" target="_blank">  <img className='project-image' src={startpage_1} alt="Project" />
              <p className="project-title"><span className="code">&lt;</span>Internet Start Page - Similar to Bing
                <span class="code">&#47;&gt;</span></p></a>
            <a rel="noreferrer" className="project project-title" href="https://youtu.be/si6v0Kw-ZGM?t=70" target="_blank"><img className='project-image' src="https://img.youtube.com/vi/si6v0Kw-ZGM/default.jpg" alt="Project" />
              <p className="project-title"><span className="code">&lt;</span>2019 Engineering Challenge - Building an elevator
                <span class="code">&#47;&gt;</span></p></a>
          </div><a rel="noreferrer" href="https://github.com/archer15"
            class="btn btn-show-all" target="_blank"
          >Show More<i class="fas fa-chevron-right"></i
          ></a></section>
        <section id="contact" className="contact-section">
          <div class="contact-section-header">
            <h2>Feel free to...</h2>
            <p>See more of me or contact me directly via email</p>
          </div>
          <a href="https://github.com/archer15" target="_blank" rel="noreferrer" className="contact-card">GitHub </a>
          <a href={my_cv} target="_blank" rel="noreferrer" className="contact-card">Download Résumé </a>
          <a href="#contact" rel="noreferrer" className="contact-card" onClick={openForm} id='contact-button'>Contact Me </a>
          <div class="form-popup" id="myForm">
            <form action='/form_page' className='form-container'>
              <h1>Send me an email</h1>
              <label for='email'><b>Your Email</b></label>
              <input required type='email' placeholder='enter email' name='email'></input>
              <br></br>
              <label for='message'><b>Ask me a question?</b></label>
              <input required type='text' autoComplete='off' placeholder='Enter a message which will be sent to me directly.' name='message' ></input>
            </form>
            
            <button type="button" className='cancel' onClick={closeForm}>Close Email Form</button>
          </div>
        </section>
      </div>
      <footer style={{ fontSize: "0.7em" }}>This portfolio was a fun HTML, CSS, and JavaScript project.  &copy; <a rel="noreferrer" href="https://github.com/archer15/Personal_Website" target="_blank">Property of Joshua Archer</a> </footer>
    </div>
  );
}
export default App;
