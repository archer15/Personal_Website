import './about.css';

const add1 = () => { 
  document.getElementById("p1").style.display = "block";
}
const remove1 = () =>  {
  document.getElementById("p1").style.display = "none";
}
const add2 = () => { 
  document.getElementById("p2").style.display = "block";
}
const remove2 = () =>  {
  document.getElementById("p2").style.display = "none";
}
const add3 = () => { 
  document.getElementById("p3").style.display = "block";
}
const remove3 = () =>  {
  document.getElementById("p3").style.display = "none";
}
const add4 = () => { 
  document.getElementById("p4").style.display = "block";
}
const remove4 = () =>  {
  document.getElementById("p4").style.display = "none";
}
const add5 = () => { 
  document.getElementById("p5").style.display = "block";
}
const remove5 = () =>  {
  document.getElementById("p5").style.display = "none";
}
const add6 = () => { 
  document.getElementById("p6").style.display = "block";
}
const remove6 = () =>  {
  document.getElementById("p6").style.display = "none";
}
const add7 = () => { 
  document.getElementById("p7").style.display = "block";
}
const remove7 = () =>  {
  document.getElementById("p7").style.display = "none";
}
const add8 = () => { 
  document.getElementById("p8").style.display = "block";
}
const remove8 = () =>  {
  document.getElementById("p8").style.display = "none";
}
const add9 = () => { 
  document.getElementById("p9").style.display = "block";
}
const remove9 = () =>  {
  document.getElementById("p9").style.display = "none";
}
const About = () => {

    return (
        <div className="about-main"><h1>About Me</h1>
            <div className="row">
              <div className="column" >
                <h2>Personal Hobbies</h2>
                  <div className="card">
                    <ul onMouseOver={add1} onMouseLeave={remove1} >Personal Fitness</ul>
                    <ul onMouseOver={add2} onMouseLeave={remove2}>Music </ul>
                    <ul onMouseOver={add3} onMouseLeave={remove3}>Creative Software Projects</ul>
                    <ul onMouseOver={add4} onMouseLeave={remove4}>Video Games</ul>
                  </div>
              </div>
              <div className="column" >
                <h2>Main Software Interests</h2>
                  <div className="card" >
                    <ul onMouseOver={add5} onMouseLeave={remove5} >Web Development / App Development</ul>
                    <ul onMouseOver={add6} onMouseLeave={remove6}>Systems Architecture and Design </ul>
                    <ul onMouseOver={add7} onMouseLeave={remove7}>Video Games Development</ul>
                    <ul onMouseOver={add8} onMouseLeave={remove8}>System Security </ul>
                    <ul onMouseOver={add9} onMouseLeave={remove9}>Network Engineering </ul>
                  </div> 
              </div>

</div>
        <div className="mouse_over">
          <div id="p1">
            <li>Weight Lifting</li>
            <li>Soccer</li>
            <li>Hiking</li>
          </div>

          <div id="p2">
            <li>Rap</li>
              <li id="indent">Eminem</li>
              <li id="indent">Yelawolf</li>
              <li id="indent">21 Savage</li>
            <li>Pop</li>
            <li>Rock</li>
          </div>

          <div id="p3">Anything fun, exciting and challenging.</div>
          <div id="p4">
          <li>Shooters</li>
              <li id="indent">Call of Duty</li>
              <li id="indent">CS GO</li>
            <li>Moba</li>
            <li id="indent">League is better than Dota</li>
          </div>

          <div id="p5">I am definitely not good at design. Still learning different tricks </div>

          <div id="p6"></div>

          <div id="p7"></div>

          <div id="p8"></div>

          <div id="p9"></div>

        </div>
      </div>
   
    );
}



export default About;