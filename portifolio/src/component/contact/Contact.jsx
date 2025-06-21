import './contact.css';
import location from "../../asset/location.svg";
import gmail from "../../asset/gmail-icon-1.svg";
import telegram from "../../asset/telegram-1.svg";
import github from "../../asset/github-icon.svg";
import linkedin from "../../asset/linkedin-icon-2.svg"
function Contact(){
    return(
        <section id='contact-section' className='contact-section'>
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
              <div>
                <svg className='phone-logo' xmlns="http://www.w3.org/2000/svg" width="24" height="24" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M6.62 10.79a15.053 15.053 0 0 0 6.59 6.59l2.2-2.2a1.003 1.003 0 0 1 1.11-.21c1.21.49 2.53.76 3.88.76a1 1 0 0 1 1 1v3.5a1 1 0 0 1-1 1C10.39 22 2 13.61 2 3.5a1 1 0 0 1 1-1H6.5a1 1 0 0 1 1 1c0 1.35.26 2.67.76 3.88a1.003 1.003 0 0 1-.21 1.11l-2.2 2.2z"/>
                  </svg>
                  <h3 className='phone-number'>0953696370</h3>
              </div>
              <div id='socialm'>
                <h3>lets connect on </h3>
                <ul>
                     <li><a href="@Awelksm"><img src={telegram} alt="" /></a></li>
                     <li> <a href="https://github.com/Awel7799"><img src={github} alt="" /></a></li>
                     <li><a href="www.linkedin.com/in/awel-kassim-a71502331"><img src={linkedin} alt="" /></a></li>
                </ul>
              </div>
            </div>
            <div className="contact-form-container">
  <form className="contact-form" action="#" method="POST">
    <div className="form-group">
      <label htmlFor="name">Full Name</label>
      <input
        type="text"
        id="name"
        name="name"
        placeholder="Enter your full name"
        required
      />
    </div>

    <div className="form-group">
      <label htmlFor="email">Email Address</label>
      <input
        type="email"
        id="email"
        name="email"
        placeholder="Enter your email address"
        required
      />
    </div>

    <div className="form-group">
      <label htmlFor="subject">Subject</label>
      <input
        type="text"
        id="subject"
        name="subject"
        placeholder="Enter subject"
      />
    </div>

    <div className="form-group">
      <label htmlFor="message">Message</label>
      <textarea
        id="message"
        name="message"
        rows="5"
        placeholder="Write your message here"
        required
      ></textarea>
    </div>

    <button type="submit" className="submit-btn">Send Message</button>
  </form>
</div>

         </div>
        </section>
    );
};

export default Contact;