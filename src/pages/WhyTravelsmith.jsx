import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { Award, Users, Heart, Clock, Lightbulb, Search, BadgeCheck, DollarSign, Headphones, Target, Shield, Zap } from 'lucide-react';
import Counter from '../components/Counter';
import './About.css';

export default function WhyTravelsmith() {
    const [hoveredStat, setHoveredStat] = useState(null);
    const [hoveredCard, setHoveredCard] = useState(null);

    return (
        <div className="about-page">
            {/* Hero Section */}
            <section className="page-hero" style={{ height: '60vh', minHeight: '450px', display: 'flex', alignItems: 'center', justifyContent: 'center', background: 'linear-gradient(rgba(0, 0, 0, 0.65), rgba(0, 0, 0, 0.65)), url("/images/image.png") no-repeat center/cover' }}>
                <div className="service-hero-content">
                    <h1>The TravelSmith Advantage</h1>
                    <p>Why Experience the Difference with India's Premier DMC</p>
                </div>
            </section>

            {/* Mission & Vision Section */}
            <section className="section-light">
                <div className="container">
                    <div className="grid grid-2" style={{ gap: '4rem', marginTop: '2rem' }}>
                        <div style={{ textAlign: 'left' }}>
                            <h2 className="section-title" style={{ textAlign: 'left', marginBottom: '1.5rem' }}>Our Mission</h2>
                            <p className="overview-text" style={{ fontSize: '1.15rem', lineHeight: '1.8', color: '#4a4a4a' }}>
                                To redefine destination management by blending local authenticity with global excellence,
                                ensuring every traveler experiences the soul of a destination with unparalleled comfort and safety.
                            </p>
                        </div>
                        <div style={{ textAlign: 'left' }}>
                            <h2 className="section-title" style={{ textAlign: 'left', marginBottom: '1.5rem' }}>Our Vision</h2>
                            <p className="overview-text" style={{ fontSize: '1.15rem', lineHeight: '1.8', color: '#4a4a4a' }}>
                                To be the world's most trusted partner for premium travel experiences,
                                setting new benchmarks in innovation, sustainability, and customer-centricity in the DMC industry.
                            </p>
                        </div>
                    </div>
                </div>
            </section>

            {/* Our Advantages Grid */}
            <section className="section-gray">
                <div className="container">
                    <h2 className="section-title">Our Competitive Advantages</h2>
                    <p className="section-subtitle text-center max-w-800 mx-auto mb-5">
                        Discover why thousands of travelers and businesses trust TravelSmith for their journey needs.
                    </p>
                    <div className="grid grid-3 why-choose-grid-expanded">
                        <div className="about-value-card">
                            <div className="about-icon-circle">
                                <Clock size={40} />
                            </div>
                            <h3>24/7 Availability</h3>
                            <p>Our experienced and knowledgeable staff is always available to assist, even after office hours.</p>
                        </div>
                        <div className="about-value-card">
                            <div className="about-icon-circle">
                                <Lightbulb size={40} />
                            </div>
                            <h3>Innovative Solutions</h3>
                            <p>We are proactive in finding creative solutions for our associates and clients' goals.</p>
                        </div>
                        <div className="about-value-card">
                            <div className="about-icon-circle">
                                <Search size={40} />
                            </div>
                            <h3>Ease of Search</h3>
                            <p>Clear, up-to-date information with multiple search criteria to find suitable holiday packages easily.</p>
                        </div>
                        <div className="about-value-card">
                            <div className="about-icon-circle">
                                <BadgeCheck size={40} />
                            </div>
                            <h3>Accurate Information</h3>
                            <p>Correct identification of hotels and resorts according to their star categorization and location.</p>
                        </div>
                        <div className="about-value-card">
                            <div className="about-icon-circle">
                                <DollarSign size={40} />
                            </div>
                            <h3>Best Value Pricing</h3>
                            <p>Our commitment to the right price extends not just to rates but to every service we provide.</p>
                        </div>
                        <div className="about-value-card">
                            <div className="about-icon-circle">
                                <Headphones size={40} />
                            </div>
                            <h3>Dedicated Support</h3>
                            <p>Our diligent and efficient team members are accessible at all times for your assistance.</p>
                        </div>
                        <div className="about-value-card">
                            <div className="about-icon-circle">
                                <Users size={40} />
                            </div>
                            <h3>Personalized Service</h3>
                            <p>As an independently owned business, we provide extremely flexible & personalized service tailored to you.</p>
                        </div>
                        <div className="about-value-card">
                            <div className="about-icon-circle">
                                <Shield size={40} />
                            </div>
                            <h3>Safety First</h3>
                            <p>Your safety and security are paramount. We maintain the highest standards in all our operations.</p>
                        </div>
                        <div className="about-value-card">
                            <div className="about-icon-circle">
                                <Zap size={40} />
                            </div>
                            <h3>Fast Response</h3>
                            <p>Quick turnaround times and efficient service delivery ensure your plans stay on track with minimal delays.</p>
                        </div>
                    </div>
                </div>
            </section>

            {/* Recognition Section */}

            {/* Recognitions */}
            <section className="section-gray">
                <div className="container">
                    <h2 className="section-title">Recognitions & Affiliations</h2>
                    <div className="grid grid-3 recognition-grid">
                        <div className="about-value-card">
                            <div className="recognition-logo-container">
                                <img src="/images/Ministry_of_Tourism.png" alt="Ministry of Tourism govt of India" className="recognition-img" />
                            </div>
                            <h3>Ministry of Tourism</h3>
                            <p>Officially recognized and approved by the Ministry of Tourism, Govt. of India.</p>
                        </div>
                        <div className="about-value-card">
                            <div className="recognition-logo-container">
                                <img src="/images/IATO.png" alt="IATO Logo" className="recognition-img" />
                            </div>
                            <h3>IATO Member</h3>
                            <p>Proud member of the Indian Association of Tour Operators.</p>
                        </div>
                        <div className="about-value-card">
                            <div className="recognition-logo-container">
                                <img src="/images/TTAG.png" alt="TTAG Logo" className="recognition-img" />
                            </div>
                            <h3>TTAG Member</h3>
                            <p>Active member of the Travel & Tourism Association of Goa.</p>
                        </div>
                    </div>
                </div>
            </section>

            {/* CTA Section */}
            <section className="cta-section">
                <div className="container cta-content">
                    <h2>Experience the TravelSmith Difference</h2>
                    <p>Join thousands of satisfied travelers who chose excellence. Let's create your perfect journey together.</p>
                    <div className="hero-buttons">
                        <Link to="/contact" className="btn btn-secondary">Talk to Our Team</Link>
                        <Link to="/contact" className="btn btn-primary btn-lg">Get a Quote</Link>
                    </div>
                </div>
            </section>
        </div>
    );
}
