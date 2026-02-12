import { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import {
  Menu, X, ChevronDown, MapPin, Globe, TreePalm, Building2, Users, Heart,
  ShieldCheck, Anchor, Monitor, Car, Hotel,
  Mountain, Snowflake, Trees, Compass, Camera, Ticket, Gift, Mic,
  Flag, Landmark, Bird, Ship, Waves, Search, Binoculars, Phone, Mail,
  Tent, Utensils, GlassWater, Bike, Fish, Sun, Droplets, Wind, Palmtree
} from 'lucide-react';
import logo from '../assets/logo.png';
import './Header.css';

export default function Header() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [activeDropdown, setActiveDropdown] = useState(null);
  const [activeSubMenu, setActiveSubMenu] = useState(null);
  const [isScrolled, setIsScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 20) {
        setIsScrolled(true);
      } else {
        setIsScrolled(false);
      }
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  useEffect(() => {
    if (isMenuOpen && window.innerWidth <= 992) {
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = 'unset';
    }
    return () => {
      document.body.style.overflow = 'unset';
    };
  }, [isMenuOpen]);

  const toggleMenu = () => setIsMenuOpen(!isMenuOpen);

  const handleDropdown = (menu) => {
    setActiveDropdown(activeDropdown === menu ? null : menu);
    setActiveSubMenu(null); // Reset sub-menu when switching main dropdowns
  };

  const handleSubMenu = (e, menu) => {
    if (window.innerWidth <= 1200) {
      if (activeSubMenu !== menu) {
        e.preventDefault();
        e.stopPropagation();
        setActiveSubMenu(menu);
      } else {
        // If already open, allow navigation and close the mobile menu
        closeMenu();
      }
    }
  };

  const closeMenu = () => {
    setIsMenuOpen(false);
    setActiveDropdown(null);
    setActiveSubMenu(null);
  };

  const destinations = [
    {
      name: 'Goa',
      path: '/destinations/goa',
      icon: <TreePalm size={18} />,
      subItems: [
        { name: 'Bird Watching Tour', path: '/destinations/goa#bird-watching', icon: <Bird size={14} /> },
        { name: 'Diving', path: '/destinations/goa#diving', icon: <Waves size={14} /> },
        { name: 'Fishing Trip', path: '/destinations/goa#fishing-trip', icon: <Fish size={14} /> },
        { name: 'Deep Sea Cruising', path: '/destinations/goa#deep-sea-cruising', icon: <Ship size={14} /> },
        { name: 'Backwater Cruise', path: '/destinations/goa#backwater-cruise', icon: <Waves size={14} /> },
        { name: 'Dandeli Wildlife', path: '/destinations/goa#dandeli-wildlife', icon: <Binoculars size={14} /> },
        { name: 'Hampi Tour', path: '/destinations/goa#hampi-tour', icon: <Landmark size={14} /> },
        { name: 'Kayaking Expeditions', path: '/destinations/goa#kayaking-expeditions', icon: <Waves size={14} /> },
        { name: 'Dudhsagar Waterfalls', path: '/destinations/goa#dudhsagar-waterfalls', icon: <Waves size={14} /> },
        { name: 'Art & Architecture', path: '/destinations/goa#art-architecture', icon: <Building2 size={14} /> },
        { name: 'Hot Balloon Safari', path: '/destinations/goa#hot-balloon-safari', icon: <Wind size={14} /> },
        { name: 'Rome of Orient', path: '/destinations/goa#rome-orient', icon: <Landmark size={14} /> },
        { name: 'Heritage Trails', path: '/destinations/goa#heritage-trails', icon: <Landmark size={14} /> },
        { name: 'Temple & Spice Tour', path: '/destinations/goa#spice-plantation', icon: <Palmtree size={14} /> },
        { name: 'Cola Beach Tour', path: '/destinations/goa#cola-beach', icon: <Tent size={14} /> },
        { name: 'Anjuna Flea Market', path: '/destinations/goa#anjuna-flea-market', icon: <Ticket size={14} /> },
        { name: 'Secrets of Divar Island', path: '/destinations/goa#divar-island', icon: <Bike size={14} /> },
        { name: 'Culinary Delights', path: '/destinations/goa#culinary-delights', icon: <Utensils size={14} /> },
        { name: 'Essential Whiskey Experience', path: '/destinations/goa#whiskey-experience', icon: <GlassWater size={14} /> },
        { name: 'Island Fantasy', path: '/destinations/goa#island-fantasy', icon: <Sun size={14} /> },
        { name: 'Crocodile Dundee', path: '/destinations/goa#crocodile-dundee', icon: <Droplets size={14} /> },
        { name: 'White Water Rafting', path: '/destinations/goa#white-water-rafting', icon: <Waves size={14} /> },
        { name: 'The Goan Village Tour', path: '/destinations/goa#goan-village-tour', icon: <Users size={14} /> },
        { name: 'Feni & Food', path: '/destinations/goa#fenni-and-food', icon: <Utensils size={14} /> },
      ]
    },
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
    { name: 'Tour Operators Representation', path: '/services/tour-operators', icon: <Users size={18} /> },
    { name: 'Cruise Liner Ground Handling', path: '/services/cruise-handling', icon: <Ship size={18} /> },
    { name: 'DMC Service', path: '/services/DMC', icon: <Hotel size={18} /> },
    { name: 'Destination Weddings', path: '/services/weddings', icon: <Heart size={18} /> },
    { name: 'Car & Coach Rental', path: '/services/vehicle-rental', icon: <Car size={18} /> },
    { name: 'Worldwide Hotel Reservation', path: '/services/hotel-reservation', icon: <Building2 size={18} /> },
    {
      name: 'M.I.C.E Management',
      path: '/services/mice',
      icon: <Monitor size={18} />,
      subItems: [
        { name: 'Meetings', path: '/services/mice/meetings', icon: <Users size={14} /> },
        { name: 'Incentive Travel', path: '/services/mice/incentive-travel', icon: <Gift size={14} /> },
        { name: 'Conferences / Conventions', path: '/services/mice/conferences', icon: <Mic size={14} /> },
        { name: 'Events & Exhibitions', path: '/services/mice/exhibitions', icon: <Ticket size={14} /> },
      ]
    },
  ];

  return (
    <header className={`header ${isScrolled ? 'scrolled' : ''}`}>
      <div className="top-bar">
        <div className="container-wide">
          <div className="top-bar-content">
            <div className="top-bar-item">
              <MapPin size={14} />
              <span>Margao, Goa 403601, India</span>
            </div>
            <div className="top-bar-right">
              <a href="tel:+91 79721 56290" className="top-bar-item">
                <Phone size={14} />
                <span>+91 79721 56290</span>
              </a>
              <a href="mailto:info@travelsmith.in" className="top-bar-item">
                <Mail size={14} />
                <span>info@travelsmith.in</span>
              </a>
            </div>
          </div>
        </div>
      </div>
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
            <li><Link to="/" onClick={closeMenu}><TreePalm size={18} className="mobile-only-icon" /> <span>Home</span></Link></li>
            <li><Link to="/about" onClick={closeMenu}><Users size={18} className="mobile-only-icon" /> <span>About Us</span></Link></li>
            <li><Link to="/why-travelsmith" onClick={closeMenu}><ShieldCheck size={18} className="mobile-only-icon" /> <span>Why Travelsmith</span></Link></li>

            {/* Destinations Mega Menu */}
            <li className={`dropdown mega-dropdown ${activeDropdown === 'destinations' ? 'open' : ''}`}>
              <button
                type="button"
                className="dropdown-toggle"
                onClick={() => handleDropdown('destinations')}
              >
                <span>Destinations</span> <ChevronDown size={14} />
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
                        <div className={`sub-dropdown-menu ${dest.name === 'Goa' ? 'grid-2' : ''}`}>
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
                <span>Services</span> <ChevronDown size={14} />
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

            <li><Link to="/packages" onClick={closeMenu}><Ticket size={18} className="mobile-only-icon" /> <span>Packages</span></Link></li>
            <li><Link to="/testimonials" onClick={closeMenu}><Users size={18} className="mobile-only-icon" /> <span>Testimonials</span></Link></li>
            <li><Link to="/gallery" onClick={closeMenu}><Camera size={18} className="mobile-only-icon" /> <span>Gallery</span></Link></li>
            <li><Link to="/blog" onClick={closeMenu}><Globe size={18} className="mobile-only-icon" /> <span>Blog</span></Link></li>
            <li><Link to="/contact" onClick={closeMenu}><Phone size={18} className="mobile-only-icon" /> <span>Contact Us</span></Link></li>


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
      <a
        href="https://wa.me/917972156290?text=Hi%20TravelSmith%2C%20I'm%20interested%20in%20planning%20a%20trip."
        className="whatsapp-float"
        target="_blank"
        rel="noopener noreferrer"
        aria-label="Contact us on WhatsApp"
      >
        <svg viewBox="0 0 24 24" width="32" height="32" fill="currentColor"><path d="M12.031 6.172c-3.181 0-5.767 2.586-5.768 5.766-.001 1.298.38 2.27 1.019 3.287l-.582 2.128 2.182-.573c.978.58 1.911.928 3.145.929 3.178 0 5.767-2.587 5.768-5.766.001-3.187-2.575-5.771-5.764-5.771zm3.392 8.244c-.144.405-.837.774-1.17.824-.299.045-.677.063-1.092-.069-.252-.08-.575-.187-.988-.365-1.739-.751-2.874-2.502-2.961-2.617-.087-.116-.708-.94-.708-1.793s.448-1.273.607-1.446c.159-.173.346-.217.462-.217s.231.006.332.013c.101.007.238-.038.373.289.135.327.462 1.126.503 1.212.041.087.069.188.012.304-.058.116-.087.188-.173.289l-.26.304c-.087.101-.177.211-.077.382.1.171.444.733.95 1.185.65.581 1.2.762 1.373.847.173.085.274.07.376-.048.101-.118.433-.503.548-.677.116-.174.231-.144.389-.085.158.058 1.01.477 1.183.563.173.087.289.129.332.202.043.073.043.423-.101.827z" /></svg>
      </a>
    </header>
  );
}
