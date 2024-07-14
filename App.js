// import logo from './logo.svg';
// import './App.css';
import React from 'react';
import Navbar from './components/Landing/Navbar'
import Bot from './components/Landing/Bot';
import Home from './components/Landing/Home';
import About from './components/Landing/About';
import Projects from './components/Landing/Projects';
import Skills from './components/Landing/Skills';
import Hireme from './components/Landing/Hireme';
import Contact from './components/Landing/Contact';
import Footer from './components/Landing/Footer';

function App() {
  return (
    <>
      <Navbar />
      <Bot />
      <Home />
      <About />
      <Skills />
      <Hireme />
      <Projects />
      <Contact/>
      <Footer/>
    </>
  );
}

export default App;
