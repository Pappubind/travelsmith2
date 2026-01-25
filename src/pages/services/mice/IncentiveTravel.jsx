import { Link } from 'react-router-dom';
import { Gift, Plane, Star, Heart, CheckCircle } from 'lucide-react';
import '../ServiceDetail.css';

export default function IncentiveTravel() {
    return (
        <div className="service-detail-page">
            <section className="service-hero" style={{
                backgroundImage: 'linear-gradient(rgba(0, 0, 0, 0.6), rgba(0, 0, 0, 0.6)), url("https://images.unsplash.com/photo-1520607162513-77705c0f0d4a?auto=format&fit=crop&q=80&w=1920")',
                backgroundSize: 'cover',
                backgroundPosition: 'center',
                backgroundRepeat: 'no-repeat'
            }}>
                <div className="container">
                    <h1>Incentive Travel</h1>
                    <p>Exclusive rewards and experiential journeys for your high-achieving teams.</p>
                </div>
            </section>

            <section className="section-light">
                <div className="container">
                    <div className="grid grid-2">
                        <div className="detail-text">
                            <h2>Motivate Through Experience</h2>
                            <p>
                                Nothing motivates like a once-in-a-lifetime experience. We design bespoke incentive programs that
                                go beyond standard tourism, offering unique access and unparalleled luxury.
                            </p>
                            <p>
                                From private yacht parties in the Mediterranean to luxury desert safaris in Rajasthan,
                                our incentive trips are designed to leave a lasting impact on your top performers.
                            </p>
                            <ul className="check-list">
                                <li><CheckCircle size={18} /> Bespoke Itinerary Design</li>
                                <li><CheckCircle size={18} /> Luxury Accommodation & Transport</li>
                                <li><CheckCircle size={18} /> VIP Access to Events & Attractions</li>
                                <li><CheckCircle size={18} /> Personalized Gifting & Branding</li>
                            </ul>
                        </div>
                        <div className="detail-image-container">
                            <img
                                src="https://images.unsplash.com/photo-1507525428034-b723cf961d3e?auto=format&fit=crop&q=80&w=1200"
                                alt="Luxury Incentive Travel"
                                className="detail-image-fixed"
                            />
                        </div>
                    </div>
                </div>
            </section>

            <section className="section-gray">
                <div className="container">
                    <h2 className="text-center mb-5">Why Choose Our Incentive Programs?</h2>
                    <div className="grid grid-3">
                        <div className="card p-4 text-center">
                            <Star className="text-primary mb-3 mx-auto" size={32} />
                            <h3>Premium Standards</h3>
                            <p>Only the finest hotels, restaurants, and experiences make it to our catalogs.</p>
                        </div>
                        <div className="card p-4 text-center">
                            <Heart className="text-primary mb-3 mx-auto" size={32} />
                            <h3>Emotional Connection</h3>
                            <p>We craft stories and memories that build loyalty and motivate teams.</p>
                        </div>
                        <div className="card p-4 text-center">
                            <Gift className="text-primary mb-3 mx-auto" size={32} />
                            <h3>Unique Access</h3>
                            <p>Exclusive venues and private tours that aren't available to the general public.</p>
                        </div>
                    </div>
                </div>
            </section>

            <section className="dest-cta">
                <div className="container text-center">
                    <h2>Reward Your Best with the Very Best</h2>
                    <p>Tell us your goals, and we'll build the perfect program.</p>
                    <Link to="/contact" className="btn btn-primary btn-lg mt-4">Start Planning</Link>
                </div>
            </section>
        </div>
    );
}
