import { Shield, Car, Hotel, Globe, CheckCircle, Headphones } from 'lucide-react';
import SEO from '../../components/SEO';
import './ServiceDetail.css';

export default function Support() {
    return (
        <div className="service-detail-page">
            <SEO
                title="Travel Support Services"
                description="Comprehensive travel support services in Goa and across India. Expert assistance with visas, insurance, concierge, and luxury transport for a seamless journey."
                keywords="Travel Support India, Visa Assistance Goa, Travel Concierge India, TravelSmith Support"
            />
            <section className="service-hero support-hero" style={{ background: 'url("/images/travel_support_hero_premium.png") no-repeat center/cover' }}>
                <div className="dest-hero-overlay" />
                <div className="service-hero-content">
                    <h1>Travel Support</h1>
                    <p>End-to-End Assistance for a Seamless Journey</p>
                </div>
            </section>

            <section className="section-light">
                <div className="container">
                    <div className="grid grid-2">
                        <div className="detail-image-container">
                            <img
                                src="/images/luxury_fleet_tracking_1768320649638.png"
                                alt="Travel Support Services"
                                className="detail-image-fixed"
                            />
                        </div>
                        <div className="detail-text">
                            <h2>Expert Travel Assistance</h2>
                            <p>
                                At TravelSmith, we understand that travel requires meticulous planning and
                                reliable support. Our dedicated support team is available to handle all
                                your ancillary travel needs with professional care.
                            </p>
                            <ul className="check-list">
                                <li><CheckCircle size={18} /> Global Visa Assistance</li>
                                <li><CheckCircle size={18} /> Comprehensive Travel Insurance</li>
                                <li><CheckCircle size={18} /> 24/7 Concierge Support</li>
                                <li><CheckCircle size={18} /> Luxury Fleet on Request</li>
                            </ul>
                        </div>
                    </div>
                </div>
            </section>

            <section className="section-gray">
                <div className="container">
                    <h2 className="text-center mb-5">Support Pillars</h2>
                    <div className="grid grid-3">
                        <div className="service-feature-card">
                            <div className="service-icon-box">
                                <Car size={40} />
                            </div>
                            <h3>Fleet Services</h3>
                            <p>From luxury sedans to large coaches for groups of any size.</p>
                        </div>
                        <div className="service-feature-card">
                            <div className="service-icon-box">
                                <Globe size={40} />
                            </div>
                            <h3>Documentation</h3>
                            <p>Expert handling of visa, passports, and travel documentation.</p>
                        </div>
                        <div className="service-feature-card">
                            <div className="service-icon-box">
                                <Headphones size={40} />
                            </div>
                            <h3>VIP Support</h3>
                            <p>Personalized concierge and dedicated travel advisors.</p>
                        </div>
                    </div>
                </div>
            </section>
        </div>
    );
}
