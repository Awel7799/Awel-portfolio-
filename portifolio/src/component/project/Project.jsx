import './Project.css';
import header from "../../asset/Header (1).png";
import cars from "../../asset/Screenshot (17).png";
import navbar from "../../asset/cartDesign Small Screens.png";
import home from "../../asset/Screenshot (23).png";
import catagory from "../../asset/Screenshot (24).png";
import detail from "../../asset/Screenshot (25).png";
import featured from "../../asset/Screenshot (26).png"
import hr from "../../asset/Screenshot (27).png"
import hr2 from "../../asset/Screenshot (28).png"
import hr3 from "../../asset/Screenshot (29).png"
import hr4 from "../../asset/Screenshot (30).png"
function Project(){
    return(
        <section id='general-project-section' className='general-project-section'>
          <h1>My Latest Project</h1>
          <div className='project-section'>
            <div className='project-card'>
              <div className='first-image-container'>
              <img src="https://github.com/user-attachments/assets/a7b22fac-ee0b-4337-b69e-7c42dd3e2859" alt="" />
              </div>
              <div className='second-image-container'>
                  <img src="https://github.com/user-attachments/assets/6ae26543-f657-4a8b-9ed9-b4daf422f3a6" alt="" />
                  <img src="https://github.com/user-attachments/assets/52bea132-e41b-441c-85a7-f5f33ee2aca4" alt="" />
              </div>
              <div>
                  <h2 id='tittle'>Real Estate Listing and Management Platform</h2>
                  <p>A web-based system that enables real estate agents to list properties for sale or rent.
                     Includes a powerful admin dashboard to manage agents and property listings.
                     Built with HTML, CSS, JavaScript (frontend), Java Servlet, and MySQL (backend).</p>
                  <a href="">live demo</a>
              </div>
          </div>
          <div className='project-card'>
              <div className='first-image-container'>
              <img src={navbar} alt="" />
              </div>
              <div className='second-image-container'>
                  <img src={header} alt="" />
                  <img src={cars} alt="" />
              </div>
              <div>
                <h2> Responsive Car Landing Page with Shopping Cart</h2>
                <p>A modern, fully responsive landing page for showcasing cars across all devices.
                     Features a dynamic image gallery and shopping cart for user interactions.
                     Developed using React and CSS for a seamless frontend experience.</p>
                     <a href="">live demo</a>
              </div>
          </div><div className='project-card'>
              <div className='first-image-container'>
               <img id='catagory' src={catagory} alt="" />
               <img id='featured' src={featured} alt="" />
              </div>
              <div className='second-image-container'>
                  <img id='home-image' src={home} alt="" />
                  <img id='detail' src={detail} alt="" />
              </div>
              <div>
                <h2> E-Shop – Complete E-Commerce Website</h2>
                <p>An end-to-end e-commerce platform for buyers and sellers to interact.
                    Includes product filtering, cart functionality, seller dashboard, and admin panel.
                    Built with HTML, CSS, JavaScript (frontend) and PHP, MySQL (backend).</p>
                    <a href="">live demo</a>
              </div>
          </div><div className='project-card'>
              <div className='first-image-container'>
               <img  id='hr3' src={hr3} alt="" />
              </div>
              <div className='second-image-container'>
               <img  id='hr2' src={hr4} alt="" />
               <img id='hr' src={hr2} alt="" />
               <img  id='hr1' src={hr} alt="" />
              </div>
              <div>
                <h2>HR-Architecture – Furniture Showcase Landing Page</h2>
                <p>A clean, responsive landing page designed to highlight premium furniture products.
                   Optimized for all screen sizes with elegant layout and visual appeal.
                   Crafted using HTML and CSS to ensure a smooth user experience.</p>
                   <a href="">live demo</a>
              </div>
          </div>
          </div>
        </section>
    )
}
export default Project;