import { Users, Shield, Globe, Star, CheckCircle } from 'lucide-react';
import SEO from '../../components/SEO';
import './ServiceDetail.css';

export default function TourOperators() {
    return (
        <div className="service-detail-page">
            <SEO
                title="Tour Operators Representation"
                description="Professional local representation for international tour operators in Goa and India. Expert ground handling and logistics management."
                keywords="Tour Operator Representation India, Ground Handling Goa, TravelSmith DMC"
            />
            <section className="service-hero tourop-hero" style={{ background: 'url("/images/india_ground_operations_1768320571583.png") no-repeat center/cover' }}>
                <div className="dest-hero-overlay" />
                <div className="service-hero-content">
                    <h1>Tour Operators Representation</h1>
                    <p>Your Trusted Local Partner for Professional Representation in India</p>
                </div>
            </section>

            <section className="section-light">
                <div className="container">
                    <div className="grid grid-2">
                        <div className="detail-text">
                            <h2>Expert Management for Global Operators</h2>
                            <p className="justify-text">
                                Travelsmith is one of the finest and known to be the most reliable partners for Goa, handling complete ground handling services. We are associated with major international / individual hotel chains, transport suppliers, airline offices, event companies, excursion operators and various other suppliers which provide access to every best element the destination has to offer, with best competitive prices. At Travelsmith, all transfers are compulsorily accompanied by a Professional Representative who receives the clients at the airport and accompany to the hotel.
                            </p>

                            <ul className="check-list">
                                <li><CheckCircle size={18} /> White-label Representation</li>
                                <li><CheckCircle size={18} /> Quality Control & Inspections</li>
                                <li><CheckCircle size={18} /> 24/7 Crisis Management</li>
                                <li><CheckCircle size={18} /> Local Liaison & Contracting</li>
                            </ul>
                        </div>
                        <div className="detail-image-container">
                            <img
                                src="/images/tour_group.jpg"
                                alt="Professional Representation"
                                className="detail-image-fixed"
                            />
                        </div>

                    </div>
                    <p className="justify-text">
                        We, besides providing ground handling services, also assist our partners to correctly identify resorts / hotels according to their star categorization, location, suitability for certain groups or nationals with special inbound rates. Travelsmith promises and ensures that our commitment to right price is not just to room rate but to every service availed from us. The best quality vehicles are utilized for ground handling services, all transfers are accompanied by professional Representatives followed by Customer Executive personally assisting the clients on daily basis during the clients’ stay in Goa. The guides used for all tours are licensed and professional guides. Our Managing Director have been working in the trade for more than a decade and thus ensure you will be dealing with professionals who understand all aspects of the tour operating business.
                    </p>
                </div>
            </section>

            <section className="section-gray pb-0">
                <div className="container">
                    <h2 className="text-center mb-5">Our Value Proposition</h2>
                    <div className="grid grid-3">
                        <div className="service-feature-card">
                            <div className="service-icon-box">
                                <Globe size={40} />
                            </div>
                            <h3>Market Knowledge</h3>
                            <p>Deep insights into the Indian tourism landscape to stay ahead of market trends.</p>
                        </div>
                        <div className="service-feature-card">
                            <div className="service-icon-box">
                                <Shield size={40} />
                            </div>
                            <h3>Risk Management</h3>
                            <p>Comprehensive safety protocols and emergency support for all travelers.</p>
                        </div>
                        <div className="service-feature-card">
                            <div className="service-icon-box">
                                <Star size={40} />
                            </div>
                            <h3>Brand Alignment</h3>
                            <p>We work as an extension of your own team, following your specific guidelines.</p>
                        </div>
                    </div>
                </div>
            </section>
        </div>
    );
}
