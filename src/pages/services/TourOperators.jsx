import { Users, Shield, Globe, Star, CheckCircle } from 'lucide-react';
import './ServiceDetail.css';

export default function TourOperators() {
    return (
        <div className="service-detail-page">
            <section className="service-hero tourop-hero" style={{ background: 'linear-gradient(rgba(0,0,0,0.6), rgba(0,0,0,0.6)), url("https://images.unsplash.com/photo-1557426282-2d8d8d27a1e0?auto=format&fit=crop&q=80&w=1920") no-repeat center/cover' }}>
                <div className="container">
                    <h1 style={{ color: "white" }}>Tour Operators Representation</h1>
                    <p>Your Trusted Local Partner for Professional Representation in India</p>
                </div>
            </section>

            <section className="section-light">
                <div className="container">
                    <div className="grid grid-2">
                        <div className="detail-text">
                            <h2>Expert Management for Global Operators</h2>
                            <p>
                                TravelSmith Adventure Pvt Ltd specializes in representing international tour operators
                                with a dedicated focus on maintaining your brand's integrity and quality standards.
                                We act as your local eyes and ears, ensuring every guest receives the premium
                                experience they expect from your brand.
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
                                src="https://images.unsplash.com/photo-1521737604893-d14cc237f11d?auto=format&fit=crop&q=80&w=800"
                                alt="Professional Representation"
                                className="detail-image-fixed"
                            />
                        </div>
                    </div>
                </div>
            </section>

            <section className="section-gray">
                <div className="container">
                    <h2 className="text-center mb-5">Our Value Proposition</h2>
                    <div className="grid grid-3">
                        <div className="card p-4">
                            <Globe size={40} className="text-primary mb-3" />
                            <h3>Market Knowledge</h3>
                            <p>Deep insights into the Indian tourism landscape to stay ahead of market trends.</p>
                        </div>
                        <div className="card p-4">
                            <Shield size={40} className="text-primary mb-3" />
                            <h3>Risk Management</h3>
                            <p>Comprehensive safety protocols and emergency support for all travelers.</p>
                        </div>
                        <div className="card p-4">
                            <Star size={40} className="text-primary mb-3" />
                            <h3>Brand Alignment</h3>
                            <p>We work as an extension of your own team, following your specific guidelines.</p>
                        </div>
                    </div>
                </div>
            </section>
        </div>
    );
}
