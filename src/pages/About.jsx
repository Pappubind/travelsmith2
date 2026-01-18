import { Award, Users, Heart, Globe, Shield, Target } from 'lucide-react';
import './About.css';

export default function About() {
    return (
        <div className="about-page">
            {/* Hero Section */}
            <section className="page-hero" style={{ backgroundImage: 'linear-gradient(rgba(0, 0, 0, 0.65), rgba(0, 0, 0, 0.65)), url("/images/award_recognition.png")' }}>
                <div className="container">
                    <h1>About TravelSmith</h1>
                    <p>Your Trusted DMC Partner Since 2012</p>
                </div>
            </section>

            {/* Company Overview */}
            <section className="section-light">
                <div className="container">
                    <div className="company-overview">
                        <div className="overview-content">
                            <h2>Our Story</h2>
                            <p>
                                Founded in <strong>2012</strong>, TravelSmith has grown from a passionate
                                vision into one of the most trusted <strong>Destination Management Companies (DMC)</strong>
                                in India. We specialize in creating unforgettable travel experiences across Goa,
                                India, and international destinations.
                            </p>
                            <p>
                                Our <strong>young-hearted, professional team</strong> combines decades of collective
                                experience with innovative approaches to travel management. We pride ourselves on our
                                <strong> client-centric approach</strong>, ensuring every journey is personalized, safe,
                                and exceeds expectations.
                            </p>
                            <p>
                                From <strong>cruise liner ground handling</strong> to corporate MICE events and
                                destination weddings, we handle every aspect of travel with precision and care.
                            </p>
                        </div>
                        <div className="overview-stats">
                            <div className="stat-box">
                                <h3>12+</h3>
                                <p>Years of Excellence</p>
                            </div>
                            <div className="stat-box">
                                <h3>5000+</h3>
                                <p>Happy Clients</p>
                            </div>
                            <div className="stat-box">
                                <h3>100+</h3>
                                <p>Destinations</p>
                            </div>
                            <div className="stat-box">
                                <h3>100%</h3>
                                <p>Customer Satisfaction</p>
                            </div>
                        </div>
                    </div>
                </div>
            </section>

            {/* Vision & Mission */}
            <section className="section-gray">
                <div className="container">
                    <div className="grid grid-2 vision-mission">
                        <div className="vm-card">
                            <Target size={48} className="vm-icon" />
                            <h3>Our Vision</h3>
                            <p>
                                To be the leading Destination Management Company, recognized globally for excellence
                                in crafting personalized, safe, and premium travel experiences that create lasting memories.
                            </p>
                        </div>
                        <div className="vm-card">
                            <Globe size={48} className="vm-icon" />
                            <h3>Our Mission</h3>
                            <p>
                                To deliver exceptional travel services with integrity, professionalism, and innovation,
                                ensuring every client receives personalized attention and experiences that exceed their expectations.
                            </p>
                        </div>
                    </div>
                </div>
            </section>

            {/* Recognition & Affiliations */}
            <section className="section-light">
                <div className="container">
                    <h2 className="section-title">Recognition & Affiliations</h2>
                    <p className="section-subtitle">
                        Certified and recognized by leading tourism authorities
                    </p>

                    <div className="grid grid-3 recognition-grid">
                        <div className="recognition-card">
                            <Award size={60} className="recognition-icon" />
                            <h3>Department of Tourism Goa</h3>
                            <p>
                                Officially recognized and approved by the Goa Tourism Department,
                                ensuring compliance with industry standards and regulations.
                            </p>
                        </div>

                        <div className="recognition-card">
                            <Shield size={60} className="recognition-icon" />
                            <h3>IATO Member</h3>
                            <p>
                                Proud member of the Indian Association of Tour Operators,
                                adhering to the highest standards of professionalism and ethics.
                            </p>
                        </div>

                        <div className="recognition-card">
                            <Heart size={60} className="recognition-icon" />
                            <h3>TTAG Member</h3>
                            <p>
                                Active member of the Travel and Tourism Association of Goa,
                                committed to promoting responsible and sustainable tourism.
                            </p>
                        </div>
                    </div>
                </div>
            </section>

            {/* DMC Expertise */}
            <section className="section-gray">
                <div className="container">
                    <h2 className="section-title">Our DMC Expertise</h2>
                    <div className="expertise-content">
                        <div className="expertise-item">
                            <Users size={40} className="expertise-icon" />
                            <div>
                                <h3>Goa, India & International</h3>
                                <p>
                                    Comprehensive destination management services across Goa's pristine beaches,
                                    India's heritage circuits, and luxury international destinations.
                                </p>
                            </div>
                        </div>

                        <div className="expertise-item">
                            <Globe size={40} className="expertise-icon" />
                            <div>
                                <h3>Cruise Liner Ground Handling</h3>
                                <p>
                                    Specialized expertise in managing cruise passenger logistics, with seamless
                                    shore excursions and ground handling services for major cruise lines.
                                </p>
                            </div>
                        </div>

                        <div className="expertise-item">
                            <Shield size={40} className="expertise-icon" />
                            <div>
                                <h3>Corporate & Leisure Travel</h3>
                                <p>
                                    Tailored solutions for both corporate MICE requirements and leisure travel,
                                    ensuring personalized experiences for every client segment.
                                </p>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
        </div>
    );
}
