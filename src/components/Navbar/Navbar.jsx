
import { useState } from 'react'
import './navbar.css'

function Navbar() {

  const [isShowMenu, setIsShowMenu] = useState(false);
  const toggleMenu = () => {
    setIsShowMenu(!isShowMenu);
    console.log("render:", isShowMenu);
  }

  return (
    <header>
      <nav className='navbar'>
        <div className="nav-container">
          <div className="nav-top">

          <a href="#" className="logo">Gym<span>&</span>Fitness</a>
        
          <button id="menuBtn" className="menu-btn" onClick={toggleMenu}>
          {isShowMenu ? <i className="fa-solid fa-xmark"></i> : <i className="fa-solid fa-bars"></i>}
          </button>
          </div>

          <ul className={`nav-links ${isShowMenu ? 'show' : ''}`} id='navLinks'>
          <li><a href="#home" >Home</a></li>
          <li><a href="#programs">Programs</a></li>
          <li><a href="#about">About Us</a></li>
          <li><a href="#pricing">Plans</a></li>
          <li><a href="#contact">Contact</a></li>
          </ul>
      </div>
    </nav>
  </header>
)};

export default Navbar