import { Anchor, Shield, Ship, Users, CheckCircle, Navigation } from 'lucide-react';
import './ServiceDetail.css';

export default function CruiseHandling() {
    return (
        <div className="service-detail-page">
            <section className="service-hero cruise-hero" style={{ background: 'linear-gradient(rgba(0,0,0,0.6), rgba(0,0,0,0.6)), url("/images/ cruise_port_excellence_1768320594638.png") no-repeat center/cover' }}>
                <div className="container">
                    <h1 style={{ color: "white" }}>Cruise Liner Ground Handling</h1>
                    <p>Premier Port Services and Shore Excursions at Major Indian Harbors</p>
                </div>
            </section>

            <section className="section-light">
                <div className="container">
                    <div className="grid grid-2">
                        <div className="detail-text">
                            <h2>Excellence in Port Operations</h2>
                            <p>
                                Since our inception, TravelSmith has been a leader in managing ground handling
                                for international cruise liners. We understand the unique requirements and
                                strict schedules of the cruise industry, delivering flawless logistics
                                and memorable shore excursions.
                            </p>
                            <ul className="check-list">
                                <li><CheckCircle size={18} /> Seamless Shore Excursions</li>
                                <li><CheckCircle size={18} /> Turnaround Operations</li>
                                <li><CheckCircle size={18} /> VIP Passenger Logistics</li>
                                <li><CheckCircle size={18} /> Dedicated Port Liaison</li>
                            </ul>
                        </div>
                        <div className="detail-image-container">
                            <img
                                src="/images/goa_cruise_operations_1768319162428.png"
                                alt="Cruise Port Operations"
                                className="detail-image-fixed"
                            />
                        </div>
                    </div>
                </div>
            </section>

            <section className="section-gray">
                <div className="container">
                    <h2 className="text-center mb-5">Core Cruise Services</h2>
                    <div className="grid grid-3">
                        <div className="card p-4">
                            <Anchor size={40} className="text-primary mb-3" />
                            <h3>Port Clearance</h3>
                            <p>Efficient handling of all port formalities and guest immigration support.</p>
                        </div>
                        <div className="card p-4">
                            <Navigation size={40} className="text-primary mb-3" />
                            <h3>Shore Excursions</h3>
                            <p>Curated local tours designed specifically for cruise passengers' timeframes.</p>
                        </div>
                        <div className="card p-4">
                            <Ship size={40} className="text-primary mb-3" />
                            <h3>Vessel Support</h3>
                            <p>Logistical and operational support for crew members and vessel requirements.</p>
                        </div>
                    </div>
                </div>
            </section>
        </div>
    );
}
