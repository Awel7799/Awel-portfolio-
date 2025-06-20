import logo from '../../asset/image.png';
import { useState } from 'react';
import './Navbar.css'
function Navbar(){
  const [open, setOpen] = useState(true);
    return(
        <nav className='navbar'>
            <div className='logo'>
             <a href="#hero-section"><img src={logo} alt="my logo" /></a>
            </div>
            <ul className={`nav-links ${open ? "open" : ""}`}>
                <li><a href="#hero-section">Home</a></li>
                <li><a href="#about-section">About</a></li>
                <li><a href="#skill-section">Skill</a></li>
                <li><a href="#general-project-section">project</a></li>
                <li><a href="#experiance-section">Experience</a></li>
                <li><a href="#contact-section">Contact</a></li>
            </ul>
            <button className='menu-toggle' onClick={()=> setOpen(!open)}>
                 ☰
            </button>
        </nav>
    );
}

export default Navbar;