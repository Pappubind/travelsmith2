import { Link } from 'react-router-dom';
import { Award, Users, Heart, Globe, Shield, Target, Clock, Lightbulb, Search, BadgeCheck, DollarSign, Headphones } from 'lucide-react';
import Counter from '../components/Counter';
import './About.css';

export default function About() {
    return (
        <div className="about-page">
            {/* Hero Section */}
            <section className="page-hero" style={{ height: '60vh', minHeight: '450px', display: 'flex', alignItems: 'center', justifyContent: 'center', background: 'linear-gradient(rgba(0, 0, 0, 0.65), rgba(0, 0, 0, 0.65)), url("/images/image.png") no-repeat center/cover' }}>
                <div className="service-hero-content">
                    <h1>About TravelSmith</h1>
                    <p>Your Trusted Global Destination Management Partner Since 2012</p>
                </div>
            </section>

            {/* Company Overview */}
            <section className="section-light">
                <div className="container">
                    <div className="company-overview">
                        <div className="overview-content animate-fade-in">
                            <h2>Our Story</h2>
                            <p>
                                <strong>Travelsmith Adventure Pvt Ltd</strong> was incorporated in the year <strong>2012</strong> under the companies act 1956.
                                we bridge the gap between local nuances and global standards, ensuring every journey
                                we curate is nothing short of extraordinary.
                            </p>
                            <p>
                                Since its inception, the company has been a leader in <strong>International Cruise liner ground handling</strong>.
                                Our fast service, innovation, and friendliness have attracted many tour operators, hoteliers, and trade partners to work
                                under one umbrella with receptiveness to new ideas, flexibility, and adaptability to our clients’ needs.
                            </p>
                            <p>
                                We believe in being immersed and involved in local culture, meeting people, visiting hotels, venues, and restaurants,
                                and building the network which provides access to the very best a destination has to offer.
                            </p>
                        </div>
                        <div className="overview-stats">
                            <div className="stat-box glass-card">
                                <h3><Counter end={12} suffix="+" /></h3>
                                <p>Years of Excellence</p>
                            </div>
                            <div className="stat-box glass-card">
                                <h3><Counter end={5000} suffix="+" /></h3>
                                <p>Happy Clients</p>
                            </div>
                            <div className="stat-box glass-card">
                                <h3><Counter end={100} suffix="+" /></h3>
                                <p>Trade Partners</p>
                            </div>
                            <div className="stat-box glass-card">
                                <h3><Counter end={100} suffix="%" /></h3>
                                <p>Commitment</p>
                            </div>
                        </div>
                    </div>
                    <div className="md-profile">
                        <div className="team-image-container">
                            <img src="/images/team.jpg" alt="TravelSmith Team" className="team-photo" />
                        </div>
                        <div className="md-content">
                            <h3>Leadership</h3>
                            <p>
                                The company is headed by <strong>Managing Director Deepak Lotlikar</strong>, who brings along more than a decade of experience
                                and which takes to drive the company into the cutting edge world. As an independently owned business, we provide
                                extremely flexible & personalized service.
                            </p>
                            <p className="mt-3">
                                Travelsmith service key asset is undoubtedly its team – a dedicated group of individual professionals who are committed to provide flawless service.
                                We listen to your needs and work with you applying our extensive knowledge and experience to deliver best travel solutions.
                            </p>
                        </div>
                    </div>
                </div>
            </section>

            {/* Our Services Summary */}
            <section className="section-gray">
                <div className="container">
                    <h2 className="section-title">Our Services</h2>
                    <p className="section-subtitle text-center max-w-800 mx-auto mb-5">
                        The services offered by us are of impeccable nature and our commitment to excellence is the hallmark of Travelsmith.
                    </p>
                    <div className="grid grid-3 services-summary">
                        <div className="about-value-card">
                            <div className="about-icon-circle">
                                <Globe size={40} />
                            </div>
                            <h3>Cruise Handling</h3>
                            <p>Serving International Cruise liner ground handling since 2012.</p>
                        </div>
                        <div className="about-value-card">
                            <div className="about-icon-circle">
                                <Users size={40} />
                            </div>
                            <h3>M.I.C.E</h3>
                            <p>Professional Meetings, Incentives, Conferences & Events Management.</p>
                        </div>
                        <div className="about-value-card">
                            <div className="about-icon-circle">
                                <Heart size={40} />
                            </div>
                            <h3>Weddings & More</h3>
                            <p>Destination Weddings, Car & Coach Rentals, and bespoke travel solutions.</p>
                        </div>
                    </div>
                </div>
            </section>

            {/* Recognition & Affiliations */}
            <section className="section-gray">
                <div className="container">
                    <h2 className="section-title">Recognition & Affiliations</h2>
                    <div className="grid grid-3 recognition-grid">
                        <div className="about-value-card">
                            <div className="recognition-logo-container">
                                <img src="/images/Goa_tourism.png" alt="Dept. of Tourism Goa Logo" className="recognition-img" />
                            </div>
                            <h3>Dept. of Tourism Goa</h3>
                            <p>Officially recognized and approved by the Department of Tourism Goa.</p>
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
                    <h2>Ready to Experience Excellence?</h2>
                    <p>Contact our experts today to plan your perfect trip with TravelSmith</p>
                    <div className="hero-buttons">
                        <Link to="/contact" className="btn btn-secondary">Talk to Our Team</Link>
                        <Link to="/contact" className="btn btn-primary btn-lg">Get a Quote</Link>
                    </div>
                </div>
            </section>
        </div>
    );
}
