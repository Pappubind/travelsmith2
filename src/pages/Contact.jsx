import { Phone, Mail, MapPin } from 'lucide-react';
import ContactForm from '../components/ContactForm';
import './Contact.css';

export default function Contact() {
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
                            <ContactForm />
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
                            <div className="contact-info-cards">
                                <div className="contact-info-card">
                                    <div className="contact-icon"><MapPin size={24} /></div>
                                    <h3>Office Address</h3>
                                    <p>
                                        Office No. AS-28, 2nd Floor,<br />
                                        L & L Correia's Pride Building,<br />
                                        Margao Goa, India - 403601
                                    </p>
                                </div>

                                <div className="contact-info-card">
                                    <div className="contact-icon"><Phone size={24} /></div>
                                    <h3>Phone & WhatsApp</h3>
                                    <p>
                                        <strong>WhatsApp:</strong> <a href="https://wa.me/917972156290" target="_blank" rel="noopener noreferrer">+91 79721 56290</a><br />
                                        <strong>Office:</strong> <a href="tel:+918322731428">0832 2731428</a> / 38 / 18<br />
                                        <strong>Mobile:</strong> <a href="tel:+919158371998">+91 91583 71998</a>
                                    </p>
                                </div>

                                <div className="contact-info-card">
                                    <div className="contact-icon"><Mail size={24} /></div>
                                    <h3>Departmental Contact</h3>
                                    <div className="dept-contacts">
                                        <div className="dept-item">
                                            <strong>Hotel Reservations:</strong>
                                            Anish - <a href="tel:7507518653">7507518653</a> | <a href="mailto:resv@travelsmith.in">resv@travelsmith.in</a>
                                        </div>
                                        <div className="dept-item">
                                            <strong>Ground Handling:</strong>
                                            Anand - <a href="tel:9923720417">9923720417</a> | <a href="mailto:info@travelsmith.in">info@travelsmith.in</a>
                                        </div>
                                        <div className="dept-item">
                                            <strong>Ground Transport:</strong>
                                            Praveen - <a href="tel:9503761074">9503761074</a> | <a href="mailto:info@travelsmith.in">info@travelsmith.in</a>
                                        </div>
                                        <div className="dept-item">
                                            <strong>CEO & MD:</strong>
                                            Mr. Deepak Lotlikar | <a href="mailto:deepak@travelsmith.in">deepak@travelsmith.in</a>
                                        </div>
                                    </div>
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
