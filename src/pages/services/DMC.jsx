import { Plane, Car, Hotel, Shield, Anchor, MapPin, CheckCircle } from 'lucide-react';
import './ServiceDetail.css';

export default function DMC() {
    return (
        <div className="service-detail-page">
            <section className="service-hero dmc-hero" style={{ background: 'linear-gradient(rgba(0,0,0,0.6), rgba(0,0,0,0.6)), url("/images/hero_dmc_operations_1768320541503.png") no-repeat center/cover' }}>
                <div className="container">
                    <h1 style={{ color: "white" }}>DMC Services</h1>
                    <p>India's Leading Destination Management Company with Premium Local Expertise</p>
                </div>
            </section>

            <section className="section-light">
                <div className="container">
                    <div className="grid grid-2">
                        <div className="detail-text">
                            <h2>Expert Ground Handling</h2>
                            <p>
                                As a premier DMC, TravelSmith provides comprehensive ground handling services
                                across India. Our deep local knowledge and strong vendor relationships
                                ensure that every aspect of your destination experience is managed with
                                precision and hospitality.
                            </p>
                            <ul className="check-list">
                                <li><CheckCircle size={18} /> 24/7 On-ground Support</li>
                                <li><CheckCircle size={18} /> Multilingual Guide Services</li>
                                <li><CheckCircle size={18} /> Specialized Cruise Ground Handling</li>
                                <li><CheckCircle size={18} /> VIP Meet & Greet Services</li>
                            </ul>
                        </div>
                        <div className="detail-image" style={{ background: 'url("/images/dmc_process_workflow_1768320543666.png") center/cover rounded', height: '400px', borderRadius: '1rem' }}></div>
                    </div>
                </div>
            </section>

            <section className="section-gray">
                <div className="container">
                    <h2 className="text-center mb-5">Core Capabilities</h2>
                    <div className="grid grid-3">
                        <div className="card p-4">
                            <Anchor size={40} className="text-primary mb-3" />
                            <h3>Cruise Operations</h3>
                            <p>Premium ground handling for international cruise liners at all major Indian ports.</p>
                        </div>
                        <div className="card p-4">
                            <MapPin size={40} className="text-primary mb-3" />
                            <h3>Local Expertise</h3>
                            <p>Unmatched local insights into Goa, Rajasthan, Kerala, and major Indian cities.</p>
                        </div>
                        <div className="card p-4">
                            <Plane size={40} className="text-primary mb-3" />
                            <h3>Airport Logistics</h3>
                            <p>Seamless transfers and dedicated logistics management for large groups.</p>
                        </div>
                    </div>
                </div>
            </section>
        </div>
    );
}
