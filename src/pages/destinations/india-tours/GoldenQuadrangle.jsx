import { Link } from 'react-router-dom';
import { Camera, Map, Star, Globe, CheckCircle } from 'lucide-react';
import '../Destinations.css';

export default function GoldenQuadrangle() {
    return (
        <div className="destinations-page">
            <section className="dest-hero" style={{ background: 'linear-gradient(rgba(0, 0, 0, 0.45), rgba(0, 0, 0, 0.45)), url("/images/taj_mahal.jpg") no-repeat center/cover' }}>
                <div className="container dest-hero-content">
                    <h1>The Golden Quadrangle</h1>
                    <p>The essential Indian journey through Delhi, Agra, and Jaipur.</p>
                </div>
            </section>

            <section className="section-light">
                <div className="container">
                    <div className="grid grid-2">
                        <div className="detail-image-container">
                            <img
                                src="/images/jaipur_palace.jpg"
                                alt="Taj Mahal"
                                className="detail-image-fixed"
                            />
                        </div>
                        <div className="detail-text">
                            <h2>The Ultimate Cultural Circuit</h2>
                            <p>
                                The Golden Quadrangle is the most iconic travel circuit in India. We elevate this
                                classic trip with private luxury transport, expert scholarly guides, and
                                world-class accommodation.
                            </p>
                            <p>
                                From the Mughal grandeur of New Delhi and the eternal white marble of the Taj Mahal
                                to the royal forts of the Pink City, this tour captures the heart of India's heritage.
                            </p>
                            <ul className="check-list">
                                <li><CheckCircle size={18} /> Private Sunrise Tour of Taj Mahal</li>
                                <li><CheckCircle size={18} /> High-Speed Luxury Train Transfers</li>
                                <li><CheckCircle size={18} /> Authentic Mughal Dining Experiences</li>
                                <li><CheckCircle size={18} /> Curated Craft Shopping Tours</li>
                            </ul>
                        </div>
                    </div>
                </div>
            </section>

            <section className="section-gray">
                <div className="container">
                    <h2 className="text-center mb-5">Iconic Landmarks</h2>
                    <div className="grid grid-3">
                        <div className="card p-4 text-center">
                            <Star className="text-primary mb-3 mx-auto" size={32} />
                            <h3>New Delhi</h3>
                            <p>A blend of ancient history and dynamic modernity in India's capital.</p>
                        </div>
                        <div className="card p-4 text-center">
                            <Star className="text-primary mb-3 mx-auto" size={32} />
                            <h3>Agra</h3>
                            <p>Home to the Taj Mahal and the majestic Agra Fort.</p>
                        </div>
                        <div className="card p-4 text-center">
                            <Star className="text-primary mb-3 mx-auto" size={32} />
                            <h3>Jaipur</h3>
                            <p>Royal heritage and vibrant culture in the capital of Rajasthan.</p>
                        </div>
                    </div>
                </div>
            </section>

            <section className="dest-cta">
                <div className="container text-center">
                    <h2>Experience the Gold Standard</h2>
                    <p>Customizable 5 to 7 day circuits for discerning travelers.</p>
                    <Link to="/contact" className="btn btn-primary btn-lg mt-4">Book Golden Triangle</Link>
                </div>
            </section>
        </div>
    );
}
