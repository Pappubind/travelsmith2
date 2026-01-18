import { Link } from 'react-router-dom';
import './Destinations.css';

export default function India() {
    return (
        <div className="destinations-page">
            {/* Hero */}
            <section className="dest-hero india-hero">
                <div className="dest-hero-overlay" />
                <div className="container dest-hero-content">
                    <h1>Discover India</h1>
                    <p>Premium & High-End Luxury Destinations</p>
                </div>
            </section>

            {/* Overview */}
            <section className="section-light">
                <div className="container">
                    <h2 className="section-title">Premium India Tours</h2>
                    <p className="section-subtitle">
                        Experience India's rich heritage, diverse culture, and natural beauty with our curated luxury tours
                    </p>

                    <div className="grid grid-2 india-regions">
                        {/* North India */}
                        <div className="region-card">
                            <h3>North India</h3>
                            <div className="region-content">
                                <ul>
                                    <li>Golden Triangle (Delhi, Agra, Jaipur)</li>
                                    <li>Rajasthan Royal Circuit</li>
                                    <li>Himachal Pradesh & Kashmir</li>
                                    <li>Varanasi & Spiritual Tours</li>
                                </ul>
                            </div>
                        </div>

                        {/* South India */}
                        <div className="region-card">
                            <h3>South India</h3>
                            <div className="region-content">
                                <ul>
                                    <li>Kerala Backwaters</li>
                                    <li>Tamil Nadu Temple Circuit</li>
                                    <li>Karnataka Heritage</li>
                                    <li>Andhra Pradesh & Hyderabad</li>
                                </ul>
                            </div>
                        </div>

                        {/* West India */}
                        <div className="region-card">
                            <h3>West India</h3>
                            <div className="region-content">
                                <ul>
                                    <li>Goa Beach Paradise</li>
                                    <li>Mumbai & Gateway of India</li>
                                    <li>Gujarat Cultural Tours</li>
                                    <li>Maharashtra Heritage</li>
                                </ul>
                            </div>
                        </div>

                        {/* East & North-East */}
                        <div className="region-card">
                            <h3>East & North-East India</h3>
                            <div className="region-content">
                                <ul>
                                    <li>Darjeeling & Sikkim</li>
                                    <li>Assam Tea Gardens</li>
                                    <li>Meghalaya & Seven Sisters</li>
                                    <li>Kolkata Cultural Experience</li>
                                </ul>
                            </div>
                        </div>
                    </div>
                </div>
            </section>

            {/* Luxury Highlights */}
            <section className="section-gray">
                <div className="container">
                    <h2 className="section-title">Luxury Experience Highlights</h2>
                    <div className="grid grid-3">
                        <div className="feature-highlight">
                            <div className="highlight-icon">🏰</div>
                            <h3>Heritage Hotels</h3>
                            <p>Stay in palatial heritage properties and luxury resorts</p>
                        </div>

                        <div className="feature-highlight">
                            <div className="highlight-icon">🚂</div>
                            <h3>Luxury Trains</h3>
                            <p>Royal journeys on Palace on Wheels & Maharaja Express</p>
                        </div>

                        <div className="feature-highlight">
                            <div className="highlight-icon">🍽️</div>
                            <h3>Fine Dining</h3>
                            <p>Gourmet experiences at Michelin-starred restaurants</p>
                        </div>
                    </div>
                </div>
            </section>

            {/* CTA */}
            <section className="dest-cta">
                <div className="container">
                    <h2>Ready for a Premium India Experience?</h2>
                    <p>Let us curate your perfect luxury India tour</p>
                    <Link to="/contact" className="btn btn-primary btn-lg">Request Custom India Tour</Link>
                </div>
            </section>
        </div>
    );
}
