import { Link } from 'react-router-dom';
import { Camera, Map, Star, Mountain, CheckCircle } from 'lucide-react';
import '../Destinations.css';

export default function Kashmir() {
    return (
        <div className="destinations-page">
            <section className="dest-hero" style={{ background: 'linear-gradient(rgba(0, 0, 0, 0.45), rgba(0, 0, 0, 0.45)), url("https://images.unsplash.com/photo-1598091383021-15ddea10925d?auto=format&fit=crop&q=80&w=1920") no-repeat center/cover' }}>
                <div className="container dest-hero-content">
                    <h1>Glorious Kashmir</h1>
                    <p>Experience Paradise on Earth with our premium luxury tours.</p>
                </div>
            </section>

            <section className="section-light">
                <div className="container">
                    <div className="grid grid-2">
                        <div className="detail-image-container">
                            <img
                                src="https://images.unsplash.com/photo-1566416045373-c6001090333b?auto=format&fit=crop&q=80&w=1200"
                                alt="Dal Lake Srinagar"
                                className="detail-image-fixed"
                            />
                        </div>
                        <div className="detail-text">
                            <h2>The Jewel of the North</h2>
                            <p>
                                Kashmir is not just a destination; it's a sensory experience. Our Glorious Kashmir tour
                                takes you through the serene Dal Lake, the snow-capped peaks of Gulmarg, and the
                                breathtaking meadows of Pahalgam.
                            </p>
                            <p>
                                Stay in luxury houseboats and heritage resorts while exploring the rich culture,
                                warm hospitality, and world-famous cuisine of the valley.
                            </p>
                            <ul className="check-list">
                                <li><CheckCircle size={18} /> Shikara Rides on Dal Lake</li>
                                <li><CheckCircle size={18} /> Gondola Rides in Gulmarg</li>
                                <li><CheckCircle size={18} /> Visit to Mughal Gardens</li>
                                <li><CheckCircle size={18} /> Premium Alpine Camping Experiences</li>
                            </ul>
                        </div>
                    </div>
                </div>
            </section>

            <section className="section-gray">
                <div className="container">
                    <h2 className="text-center mb-5">Tour Highlights</h2>
                    <div className="grid grid-3">
                        <div className="card p-4 text-center">
                            <Mountain className="text-primary mb-3 mx-auto" size={32} />
                            <h3>Gulmarg Peaks</h3>
                            <p>One of the world's highest cable car rides with stunning Himalayan views.</p>
                        </div>
                        <div className="card p-4 text-center">
                            <Star className="text-primary mb-3 mx-auto" size={32} />
                            <h3>Luxury Houseboats</h3>
                            <p>Experience the heritage of staying on water with modern luxury amenities.</p>
                        </div>
                        <div className="card p-4 text-center">
                            <Camera className="text-primary mb-3 mx-auto" size={32} />
                            <h3>Scenic Meadows</h3>
                            <p>Perfect for photography enthusiasts and nature lovers alike.</p>
                        </div>
                    </div>
                </div>
            </section>

            <section className="dest-cta">
                <div className="container text-center">
                    <h2>Ready to Experience Paradise?</h2>
                    <p>Customizable 6 to 10 day itineraries available for families and couples.</p>
                    <Link to="/contact" className="btn btn-primary btn-lg mt-4">Inquire About Kashmir Tour</Link>
                </div>
            </section>
        </div>
    );
}
