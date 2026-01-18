import { Link } from 'react-router-dom';
import { MapPin, Phone } from 'lucide-react';
import './Destinations.css';

export default function Goa() {
    return (
        <div className="destinations-page">
            {/* Hero */}
            <section className="dest-hero goa-hero">
                <div className="dest-hero-overlay" />
                <div className="container dest-hero-content">
                    <h1>Discover Goa</h1>
                    <p>Sun, Sand, Sea & So Much More</p>
                </div>
            </section>

            {/* Overview */}
            <section className="section-light">
                <div className="container">
                    <h2 className="section-title">Why Choose Goa?</h2>
                    <p className="section-subtitle">
                        India's beach paradise offering the perfect blend of relaxation, adventure, and culture
                    </p>

                    <div className="grid grid-4 dest-features">
                        <div className="dest-feature-card">
                            <div className="dest-feature-icon">🏖️</div>
                            <h3>Pristine Beaches</h3>
                            <p>Golden sands, turquoise waters, and stunning sunsets</p>
                        </div>

                        <div className="dest-feature-card">
                            <div className="dest-feature-icon">⛪</div>
                            <h3>Temples & Churches</h3>
                            <p>Rich heritage with Portuguese and Indian influences</p>
                        </div>

                        <div className="dest-feature-card">
                            <div className="dest-feature-icon">🌅</div>
                            <h3>Scenic Beauty</h3>
                            <p>Waterfalls, spice plantations, and lush landscapes</p>
                        </div>

                        <div className="dest-feature-card">
                            <div className="dest-feature-icon">🎉</div>
                            <h3>Vibrant Experiences</h3>
                            <p>Nightlife, water sports, and local festivals</p>
                        </div>
                    </div>
                </div>
            </section>

            {/* Goa Photo Gallery */}
            <section className="section-dark" style={{ background: 'linear-gradient(135deg, #0f2027 0%, #203a43 50%, #2c5364 100%)', padding: 'var(--spacing-3xl) 0' }}>
                <div className="container">
                    <h2 className="section-title" style={{ color: 'white' }}>Goa in Pictures</h2>
                    <p className="section-subtitle" style={{ color: 'rgba(255, 255, 255, 0.8)' }}>
                        Experience the magic of India's beach paradise
                    </p>

                    <div className="grid grid-2" style={{ marginTop: 'var(--spacing-xl)', gap: 'var(--spacing-md)' }}>
                        {/* Large featured image */}
                        <div className="destination-photo-card" style={{ gridColumn: 'span 2' }}>
                            <div className="destination-photo destination-photo-large" style={{ backgroundImage: 'url(https://images.unsplash.com/photo-1512343879784-a960bf40e7f2?auto=format&fit=crop&q=80&w=1600)', height: '400px' }}>
                                <div className="destination-photo-overlay">
                                    <h3>Golden Beaches of Goa</h3>
                                    <p>Paradise on the Arabian Sea</p>
                                </div>
                            </div>
                        </div>

                        <div className="destination-photo-card">
                            <div className="destination-photo" style={{ backgroundImage: 'url(https://images.unsplash.com/photo-1559628376-f3fe5f782a2e?auto=format&fit=crop&q=80&w=1200)' }}>
                                <div className="destination-photo-overlay">
                                    <h3>Beach Shacks & Sunsets</h3>
                                    <p>Relaxation at its finest</p>
                                </div>
                            </div>
                        </div>

                        <div className="destination-photo-card">
                            <div className="destination-photo" style={{ backgroundImage: 'url(https://images.unsplash.com/photo-1544413660-299165566b1d?auto=format&fit=crop&q=80&w=1200)' }}>
                                <div className="destination-photo-overlay">
                                    <h3>Water Sports & Adventure</h3>
                                    <p>Thrills on the waves</p>
                                </div>
                            </div>
                        </div>

                        <div className="destination-photo-card">
                            <div className="destination-photo" style={{ backgroundImage: 'url(https://images.unsplash.com/photo-1605640840605-14ac1855827b?auto=format&fit=crop&q=80&w=1200)' }}>
                                <div className="destination-photo-overlay">
                                    <h3>Portuguese Heritage</h3>
                                    <p>Historic churches & forts</p>
                                </div>
                            </div>
                        </div>

                        <div className="destination-photo-card">
                            <div className="destination-photo" style={{ backgroundImage: 'url(https://images.unsplash.com/photo-1615880484746-a134be9a6ecf?auto=format&fit=crop&q=80&w=1200)' }}>
                                <div className="destination-photo-overlay">
                                    <h3>Spice Plantations</h3>
                                    <p>Lush green landscapes</p>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>

            {/* Attractions */}
            <section className="section-gray">
                <div className="container">
                    <h2 className="section-title">Top Attractions</h2>
                    <div className="grid grid-3 attractions-grid">
                        <div className="attraction-card">
                            <div className="attraction-image beach-bg"></div>
                            <h3>Beaches</h3>
                            <ul>
                                <li>Calangute Beach</li>
                                <li>Baga Beach</li>
                                <li>Anjuna Beach</li>
                                <li>Palolem Beach</li>
                            </ul>
                        </div>

                        <div className="attraction-card">
                            <div className="attraction-image heritage-bg"></div>
                            <h3>Heritage Sites</h3>
                            <ul>
                                <li>Basilica of Bom Jesus</li>
                                <li>Se Cathedral</li>
                                <li>Shri Mangueshi Temple</li>
                                <li>Aguada Fort</li>
                            </ul>
                        </div>

                        <div className="attraction-card">
                            <div className="attraction-image nature-bg"></div>
                            <h3>Nature & Adventure</h3>
                            <ul>
                                <li>Dudhsagar Waterfalls</li>
                                <li>Spice Plantations</li>
                                <li>Water Sports</li>
                                <li>River Cruises</li>
                            </ul>
                        </div>
                    </div>
                </div>
            </section>

            {/* CTA */}
            <section className="dest-cta">
                <div className="container">
                    <h2>Ready to Explore Goa?</h2>
                    <p>Let us plan your perfect Goan getaway</p>
                    <Link to="/contact" className="btn btn-primary btn-lg">Plan Goa Trip</Link>
                </div>
            </section>
        </div>
    );
}
