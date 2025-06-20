import './skill.css'
import mysql from "../../asset/mysql-3.svg";
import react from "../../asset/react-2.svg";
import node from "../../asset/nodejs-2.svg";
import reactNative from "../../asset/react-native-1.svg";
import next from "../../asset/next-js.svg";
import php from "../../asset/php-6.svg";
import tailwind from "../../asset/tailwind-css-2.svg";
import git from "../../asset/git.svg";
import html from "../../asset/html-1.svg";
import js from "../../asset/javascript-1.svg";
import css from "../../asset/css-3.svg";
function skill(){ 
    return(
        <section className='skill-section'>
          <h1>Technical Expertise</h1>
                <div class="carousel-wrapper">
  <div class="carousel">
    <div class="card"><img src={react} alt="React" /><p>React js</p></div>
    <div class="card"><img src={node} alt="Node.js" /><p>Node.js</p></div>
    <div class="card"><img src={reactNative} alt="React-native" /><p>React native</p></div>
    <div class="card"><img src={mysql} alt="Express" /><p>Mysql</p></div>
    <div class="card"><img src={next} alt="Express" /><p>Next js</p></div>
    <div class="card"><img src={php} alt="Express" /><p>Php</p></div>
    <div class="card"><img src={tailwind} alt="Express" /><p>tailwind</p></div>
    <div class="card"><img src={git} alt="Express" /><p>git</p></div>
    <div class="card"><img src={html} alt="Express" /><p>html</p></div>
    <div class="card"><img src={js} alt="Express" /><p>js</p></div>
    <div class="card"><img src={css} alt="Express" /><p>CSS</p></div>
    <div class="card"><img src={react} alt="React" /><p>React js</p></div>
  </div>
</div>
        </section>
    );
}
export default skill;