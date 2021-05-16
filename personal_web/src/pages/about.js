import './about.css';

const About = () => {
  const addInfo = () => {
    console.log('ss');
    
  }
    return (
        <div className="about-main"><h1>About Me</h1>
            <div class="row">
  <div class="column" >
    <h2>Personal Hobbies</h2>
    <div class="card">
    <ul onClick={addInfo}>Personal Fitness</ul>
    <ul>Music </ul>
    <ul >Creative Software Projects</ul>
    <ul>Video Games</ul>
    
    </div>
    
    
  </div>
  <div class="column" >
    <h2>Main Software Interests</h2>
    <div class="card" >
    <ul >Web Development / App Development</ul>
    <ul>Systems Architecture and Design </ul>
    <ul>Video Games Development</ul>
    <ul>System Security </ul>
    <ul>Network Engineering </ul>
    
    </div>
    
    
  </div>
</div>
        
      </div>
   
    );
}



export default About;