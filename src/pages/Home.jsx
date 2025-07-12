import React, { useState, useEffect } from 'react';
import { 
  Menu, X, Github, Linkedin, Mail, Phone, MapPin, 
  ExternalLink, Calendar, Award, Code, Database, 
  Wrench, ChevronRight, Send, User, BookOpen, 
  Briefcase, Download, Eye, Star, ArrowRight, Play,
  Zap, Heart, Coffee, Sparkles,
} from 'lucide-react';
import { certifications, education, experience, navItems, personalInfo, projects, skills, stats } from '../assets/data';
import Navbar from '../components/Navbar';
import HeroSection from '../components/HeroSection';
import About from '../components/About';
import Skills from '../components/Skills';
import Projects from '../components/Projects';
import Education from '../components/Education';
import Experience from '../components/Experience';
import Certification from '../components/Certification';
import Footer from '../components/Footer';
import Contact from '../components/Contact';
import Skills1 from '../components/Skills1';


const Portfolio = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [activeSection, setActiveSection] = useState('home');
  const [formData, setFormData] = useState({ name: '', email: '', message: '' });

  // Mock data - replace with your actual data
  

  const scrollToSection = (sectionId) => {
    const element = document.getElementById(sectionId);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
      setIsMenuOpen(false);
    }
  };

  const handleFormSubmit = (e) => {
    e.preventDefault();
    console.log('Form submitted:', formData);
    alert('Thank you for your message! I\'ll get back to you soon.');
    setFormData({ name: '', email: '', message: '' });
  };

  const handleInputChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    });
  };

  // Intersection Observer for active section tracking
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
      {/* <Skills/> */}

      <Skills1/>
      
      {/* Projects Section */}
        <Projects/>

      {/* Education Section */}
     <Education/>

      {/* Experience Section */}
      {/* <Experience/> */}

t
      {/* Certifications Section */}
      {/* <Certification/> */}

      {/* Contact Section */}
      <Contact formData={formData} handleFormSubmit={handleFormSubmit} handleInputChange={handleInputChange}   />


      {/* Footer */}
      <Footer/>

    </div>
     </div>
  );
};

export default Portfolio;
