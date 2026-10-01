
import './navbar.css'

function Navbar() {
  
  const menuBtn = document.getElementById('menuBtn');
  const navLinks = document.getElementById('navLinks');
  const links = navLinks.querySelectorAll('a');

  menuBtn.addEventListener('click', () => {
    navLinks.classList.toggle("active");
    if(navLinks.classList.contains("active")){
      menuBtn.innerHTML = 'X';
      menuBtn.setAttribute("aria-expanded", "true")
    }else{
      menuBtn.innerHTML = "M";
      menuBtn.setAttribute("aria-expanded", "false")
    }
  });

  links.forEach(link => {
    link.addEventListener("click", () =>{
      navLinks.classList.remove("active");
      menuBtn.innerHTML = "M"
      menuBtn.setAttribute("aria-expanded", "false");
    })
  })

  return (
    <header className="navbar">
      <nav>
        <div className="nav-container">
          <a href="#" className="logo"><img src="public\imgs\gymLogo2.png" alt="logo" className='logo-img' />Gym&Fitness</a>
          <button className='menu-btn' id='menuBtn'><i className="fa-solid fa-bars"></i></button> 
          <ul className="nav-links" id='navLinks'>
            <li><a href="#home" >Home</a></li>
            <li><a href="#programs">Programs</a></li>
            <li><a href="#about">About Us</a></li>
            <li><a href="#pricing">Plans</a></li>
            <li><a href="#contact">Contact</a></li>
          </ul>
        </div>
      </nav>
    </header>
  )
}

export default Navbar