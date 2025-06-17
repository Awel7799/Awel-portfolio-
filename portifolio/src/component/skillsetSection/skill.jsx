import './skill.css'
import photo from "../../asset/image.png";
function skill(){
    return(
        <section className='skill-section'>
                <div class="carousel-wrapper">
  <div class="carousel">
    <div class="card"><img src={photo} alt="React" /><p>React</p></div>
    <div class="card"><img src={photo} alt="Node.js" /><p>Node.js</p></div>
    <div class="card"><img src={photo} alt="Express" /><p>Express</p></div>
    <div class="card"><img src={photo} alt="React" /><p>React</p></div>
    <div class="card"><img src={photo} alt="Node.js" /><p>Node.js</p></div>
    <div class="card"><img src={photo} alt="Express" /><p>Express</p></div>
    <div class="card"><img src={photo} alt="Express" /><p>Express</p></div>
    <div class="card"><img src={photo} alt="Express" /><p>Express</p></div>
    <div class="card"><img src={photo} alt="Express" /><p>Express</p></div>
    <div class="card"><img src={photo} alt="Express" /><p>Express</p></div>
    <div class="card"><img src={photo} alt="Express" /><p>Express</p></div>
    <div class="card"><img src={photo} alt="Express" /><p>Express</p></div>
  </div>
</div>
        </section>
    );
}
export default skill;