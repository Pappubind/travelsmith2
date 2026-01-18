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

            {/* World Landmarks Gallery */}
            <section className="section-dark" style={{ background: 'linear-gradient(135deg, #141E30 0%, #243B55 100%)', padding: 'var(--spacing-3xl) 0' }}>
                <div className="container">
                    <h2 className="section-title" style={{ color: 'white' }}>Iconic World Destinations</h2>
                    <p className="section-subtitle" style={{ color: 'rgba(255, 255, 255, 0.8)' }}>
                        Explore breathtaking landmarks across the globe
                    </p>

                    <div className="grid grid-3" style={{ marginTop: 'var(--spacing-xl)' }}>
                        <div className="destination-photo-card">
                            <div className="destination-photo" style={{ backgroundImage: 'url(https://images.unsplash.com/photo-1502602898657-3e91760cbb34?auto=format&fit=crop&q=80&w=1200)' }}>
                                <div className="destination-photo-overlay">
                                    <h3>Eiffel Tower, Paris</h3>
                                    <p>Romance in the City of Light</p>
                                </div>
                            </div>
                        </div>

                        <div className="destination-photo-card">
                            <div className="destination-photo" style={{ backgroundImage: 'url(https://images.unsplash.com/photo-1523906834658-6e24ef2386f9?auto=format&fit=crop&q=80&w=1200)' }}>
                                <div className="destination-photo-overlay">
                                    <h3>Swiss Alps</h3>
                                    <p>Breathtaking Mountain Beauty</p>
                                </div>
                            </div>
                        </div>

                        <div className="destination-photo-card">
                            <div className="destination-photo" style={{ backgroundImage: 'url(https://images.unsplash.com/photo-1549144511-f099e773c147?auto=format&fit=crop&q=80&w=1200)' }}>
                                <div className="destination-photo-overlay">
                                    <h3>Santorini, Greece</h3>
                                    <p>Azure Waters & White Villas</p>
                                </div>
                            </div>
                        </div>

                        <div className="destination-photo-card">
                            <div className="destination-photo" style={{ backgroundImage: 'url(https://images.unsplash.com/photo-1506929562872-bb421503ef21?auto=format&fit=crop&q=80&w=1200)' }}>
                                <div className="destination-photo-overlay">
                                    <h3>Maldives Paradise</h3>
                                    <p>Luxury Overwater Resorts</p>
                                </div>
                            </div>
                        </div>

                        <div className="destination-photo-card">
                            <div className="destination-photo" style={{ backgroundImage: 'url(https://images.unsplash.com/photo-1540959733332-eab4deabeeaf?auto=format&fit=crop&q=80&w=1200)' }}>
                                <div className="destination-photo-overlay">
                                    <h3>Tokyo, Japan</h3>
                                    <p>Ancient Meets Modern</p>
                                </div>
                            </div>
                        </div>

                        <div className="destination-photo-card">
                            <div className="destination-photo" style={{ backgroundImage: 'url(https://images.unsplash.com/photo-1512453979798-5ea266f8880c?auto=format&fit=crop&q=80&w=1200)' }}>
                                <div className="destination-photo-overlay">
                                    <h3>Dubai Skyline</h3>
                                    <p>Futuristic Arabian Luxury</p>
                                </div>
                            </div>
                        </div>

                        <div className="destination-photo-card">
                            <div className="destination-photo" style={{ backgroundImage: 'url(https://images.unsplash.com/photo-1485738422979-f5c462d49f74?auto=format&fit=crop&q=80&w=1200)' }}>
                                <div className="destination-photo-overlay">
                                    <h3>New York City</h3>
                                    <p>The City That Never Sleeps</p>
                                </div>
                            </div>
                        </div>

                        <div className="destination-photo-card">
                            <div className="destination-photo" style={{ backgroundImage: 'url(https://images.unsplash.com/photo-1601645191163-3fc0d5d64e35?auto=format&fit=crop&q=80&w=1200)' }}>
                                <div className="destination-photo-overlay">
                                    <h3>Bali, Indonesia</h3>
                                    <p>Tropical Island Escape</p>
                                </div>
                            </div>
                        </div>

                        <div className="destination-photo-card">
                            <div className="destination-photo" style={{ backgroundImage: 'url(https://images.unsplash.com/photo-1624138784614-87fd1b6528f8?auto=format&fit=crop&q=80&w=1200)' }}>
                                <div className="destination-photo-overlay">
                                    <h3>Sydney Opera House</h3>
                                    <p>Australian Icon</p>
                                </div>
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
