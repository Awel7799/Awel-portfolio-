import image from '../../asset/_0037.jpg';
import './Hero.css';
function HeroSection(){
    return(
        <section className='hero-section'>
            <img src={image} alt="Awel kassim" />
            <div class="bubble-background">
                     <span></span>
                     <span></span>
                     <span></span>
                     <span></span>
                     <span></span>
            </div>
            <div className='hero-section-discription'>
              <h5><span>Hello 👋 , i am </span></h5>
              <h1 class="hero-name">Awel Kassim</h1>
              <h2>Fullstack web and mobile app developer</h2>
              <p>
                  I specialize in developing robust and scalable websites and mobile applications 
                  using the latest technology.
              </p>
              <div className="button-section">
              <button className="btn-primary">Contact Me</button>
              <button className="btn-outline">Download CV</button>
            </div>
            </div>
        </section>
    )
}
export default HeroSection;