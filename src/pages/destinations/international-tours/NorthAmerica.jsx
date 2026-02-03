import { Link } from 'react-router-dom';
import { Camera, Map, Star, Globe, CheckCircle } from 'lucide-react';
import '../Destinations.css';

export default function NorthAmerica() {
    return (
        <div className="destinations-page">
            <section className="dest-hero north-america-hero" style={{ background: 'url("/images/new_york.jpg") no-repeat center/cover' }}>
                <div className="dest-hero-overlay" />
                <div className="container dest-hero-content">
                    <h1>The Best of North America</h1>
                    <p>Scale the New York skyline and explore the natural wonders of the West Coast.</p>
                </div>
            </section>

            <section className="section-light">
                <div className="container">
                    <div className="grid grid-2">
                        <div className="detail-image-container">
                            <img
                                src="/images/new_york.jpg"
                                alt="New York City"
                                className="detail-image-fixed"
                            />
                        </div>
                        <div className="detail-text">
                            <h2>Land of the Free Tour</h2>
                            <p>
                                North America is a massive landscape of diverse cities and incredible nature. Our
                                tour curates the very best—from the high-energy lights of Manhattan to the
                                cinematic majesty of the Grand Canyon.
                            </p>
                            <p>
                                Stay in legendary luxury hotels like The Plaza or go glamping in private desert
                                reserves in Utah for a truly unique American experience.
                            </p>
                            <ul className="check-list">
                                <li><CheckCircle size={18} /> Private Helicopter City Tours</li>
                                <li><CheckCircle size={18} /> VIP Access to Landmarks & Museums</li>
                                <li><CheckCircle size={18} /> Luxury West Coast Road Trips</li>
                                <li><CheckCircle size={18} /> Exclusive National Park Experiences</li>
                            </ul>
                        </div>
                    </div>
                </div>
            </section>

            <section className="section-gray">
                <div className="container">
                    <h2 className="text-center mb-5">American Wonders</h2>
                    <div className="grid grid-3">
                        <div className="dest-highlight-card">
                            <div className="dest-icon-box">
                                <Star size={32} />
                            </div>
                            <h3>Urban Luxury</h3>
                            <p>The best shopping, dining, and hospitality New York and LA have to offer.</p>
                        </div>
                        <div className="dest-highlight-card">
                            <div className="dest-icon-box">
                                <Globe size={32} />
                            </div>
                            <h3>Natural Giants</h3>
                            <p>Explore Yosemite, Yellowstone, and the Grand Canyon with expert guides.</p>
                        </div>
                        <div className="dest-highlight-card">
                            <div className="dest-icon-box">
                                <Camera size={32} />
                            </div>
                            <h3>Iconic Routes</h3>
                            <p>Drive the Pacific Coast Highway or Route 66 in premium vehicles.</p>
                        </div>
                    </div>
                </div>
            </section>

            <section className="dest-cta">
                <div className="container text-center">
                    <h2>Go Big in North America</h2>
                    <p>Inquire for customized USA and Canada itineraries.</p>
                    <Link to="/contact" className="btn btn-primary btn-lg mt-4">Consult with Us</Link>
                </div>
            </section>
        </div>
    );
}
