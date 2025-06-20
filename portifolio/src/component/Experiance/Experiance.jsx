import './experiance.css';
import certificate from "../../asset/Screenshot (14).png";
import certificate2 from "../../asset/Screenshot (15).png";
import certificate3 from "../../asset/Screenshot (16).png";
 function Experiance(){
    return(
        <section id='experiance-section' className='experiance-section'>
            <h1>Experiance and Education</h1>
             <div className='first-experiance'>
               <h2>B.Sc. in Software Engineering – Adama Science and Technology University</h2>
               <h5>I hold a Bachelor of Science degree in Software Engineering from Adama Science and Technology University. My academic background provided me with a comprehensive understanding of software development, system design, and engineering principles, preparing me for practical problem-solving in real-world tech environments.</h5>
             </div>
             <div className='second-experiance'>
              <h2> Internship Experience – EthSwitch S.C.</h2>
              <p>I successfully completed an internship at EthSwitch S.C., where I contributed to real-world software projects in a collaborative team environment. During my time there, I gained valuable hands-on experience with enterprise-level systems and deepened my understanding of financial technology solutions and software development best practices.</p>
             </div>
             <div className='first-experiance'>
                 <img src={certificate3} alt="certificate3" />
                 <h3>Programming Fundamentals Certification – Udacity</h3>
                 <p>I completed the Programming Fundamentals course from Udacity, where I built a solid foundation in web development using HTML, CSS, and JavaScript. This certification strengthened my understanding of frontend development principles and enabled me to create responsive, user-friendly web interfaces.</p>
             </div>
              <div className='second-experiance'>
                   <img src={certificate2} alt="certificate2" />
                   <h3>Android Mobile App Development Certification – Udacity</h3>
                   <p>I obtained a certification in Android Mobile App Development from Udacity, focusing on building functional and user-centered mobile applications. Through hands-on projects, I gained experience in Android Studio, UI design, and integrating backend services to develop real-world mobile apps.</p>
             </div>
             <div className='first-experiance'>
                  <img src={certificate} alt="certificate" />
                  <h3> English Communication Certification – Universal Language Academy</h3>
                  <p>I earned a certification in English for Communication from the Universal Language Academy, which equipped me with strong verbal and written communication skills. This program enhanced my confidence and fluency in professional and interpersonal settings, allowing me to collaborate effectively across diverse teams and environments.</p>
             </div>
        </section>
    );
 };
 export default Experiance;