import { Link } from 'react-router-dom';
import { Anchor, Waves, Star, Globe, CheckCircle } from 'lucide-react';
import '../Destinations.css';

export default function Mauritius() {
    return (
        <div className="destinations-page">
            <section className="dest-hero" style={{ background: 'linear-gradient(rgba(0, 0, 0, 0.45), rgba(0, 0, 0, 0.45)), url("https://images.unsplash.com/photo-1589979485637-be9bc9f7e52a?auto=format&fit=crop&q=80&w=1920") no-repeat center/cover' }}>
                <div className="container dest-hero-content">
                    <h1>Mauritius</h1>
                    <p>A tropical paradise in the Indian Ocean, where luxury meets the azure sea.</p>
                </div>
            </section>

            <section className="section-light">
                <div className="container">
                    <div className="grid grid-2">
                        <div className="detail-image-container">
                            <img
                                src="https://images.unsplash.com/photo-1551632432-074051a89668?auto=format&fit=crop&q=80&w=1200"
                                alt="Mauritius Beach"
                                className="detail-image-fixed"
                            />
                        </div>
                        <div className="detail-text">
                            <h2>The Ultimate Island Escape</h2>
                            <p>
                                Mauritius is renowned for its sapphire-blue waters, powder-white beaches, and luxury
                                resorts. Our tour is designed for total relaxation and premium island exploration.
                            </p>
                            <p>
                                Enjoy world-class spas, private catamaran cruises, and hidden waterfall treks while
                                staying at the island's most prestigious beachfront properties.
                            </p>
                            <ul className="check-list">
                                <li><CheckCircle size={18} /> Private Catamaran Sunset Cruises</li>
                                <li><CheckCircle size={18} /> Luxury Beachfront Resort Stays</li>
                                <li><CheckCircle size={18} /> Underwater Sea Walk & Diving</li>
                                <li><CheckCircle size={18} /> Visit to Seven Coloured Earths</li>
                            </ul>
                        </div>
                    </div>
                </div>
            </section>

            <section className="section-gray">
                <div className="container">
                    <h2 className="text-center mb-5">Island Highlights</h2>
                    <div className="grid grid-3">
                        <div className="card p-4 text-center">
                            <Waves className="text-primary mb-3 mx-auto" size={32} />
                            <h3>Ocean Adventures</h3>
                            <p>From kite-surfing to peaceful lagoon snorkeling at Trou-aux-Biches.</p>
                        </div>
                        <div className="card p-4 text-center">
                            <Star className="text-primary mb-3 mx-auto" size={32} />
                            <h3>Premium Comfort</h3>
                            <p>Access to top-tier international hotel chains with world-renowned service.</p>
                        </div>
                        <div className="card p-4 text-center">
                            <Anchor className="text-primary mb-3 mx-auto" size={32} />
                            <h3>Coastal Cruises</h3>
                            <p>Explore the surrounding islands like Ile aux Cerfs on private charters.</p>
                        </div>
                    </div>
                </div>
            </section>

            <section className="dest-cta">
                <div className="container text-center">
                    <h2>Escape to Your Private Paradise</h2>
                    <p>Honeymoon and family packages starting from 5 to 10 nights.</p>
                    <Link to="/contact" className="btn btn-primary btn-lg mt-4">Inquire About Mauritius</Link>
                </div>
            </section>
        </div>
    );
}
