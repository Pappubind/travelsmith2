import { Link } from 'react-router-dom';
import { Phone, Mail, MapPin, Facebook, Twitter, Instagram, Linkedin } from 'lucide-react';
import logo from '../assets/logo.png';
import './Footer.css';

export default function Footer() {
    const currentYear = new Date().getFullYear();

    return (
        <footer className="footer">
            <div className="container">
                <div className="footer-grid">
                    {/* Company Description */}
                    <div className="footer-section">
                        <Link to="/" className="footer-logo-link">
                            <img src={logo} alt="TravelSmith Logo" className="footer-logo-img" style={{ maxHeight: '130px', marginBottom: '1.5rem', width: 'auto' }} />
                        </Link>
                        <p className="footer-description">
                            Your trusted Destination Management Company crafting safe, personalized,
                            and premium travel experiences across Goa, India, and international destinations since 2012.
                        </p>
                    </div>

                    {/* Recognition Logos */}
                    <div className="footer-section">
                        <h4 className="footer-title">Recognized By</h4>
                        <div className="recognition-logos">
                            <a href="https://tourism.gov.in/" target="_blank" rel="noopener noreferrer">
                                <img src="/images/Ministry_of_Tourism.png" alt="Ministry of Tourism govt of India" title="Ministry of Tourism govt of India" className="footer-recognition-img" />
                            </a>
                            <a href="https://iato.in/" target="_blank" rel="noopener noreferrer">
                                <img src="/images/IATO.png" alt="IATO" title="IATO" className="footer-recognition-img" />
                            </a>
                            <a href="https://www.ttag.in/" target="_blank" rel="noopener noreferrer">
                                <img src="/images/TTAG.png" alt="TTAG" title="TTAG" className="footer-recognition-img" />
                            </a>
                        </div>
                    </div>

                    {/* Quick Links */}
                    <div className="footer-section">
                        <h4 className="footer-title">Quick Links</h4>
                        <ul className="footer-links">
                            <li><Link to="/">Home</Link></li>
                            <li><Link to="/about">About Us</Link></li>
                            <li><Link to="/why-travelsmith">Why Travelsmith</Link></li>
                            <li><Link to="/packages">Packages</Link></li>
                            <li><Link to="/testimonials">Testimonials</Link></li>
                            <li><Link to="/gallery">Gallery</Link></li>
                            <li><Link to="/contact">Contact Us</Link></li>
                        </ul>
                    </div>

                    {/* Destinations */}
                    <div className="footer-section">
                        <h4 className="footer-title">Destinations</h4>
                        <ul className="footer-links">
                            <li><Link to="/destinations/goa">Goa</Link></li>
                            <li><Link to="/destinations/india">India Premium Tours</Link></li>
                            <li><Link to="/destinations/international">International</Link></li>
                        </ul>
                    </div>

                    {/* Services */}
                    <div className="footer-section">
                        <h4 className="footer-title">Services</h4>
                        <ul className="footer-links">
                            <li><Link to="/services/dmc">DMC Services</Link></li>
                            <li><Link to="/services/tour-operators">Tour Operations</Link></li>
                            <li><Link to="/services/cruise-handling">Cruise Handling</Link></li>
                            <li><Link to="/services/mice">M.I.C.E Management</Link></li>
                            <li><Link to="/services/weddings">Destination Weddings</Link></li>
                            <li><Link to="/services/vehicle-rental">Vehicle Rentals</Link></li>
                            <li><Link to="/services/hotel-reservation">Hotel Bookings</Link></li>
                        </ul>
                    </div>

                    {/* Contact Details */}
                    <div className="footer-section">
                        <h4 className="footer-title">Contact Us</h4>
                        <ul className="footer-contact">
                            <li>
                                <MapPin size={18} />
                                <span>Margao, Goa 403601, India</span>
                            </li>
                            <li>
                                <Phone size={18} />
                                <a href="tel:08322731428" className="footer-link">0832 273 1428</a>
                            </li>
                            <li>
                                <Mail size={18} />
                                <a href="mailto:info@travelsmith.in" className="footer-link">info@travelsmith.in</a>
                            </li>
                        </ul>

                        {/* Social Media */}
                        <div className="social-media">
                            <a href="#" aria-label="Facebook"><Facebook size={20} /></a>
                            <a href="#" aria-label="Twitter"><Twitter size={20} /></a>
                            <a href="#" aria-label="Instagram"><Instagram size={20} /></a>
                        </div>
                    </div>
                </div>

                {/* Copyright */}
                <div className="footer-bottom">
                    <p>&copy; {currentYear} TravelSmith Adventure Pvt. Ltd. All rights reserved. | Developed by <a href="https://www.karmaveontechnologies.in/" target="_blank" rel="noopener noreferrer" style={{ color: 'var(--primary-orange)', fontWeight: '600' }}>Karmaveon Technologies</a></p>
                </div>
            </div>
        </footer>
    );
}
