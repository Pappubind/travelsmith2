import { Link } from 'react-router-dom';
import { Building2, Globe, Mic, Users, CheckCircle } from 'lucide-react';
import '../ServiceDetail.css';

export default function Conferences() {
    return (
        <div className="service-detail-page">
            <section className="service-hero" style={{
                backgroundImage: 'linear-gradient(rgba(0, 0, 0, 0.7), rgba(0, 0, 0, 0.7)), url("https://images.unsplash.com/photo-1475721027785-f74eccf877e2?auto=format&fit=crop&q=75&w=1600")',
                backgroundSize: 'cover',
                backgroundPosition: 'center',
                backgroundRepeat: 'no-repeat'
            }}>
                <div className="container">
                    <h1>World-Class Conferences</h1>
                    <p>End-to-end management for professional congresses, seminars, and corporate conventions.</p>
                </div>
            </section>

            <section className="section-light">
                <div className="container">
                    <div className="grid grid-2">
                        <div className="detail-image-container">
                            <img
                                src="https://images.unsplash.com/photo-1505373676632-6a690226c483?auto=format&fit=crop&q=80&w=1200"
                                alt="Conference Hall"
                                className="detail-image-fixed"
                            />
                        </div>
                        <div className="detail-text">
                            <h2>Expert Conference Management</h2>
                            <p>
                                Managing a conference involves thousands of details. Our team acts as your extended events department,
                                handling everything from site selection and abstracts to registration and technical production.
                            </p>
                            <p>
                                We have a proven track record of handling international congresses with over 1000 delegates,
                                ensuring seamless execution and professional branding throughout the event.
                            </p>
                            <ul className="check-list">
                                <li><CheckCircle size={18} /> Venue & Hotel Contracting</li>
                                <li><CheckCircle size={18} /> Full Technical & AV Production</li>
                                <li><CheckCircle size={18} /> Online & On-site Registration Systems</li>
                                <li><CheckCircle size={18} /> Speaker & VIP Management</li>
                            </ul>
                        </div>
                    </div>
                </div>
            </section>

            <section className="section-gray">
                <div className="container">
                    <h2 className="text-center mb-5">Conference Solutions</h2>
                    <div className="grid grid-3">
                        <div className="card p-4 text-center">
                            <Mic className="text-primary mb-3 mx-auto" size={32} />
                            <h3>Audio Visual</h3>
                            <p>State-of-the-art sound, lighting, and presentation technology for high impact.</p>
                        </div>
                        <div className="card p-4 text-center">
                            <Globe className="text-primary mb-3 mx-auto" size={32} />
                            <h3>Global Reach</h3>
                            <p>Experience handling international delegations and multi-language requirements.</p>
                        </div>
                        <div className="card p-4 text-center">
                            <Building2 className="text-primary mb-3 mx-auto" size={32} />
                            <h3>Modern Venues</h3>
                            <p>Access to the newest convention centers and professional business hotels.</p>
                        </div>
                    </div>
                </div>
            </section>

            <section className="dest-cta">
                <div className="container text-center">
                    <h2>Launch Your Next Success</h2>
                    <p>Ready to host a world-class conference? We're ready to help.</p>
                    <Link to="/contact" className="btn btn-primary btn-lg mt-4">Partner With Us</Link>
                </div>
            </section>
        </div>
    );
}
