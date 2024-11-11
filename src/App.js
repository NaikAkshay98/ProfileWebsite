// src/App.js
import React, { useEffect, useState } from 'react';
import Header from './components/Header';
import Hero from './components/Hero';


import Projects from './components/Projects';


import Footer from './components/Footer';
import './App.css';

function App() {
  const [activeSection, setActiveSection] = useState('');

  // Scroll handler to update the active section based on scroll position
  useEffect(() => {
    const handleScroll = () => {
      const sections = document.querySelectorAll('section');
      let currentSection = '';

      sections.forEach((section) => {
        const sectionTop = section.offsetTop;
        if (window.scrollY >= sectionTop - 60) {
          currentSection = section.getAttribute('id');
        }
      });

      setActiveSection(currentSection);
    };

    window.addEventListener('scroll', handleScroll);

    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);

  return (
    <div className="App">
      <Header />

      {/* Sidebar Navigation */}
      <div className="content-container">
        <div className="main-content">
          <section id="hero">
            <Hero />
          </section>
{/*
          <section id="skills">
            <Skills />
          </section>

          <section id="experience">
            <Experience />
          </section>
 */}
          <section id="projects">
            <Projects />
          </section>

          

          
          <Footer />
        </div>

        {/* Scrollable Sidebar */}
        <div className="scroll-sidebar">
          <ul className="scroll-nav">
            <li>
              <a href="#hero" className={activeSection === 'hero' ? 'active' : ''}>
                About <span>01</span>
              </a>
            </li>
            
            
            <li>
              <a href="#projects" className={activeSection === 'projects' ? 'active' : ''}>
                Projects <span>02</span>
              </a>
            </li>
            
            
          </ul>
        </div>
      </div>
    </div>
  );
}

export default App;
