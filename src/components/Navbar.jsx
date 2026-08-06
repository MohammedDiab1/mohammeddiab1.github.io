import React, { useState, useEffect } from 'react';
import { Link as ScrollLink } from 'react-scroll';
import { Link as RouterLink, useLocation } from 'react-router-dom';
import { FaBars, FaTimes } from 'react-icons/fa';
import './Navbar.css';

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const location = useLocation();

  const isHome = location.pathname === '/';

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 50) {
        setScrolled(true);
      } else {
        setScrolled(false);
      }
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const toggleMenu = () => setIsOpen(!isOpen);

  const navLinks = [
    { name: 'Home', to: 'home' },
    { name: 'About', to: 'about' },
    { name: 'Projects', to: 'projects' },
    { name: 'Contact', to: 'contact' },
  ];

  return (
    <nav className={`navbar ${scrolled ? 'scrolled' : ''}`}>
      <div className="container navbar-container">
        <div className="logo">
          {isHome ? (
            <ScrollLink to="home" smooth={true} duration={500}>
              M. Diab<span className="dot">.</span>
            </ScrollLink>
          ) : (
            <RouterLink to="/">
              M. Diab<span className="dot">.</span>
            </RouterLink>
          )}
        </div>

        <div className="mobile-icon" onClick={toggleMenu}>
          {isOpen ? <FaTimes /> : <FaBars />}
        </div>

        <ul className={`nav-menu ${isOpen ? 'active' : ''}`}>
          {navLinks.map((link, index) => (
            <li key={index} className="nav-item">
              {isHome ? (
                <ScrollLink
                  to={link.to}
                  smooth={true}
                  duration={500}
                  offset={-80}
                  onClick={() => setIsOpen(false)}
                >
                  {link.name}
                </ScrollLink>
              ) : (
                <RouterLink
                  to={`/#${link.to}`}
                  onClick={() => setIsOpen(false)}
                >
                  {link.name}
                </RouterLink>
              )}
            </li>
          ))}
          <li className="nav-item">
            <RouterLink to="/cv" onClick={() => setIsOpen(false)}>
              CV
            </RouterLink>
          </li>
          <li className="nav-item">
            <a href="https://scholar.google.com/citations?user=73pGUVsAAAAJ&hl=en" target="_blank" rel="noopener noreferrer">
              Publications
            </a>
          </li>
        </ul>
      </div>
    </nav>
  );
};

export default Navbar;
