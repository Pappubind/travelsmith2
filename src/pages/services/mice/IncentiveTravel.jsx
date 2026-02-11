import { Link } from 'react-router-dom';
import { Gift, Plane, Star, Heart, CheckCircle } from 'lucide-react';
import '../ServiceDetail.css';

export default function IncentiveTravel() {
    return (
        <div className="service-detail-page">
            <section className="service-hero incentive-hero" style={{ background: 'url("/images/incentive_travel_hero.jpg") no-repeat center/cover' }}>
                <div className="dest-hero-overlay" />
                <div className="service-hero-content">
                    <h1>Incentive Travel</h1>
                    <p>Exclusive rewards and experiential journeys for your high-achieving teams.</p>
                </div>
            </section>

            <section className="section-light">
                <div className="container">
                    <div className="grid grid-2">
                        <div className="detail-text">
                            <h2>Motivate Through Experience</h2>
                            <p className="justify-text">
                                Goa is one of the most preferred destinations for MICE tourism and it is much more than just a beach holiday destination. The new integrated airport terminal, latest technologies, the superb resorts, the best of the venues and state of the art business facilities meet the global standards which welcomes large events, incentive groups, conferences & exhibitions etc. Travelsmith is specialist in MICE services and will create a lasting impression on every meeting, incentive, convention and event handled by us. Our dedicated team will work with specific objectives and will ensure that you have amazing experiences by providing end to end services.
                            </p>
                            <p className="justify-text">
                                We at Travelsmith are specialized in handling incentive travel for Goa and go an extra mile while developing an incentive program that will surely create a lasting impression for every guest that travels. We constantly innovate and create new ideas for our client which in turn is an incredible experience than just a normal holiday. Our unique fun and creative team buildling activities, mental challenges and physical actions can help you to address your team in a new way of inspiration. Exclusive accommodation options, deluxe transport, creative theme dinners, imaginative and stimulating excursion with the meticulously planned operation play a key role in handling successful incentive travel with us.
                            </p>
                        </div>
                        <div className="detail-image-container">
                            <img
                                src="/images/blog_mice_teambuilding.png"
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
                        <div className="service-feature-card">
                            <div className="service-icon-box">
                                <Star size={32} />
                            </div>
                            <h3>Premium Standards</h3>
                            <p>Only the finest hotels, restaurants, and experiences make it to our catalogs.</p>
                        </div>
                        <div className="service-feature-card">
                            <div className="service-icon-box">
                                <Heart size={32} />
                            </div>
                            <h3>Emotional Connection</h3>
                            <p>We craft stories and memories that build loyalty and motivate teams.</p>
                        </div>
                        <div className="service-feature-card">
                            <div className="service-icon-box">
                                <Gift size={32} />
                            </div>
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
