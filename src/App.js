import React from 'react';
import CustomNavbar from './components/Navbar';
import FeaturedSection from './components/FeaturedSection';
import About from './components/About';
import Projects from './components/Projects';
import Skills from './components/Skills';
import Contact from './components/Contact';
import Footer from './components/Footer';
import './styles/style.css'; // Global styles
import 'bootstrap/dist/css/bootstrap.min.css';
import "bootstrap/dist/js/bootstrap.bundle.min";
import 'bootstrap-icons/font/bootstrap-icons.css';
<link href="https://cdn.jsdelivr.net/npm/bootstrap-icons/font/bootstrap-icons.css" rel="stylesheet"></link>
const App = () => {
  return (
    <div className="App">
      <CustomNavbar />

      
      <FeaturedSection />
      <About />
      <Projects />
      <Skills />
      <Contact />
      <Footer />
      {/* Other sections */}
    </div>
  );
};

export default App;
