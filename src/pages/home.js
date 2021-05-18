import './home.css';
import profile_pic from '../Profile_pic.jpg'
const Home = () => {
    return (
        <div> 
            <div className="home-image">
                <img src={profile_pic} alt="Joshua Archer" width="300" height="300"></img>
                <p>Contact me - joshua.archer15@gmail.com </p>
            </div>
            <div className="home-main">
                <h2> Welcome to my personal Website. <br></br> 
                My name is Joshua Archer. <br></br>
                I am studying a Bachelor of Engineering - Majoring in Software.
                </h2>
                <p>I created this potfolio website as a project to begin my journey through multiple projects.
                    <br></br>
                    <br></br>
                    This space is home to my personal project and development ideas. Be sure to check back later. &#128522;
                </p>
            </div>
            
        </div>
    );
}
export default Home;