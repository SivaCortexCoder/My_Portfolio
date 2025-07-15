import React, { useState, useEffect } from 'react';
import {navItems} from '../assets/data';
import Navbar from '../components/Navbar';
import HeroSection from '../components/HeroSection';
import About from '../components/About';
import Projects from '../components/Projects';
import Education from '../components/Education';
import Footer from '../components/Footer';
import Contact from '../components/Contact';
import Skills1 from '../components/Skills1';
import { toast } from 'react-toastify';


const Portfolio = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [activeSection, setActiveSection] = useState('home');
  const [formData, setFormData] = useState({ name: '', email: '', message: '' });


  

  const scrollToSection = (sectionId) => {
    const element = document.getElementById(sectionId);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
      setIsMenuOpen(false);
    }
  };

  const handleFormSubmit = async (e) => {
  e.preventDefault();

  try {
    const response = await fetch('https://getform.io/f/allzkwva', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify(formData),
    });

    if (response.ok) {
      toast.success('Message sent successfully!');
      setFormData({ name: '', email: '', message: '' });
    } else {
      toast.error('Failed to send message. Please try again.');
    }
  } catch (error) {
    console.error(error);
    toast.error('Something went wrong. Please try again.');
  }
};


  const handleInputChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    });
  };

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            setActiveSection(entry.target.id);
          }
        });
      },
      { threshold: 0.3 }
    );

    navItems.forEach(({ id }) => {
      const element = document.getElementById(id);
      if (element) observer.observe(element);
    });

    return () => observer.disconnect();
  }, []);

  return (
    <div>

   
    <div className="min-h-screen bg-gray-50">
      {/* Navigation */}
<Navbar activeSection={activeSection}  scrollToSection={scrollToSection} />

      {/* Hero Section */}
      <HeroSection  scrollToSection={ scrollToSection}/>
  

      {/* About Section */}
      <About/>

      {/* Skills Section */}
  

      <Skills1/>
      
      {/* Projects Section */}
        <Projects/>

      {/* Education Section */}
     <Education/>


      {/* Contact Section */}
      <Contact formData={formData} handleFormSubmit={handleFormSubmit} handleInputChange={handleInputChange}   />


      {/* Footer */}
      <Footer/>

    </div>
     </div>
  );
};

export default Portfolio;
