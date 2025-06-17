import logo from '../../asset/image.png';
import { useState } from 'react';
import './Navbar.css'
function Navbar(){
  const [open, setOpen] = useState(true);
    return(
        <nav className='navbar'>
            <div className='logo'>
             <img src={logo} alt="my logo" />
            </div>
            <ul className={`nav-links ${open ? "open" : ""}`}>
                <li><a href="#home">Home</a></li>
                <li><a href="#home">About</a></li>
                <li><a href="#home">Skill</a></li>
                <li><a href="#home">project</a></li>
                <li><a href="#home">Experience</a></li>
                <li><a href="#home">Contact</a></li>
            </ul>
            <button className='menu-toggle' onClick={()=> setOpen(!open)}>
                 ☰
            </button>
        </nav>
    );
}

export default Navbar;