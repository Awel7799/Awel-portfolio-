import './experiance.css';
import certificate from "../../asset/Screenshot (14).png";
import certificate2 from "../../asset/Screenshot (15).png";
import certificate3 from "../../asset/Screenshot (16).png";
 function Experiance(){
    return(
        <section id='experiance-section' className='experiance-section'>
            <h1>Experiance and Education</h1>
             <div className='first-experiance'>
               
             </div>
             <div className='second-experiance'>

             </div>
             <div className='first-experiance'>
                 <img src={certificate3} alt="certificate3" />
             </div>
              <div className='second-experiance'>
                   <img src={certificate2} alt="certificate2" />
             </div>
             <div className='first-experiance'>
                  <img src={certificate} alt="certificate" />
             </div>
        </section>
    );
 };
 export default Experiance;