import React, { useState } from 'react';
import { FaLinkedin, FaGithub } from 'react-icons/fa'; // Only LinkedIn and GitHub icons

function Header() {
  
  const [isToggled, setIsToggled] = useState(false);

  // Function to toggle the button state
  const handleToggle = () => {
    setIsToggled(!isToggled);
  };

  return (
    <header className="header">
      <nav className="nav-container">
        {/* Logo section */}
        <h1 className="logo">CAREER QUEST</h1>

        {/* Social Media Links */}
        <ul className="social-icons">
          <li>
            <a href="https://www.linkedin.com/in/naikakshay/" target="_blank" rel="noopener noreferrer">
              <FaLinkedin className="icon" size={30} />
            </a>
          </li>
          <li>
            <a href="https://github.com/NaikAkshay98" target="_blank" rel="noopener noreferrer">
              <FaGithub className="icon" size={30} />
            </a>
          </li>
        </ul>

        {/* Toggle Button 

        <div className={`toggle-button-container ${isToggled ? 'toggled' : ''}`} onClick={handleToggle}>
          <div className="toggle-switch">
            <span>{isToggled ? 'Work Mode' : 'Fun Mode'}</span>
          </div>
        </div>
        */}
      </nav>
    </header>
  );
}

export default Header;
