import './projects.css';

const Projects = () => {
  
    return (
        <div className="projects-main">
          <div className="card-1">
            <h2>Automated Shopping Bot</h2>
            <p>This was an automated bot which is responsible for collecting different type of foods based on the colour of the cans. 
              My job was to develop software which would utalise sensors and motors to move the bot to the different 
              cans of food, use the sensors to detect the colour, and deliver the right amount of cans to the user. 
               </p>
          </div>
          <div className="card-2">
            <h2>Minature Elevator </h2>
            <p className="project-2-text" display>This project was to create a minature elevator. My role in the project was to develop the elevator
            control box which was used to select the different floors for it to visit. <br></br><br></br>
            My role was project manager for the team and saw good success and had a blast working with arduinos and C++.</p>
            <div className="project-2-image" >
          
           
          </div>
          </div>
          
          <div className="card-3">
            
            <p> </p>
          </div>
      </div>
   
    );
}
export default Projects;