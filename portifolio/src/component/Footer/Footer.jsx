import './footer.css';
import logo from "../../asset/image.png";
import telegram from "../../asset/telegram-1.svg";
import github from "../../asset/github-icon.svg";
import linkedin from "../../asset/linkedin-icon-2.svg"

function Footer(){
    return(
    <section id='footer-class' className='footer-class'>
       <div>
        <img src={logo} alt="Awel kassim" />
        <h1>Awel kassim </h1>
       </div>
       <h5>Fullstack web and mobile app developer</h5>
       <div>
        <ul>
                <li><a href="#hero-section">Home</a></li>
                <li><a href="#about-section">About</a></li>
                <li><a href="#skill-section">Skill</a></li>
                <li><a href="#general-project-section">project</a></li>
                <li><a href="#experiance-section">Experience</a></li>
                <li><a href="#contact-section">Contact</a></li>
        </ul>
       </div>
        <div id='socialf'>            
          <ul>
             <li><a href="#link"><img src={telegram} alt="" /></a></li>
             <li> <a href="#link"><img src={github} alt="" /></a></li>
             <li><a href="#link"><img src={linkedin} alt="" /></a></li>
          </ul>
      </div>
       
    </section>
    );
};

export default Footer;