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
  FaClock,
  FaMobile
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
    { icon: <FaBuilding />, title: "Commercial Electrical", description: "Complete electrical solutions for commercial buildings and offices" },
    { icon: <FaIndustry />, title: "Industrial Electrical", description: "Heavy electrical systems for industrial facilities and factories" },
    { icon: <FaRoad />, title: "Electrical Infrastructure", description: "Power distribution, transformers, and electrical infrastructure" },
    { icon: <FaHardHat />, title: "Maintenance & Repair", description: "Electrical maintenance, repairs, and emergency services" }
  ];

  const projects = [
    { name: "OHE Work for Indian Railways", type: "Railway Infrastructure", image: process.env.PUBLIC_URL + "/Project.jpeg" }
  ];

  const stats = [
    { number: "3+", label: "Years Experience" },
    { number: "10+", label: "Team Members" },
    { number: "100%", label: "Client Satisfaction" }
  ];

  const contactInfo = [
    {
      icon: <FaPhone />,
      title: "Phone",
      details: "+91 96600 22114",
      details2: "+91 98878 54588",
      subtitle: "Call us anytime"
    },
    {
      icon: <FaEnvelope />,
      title: "Email",
      details: "mysdconstructionwork@gmail.com",
      subtitle: "Send us a message"
    },
    {
      icon: <FaMapMarkerAlt />,
      title: "Office",
      details: "1440/26, Ambay Shree Colony, Vigyan Nagar, Adarsh Nagar, Ajmer, Rajasthan, 305001",
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
            <img src={process.env.PUBLIC_URL + "/logo.png"} alt="SD Construction Works Logo" className="logo-icon" />
            <img src={process.env.PUBLIC_URL + "/text.png"} alt="SD Construction Works Text" className="logo-text" />
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
      </nav>

      <AnimatePresence>
        {isMenuOpen && (
          <motion.div className="mobile-menu">
            <a href="#home" onClick={toggleMenu}>Home</a>
            <a href="#about" onClick={toggleMenu}>About</a>
            <a href="#services" onClick={toggleMenu}>Services</a>
            <a href="#projects" onClick={toggleMenu}>Projects</a>
            <a href="#contact" onClick={toggleMenu}>Contact</a>
          </motion.div>
        )}
      </AnimatePresence>

      {/* Hero Section */}
      <section id="home" className="hero">
        <div className="hero-content">
          <motion.h1 
            initial={{ opacity: 0, y: 50 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
          >
            Powering Your Future with Reliable Electrical Solutions
          </motion.h1>
          <motion.p 
            initial={{ opacity: 0, y: 50 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
          >
            We are a premier construction and electrical company, 
            delivering excellence in commercial, industrial, and residential projects. 
            With years of expertise and a commitment to innovation, we provide cutting-edge 
            electrical solutions that power your success with unmatched reliability and quality.
          </motion.p>
          <motion.div 
            className="hero-buttons"
            initial={{ opacity: 0, y: 50 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.4 }}
          >
            <a href="#projects">
              <button className="btn-primary">Our Projects</button>
            </a>
            <a href="#contact">
              <button className="btn-secondary">Get Quote</button>
            </a>
          </motion.div>
        </div>
        <div className="hero-image">
          <img src="https://images.unsplash.com/photo-1621905251189-08b45d6a269e?w=800" alt="Electrical Work" />
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
              whileHover={{ y: -10, scale: 1.05 }}
            >
              <div className="stat-icon">
                {index === 0 && <FaClock />}
                {index === 1 && <FaUsers />}
                {index === 2 && <FaStar />}
              </div>
              <div className="stat-content">
                <h3>{stat.number}</h3>
                <p>{stat.label}</p>
              </div>
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
            <h2>About SD Construction Work</h2>
            <p>Delivering reliable electrical solutions with safety and innovation</p>
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
                To provide exceptional electrical services that power businesses and homes 
                with innovative, safe, and energy-efficient solutions while maintaining 
                the highest standards of quality and customer satisfaction.
              </p>
              
              <h3>Our Values</h3>
              <ul>
                <li><FaCheckCircle /> Safety First - Zero electrical accidents, every project</li>
                <li><FaCheckCircle /> Quality Excellence - Superior electrical workmanship</li>
                <li><FaCheckCircle /> Innovation - Latest electrical technologies and methods</li>
                <li><FaCheckCircle /> Integrity - Honest, transparent, and ethical practices</li>
                <li><FaCheckCircle /> Energy Efficiency - Sustainable electrical solutions</li>
              </ul>
            </motion.div>
            
            <motion.div 
              className="about-image"
              initial={{ opacity: 0, x: 50 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8 }}
              viewport={{ once: true }}
            >
              <img src="https://images.unsplash.com/photo-1521791136064-7986c2920216?w=600" alt="Electrical Team" />
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
            <h2>SD Construction Work Services</h2>
            <p>Comprehensive electrical solutions for every need</p>
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
                  <p>Completed in 2025</p>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Team Section */}
      <section className="testimonials">
        <div className="container">
          <motion.div 
            className="section-header"
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
          >
            <h2>Meet Our Team</h2>
            <p>Meet the experts behind SD Construction Works</p>
          </motion.div>
          
          <div className="testimonials-grid">
            <motion.div 
              className="testimonial-card"
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5 }}
              viewport={{ once: true }}
            >
              <h3>Sushant Saxena</h3>
              <span className="team-role">Founder</span>
              <p>Mr. Sushant Saxena is an accomplished professional with diverse experience spanning the engineering industries. Known for his hands-on approach to project execution and cross-disciplinary coordination, he has contributed to the successful delivery of infrastructure, construction, and utility projects across various sectors.</p>
              <div className="team-expertise">
                <span>Electrical Engineering</span>
                <span>Project Management</span>
                <span>Safety Standards</span>
                <span>Electrical Design</span>
              </div>
            </motion.div>
            
            <motion.div 
              className="testimonial-card"
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.2 }}
              viewport={{ once: true }}
            >
              <h3>Dinesh Saxena</h3>
              <span className="team-role">Co-Founder</span>
              <p>Mr. Dinesh Saxena's objective is to remain dedicated to building and developing diverse, capable teams that can deliver effective, forward-thinking solutions to complex engineering and operational challenges faced by organizations and communities.</p>
              <div className="team-expertise">
                <span>Electrical Design</span>
                <span>Project Management</span>
                <span>Safety Standards</span>
              </div>
            </motion.div>
            
            <motion.div 
              className="testimonial-card"
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.4 }}
              viewport={{ once: true }}
            >
              <h3>Sahil Aggarwal</h3>
              <span className="team-role">Vice President</span>
              <p>As our Vice President with a strong background in Computer Science, Sahil brings cutting-edge technical expertise to SD Construction Works. His deep understanding of software systems, automation, and digital solutions enables us to implement innovative electrical technologies and smart building solutions.</p>
              <div className="team-expertise">
                <span>Computer Science</span>
                <span>Technical Innovation</span>
                <span>Smart Systems</span>
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
            <p>Ready to start your next electrical project?</p>
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
                  <p className="contact-main">{info.details2}</p>
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
            <p>Stay connected with us on LinkedIn</p>
            <div className="social-links">
              <a href="https://www.linkedin.com/company/sd-construction-work" target="_blank" rel="noopener noreferrer" className="social-link">
                <FaLinkedin />
                <span>LinkedIn</span>
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
                <img src={process.env.PUBLIC_URL + "/text.png"} alt="SD Construction Works Text" className="logo-text" />
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
              <a href="#services">Commercial Electrical</a>
              <a href="#services">Industrial Electrical</a>
              <a href="#services">Electrical Infrastructure</a>
              <a href="#services">Maintenance & Repair</a>
            </div>
            
            <div className="footer-section">
              <h4>Contact Info</h4>
              <div>
                <p><FaPhone /> +91 96600 22114</p>
                <p><FaMobile /> +91 98878 54588</p>
              </div>
              <p><FaEnvelope /> mysdconstructionwork@gmail.com</p>
              <p><FaMapMarkerAlt /> 1440/26, Ambay Shree Colony, Vigyan Nagar, Adarsh Nagar, Ajmer, Rajasthan, 305001</p>
            </div>
          </div>
          
          <div className="footer-bottom">
            <p>&copy; 2025 SD Construction Works. All rights reserved.</p>
          </div>
        </div>
      </footer>
    </div>
  );
}

export default App;
