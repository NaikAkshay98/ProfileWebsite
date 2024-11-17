// src/App.js
import React from 'react';
import Header from './components/Header';
import Hero from './components/Hero';
import Projects from './components/Projects';
import Resume from './components/Resume';
import Footer from './components/Footer';
import './App.css';

function App() {
  return (
    <div className="App">
      <Header />

      <div className="content-container">
        <div className="main-content">
          <section id="hero">
            <Hero />
          </section>

          <section id="projects">
            <Projects />
          </section>

          <section id="resume">
            <Resume />
          </section>

          <Footer />
        </div>
      </div>
    </div>
  );
}

export default App;
