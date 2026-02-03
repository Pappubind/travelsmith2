import { Link } from 'react-router-dom';
import { ShieldAlert, Map, Globe, Wind, CheckCircle } from 'lucide-react';
import '../Destinations.css';

export default function ChardhamYatra() {
    return (
        <div className="destinations-page">
            <section className="dest-hero chardham-hero" style={{ background: 'url("/images/chardham-2025.jpg") no-repeat center/cover' }}>
                <div className="dest-hero-overlay" />
                <div className="container dest-hero-content">
                    <h1>Chardham Yatra</h1>
                    <p>The ultimate pilgrimage to the four sacred shrines of the Himalayas.</p>
                </div>
            </section>

            <section className="section-light">
                <div className="container">
                    <div className="grid grid-2">
                        <div className="detail-image-container">
                            <img
                                src="/images/chardham-yatra.jpg"
                                alt="Kedarnath Temple"
                                className="detail-image-fixed"
                            />
                        </div>
                        <div className="detail-text">
                            <h2>The Divine Journey</h2>
                            <p>
                                Chardham Yatra is the most sacred pilgrimage in India, covering Yamunotri, Gangotri,
                                Kedarnath, and Badrinath. We provide a professionally managed, high-comfort experience
                                for pilgrims of all ages.
                            </p>
                            <p>
                                With our premium Chardham packages, we handle all permits, VIP darshans, luxury transport,
                                and high-altitude accommodation so you can focus on your spiritual journey.
                            </p>
                            <ul className="check-list">
                                <li><CheckCircle size={18} /> Helicopter Service Options</li>
                                <li><CheckCircle size={18} /> Pre-booked VIP Darshan</li>
                                <li><CheckCircle size={18} /> 24/7 Medical Support & Coordination</li>
                                <li><CheckCircle size={18} /> Best-in-class Luxury Stay Options</li>
                            </ul>
                        </div>
                    </div>
                </div>
            </section>

            <section className="section-gray">
                <div className="container">
                    <h2 className="text-center mb-5">The Four Pillars</h2>
                    <div className="grid grid-4 text-center">
                        <div className="dest-highlight-card">
                            <h3>Yamunotri</h3>
                            <p>Source of River Yamuna, the first stop on the journey.</p>
                        </div>
                        <div className="dest-highlight-card">
                            <h3>Gangotri</h3>
                            <p>Seat of Goddess Ganga, nestled in the high Himalayas.</p>
                        </div>
                        <div className="dest-highlight-card">
                            <h3>Kedarnath</h3>
                            <p>One of the 12 Jyotirlingas, dedicated to Lord Shiva.</p>
                        </div>
                        <div className="dest-highlight-card">
                            <h3>Badrinath</h3>
                            <p>Sacred abode of Lord Vishnu, surrounded by mountain peaks.</p>
                        </div>
                    </div>
                </div>
            </section>

            <section className="dest-cta">
                <div className="container text-center">
                    <h2>Embark on Your Spiritual Awakening</h2>
                    <p>Limited slots available for the upcoming season. Book in advance.</p>
                    <Link to="/contact" className="btn btn-primary btn-lg mt-4">Inquire for Chardham Batch</Link>
                </div>
            </section>
        </div>
    );
}
