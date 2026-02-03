import { Link } from 'react-router-dom';
import { Camera, Map, Star, Globe, CheckCircle } from 'lucide-react';
import '../Destinations.css';

export default function SouthAmerica() {
    return (
        <div className="destinations-page">
            <section className="dest-hero south-america-hero" style={{ background: 'url("/images/south-america.webp") no-repeat center/cover' }}>
                <div className="dest-hero-overlay" />
                <div className="container dest-hero-content">
                    <h1>Mystical South America</h1>
                    <p>Ancient civilizations, lush rainforests, and vibrant Latin rhythms.</p>
                </div>
            </section>

            <section className="section-light">
                <div className="container">
                    <div className="grid grid-2">
                        <div className="detail-text">
                            <h2>The Spirit of the Andes</h2>
                            <p>
                                South America is a continent of mystery and passion. Our tour takes you from the
                                high-altitude wonder of Machu Picchu in Peru to the energetic beaches of
                                Rio de Janeiro in Brazil.
                            </p>
                            <p>
                                Experience stay in high-end eco-lodges in the Amazon or luxury boutique hotels
                                in the heart of Cusco, all with expert-led private excursions.
                            </p>
                            <ul className="check-list">
                                <li><CheckCircle size={18} /> Private Guide to Machu Picchu</li>
                                <li><CheckCircle size={18} /> Luxury Amazon River Cruises</li>
                                <li><CheckCircle size={18} /> Helicopter Tours of Rio's coastline</li>
                                <li><CheckCircle size={18} /> Exclusive Argentine Tango evenings</li>
                            </ul>
                        </div>
                        <div className="detail-image-container">
                            <img
                                src="/images/machu-picchu-ruins.webp"
                                alt="Machu Picchu"
                                className="detail-image-fixed"
                            />
                        </div>
                    </div>
                </div>
            </section>

            <section className="section-gray">
                <div className="container">
                    <h2 className="text-center mb-5">South American Highlights</h2>
                    <div className="grid grid-3">
                        <div className="dest-highlight-card">
                            <div className="dest-icon-box">
                                <Star size={32} />
                            </div>
                            <h3>Ancient History</h3>
                            <p>Uncover the secrets of the Inca, Maya, and Aztec civilizations.</p>
                        </div>
                        <div className="dest-highlight-card">
                            <div className="dest-icon-box">
                                <Globe size={32} />
                            </div>
                            <h3>Amazon Wilds</h3>
                            <p>Premium eco-tourism in the world's largest rainforest.</p>
                        </div>
                        <div className="dest-highlight-card">
                            <div className="dest-icon-box">
                                <Camera size={32} />
                            </div>
                            <h3>Cultural Pulse</h3>
                            <p>Feel the energy of the world's most vibrant carnivals and festivals.</p>
                        </div>
                    </div>
                </div>
            </section>

            <section className="dest-cta">
                <div className="container text-center">
                    <h2>Embark on Your Andean Odyssey</h2>
                    <p>Luxury adventure packages for the intrepid traveler.</p>
                    <Link to="/contact" className="btn btn-primary btn-lg mt-4">Start Your Journey</Link>
                </div>
            </section>
        </div>
    );
}
