import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { 
  FaBars, 
  FaTimes, 
  FaHardHat, 
  FaBuilding, 
  FaIndustry, 
  FaRoad, 
  FaUsers, 
  FaPhone, 
  FaEnvelope, 
  FaMapMarkerAlt,
  FaArrowRight,
  FaCheckCircle,
  FaStar,
  FaLinkedin,
  FaTwitter,
  FaFacebook,
  FaClock
} from 'react-icons/fa';
import './App.css';

function App() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const toggleMenu = () => setIsMenuOpen(!isMenuOpen);

  const services = [
    { icon: <FaBuilding />, title: "Commercial Construction", description: "State-of-the-art commercial buildings and office complexes" },
    { icon: <FaIndustry />, title: "Industrial Projects", description: "Heavy industrial facilities and manufacturing plants" },
    { icon: <FaRoad />, title: "Infrastructure Development", description: "Roads, bridges, and transportation systems" },
    { icon: <FaHardHat />, title: "Renovation & Maintenance", description: "Building renovations and ongoing maintenance services" }
  ];

  const projects = [
    { name: "Downtown Business Center", type: "Commercial", image: "https://images.unsplash.com/photo-1486406146926-c627a92ad1ab?w=400" },
    { name: "Industrial Manufacturing Plant", type: "Industrial", image: "https://images.unsplash.com/photo-1581091226825-a6a2a5aee158?w=400" },
    { name: "Highway Bridge Project", type: "Infrastructure", image: "https://images.unsplash.com/photo-1545558014-8692077e9b5c?w=400" },
    { name: "Residential Complex", type: "Residential", image: "https://images.unsplash.com/photo-1545324418-cc1a3fa10c00?w=400" }
  ];

  const stats = [
    { number: "500+", label: "Projects Completed" },
    { number: "25+", label: "Years Experience" },
    { number: "150+", label: "Team Members" },
    { number: "98%", label: "Client Satisfaction" }
  ];

  const contactInfo = [
    {
      icon: <FaPhone />,
      title: "Phone",
      details: "+1 (555) 123-4567",
      subtitle: "Call us anytime"
    },
    {
      icon: <FaEnvelope />,
      title: "Email",
      details: "info@sdconstructionworks.com",
      subtitle: "Send us a message"
    },
    {
      icon: <FaMapMarkerAlt />,
      title: "Office",
      details: "123 Construction Ave, Building City, BC 12345",
      subtitle: "Visit our headquarters"
    },
    {
      icon: <FaClock />,
      title: "Business Hours",
      details: "Mon - Fri: 8:00 AM - 6:00 PM",
      subtitle: "Saturday: 9:00 AM - 3:00 PM"
    }
  ];

  return (
    <div className="App">
      {/* Navigation */}
      <nav className={`navbar ${isScrolled ? 'scrolled' : ''}`}>
        <div className="nav-container">
          <motion.div 
            className="nav-logo"
            initial={{ opacity: 0, x: -50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.5 }}
          >
            <img src="/logo.png" alt="SD Construction Works Logo" className="logo-icon" />
            <img src="/text.png" alt="SD Construction Works Text" className="logo-text" />
          </motion.div>
          
          <div className="nav-menu">
            <a href="#home">Home</a>
            <a href="#about">About</a>
            <a href="#services">Services</a>
            <a href="#projects">Projects</a>
            <a href="#contact">Contact</a>
          </div>
          
          <div className="nav-toggle" onClick={toggleMenu}>
            {isMenuOpen ? <FaTimes /> : <FaBars />}
          </div>
        </div>
        
        <AnimatePresence>
          {isMenuOpen && (
            <motion.div 
              className="mobile-menu"
              initial={{ opacity: 0, height: 0 }}
              animate={{ opacity: 1, height: 'auto' }}
              exit={{ opacity: 0, height: 0 }}
              transition={{ duration: 0.3 }}
            >
              <a href="#home" onClick={toggleMenu}>Home</a>
              <a href="#about" onClick={toggleMenu}>About</a>
              <a href="#services" onClick={toggleMenu}>Services</a>
              <a href="#projects" onClick={toggleMenu}>Projects</a>
              <a href="#contact" onClick={toggleMenu}>Contact</a>
            </motion.div>
          )}
        </AnimatePresence>
      </nav>

      {/* Hero Section */}
      <section id="home" className="hero">
        <div className="hero-content">
          <motion.h1 
            initial={{ opacity: 0, y: 50 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
          >
            Building Tomorrow's Infrastructure Today
          </motion.h1>
          <motion.p 
            initial={{ opacity: 0, y: 50 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
          >
            SD Construction Works is a leading construction company specializing in commercial, 
            industrial, and infrastructure projects. We deliver excellence through innovation, 
            quality, and unwavering commitment to safety.
          </motion.p>
          <motion.div 
            className="hero-buttons"
            initial={{ opacity: 0, y: 50 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.4 }}
          >
            <button className="btn-primary">Our Projects</button>
            <button className="btn-secondary">Get Quote</button>
          </motion.div>
        </div>
        <div className="hero-image">
          <img src="https://images.unsplash.com/photo-1541888946425-d81bb19240f5?w=800" alt="Construction Site" />
        </div>
      </section>

      {/* Stats Section */}
      <section className="stats">
        <div className="stats-container">
          {stats.map((stat, index) => (
            <motion.div 
              key={index}
              className="stat-item"
              initial={{ opacity: 0, scale: 0.5 }}
              whileInView={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              viewport={{ once: true }}
            >
              <h3>{stat.number}</h3>
              <p>{stat.label}</p>
            </motion.div>
          ))}
        </div>
      </section>

      {/* About Section */}
      <section id="about" className="about">
        <div className="container">
          <motion.div 
            className="section-header"
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
          >
            <h2>About SD Construction Works</h2>
            <p>Delivering excellence in construction for over 25 years</p>
          </motion.div>
          
          <div className="about-content">
            <motion.div 
              className="about-text"
              initial={{ opacity: 0, x: -50 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8 }}
              viewport={{ once: true }}
            >
              <h3>Our Mission</h3>
              <p>
                To be the most trusted construction partner, delivering innovative solutions 
                that exceed expectations while maintaining the highest standards of safety, 
                quality, and environmental responsibility.
              </p>
              
              <h3>Our Values</h3>
              <ul>
                <li><FaCheckCircle /> Safety First - Zero accidents, every day</li>
                <li><FaCheckCircle /> Quality Excellence - Superior craftsmanship in every project</li>
                <li><FaCheckCircle /> Innovation - Embracing new technologies and methods</li>
                <li><FaCheckCircle /> Integrity - Honest, transparent, and ethical business practices</li>
                <li><FaCheckCircle /> Sustainability - Building for future generations</li>
              </ul>
            </motion.div>
            
            <motion.div 
              className="about-image"
              initial={{ opacity: 0, x: 50 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8 }}
              viewport={{ once: true }}
            >
              <img src="https://images.unsplash.com/photo-1504307651254-35680f356dfd?w=600" alt="Construction Team" />
            </motion.div>
          </div>
        </div>
      </section>

      {/* Services Section */}
      <section id="services" className="services">
        <div className="container">
          <motion.div 
            className="section-header"
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
          >
            <h2>Our Services</h2>
            <p>Comprehensive construction solutions for every need</p>
          </motion.div>
          
          <div className="services-grid">
            {services.map((service, index) => (
              <motion.div 
                key={index}
                className="service-card"
                initial={{ opacity: 0, y: 50 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                viewport={{ once: true }}
                whileHover={{ y: -10 }}
              >
                <div className="service-icon">{service.icon}</div>
                <h3>{service.title}</h3>
                <p>{service.description}</p>
                <button className="btn-outline">
                  Learn More <FaArrowRight />
                </button>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Projects Section */}
      <section id="projects" className="projects">
        <div className="container">
          <motion.div 
            className="section-header"
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
          >
            <h2>Featured Projects</h2>
            <p>Showcasing our latest and most impressive work</p>
          </motion.div>
          
          <div className="projects-grid">
            {projects.map((project, index) => (
              <motion.div 
                key={index}
                className="project-card"
                initial={{ opacity: 0, scale: 0.8 }}
                whileInView={{ opacity: 1, scale: 1 }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                viewport={{ once: true }}
                whileHover={{ scale: 1.05 }}
              >
                <div className="project-image">
                  <img src={project.image} alt={project.name} />
                  <div className="project-overlay">
                    <span className="project-type">{project.type}</span>
                  </div>
                </div>
                <div className="project-info">
                  <h3>{project.name}</h3>
                  <p>Completed in 2024</p>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Testimonials Section */}
      <section className="testimonials">
        <div className="container">
          <motion.div 
            className="section-header"
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
          >
            <h2>What Our Clients Say</h2>
            <p>Trusted by leading companies worldwide</p>
          </motion.div>
          
          <div className="testimonials-grid">
            <motion.div 
              className="testimonial-card"
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5 }}
              viewport={{ once: true }}
            >
              <div className="stars">
                <FaStar /><FaStar /><FaStar /><FaStar /><FaStar />
              </div>
              <p>"SD Construction Works delivered our project on time and under budget. Their attention to detail and commitment to quality is unmatched."</p>
              <div className="testimonial-author">
                <h4>John Smith</h4>
                <span>CEO, TechCorp Industries</span>
              </div>
            </motion.div>
            
            <motion.div 
              className="testimonial-card"
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.2 }}
              viewport={{ once: true }}
            >
              <div className="stars">
                <FaStar /><FaStar /><FaStar /><FaStar /><FaStar />
              </div>
              <p>"The team at SD Construction Works is professional, skilled, and reliable. They transformed our vision into reality with exceptional results."</p>
              <div className="testimonial-author">
                <h4>Sarah Johnson</h4>
                <span>Project Manager, Global Development</span>
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Contact Section */}
      <section id="contact" className="contact">
        <div className="container">
          <motion.div 
            className="section-header"
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
          >
            <h2>Get In Touch</h2>
            <p>Ready to start your next construction project?</p>
          </motion.div>
          
          <div className="contact-grid">
            {contactInfo.map((info, index) => (
              <motion.div 
                key={index}
                className="contact-card"
                initial={{ opacity: 0, y: 50 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                viewport={{ once: true }}
                whileHover={{ y: -5 }}
              >
                <div className="contact-icon">
                  {info.icon}
                </div>
                <div className="contact-details">
                  <h3>{info.title}</h3>
                  <p className="contact-main">{info.details}</p>
                  <p className="contact-subtitle">{info.subtitle}</p>
                </div>
              </motion.div>
            ))}
          </div>
          
          <motion.div 
            className="social-section"
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.4 }}
            viewport={{ once: true }}
          >
            <h3>Follow Us</h3>
            <p>Stay connected with us on social media</p>
            <div className="social-links">
              <a href="https://www.linkedin.com/company/sd-construction-work" target="_blank" rel="noopener noreferrer" className="social-link">
                <FaLinkedin />
                <span>LinkedIn</span>
              </a>
              <a href="#" className="social-link">
                <FaTwitter />
                <span>Twitter</span>
              </a>
              <a href="#" className="social-link">
                <FaFacebook />
                <span>Facebook</span>
              </a>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Footer */}
      <footer className="footer">
        <div className="container">
          <div className="footer-content">
            <div className="footer-section">
              <div className="footer-logo">
                <img src="/text.png" alt="SD Construction Works Text" className="logo-text" />
              </div>
              <p>Building excellence, delivering results, and creating lasting value for our clients and communities.</p>
            </div>
            
            <div className="footer-section">
              <h4>Quick Links</h4>
              <a href="#home">Home</a>
              <a href="#about">About</a>
              <a href="#services">Services</a>
              <a href="#projects">Projects</a>
              <a href="#contact">Contact</a>
            </div>
            
            <div className="footer-section">
              <h4>Services</h4>
              <a href="#services">Commercial Construction</a>
              <a href="#services">Industrial Projects</a>
              <a href="#services">Infrastructure Development</a>
              <a href="#services">Renovation & Maintenance</a>
            </div>
            
            <div className="footer-section">
              <h4>Contact Info</h4>
              <p><FaPhone /> +1 (555) 123-4567</p>
              <p><FaEnvelope /> info@sdconstructionworks.com</p>
              <p><FaMapMarkerAlt /> 123 Construction Ave, Building City, BC 12345</p>
            </div>
          </div>
          
          <div className="footer-bottom">
            <p>&copy; 2024 SD Construction Works. All rights reserved.</p>
          </div>
        </div>
      </footer>
    </div>
  );
}

export default App;
