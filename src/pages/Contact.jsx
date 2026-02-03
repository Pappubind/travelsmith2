import { useState } from 'react';
import { Phone, Mail, MapPin, Send } from 'lucide-react';
import './Contact.css';

export default function Contact() {
    const [formData, setFormData] = useState({
        name: '',
        email: '',
        phone: '',
        destination: '',
        message: ''
    });

    const handleChange = (e) => {
        setFormData({
            ...formData,
            [e.target.name]: e.target.value
        });
    };

    const handleSubmit = (e) => {
        e.preventDefault();
        // Handle form submission
        alert('Thank you for your message! We will contact you soon.');
        setFormData({
            name: '',
            email: '',
            phone: '',
            destination: '',
            message: ''
        });
    };

    return (
        <div className="contact-page">
            {/* Hero */}
            <section className="page-hero" style={{ backgroundImage: 'linear-gradient(rgba(0, 0, 0, 0.65), rgba(0, 0, 0, 0.65)), url("/images/contact_hero.jpg")' }}>
                <div className="container">
                    <h1>Contact Us</h1>
                    <p>Let's Start Planning Your Perfect Journey</p>
                </div>
            </section>

            {/* Contact Content */}
            <section className="section-light">
                <div className="container">
                    <div className="contact-grid">
                        {/* Contact Form */}
                        <div className="contact-form-section">
                            <h2>Send Us a Message</h2>
                            <form onSubmit={handleSubmit} className="contact-form">
                                <div className="form-group">
                                    <label htmlFor="name">Name *</label>
                                    <input
                                        type="text"
                                        id="name"
                                        name="name"
                                        value={formData.name}
                                        onChange={handleChange}
                                        required
                                        placeholder="Your full name"
                                    />
                                </div>

                                <div className="form-group">
                                    <label htmlFor="email">Email *</label>
                                    <input
                                        type="email"
                                        id="email"
                                        name="email"
                                        value={formData.email}
                                        onChange={handleChange}
                                        required
                                        placeholder="your@email.com"
                                    />
                                </div>

                                <div className="form-group">
                                    <label htmlFor="phone">Phone *</label>
                                    <input
                                        type="tel"
                                        id="phone"
                                        name="phone"
                                        value={formData.phone}
                                        onChange={handleChange}
                                        required
                                        placeholder="+91 1234567890"
                                    />
                                </div>

                                <div className="form-group">
                                    <label htmlFor="destination">Destination Interest</label>
                                    <select
                                        id="destination"
                                        name="destination"
                                        value={formData.destination}
                                        onChange={handleChange}
                                    >
                                        <option value="">Select a destination</option>
                                        <option value="goa">Goa</option>
                                        <option value="india">India</option>
                                        <option value="international">International</option>
                                        <option value="custom">Custom Package</option>
                                    </select>
                                </div>

                                <div className="form-group">
                                    <label htmlFor="message">Message *</label>
                                    <textarea
                                        id="message"
                                        name="message"
                                        value={formData.message}
                                        onChange={handleChange}
                                        required
                                        rows="5"
                                        placeholder="Tell us about your travel plans..."
                                    ></textarea>
                                </div>

                                <button type="submit" className="btn btn-primary btn-full">
                                    <Send size={20} />
                                    Get a Quote
                                </button>
                            </form>
                            <br />
                            <div className="business-hours">
                                <h3>Business Hours</h3>
                                <p>
                                    <strong>Monday - Saturday:</strong> 9:00 AM - 7:00 PM<br />
                                    <strong>Sunday:</strong> 10:00 AM - 5:00 PM
                                </p>
                            </div>
                        </div>



                        {/* Contact Information */}
                        <div className="contact-info-section">
                            <h2>Get In Touch</h2>
                            <p className="contact-intro">
                                Have questions? We're here to help! Reach out to us through any of these channels.
                            </p>

                            <div className="contact-info-cards">
                                <div className="contact-info-card">
                                    <div className="contact-icon">
                                        <MapPin size={32} />
                                    </div>
                                    <h3>Office Address</h3>
                                    <p>
                                        AS-28, 2nd Floor <br /> L&L Correia's Pride, Fatorda<br />
                                        Madgaon, Goa 403601<br />
                                        India
                                    </p>
                                </div>

                                <div className="contact-info-card">
                                    <div className="contact-icon">
                                        <Phone size={32} />
                                    </div>
                                    <h3>Phone</h3>
                                    <p>
                                        <a href="tel:+918322731438">0832 273 1438</a><br />
                                        <a href="tel:+918322731438">+91 832 273 1438</a>
                                    </p>
                                </div>

                                <div className="contact-info-card">
                                    <div className="contact-icon">
                                        <Mail size={32} />
                                    </div>
                                    <h3>Email</h3>
                                    <p>
                                        <a href="mailto:info@travelsmith.com">info@travelsmith.com</a><br />
                                        <a href="mailto:bookings@travelsmith.com">bookings@travelsmith.com</a>
                                    </p>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>

            {/* Map Section */}
            <section className="map-section">
                <iframe
                    src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3849.658823529412!2d73.9529048148493!3d15.290022489366432!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3bbfb15ee078eee5%3A0x957c7586aa5d57d0!2sTravelsmith%20Adventure%20(P)%20Ltd!5e0!3m2!1sen!2sin!4v1706782000000!5m2!1sen!2sin"
                    width="100%"
                    height="450"
                    style={{ border: 0 }}
                    allowFullScreen=""
                    loading="lazy"
                    referrerPolicy="no-referrer-when-downgrade"
                    title="Travelsmith Adventure Location"
                ></iframe>
            </section>
        </div>
    );
}
