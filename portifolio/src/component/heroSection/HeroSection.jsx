import image from '../../asset/_0037.jpg';
import './Hero.css';
function HeroSection(){
    return(
        <section className='hero-section'>
            <img src={image} alt="Awel kassim" />
            <div className='hero-section-discription'>
                <h5><span>Hello 👋 , i am </span></h5>
                <h1>Awel kassim</h1>
                <h2>Fullstack web and mobile app developer </h2>
                <p>I specialize in developing rubest and 
                    scalebale website and mobile application 
                    using latest technology </p>
                <div className='button-section'>
                    <button>contact me</button>
                    <button>download cv</button>
                </div>
            </div>
        </section>
    )
}
export default HeroSection;