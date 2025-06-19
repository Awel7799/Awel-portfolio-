import './contact.css';
import location from "../../asset/location.svg";
import gmail from "../../asset/gmail-icon-1.svg";
import telegram from "../../asset/telegram-1.svg";
import github from "../../asset/github-icon.svg";
import linkedin from "../../asset/linkedin-icon-2.svg"
function Contact(){
    return(
        <section className='contact-section'>
         <h1>get in touch <span> CONTACT</span></h1>
         <div className='contact-container'>
            <div className='location'>
              <div>
                <img src={location} alt="location icon" />
                <h3><span>Location</span><br /> Adama , Ethiopia</h3>
              </div>
               <div>
                <img src={gmail} alt="location icon" />
                <h3><span>Email</span><br /><a href="#">awelkassim45@gmail.com</a></h3>
              </div>
              <div id='socialm'>
                <h3>lets connect on </h3>
                <ul>
                    <li><img src={telegram} alt="" /></li>
                    <li> <img src={github} alt="" /></li>
                    <li><img src={linkedin} alt="" /></li>
                </ul>
              </div>
            </div>
            <div className='contact-form'>

            </div>
         </div>
        </section>
    );
};

export default Contact;