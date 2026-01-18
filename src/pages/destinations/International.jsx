import { Link } from 'react-router-dom';
import './Destinations.css';

export default function International() {
    return (
        <div className="destinations-page">
            {/* Hero */}
            <section className="dest-hero international-hero">
                <div className="dest-hero-overlay" />
                <div className="container dest-hero-content">
                    <h1>International Destinations</h1>
                    <p>Luxury & Global Tours Worldwide</p>
                </div>
            </section>

            {/* Overview */}
            <section className="section-light">
                <div className="container">
                    <h2 className="section-title">Explore the World with TravelSmith</h2>
                    <p className="section-subtitle">
                        Curated international experiences across continents with premium accommodations and exclusive access
                    </p>

                    <div className="grid grid-2 international-regions">
                        {/* Europe */}
                        <div className="region-card">
                            <h3>🇪🇺 Europe</h3>
                            <div className="region-content">
                                <ul>
                                    <li>Paris & French Riviera</li>
                                    <li>Italy (Rome, Venice, Florence)</li>
                                    <li>Switzerland Alpine Tours</li>
                                    <li>Spain & Portugal</li>
                                    <li>Greece & Greek Islands</li>
                                    <li>UK & Ireland</li>
                                </ul>
                            </div>
                        </div>

                        {/* Asia */}
                        <div className="region-card">
                            <h3>🌏 Asia</h3>
                            <div className="region-content">
                                <ul>
                                    <li>Thailand & Bali</li>
                                    <li>Singapore & Malaysia</li>
                                    <li>Japan cultural Tours</li>
                                    <li>Maldives Luxury Resorts</li>
                                    <li>Dubai & Abu Dhabi</li>
                                </ul>
                            </div>
                        </div>

                        {/* Americas */}
                        <div className="region-card">
                            <h3>🌎 Americas</h3>
                            <div className="region-content">
                                <ul>
                                    <li>USA (New York, California, Florida)</li>
                                    <li>Canada (Toronto, Vancouver)</li>
                                    <li>Mexico & Caribbean</li>
                                    <li>South America (Peru, Brazil)</li>
                                </ul>
                            </div>
                        </div>

                        {/* Other Regions */}
                        <div className="region-card">
                            <h3>🌍 Australia & More</h3>
                            <div className="region-content">
                                <ul>
                                    <li>Australia & New Zealand</li>
                                    <li>Middle East</li>
                                    <li>Africa Safaris</li>
                                    <li>Cruises & Island Getaways</li>
                                </ul>
                            </div>
                        </div>
                    </div>
                </div>
            </section>

            {/* Special Experiences */}
            <section className="section-gray">
                <div className="container">
                    <h2 className="section-title">Special International Experiences</h2>
                    <div className="grid grid-3">
                        <div className="feature-highlight">
                            <div className="highlight-icon">🚢</div>
                            <h3>Luxury Cruises</h3>
                            <p>Mediterranean, Caribbean, and Alaskan cruise experiences</p>
                        </div>

                        <div className="feature-highlight">
                            <div className="highlight-icon">🏝️</div>
                            <h3>Island Getaways</h3>
                            <p>Maldives, Seychelles, Bali, and Caribbean islands</p>
                        </div>

                        <div className="feature-highlight">
                            <div className="highlight-icon">✈️</div>
                            <h3>Customized Itineraries</h3>
                            <p>Tailor-made tours designed to your preferences</p>
                        </div>
                    </div>
                </div>
            </section>

            {/* CTA */}
            <section className="dest-cta">
                <div className="container">
                    <h2>Ready to Explore the World?</h2>
                    <p>Let us plan your dream international journey</p>
                    <Link to="/contact" className="btn btn-primary btn-lg">Explore International Tours</Link>
                </div>
            </section>
        </div>
    );
}
