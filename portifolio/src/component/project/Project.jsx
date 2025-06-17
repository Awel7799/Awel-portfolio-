import './Project.css';
import photo from "../../asset/image.png";
function Project(){
    return(
        <section className='project-section'>
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
        </section>
    )
}
export default Project;