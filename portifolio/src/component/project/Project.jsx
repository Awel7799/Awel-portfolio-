import './Project.css';
import photo from "../../asset/image.png";
function Project(){
    return(
        <section className='general-project-section'>
          <h1>My Latest Project</h1>
          <div className='project-section'>
            <div className='project-card'>
            <img src={photo} alt="" />
            <h3>project name</h3>
            <p>project discription</p>
             <a href="#"> live demo</a>
          </div>
          <div className='project-card'>
            <img src={photo} alt="" />
            <h3>project name</h3>
            <p>project discription</p>
             <a href="#"> live demo</a>
          </div>
          <div className='project-card'>
            <img src={photo} alt="" />
            <h3>project name</h3>
            <p>project discription</p>
             <a href="#"> live demo</a>
          </div>
          <div className='project-card'>
            <img src={photo} alt="" />
            <h3>project name</h3>
            <p>project discription</p>
             <a href="#"> live demo</a>
          </div>
          <div className='project-card'>
            <img src={photo} alt="" />
            <h3>project name</h3>
            <p>project discription</p>
             <a href="#">live demo</a>
          </div>
          </div>
        </section>
    )
}
export default Project;