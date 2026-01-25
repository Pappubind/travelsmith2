import { Car, Shield, Clock, Users, CheckCircle, MapPin } from 'lucide-react';
import './ServiceDetail.css';

export default function VehicleRental() {
    return (
        <div className="service-detail-page">
            <section className="service-hero vehicle-hero" style={{ background: 'linear-gradient(rgba(0,0,0,0.6), rgba(0,0,0,0.6)), url("/images/transport_fleet_management_1768319247924.png") no-repeat center/cover' }}>
                <div className="container">
                    <h1 style={{ color: "white" }}>Car & Coach Rental</h1>
                    <p>Premium Transportation Solutions for Individual and Group Travel</p>
                </div>
            </section>

            <section className="section-light">
                <div className="container">
                    <div className="grid grid-2">
                        <div className="detail-text">
                            <h2>Safe & Comfortable Logistics</h2>
                            <p>
                                TravelSmith offers a comprehensive fleet of well-maintained vehicles,
                                ranging from luxury sedans to large capacity coaches. Our
                                transportation services are designed to provide maximum comfort,
                                safety, and reliability for all your travel needs in India.
                            </p>
                            <ul className="check-list">
                                <li><CheckCircle size={18} /> GPS Tracked Fleet</li>
                                <li><CheckCircle size={18} /> Professionally Trained Chauffeurs</li>
                                <li><CheckCircle size={18} /> Airport & Port Transfers</li>
                                <li><CheckCircle size={18} /> 24/7 Dispatch Support</li>
                            </ul>
                        </div>
                        <div className="detail-image-container">
                            <img
                                src="/images/luxury_fleet_tracking_1768320649638.png"
                                alt="Modern Fleet"
                                className="detail-image-fixed"
                            />
                        </div>
                    </div>
                </div>
            </section>

            <section className="section-gray">
                <div className="container">
                    <h2 className="text-center mb-5">Our Fleet Excellence</h2>
                    <div className="grid grid-3">
                        <div className="card p-4 text-center">
                            <Shield size={40} className="text-primary mb-3 mx-auto" />
                            <h3>Safety First</h3>
                            <p>Regular maintenance and strict adherence to safety protocols for all vehicles.</p>
                        </div>
                        <div className="card p-4 text-center">
                            <Users size={40} className="text-primary mb-3 mx-auto" />
                            <h3>Group Travel</h3>
                            <p>Spacious and modern coaches perfect for corporate groups and wedding guests.</p>
                        </div>
                        <div className="card p-4 text-center">
                            <Clock size={40} className="text-primary mb-3 mx-auto" />
                            <h3>Punctuality</h3>
                            <p>Committed to timely pickups and efficient route planning for seamless travel.</p>
                        </div>
                    </div>
                </div>
            </section>
        </div>
    );
}
