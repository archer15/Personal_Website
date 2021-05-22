import './projects.css';
import my_cv from './JoshuaArcher_CV_2021.pdf'
const Projects = () => {
    return (
        <div>
        <br></br>

<div class="row">
  <div class="column" >
    
    <h2>Column 1</h2>
    <p>Some text..</p>
  </div>
  <div class="column" >
    <h2>Column 2</h2>
    <p>Some text..</p>
  </div>
</div>
<a href= {my_cv} target="_blank"> click me to download resume</a>
      </div>
   
    );
}
export default Projects;