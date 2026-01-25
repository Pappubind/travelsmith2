import { Link } from 'react-router-dom';
import { Cloud, MapPin, Wind, Mountain, CheckCircle } from 'lucide-react';
import '../Destinations.css';

export default function EnchantingNepal() {
    return (
        <div className="destinations-page">
            <section className="dest-hero" style={{ background: 'linear-gradient(rgba(0, 0, 0, 0.45), rgba(0, 0, 0, 0.45)), url("https://images.unsplash.com/photo-1544735716-392fe2489ffa?auto=format&fit=crop&q=80&w=1920") no-repeat center/cover' }}>
                <div className="container dest-hero-content">
                    <h1>Enchanting Nepal</h1>
                    <p>A journey through the spiritual peaks and vibrant cultures of the Himalayas.</p>
                </div>
            </section>

            <section className="section-light">
                <div className="container">
                    <div className="grid grid-2">
                        <div className="detail-text">
                            <h2>The Roof of the World</h2>
                            <p>
                                Nepal is a land where ancient history meets majestic nature. Our Enchanting Nepal tour
                                offers a perfect blend of the spiritual depth of Kathmandu and the serene natural
                                beauty of Pokhara.
                            </p>
                            <p>
                                Explore UNESCO heritage temples, witness the first light on the Himalayas, and
                                experience the tranquil lakes of the valley with premium service and safety.
                            </p>
                            <ul className="check-list">
                                <li><CheckCircle size={18} /> Guided Heritage Walks in Kathmandu</li>
                                <li><CheckCircle size={18} /> Sunrise views from Sarangkot, Pokhara</li>
                                <li><CheckCircle size={18} /> Boat Rides on Phewa Lake</li>
                                <li><CheckCircle size={18} /> Boutique Mountain Resort Stays</li>
                            </ul>
                        </div>
                        <div className="detail-image-container">
                            <img
                                src="https://images.unsplash.com/photo-1526481280693-3bfa75618079?auto=format&fit=crop&q=80&w=1200"
                                alt="Kathmandu Temple"
                                className="detail-image-fixed"
                            />
                        </div>
                    </div>
                </div>
            </section>

            <section className="section-gray">
                <div className="container">
                    <h2 className="text-center mb-5">Nepal Highlights</h2>
                    <div className="grid grid-3">
                        <div className="card p-4 text-center">
                            <Mountain className="text-primary mb-3 mx-auto" size={32} />
                            <h3>Himalayan Views</h3>
                            <p>Witness the world's highest peaks from exclusive vantage points.</p>
                        </div>
                        <div className="card p-4 text-center">
                            <MapPin className="text-primary mb-3 mx-auto" size={32} />
                            <h3>Sacred Temples</h3>
                            <p>Explore centuries-old architecture in Patan and Bhaktapur.</p>
                        </div>
                        <div className="card p-4 text-center">
                            <Wind className="text-primary mb-3 mx-auto" size={32} />
                            <h3>Pokhara Retreat</h3>
                            <p>Complete relaxation in Nepal's primary adventure and leisure hub.</p>
                        </div>
                    </div>
                </div>
            </section>

            <section className="dest-cta">
                <div className="container text-center">
                    <h2>Experience the Magic of Nepal</h2>
                    <p>Luxury and standard packages available for all traveler segments.</p>
                    <Link to="/contact" className="btn btn-primary btn-lg mt-4">Inquire Now</Link>
                </div>
            </section>
        </div>
    );
}
