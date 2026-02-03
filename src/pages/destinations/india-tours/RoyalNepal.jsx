import { Link } from 'react-router-dom';
import { Camera, Map, Star, Globe, CheckCircle } from 'lucide-react';
import '../Destinations.css';

export default function RoyalNepal() {
    return (
        <div className="destinations-page">
            <section className="dest-hero royal-nepal-hero" style={{ background: 'url("/images/nepal-prayer-flags.avif") no-repeat center/cover' }}>
                <div className="dest-hero-overlay" />
                <div className="container dest-hero-content">
                    <h1>Royal Nepal</h1>
                    <p>A premium high-end luxury journey through the Himalayan Kingdom.</p>
                </div>
            </section>

            <section className="section-light">
                <div className="container">
                    <div className="grid grid-2">
                        <div className="detail-image-container">
                            <img
                                src="/images/mount-everest.jpg"
                                alt="Himalayan Flight"
                                className="detail-image-fixed"
                            />
                        </div>
                        <div className="detail-text">
                            <h2>The Pinnacle of Luxury</h2>
                            <p>
                                Royal Nepal is our most exclusive mountain tour. We combine the spiritual aura of
                                Nepal with the highest standards of international luxury hospitality.
                            </p>
                            <p>
                                Experience private helicopter flights to Everest Base Camp for breakfast, stays in
                                ultra-luxury boutique properties, and private dining with views of the Maachapuchare.
                            </p>
                            <ul className="check-list">
                                <li><CheckCircle size={18} /> Private Helicopter Tour of Mt. Everest</li>
                                <li><CheckCircle size={18} /> Ultra-Luxury Boutique Stays in Kathmandu & Pokhara</li>
                                <li><CheckCircle size={18} /> Exclusive Cultural Evening with Local Scholars</li>
                                <li><CheckCircle size={18} /> Luxury Jungle Safari in Chitwan</li>
                            </ul>
                        </div>
                    </div>
                </div>
            </section>

            <section className="section-gray">
                <div className="container">
                    <h2 className="text-center mb-5">Royal Experiences</h2>
                    <div className="grid grid-3">
                        <div className="dest-highlight-card">
                            <div className="dest-icon-box">
                                <Globe size={32} />
                            </div>
                            <h3>Top-Tier Resorts</h3>
                            <p>Access to the most exclusive mountain retreats with world-class spas.</p>
                        </div>
                        <div className="dest-highlight-card">
                            <div className="dest-icon-box">
                                <Star size={32} />
                            </div>
                            <h3>Private Access</h3>
                            <p>Special entry to restricted areas and exclusive community interaction.</p>
                        </div>
                        <div className="dest-highlight-card">
                            <div className="dest-icon-box">
                                <Camera size={32} />
                            </div>
                            <h3>Everest Expedition</h3>
                            <p>A safe, high-end mountain experience with zero compromises on comfort.</p>
                        </div>
                    </div>
                </div>
            </section>

            <section className="dest-cta">
                <div className="container text-center">
                    <h2>Redefine Your Himalayan Experience</h2>
                    <p>Our premium Royal Nepal tours are fully bespoke.</p>
                    <Link to="/contact" className="btn btn-primary btn-lg mt-4">Consult with Our Experts</Link>
                </div>
            </section>
        </div>
    );
}
