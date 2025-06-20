import './footer.css';
import logo from "../../asset/image.png";
import telegram from "../../asset/telegram-1.svg";
import github from "../../asset/github-icon.svg";
import linkedin from "../../asset/linkedin-icon-2.svg"

function Footer(){
    return(
    <section className='footer-class'>
       <div>
        <img src={logo} alt="Awel kassim" />
        <h1>Awel kassim </h1>
       </div>
       <h5>Fullstack web and mobile app developer</h5>
       <div>
        <ul>
                <li><a href="#home">Home</a></li>
                <li><a href="#home">About</a></li>
                <li><a href="#home">Skill</a></li>
                <li><a href="#home">project</a></li>
                <li><a href="#home">Experience</a></li>
                <li><a href="#home">Contact</a></li>
        </ul>
       </div>
        <div id='socialf'>            
          <ul>
             <li><img src={telegram} alt="" /></li>
             <li> <img src={github} alt="" /></li>
             <li><img src={linkedin} alt="" /></li>
          </ul>
      </div>
       
    </section>
    );
};

export default Footer;