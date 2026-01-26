import { useState } from 'react';
import { Link } from 'react-router-dom';
import {
  Menu, X, ChevronDown, MapPin, Globe, TreePalm, Building2, Users, Heart,
  ShieldCheck, Anchor, Presentation, Car, Hotel,
  Mountain, Snowflake, Trees, Compass, Camera, Ticket, Gift, Mic,
  Flag, Landmark, Bird, Ship, Waves, Search, Binoculars
} from 'lucide-react';
import logo from '../assets/logo.png';
import './Header.css';

export default function Header() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [activeDropdown, setActiveDropdown] = useState(null);
  const [activeSubMenu, setActiveSubMenu] = useState(null);

  const toggleMenu = () => setIsMenuOpen(!isMenuOpen);

  const handleDropdown = (menu) => {
    setActiveDropdown(activeDropdown === menu ? null : menu);
    setActiveSubMenu(null); // Reset sub-menu when switching main dropdowns
  };

  const handleSubMenu = (e, menu) => {
    if (window.innerWidth <= 1200) {
      e.preventDefault();
      e.stopPropagation();
      setActiveSubMenu(activeSubMenu === menu ? null : menu);
    }
  };

  const closeMenu = () => {
    setIsMenuOpen(false);
    setActiveDropdown(null);
    setActiveSubMenu(null);
  };

  const destinations = [
    { name: 'Goa', path: '/destinations/goa', icon: <TreePalm size={18} /> },
    {
      name: 'India',
      path: '/destinations/india',
      icon: <MapPin size={18} />,
      subItems: [
        { name: 'Glorious Kashmir', path: '/destinations/india/kashmir', icon: <Mountain size={14} /> },
        { name: 'Scenic Himachal', path: '/destinations/india/himachal', icon: <Snowflake size={14} /> },
        { name: 'Splendour of Uttarakhand', path: '/destinations/india/splendour-uttarakhand', icon: <Trees size={14} /> },
        { name: 'Heritage of Uttarakhand', path: '/destinations/india/heritage-uttarakhand', icon: <Landmark size={14} /> },
        { name: 'Chardham Yatra', path: '/destinations/india/chardham-yatra', icon: <Compass size={14} /> },
        { name: 'Heartland of Rajasthan', path: '/destinations/india/rajasthan', icon: <Camera size={14} /> },
        { name: 'The Golden Quadrangle', path: '/destinations/india/golden-quadrangle', icon: <Flag size={14} /> },
        { name: 'Enchanting Nepal', path: '/destinations/india/enchanting-nepal', icon: <Mountain size={14} /> },
        { name: 'Royal Nepal', path: '/destinations/india/royal-nepal', icon: <Landmark size={14} /> },
        { name: 'Bhutan The Land of Dragon', path: '/destinations/india/bhutan', icon: <Waves size={14} /> },
      ]
    },
    {
      name: 'International',
      path: '/destinations/international',
      icon: <Globe size={18} />,
      subItems: [
        { name: 'Kenya & Tanzania Tour', path: '/destinations/international/kenya-tanzania', icon: <Bird size={14} /> },
        { name: 'South Africa Safari Tour', path: '/destinations/international/south-africa', icon: <Binoculars size={14} /> },
        { name: 'Mauritius', path: '/destinations/international/mauritius', icon: <TreePalm size={14} /> },
        { name: 'Greece', path: '/destinations/international/greece', icon: <Landmark size={14} /> },
        { name: 'North America', path: '/destinations/international/north-america', icon: <Flag size={14} /> },
        { name: 'South America', path: '/destinations/international/south-america', icon: <Trees size={14} /> },
        { name: 'Australia', path: '/destinations/international/australia', icon: <Waves size={14} /> },
      ]
    },
  ];

  const services = [
    { name: 'DMC Services', path: '/services/dmc', icon: <Building2 size={18} /> },
    { name: 'Tour Operators Representation', path: '/services/tour-operators', icon: <Users size={18} /> },
    { name: 'Cruise Liner Ground Handling', path: '/services/cruise-handling', icon: <Ship size={18} /> },
    {
      name: 'M.I.C.E Management',
      path: '/services/mice',
      icon: <Presentation size={18} />,
      subItems: [
        { name: 'Meetings', path: '/services/mice/meetings', icon: <Users size={14} /> },
        { name: 'Incentive Travel', path: '/services/mice/incentive-travel', icon: <Gift size={14} /> },
        { name: 'Conferences / Conventions', path: '/services/mice/conferences', icon: <Mic size={14} /> },
        { name: 'Events & Exhibitions', path: '/services/mice/exhibitions', icon: <Ticket size={14} /> },
      ]
    },
    { name: 'Destination Weddings', path: '/services/weddings', icon: <Heart size={18} /> },
    { name: 'Car & Coach Rental', path: '/services/vehicle-rental', icon: <Car size={18} /> },
    { name: 'Worldwide Hotel Reservation', path: '/services/hotel-reservation', icon: <Hotel size={18} /> },
    { name: 'Travel Support', path: '/services/support', icon: <ShieldCheck size={18} /> },
  ];

  return (
    <header className="header">
      <div className="container-wide">
        <nav className="nav">
          {/* Logo */}
          <Link to="/" className="logo" onClick={closeMenu}>
            <img
              src={logo}
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
                    <div
                      key={dest.name}
                      className={`mega-item-container ${activeSubMenu === dest.name ? 'open' : ''}`}
                    >
                      <Link
                        to={dest.path}
                        className="mega-item"
                        onClick={(e) => dest.subItems ? handleSubMenu(e, dest.name) : closeMenu()}
                      >
                        <span className="mega-icon">{dest.icon}</span>
                        <span>{dest.name}</span>
                        {dest.subItems && <ChevronDown size={14} className="sub-menu-arrow" />}
                      </Link>

                      {dest.subItems && (
                        <div className="sub-dropdown-menu">
                          {dest.subItems.map((sub) => (
                            <Link
                              key={sub.name}
                              to={sub.path}
                              className="sub-dropdown-item"
                              onClick={closeMenu}
                            >
                              <span className="sub-mega-icon">{sub.icon}</span>
                              <span>{sub.name}</span>
                            </Link>
                          ))}
                        </div>
                      )}
                    </div>
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
                    <div
                      key={service.name}
                      className={`mega-item-container ${activeSubMenu === service.name ? 'open' : ''}`}
                    >
                      <Link
                        to={service.path}
                        className="mega-item"
                        onClick={(e) => service.subItems ? handleSubMenu(e, service.name) : closeMenu()}
                      >
                        <span className="mega-icon">{service.icon}</span>
                        <span>{service.name}</span>
                        {service.subItems && <ChevronDown size={14} className="sub-menu-arrow" />}
                      </Link>

                      {service.subItems && (
                        <div className="sub-dropdown-menu">
                          {service.subItems.map((sub) => (
                            <Link
                              key={sub.name}
                              to={sub.path}
                              className="sub-dropdown-item"
                              onClick={closeMenu}
                            >
                              <span className="sub-mega-icon">{sub.icon}</span>
                              <span>{sub.name}</span>
                            </Link>
                          ))}
                        </div>
                      )}
                    </div>
                  ))}
                </div>
              </div>
            </li>

            <li><Link to="/packages" onClick={closeMenu}>Packages</Link></li>
            <li><Link to="/testimonials" onClick={closeMenu}>Testimonials</Link></li>
            <li><Link to="/gallery" onClick={closeMenu}>Gallery</Link></li>
            <li><Link to="/blog" onClick={closeMenu}>Blog</Link></li>
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
