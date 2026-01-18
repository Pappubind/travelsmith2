import { useState } from 'react';
import { Link } from 'react-router-dom';
import { Menu, X, ChevronDown, MapPin, Globe, TreePalm, Building2, Users, Heart, ShieldCheck } from 'lucide-react';
import './Header.css';

export default function Header() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [activeDropdown, setActiveDropdown] = useState(null);

  const toggleMenu = () => setIsMenuOpen(!isMenuOpen);

  const handleDropdown = (menu) => {
    setActiveDropdown(activeDropdown === menu ? null : menu);
  };

  const closeMenu = () => {
    setIsMenuOpen(false);
    setActiveDropdown(null);
  };

  const destinations = [
    { name: 'Goa', path: '/destinations/goa', icon: <TreePalm size={18} /> },
    { name: 'India', path: '/destinations/india', icon: <MapPin size={18} /> },
    { name: 'International', path: '/destinations/international', icon: <Globe size={18} /> },
  ];

  const services = [
    { name: 'DMC Services', path: '/services/dmc', icon: <Building2 size={18} /> },
    { name: 'M.I.C.E', path: '/services/mice', icon: <Users size={18} /> },
    { name: 'Weddings', path: '/services/weddings', icon: <Heart size={18} /> },
    { name: 'Travel Support', path: '/services/support', icon: <ShieldCheck size={18} /> },
  ];

  return (
    <header className="header">
      <div className="container-wide">
        <nav className="nav">
          {/* Logo */}
          <Link to="/" className="logo" onClick={closeMenu}>
            <img
              src="/images/logo.png"
              alt="TravelSmith DMC"
              className="logo-image"
            />
          </Link>

          {/* Navigation Menu */}
          <ul className={`nav-menu ${isMenuOpen ? 'active' : ''}`}>
            <li><Link to="/" onClick={closeMenu}>Home</Link></li>
            <li><Link to="/about" onClick={closeMenu}>About Us</Link></li>

            {/* Destinations Mega Menu */}
            <li className={`dropdown mega-dropdown ${activeDropdown === 'destinations' ? 'open' : ''}`}>
              <button
                type="button"
                className="dropdown-toggle"
                onClick={() => handleDropdown('destinations')}
              >
                Destinations <ChevronDown size={14} />
              </button>
              <div className="mega-menu">
                <div className="mega-menu-grid">
                  {destinations.map((dest) => (
                    <Link key={dest.name} to={dest.path} className="mega-item" onClick={closeMenu}>
                      <span className="mega-icon">{dest.icon}</span>
                      <span>{dest.name}</span>
                    </Link>
                  ))}
                </div>
              </div>
            </li>

            {/* Services Mega Menu */}
            <li className={`dropdown mega-dropdown ${activeDropdown === 'services' ? 'open' : ''}`}>
              <button
                type="button"
                className="dropdown-toggle"
                onClick={() => handleDropdown('services')}
              >
                Services <ChevronDown size={14} />
              </button>
              <div className="mega-menu">
                <div className="mega-menu-grid">
                  {services.map((service) => (
                    <Link key={service.name} to={service.path} className="mega-item" onClick={closeMenu}>
                      <span className="mega-icon">{service.icon}</span>
                      <span>{service.name}</span>
                    </Link>
                  ))}
                </div>
              </div>
            </li>

            <li><Link to="/packages" onClick={closeMenu}>Packages</Link></li>
            <li><Link to="/testimonials" onClick={closeMenu}>Testimonials</Link></li>
            <li><Link to="/gallery" onClick={closeMenu}>Gallery</Link></li>
            <li><Link to="/contact" onClick={closeMenu}>Contact Us</Link></li>

            {/* Mobile CTA */}
            <li className="mobile-cta">
              <Link to="/contact" className="btn btn-primary" onClick={closeMenu}>
                Plan Your Journey
              </Link>
            </li>
          </ul>

          {/* Desktop CTA Button */}
          <Link to="/contact" className="btn btn-primary desktop-cta">
            Plan Your Journey
          </Link>

          {/* Mobile Menu Toggle */}
          <button className="menu-toggle" onClick={toggleMenu} aria-label="Toggle menu">
            {isMenuOpen ? <X size={24} /> : <Menu size={24} />}
          </button>
        </nav>
      </div>
    </header>
  );
}
