
import { useState, useEffect } from 'react'
import './navbar.css'

function Navbar() {

  const [isShowMenu, setIsShowMenu] = useState(false);
  const [activeSection, setActiveSection] = useState('home');
  const toggleMenu = () => {
    setIsShowMenu(!isShowMenu);
    console.log("render:", isShowMenu);
  }

useEffect(() => {
  const handleScroll = () => {
    let current = '';

    document.querySelectorAll('section[id]').forEach((sec) => {
      if (window.scrollY >= sec.offsetTop - 200) {
        current = sec.id;
      }
    });

    if (current) {
      setActiveSection(current);
    }
  };

  window.addEventListener('scroll', handleScroll);

  handleScroll();

  return () => {
    window.removeEventListener('scroll', handleScroll);
  };
}, []);

console.log(activeSection)

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
          <li><a href="#home" className={activeSection==="home" ? 'active' : ''} >Home</a></li>
          <li><a href="#programs" className={activeSection === 'programs' ? 'active' : ''}>Programs</a></li>
          <li><a href="#about" className={activeSection === 'about' ? 'active' : ''}>About Us</a></li>
          <li><a href="#pricing" className={activeSection === 'pricing' ? 'active' : ''}>Plans</a></li>
          <li><a href="#contact" className={activeSection === 'contact' ? 'active' : ''}>Contact</a></li>
          </ul>
      </div>
    </nav>
  </header>
)};

export default Navbar